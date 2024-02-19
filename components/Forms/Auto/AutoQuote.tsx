import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Question from "./Question";
import AutoResults from "./Results/AutoResults";
import { v4 as uuid } from 'uuid';
import PATHCONSTANTS from "constants/sitemap";
import Image, { StaticImageData } from "next/image";
import GrayFinishImg from "../../../public/assets/images/get-a-quote/auto/finishgray.png";
import ColorFinishImg from "../../../public/assets/images/get-a-quote/auto/finishcolor.png";


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
    VEHICLE_2_ADD: "VEHICLE_2_ADD",
    VEHICLE_2: "VEHICLE_2",
    VEHICLE_2_OWNERSHIP: "VEHICLE_2_OWNERSHIP",
    VEHICLE_2_PURCHASE_DATE: "VEHICLE_2_PURCHASE_DATE",
    VEHICLE_2_USAGE: "VEHICLE_2_USAGE",
    VEHICLE_2_ANNUAL_MILES: "VEHICLE_2_ANNUAL_MILES",
    DRIVER_2_ADD: "DRIVER_2_ADD",
    DRIVER_2_FIRST_NAME: "DRIVER_2_FIRST_NAME",
    DRIVER_2_LAST_NAME: "DRIVER_2_LAST_NAME",
    DRIVER_2_DATE_OF_BIRTH: "DRIVER_2_DATE_OF_BIRTH",
    DRIVER_2_GENDER: "DRIVER_2_GENDER",
    DRIVER_2_RELATION: "DRIVER_2_RELATION",
    DRIVER_2_MARITAL_STATUS: "DRIVER_2_MARITAL_STATUS",
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

const DEFAULTS = {
    shownIdList: process.env.NODE_ENV === "development" ? [QUESTION_IDS.FIRST_NAME] : [QUESTION_IDS.FIRST_NAME,],
    quotePageIndex: process.env.NODE_ENV === "development" ? 3 : 0,
    subPageIndex: process.env.NODE_ENV === "development" ? 1 : 0,
    showDefaultValues: process.env.NODE_ENV === "development" ? true : false,
}

