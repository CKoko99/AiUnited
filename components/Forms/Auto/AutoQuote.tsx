import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Question from "./Question";
import AutoResults from "./Results/AutoResults";
import { v4 as uuid } from 'uuid';
import PATHCONSTANTS from "constants/sitemap";


export const QUESTION_IDS = {
    FIRST_NAME: "FIRST_NAME",
    LAST_NAME: "LAST_NAME",
    PHONE_NUMBER: "PHONE_NUMBER",
    EMAIL: "EMAIL",
    ADDRESS_LINE_1: "ADDRESS_LINE_1",
    ADDRESS_LINE_2: "ADDRESS_LINE_2",
    CITY: "CITY",
    STATE: "STATE",
    ZIP_CODE: "ZIP_CODE",
    TIME_AT_ADDRESS: "TIME_AT_ADDRESS",
    DATE_OF_BIRTH: "DATE_OF_BIRTH",
    GENDER: "GENDER",
    MARITAL_STATUS: "MARITAL_STATUS",
    WORK: "WORK",
    EDUCATION_LEVEL: "EDUCATION_LEVEL",
    RESIDENCY_TYPE: "RESIDENCY_TYPE",
    RESIDENCY_STATUS: "RESIDENCY_STATUS",
    VEHICLE_1: "VEHICLE_1",
    VEHICLE_1_OWNERSHIP: "VEHICLE_1_OWNERSHIP",
    VEHICLE_1_PURCHASE_DATE: "VEHICLE_1_PURCHASE_DATE",
    VEHICLE_1_USAGE: "VEHICLE_1_USAGE",
    VEHICLE_1_ANNUAL_MILES: "VEHICLE_1_ANNUAL_MILES",
    PRIOR_INSURANCE: "PRIOR_INSURANCE",
    PRIOR_INSURANCE_COMPANY: "PRIOR_INSURANCE_COMPANY",
    PRIOR_LIABILITY_LIMIT: "PRIOR_LIABILITY_LIMIT",
    PRIOR_INSURANCE_EXPIRATION: "PRIOR_INSURANCE_EXPIRATION",
    PRIOR_MONTHS_COVERAGE: "PRIOR_MONTHS_COVERAGE",
    REASON_FOR_NO_INSURANCE: "REASON_FOR_NO_INSURANCE",
    SELECTED_COVERAGES: {
        LIABILITY_MINIMUM: "LIABILITY_MINIMUM",
        FULL_COVERAGE: "FULL_COVERAGE",
    }
}

function returnFormObject(formValues, idList) {
    const formObject = {}
    for (let i = 0; i < idList.length; i++) {
        const questionId = idList[i]
        if (!formValues[questionId]) continue;
        for (let j = 0; j < formValues[questionId].length; j++) {
            const key = formValues[questionId][j].questionId
            let value = formValues[questionId][j].value
            if (value === "true") value = true
            if (value === "false") value = false
            formObject[key] = value
        }

    }
    return formObject
}