export default function (props) {
    // Use UUID to generate QuoteId
    const [QuoteId, setQuoteId] = useState(uuid());
    const [shownIdList, setShownIdList] = useState(
        DEFAULTS.shownIdList
    );
    const { register, handleSubmit, setValue, formState } = useForm();
    const [formValues, setFormValues] = useState({});
    const [showDefaultValues, setShowDefaultValues] = useState(DEFAULTS.showDefaultValues);
    const [showResults, setShowResults] = useState(false);
    const [navigationIcons, setNavigationIcons] = useState([]);
    const [quotePageIndex, setQuotePageIndex] = useState(DEFAULTS.quotePageIndex);
    const [subPageIndex, setSubPageIndex] = useState(DEFAULTS.subPageIndex);
    const [activeQuestionsArray, setActiveQuestionsArray] = useState<string[]>([]);
    const [errorQuestions, setErrorQuestions] = useState<string[]>([]);

    useEffect(() => {
        async function wakeServer() {
            await fetch(`${PATHCONSTANTS.BACKEND2}/`)
                .then(
                    () => { console.log("success") })
                .catch((err) => { console.log(err) })
        }
        wakeServer()
    }, [])

    useEffect(() => {
        const icons = props.Form.QuotePages.map((page) => {
            return {
                title: page.title,
                gray: page.grayIcon, color: page.colorIcon
            }
        })
        icons.push({
            title: { en: "Finish", es: "Terminar" },
            gray: GrayFinishImg, color: ColorFinishImg
        })
        setNavigationIcons(icons)
    }, [props.Form.QuotePages])
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
            //if both liability minimum and full coverage are selected, remove liability minimum
            if (newIdList.includes(QUESTION_IDS.SELECTED_COVERAGES.LIABILITY_MINIMUM) && newIdList.includes(QUESTION_IDS.SELECTED_COVERAGES.FULL_COVERAGE)) {
                newIdList.splice(newIdList.indexOf(QUESTION_IDS.SELECTED_COVERAGES.LIABILITY_MINIMUM), 1)
            }
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
        console.log("IM LOOKING FOR")
        console.log(strippedFormValues[QUESTION_IDS.VEHICLE_2_ADD])
        console.log(strippedFormValues[QUESTION_IDS.VEHICLE_2_ADD][0].value)
        console.log(strippedFormValues[QUESTION_IDS.VEHICLE_2_ADD][0].value === "true")
        console.log(strippedFormValues[QUESTION_IDS.DRIVER_2_ADD])
        console.log(strippedFormValues[QUESTION_IDS.DRIVER_2_ADD] === "true")
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
                strippedFormValues[QUESTION_IDS.DRIVER_2_ADD][0].value === "true" ? {
                    "DriverId": 2,
                    Attributes: {
                        "PropertyInsurance": false,
                        "Relation": "Insured",
                        ...returnFormObject(strippedFormValues, [QUESTION_IDS.DRIVER_2_RELATION, QUESTION_IDS.RESIDENCY_STATUS, QUESTION_IDS.RESIDENCY_TYPE,]),
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
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.DRIVER_2_FIRST_NAME, QUESTION_IDS.DRIVER_2_LAST_NAME, QUESTION_IDS.DRIVER_2_DATE_OF_BIRTH, QUESTION_IDS.DRIVER_2_GENDER, QUESTION_IDS.DRIVER_2_MARITAL_STATUS]),
                } : null,
            ].filter(driver => driver !== null),
            Vehicles: [
                {
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.VEHICLE_1, QUESTION_IDS.VEHICLE_1_PURCHASE_DATE, QUESTION_IDS.VEHICLE_1_USAGE, QUESTION_IDS.VEHICLE_1_ANNUAL_MILES,]),
                    "HomingDevice": false,
                    AssignedDriverId: 1,
                    CoverageInformation,
                    GaragingAddress: {
                        State: "Texas",
                        ...returnFormObject(strippedFormValues, [QUESTION_IDS.ADDRESS_LINE_1, QUESTION_IDS.CITY, QUESTION_IDS.STATE, QUESTION_IDS.ZIP_CODE]),
                    },
                },
                strippedFormValues[QUESTION_IDS.VEHICLE_2_ADD][0].value === "true" ? {
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.VEHICLE_2, QUESTION_IDS.VEHICLE_2_PURCHASE_DATE, QUESTION_IDS.VEHICLE_2_USAGE, QUESTION_IDS.VEHICLE_2_ANNUAL_MILES,]),
                    "HomingDevice": false,
                    AssignedDriverId: 1,
                    CoverageInformation,
                    GaragingAddress: {
                        State: "Texas",
                        ...returnFormObject(strippedFormValues, [QUESTION_IDS.ADDRESS_LINE_1, QUESTION_IDS.CITY, QUESTION_IDS.STATE, QUESTION_IDS.ZIP_CODE]),
                    },
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

    async function handleSave() {
        //   console.log(data);
        setShowResults(true)
        console.log(formValues)
        const completeFormData = prepareData();
        try {

            const rateResponse = await fetch(`${PATHCONSTANTS.BACKEND2}/rates/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(completeFormData)
            })
            const rateData = await rateResponse.json()
            console.log(rateData)


        } catch (e) {
            console.log(e)
        }
    }

    function checkValidity() {
        //loop through the activeQuestionsArray
        // check loop through formValues[i] and make sure each {valid: true} 
        // if any are false, return false
        // if all are true, return true
        let returnValue = true
        let listOfErrors = [] as string[]
        for (let i = 0; i < activeQuestionsArray.length; i++) {
            const id = activeQuestionsArray[i]
            if (!formValues[id]) {
                listOfErrors.push(id)
                returnValue = false
                break
            }
            //create a formValueQuestion as array
            const formValueQuestion = formValues[id] as Array<{ questionId: string, value: string, valid: boolean }>



            for (let j = 0; j < formValueQuestion.length; j++) {
                if (!formValueQuestion[j].valid) {
                    returnValue = false
                    listOfErrors.push(id)
                }
            }
        }
        console.log("Active Questions Validity: " + returnValue)
        console.log("Error Questions: " + listOfErrors)
        setErrorQuestions(listOfErrors)
        return returnValue
    }
    function backPageHandler() {
        //based on the quotePageIndex if there is another subpage, go to the next subpage
        //if there isn't another subpage, go to the next quotePageIndex
        //and set the subPageIndex to 0
        //if decrementing the quotePageIndex then set the subPageIndex to the highest possible
        if (subPageIndex === 0) {
            setQuotePageIndex((prev) => prev - 1)
            setSubPageIndex(props.Form.QuotePages[quotePageIndex - 1].SubPages.length - 1)
        } else {
            setSubPageIndex((prev) => prev - 1)
        }
    }

    function nextPageHandler() {
        //based on the quotePageIndex if there is another subpage, go to the next subpage
        //if there isn't another subpage, go to the next quotePageIndex
        //and set the subPageIndex to 0
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)
        if (checkValidity() === false) return
        if (props.Form.QuotePages[quotePageIndex].SubPages.length - 1 > subPageIndex) {
            setSubPageIndex((prev) => prev + 1)
        } else {
            setQuotePageIndex((prev) => prev + 1)
            setSubPageIndex(0)
        }
        //window scroll to top with smooth behavior
    }
    //when the shownIdList changes, or the subPageIndex changes, or the quotePageIndex changes, update the activeQuestionsArray to contain the question ids
    // only add the question ids that are in the shownIdList and the subPageIndex
    useEffect(() => {
        const activeQuestionsArray = [] as string[]
        for (let i = 0; i < props.Form.QuotePages.length; i++) {
            if (i === quotePageIndex) {
                for (let j = 0; j < props.Form.QuotePages[i].SubPages.length; j++) {
                    if (j === subPageIndex) {
                        const activePageQuestions = props.Form.QuotePages[i].SubPages[j].Questions as Array<{ id: string }>
                        activePageQuestions.forEach((question) => {
                            const questionId = question.id as string
                            if (shownIdList.includes(questionId)) {
                                activeQuestionsArray.push(questionId)
                            }
                        })
                    }
                }
            }
        }
        // using the activeQuestionsArray log the values from formValues

        setActiveQuestionsArray(activeQuestionsArray)
    }, [shownIdList, subPageIndex, quotePageIndex])

    return <Box>
        <>
            {quotePageIndex <= props.Form.QuotePages.length - 1 && <>
                <Box
                    sx={{ display: "flex", justifyContent: "space-around", gap: "1rem", width: "50%", margin: "1rem auto" }}
                >
                    {navigationIcons.map((page: {
                        title: { [lang: string]: string; };
                        gray: StaticImageData;
                        color: StaticImageData;
                    }, i) => {
                        return <Box key={i}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                cursor: quotePageIndex >= i ? "pointer" : "not-allowed",
                            }}
                            onClick={() => {
                                if (quotePageIndex >= i) {
                                    setQuotePageIndex(i)
                                    setSubPageIndex(0)
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    height: "3rem",
                                    width: "3rem",
                                    position: "relative",
                                }}
                            >
                                <Image fill style={{ objectFit: "contain" }} src={quotePageIndex < i ? page.gray : page.color} alt={page.title.en} />
                            </Box>
                            <Typography variant="subtitle1">{returnLocaleText(page.title)}</Typography>
                        </Box>
                    })}
                </Box>
                {props.Form.QuotePages.map((page, pageIndex) => {
                    if (pageIndex !== quotePageIndex) return null;
                    return <>
                        {page.SubPages?.map((subPage, subIndex) => {
                            if (subIndex !== subPageIndex) return null;
                            return <Box key={subIndex}>
                                {subPage.Questions?.map((question) => {
                                    if (!shownIdList.includes(question.id)) return null;
                                    return <Box key={question.id}>
                                        <Question addIdToList={addIdToList} removeIdFromList={removeIdFromList} {...question} register={register}
                                            setFormValue={setValue}
                                            updateFormValues={updateFormValues}
                                            defaultValue={showDefaultValues ? (formValues[question.id] !== undefined ? formValues[question.id][0].value : question.defaultValue) : (formValues[question.id] !== undefined ? formValues[question.id][0].value : undefined)}
                                            buttonAddIdToList={buttonAddIdToList}
                                            shownIdList={shownIdList}
                                            formValues={formValues}
                                            passedError={errorQuestions.includes(question.id)}
                                            clearError={() => {
                                                setErrorQuestions((prev) => prev.filter((item) => item !== question.id))
                                            }}
                                        />
                                    </Box>
                                })}
                            </Box>
                        })
                        }
                    </>
                })
                }

                <Box
                    sx={{ display: "flex", justifyContent: "space-around", gap: "1rem", width: "100%", margin: "2rem auto" }}
                >
                    {quotePageIndex !== props.Form.QuotePages.length && <Button onClick={() => { backPageHandler() }}
                        disabled={quotePageIndex === 0 && subPageIndex === 0}
                        variant="outlined" color="secondary"
                    >Back</Button>}
                    {quotePageIndex !== props.Form.QuotePages.length &&
                        !(quotePageIndex === props.Form.QuotePages.length - 1 && subPageIndex === props.Form.QuotePages[quotePageIndex].SubPages.length - 1
                        ) && <Button onClick={() => { nextPageHandler() }}
                            variant="contained"
                            disabled={quotePageIndex === props.Form.QuotePages.length}
                        >Next</Button>}
                    {(quotePageIndex === props.Form.QuotePages.length - 1 && subPageIndex === props.Form.QuotePages[quotePageIndex].SubPages.length - 1
                    ) && <Button
                        sx={{
                        }}
                        onClick={() => {
                            window.scrollTo(0, 0)
                            if (checkValidity() === false) {
                                return
                            }
                            console.log("SUBMITTING")
                            setQuotePageIndex((prev) => prev + 1)
                            handleSave()
                        }}
                        variant="contained"
                    >Submit</Button>}
                </Box>
            </>}
        </>
        <AutoResults id={showResults ? QuoteId :
            //"669badcb-af30-4e82-ab92-89be7c9d2d68"
            undefined
        }
            name={formValues[QUESTION_IDS.FIRST_NAME] ? formValues[QUESTION_IDS.FIRST_NAME][0].value : "John Jode"}
            //   disableLoading
            goBack={() => {
                setShowResults(false)
                setQuotePageIndex((prev) => prev - 1)
            }}
        // "511a63bf-da44-4dca-8234-47929da63a67"} 
        />
        <>
            {!showDefaultValues && <Box
                sx={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem auto" }}
            >
                {
                    !showResults && <Button onClick={() => setShowDefaultValues(!showDefaultValues)}
                        disabled={showDefaultValues}
                    >Show Default Values</Button>
                }
            </Box>}
        </>
    </Box >
}