export default function (props) {
    // Use UUID to generate QuoteId
    const [QuoteId, setQuoteId] = useState(uuid());
    const [shownIdList, setShownIdList] = useState([
        //QUESTION_IDS.SELECTED_COVERAGES.LIABILITY_MINIMUM
        QUESTION_IDS.FIRST_NAME
    ]);
    const { register, handleSubmit, setValue, formState } = useForm();
    const [formValues, setFormValues] = useState({});
    const [showDefaultValues, setShowDefaultValues] = useState(false);
    const [showResults, setShowResults] = useState(false);
    function addIdToList(id) {
        setShownIdList((prev) => {
            if (prev.includes(id)) return prev
            return [...prev, id]
        })
    }
    function buttonAddIdToList(questionId, nextQuestionIds: String[]) {
        setShownIdList((prev) => {
            //find where the questionId is in the array
            //remove everything after that index
            //add the nextQuestionId

            const index = prev.indexOf(questionId);
            if (index === -1) return prev
            const newIdList = prev.slice(0, index + 1)
            nextQuestionIds.forEach((id: string) => {
                if (!newIdList.includes(id)) {
                    newIdList.push(id)
                }
            })

            return newIdList
        })
    }
    function removeIdFromList(id: String) {
        setShownIdList((prev) => prev.filter((item) => item !== id))
    }

    function updateFormValues(id, value) {
        setFormValues((prevFormValues) => {
            const newFormValues = { ...prevFormValues }
            newFormValues[id] = value
            return newFormValues
        })
    }

    function prepareData() {

        const strippedFormValues = {}
        for (let i = 0; i < shownIdList.length; i++) {
            const id = shownIdList[i]
            if (formValues[id]) {
                strippedFormValues[id] = formValues[id]
            }
        }
        const { LiabilityBiLimit,
            LiabilityPdLimit,
            MedPayLimit,
            PipLimit,
            UninsuredMotoristPdLimit,
            UninsuredMotoristBiLimit,
            AccidentalDeathLimit,
            ComprehensiveDeductible,
            CollisionDeductible,
            TowingLimit,
            RentalLimit,
            GapCoverage,
            CustomEquipmentValue
        } = returnFormObject(strippedFormValues, [QUESTION_IDS.SELECTED_COVERAGES.LIABILITY_MINIMUM, QUESTION_IDS.SELECTED_COVERAGES.FULL_COVERAGE]) as {
            LiabilityBiLimit: string
            LiabilityPdLimit: string
            MedPayLimit: string
            PipLimit: string
            UninsuredMotoristPdLimit: string
            UninsuredMotoristBiLimit: string
            AccidentalDeathLimit: string
            ComprehensiveDeductible: string
            CollisionDeductible: string
            TowingLimit: string
            RentalLimit: string
            GapCoverage: boolean
            CustomEquipmentValue: number
        };
        const PolicyCoverages = {
            LiabilityBiLimit,
            LiabilityPdLimit,
            MedPayLimit,
            PipLimit,
            UninsuredMotoristPdLimit,
            UninsuredMotoristBiLimit,
            AccidentalDeathLimit
        }
        const CoverageInformation = {
            ComprehensiveDeductible,
            CollisionDeductible,
            TowingLimit,
            RentalLimit,
            GapCoverage,
            CustomEquipmentValue
        }

        const data = {
            Identifier: QuoteId,
            Customer: {
                ...returnFormObject(strippedFormValues, [QUESTION_IDS.FIRST_NAME, QUESTION_IDS.LAST_NAME, QUESTION_IDS.TIME_AT_ADDRESS]),
                Identifier: String(Math.floor(Math.random() * 1000000000)),
                Address: {
                    State: "Texas",
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.ADDRESS_LINE_1, QUESTION_IDS.CITY, QUESTION_IDS.STATE, QUESTION_IDS.ZIP_CODE]),
                },
                ContactInformation: {
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.PHONE_NUMBER, QUESTION_IDS.EMAIL]),
                },
                PriorInsuranceInformation: returnFormObject(strippedFormValues, [QUESTION_IDS.PRIOR_INSURANCE, QUESTION_IDS.PRIOR_INSURANCE_EXPIRATION, QUESTION_IDS.PRIOR_LIABILITY_LIMIT, QUESTION_IDS.PRIOR_INSURANCE_COMPANY, QUESTION_IDS.PRIOR_MONTHS_COVERAGE, QUESTION_IDS.REASON_FOR_NO_INSURANCE]),
            },
            PolicyCoverages,
            RatedDrivers: [
                {
                    "DriverId": 1,
                    Attributes: {
                        "PropertyInsurance": false,
                        "Relation": "Insured",
                        ...returnFormObject(strippedFormValues, [QUESTION_IDS.EDUCATION_LEVEL, QUESTION_IDS.RESIDENCY_STATUS, QUESTION_IDS.RESIDENCY_TYPE,]),
                    },
                    LicenseInformation: {
                        "LicenseNumber": "",
                        "LicenseStatus": "Valid",
                        "MonthsForeignLicense": 0,
                        "MonthsLicensed": 310,
                        "MonthsStateLicensed": 310,
                        "MonthsMvrExperience": 60,
                        "MonthsSuspended": 0,
                        "StateLicensed": "Texas",
                        "CountryOfOrigin": "None",
                        "ForeignNational": false,
                        "InternationalDriversLicense": false
                    },
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.FIRST_NAME, QUESTION_IDS.LAST_NAME, QUESTION_IDS.DATE_OF_BIRTH, QUESTION_IDS.GENDER, QUESTION_IDS.MARITAL_STATUS, QUESTION_IDS.WORK]),
                    "Discounts": {
                        "DistantStudent": "None",
                        "DriversTraining": false,
                        "DrugAwareness": false,
                        "GoodStudent": false,
                        "SingleParent": false,
                        "SeniorDriverDiscount": false,
                        "MultiplePolicies": false,
                        "DefensiveDriving": true,
                        "DefensiveDrivingCourseDate": "2022-10-31T05:00:00Z"
                    },
                    "FinancialResponsibilityInformation": {
                        "Sr22": false,
                        "Sr22A": false
                    },
                    "Violations": []
                },
                strippedFormValues[20000] ? returnFormObject(strippedFormValues, []) : null,
            ].filter(driver => driver !== null),
            Vehicles: [
                {
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.VEHICLE_1, QUESTION_IDS.VEHICLE_1_PURCHASE_DATE, QUESTION_IDS.VEHICLE_1_USAGE, QUESTION_IDS.VEHICLE_1_ANNUAL_MILES,]),
                    "HomingDevice": false,
                    AssignedDriverId: 1,
                    GaragingAddress: {
                        State: "Texas",
                        ...returnFormObject(strippedFormValues, [QUESTION_IDS.ADDRESS_LINE_1, QUESTION_IDS.CITY, QUESTION_IDS.STATE, QUESTION_IDS.ZIP_CODE]),
                    },
                    CoverageInformation
                },
                strippedFormValues[20000] ? {
                    ...returnFormObject(strippedFormValues, []),
                    GaragingAddress: returnFormObject(strippedFormValues, [QUESTION_IDS.ADDRESS_LINE_1, QUESTION_IDS.CITY, QUESTION_IDS.STATE, QUESTION_IDS.ZIP_CODE]),
                } : null,
            ].filter(vehicle => vehicle !== null),
            "Term": "Semi Annual",
            "PaymentMethod": "Standard",
            "NumberOfPayments": 6,
            "DownPaymentPercentage": 20,
            "PolicyType": "Standard",
            "PaperlessDiscount": false,
            "EffectiveDate": new Date().toISOString(),
            "CustomerDeclinedCredit": false,
            "BumpLimits": "Bump Up"
        }
        //console log length of formValues

        console.log(data)
        //stringify data
        console.log(JSON.stringify(data))
        return data
    }

    async function handleSave(data) {
        //   console.log(data);
        setShowResults(false)
        const completeFormData = prepareData();
        const rateResponse = await fetch(`${PATHCONSTANTS.BACKEND2}/rates/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(completeFormData)
        })
        const rateData = await rateResponse.json()
        console.log(rateData)

        setTimeout(() => {
            setShowResults(true)
        }, 2000)
    }
    return <Box>
        <Typography
            variant="h2"
            sx={{
                textAlign: "center",
                margin: "1rem auto"
            }}
        >Auto Quote</Typography>
        <Button onClick={() => setShowDefaultValues(!showDefaultValues)}
            disabled={showDefaultValues}
        >Show Default Values</Button>
        <form onSubmit={handleSubmit(handleSave)} >
            {props.Form.QuotePages.map((page, i) => {
                return <Box key={i}>
                    {page.Questions?.map((question) => {
                        if (!shownIdList.includes(question.id)) return null;
                        return <Box key={question.id}>
                            <Question addIdToList={addIdToList} removeIdFromList={removeIdFromList} {...question} register={register}
                                setFormValue={setValue}
                                updateFormValues={updateFormValues}
                                defaultValue={showDefaultValues ? (formValues[question.id] !== undefined ? formValues[question.id][0].value : question.defaultValue) : undefined}
                                buttonAddIdToList={buttonAddIdToList}
                                shownIdList={shownIdList}
                            />
                        </Box>
                    })}
                </Box>
            })}
            <Box
                sx={{
                    display: "flex",
                    gap: "1rem",
                    width: "100%",
                    margin: "1rem auto",
                    justifyContent: "center"
                }}
            >
                <Button
                    sx={{
                    }}
                    variant="contained"
                    type="submit">Submit</Button>
            </Box>
            <AutoResults id={showResults ? QuoteId : null} />
        </form>
    </Box>
}