import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Question from "./Question";
import AutoResults from "./Results/AutoResults";
import { v4 as uuid } from 'uuid';
import PATHCONSTANTS from "constants/sitemap";
import Image, { StaticImageData } from "next/image";
import { GTMEVENTS, GTMEventHandler } from "../../Scripts/GoogleTag";
import GrayFinishImg from "../../../public/assets/images/get-a-quote/auto/finishgray.png";
import ColorFinishImg from "../../../public/assets/images/get-a-quote/auto/finishcolor.png";
import { msToTime } from "@/functions/functions";
import React from "react";

const TEXT = {
    submit: { en: "Submit", es: "Enviar" },
    next: { en: "Next", es: "Siguiente" },
    back: { en: "Back", es: "Atrás" },

}

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
    DRIVER_1_LICENSE_NUMBER: "DRIVER_1_LICENSE_NUMBER",
    DRIVER_1_LICENSE_STATUS: "DRIVER_1_LICENSE_STATUS",
    DRIVER_1_MONTHS_LICENSED: "DRIVER_1_MONTHS_LICENSED",
    DRIVER_1_MONTHS_STATE_LICENSED: "DRIVER_1_MONTHS_STATE_LICENSED",
    DRIVER_1_MONTHS_SUSPENDED: "DRIVER_1_MONTHS_SUSPENDED",
    DRIVER_1_STATE_LICENSED: "DRIVER_1_STATE_LICENSED",
    DRIVER_1_HAS_VIOLATIONS: "DRIVER_1_HAS_VIOLATIONS",
    DRIVER_1_VIOLATIONS: "DRIVER_1_VIOLATIONS",
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
    shownIdList: process.env.NODE_ENV === "development" ? [
        QUESTION_IDS.FIRST_NAME,
        //QUESTION_IDS.SELECTED_COVERAGES.LIABILITY_MINIMUM,
        //QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS,

    ] : [QUESTION_IDS.FIRST_NAME,],
    quotePageIndex: process.env.NODE_ENV === "development" ? 0 : 0,
    subPageIndex: process.env.NODE_ENV === "development" ? 0 : 0,
    showDefaultValues: process.env.NODE_ENV === "development" ? true : false,
    showDefaultsButton: process.env.NODE_ENV === "development" ? true : false,
}

const PAGE_FORM_VALUES = [
    {
        sheettitle: "Contact Information",
        quotePageIndex: 0,
        subPageIndex: 0,
        formValues: [
            { question: "First Name:", value: QUESTION_IDS.FIRST_NAME },
            { question: "Last Name:", value: QUESTION_IDS.LAST_NAME },
            { question: "Phone Number:", value: QUESTION_IDS.PHONE_NUMBER },
            { question: "Email:", value: QUESTION_IDS.EMAIL },
        ]
    },
    {
        sheettitle: "Address Information",
        quotePageIndex: 0,
        subPageIndex: 1,
        formValues: [
            { question: "Address Line 1:", value: QUESTION_IDS.ADDRESS_LINE_1 },
            { question: "City:", value: QUESTION_IDS.CITY },
            { question: "Zip Code:", value: QUESTION_IDS.ZIP_CODE },
        ]
    },
    {
        sheettitle: "Vehicle Information",
        quotePageIndex: 1,
        subPageIndex: 0,
        useQuestionID: true,
        formValues: [
            { question: "Vehicle:", value: QUESTION_IDS.VEHICLE_1 },
        ]
    },
]

export default function (props) {

    // Use UUID to generate QuoteId
    const [QuoteId, setQuoteId] = useState(uuid());
    const [shownIdList, setShownIdList] = useState(DEFAULTS.shownIdList);
    const { register, handleSubmit, setValue, formState } = useForm();
    const [formValues, setFormValues] = useState({});
    const [showDefaultValues, setShowDefaultValues] = useState(DEFAULTS.showDefaultValues);
    const [showResults, setShowResults] = useState(false);
    const [navigationIcons, setNavigationIcons] = useState([]);
    const [quotePageIndex, setQuotePageIndex] = useState(DEFAULTS.quotePageIndex);
    const [subPageIndex, setSubPageIndex] = useState(DEFAULTS.subPageIndex);
    const [activeQuestionsArray, setActiveQuestionsArray] = useState<string[]>([]);
    const [errorQuestions, setErrorQuestions] = useState<string[]>([]);
    const [farthestPage, setFarthestPage] = useState([DEFAULTS.quotePageIndex, DEFAULTS.subPageIndex]);
    const [timeStarted, setTimeStarted] = useState(new Date().getTime());

    useEffect(() => {
        async function wakeServer() {
            await fetch(`${PATHCONSTANTS.BACKEND2}/`)
                .then(
                    () => { //console.log("success")
                    })
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

        let hasViolations = false
        let violationsData = []

        hasViolations = formValues[QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS] ? formValues[QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS][0].value : false
        if (formValues[QUESTION_IDS.DRIVER_1_VIOLATIONS]) {
            console.log(formValues[QUESTION_IDS.DRIVER_1_VIOLATIONS][0].value)
            violationsData = hasViolations ? formValues[QUESTION_IDS.DRIVER_1_VIOLATIONS][0].value : []
        }

        if (process.env.NODE_ENV === "development") {
            console.log("Has Violations: " + hasViolations)
            console.log("Violations Data: " + violationsData)
        }
        const IsDriver2 = (strippedFormValues[QUESTION_IDS.DRIVER_2_ADD] && strippedFormValues[QUESTION_IDS.DRIVER_2_ADD][0] && strippedFormValues[QUESTION_IDS.DRIVER_2_ADD][0].value === "true")
        const IsVehicle2 = (strippedFormValues[QUESTION_IDS.VEHICLE_2_ADD] && strippedFormValues[QUESTION_IDS.VEHICLE_2_ADD][0] && strippedFormValues[QUESTION_IDS.VEHICLE_2_ADD][0].value === "true")
        const newQuoteId = uuid()
        setQuoteId(newQuoteId)
        if (process.env.NODE_ENV === "development") {
            console.log(strippedFormValues)
        }
        const data = {
            Identifier: newQuoteId,
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
                    //"{"status":"Request Parameter Validated Failed","errors":["Payload is not valid based on requested contract","Required properties are missing from object: Street1, City, ZipCode. : Customer.Address","Required properties are missing from object: LastName, MonthsAtResidence. : Customer","Required properties are missing from object: Street1, City, ZipCode. : Vehicles[0].GaragingAddress","Required properties are missing from object: Vin, Usage. : Vehicles[0]","Required properties are missing from object: ResidencyStatus, ResidencyType. : RatedDrivers[0].Attributes","Required properties are missing from object: LastName, DateOfBirth, Gender, MaritalStatus. : RatedDrivers[0]"],"accountId":"00000000-0000-0000-0000-000000000000","tT2Output":""}"
                    LicenseInformation: {
                        ...returnFormObject(strippedFormValues,
                            [QUESTION_IDS.DRIVER_1_LICENSE_NUMBER,
                            QUESTION_IDS.DRIVER_1_LICENSE_STATUS,
                            QUESTION_IDS.DRIVER_1_MONTHS_LICENSED,
                            QUESTION_IDS.DRIVER_1_MONTHS_STATE_LICENSED,
                            QUESTION_IDS.DRIVER_1_MONTHS_SUSPENDED,
                            QUESTION_IDS.DRIVER_1_STATE_LICENSED]),
                        //"LicenseNumber": "",// max 20 characters
                        //"LicenseStatus": "Valid",// Valid, Unlicensed, Permit, Suspended
                        //"MonthsLicensed": 310,//Use a select box for this max 1200 months
                        //"MonthsStateLicensed": 310,// Months licensed in state
                        //"MonthsSuspended": 0, //If licenseStatus is suspended open this question if not set to 0
                        //"StateLicensed": "Texas",//State selection
                        "MonthsForeignLicense": 0,
                        "MonthsMvrExperience": 60,
                        "CountryOfOrigin": "None", //?
                        "ForeignNational": false, //?
                        "InternationalDriversLicense": false
                    },
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.FIRST_NAME, QUESTION_IDS.LAST_NAME, QUESTION_IDS.DATE_OF_BIRTH, QUESTION_IDS.GENDER, QUESTION_IDS.MARITAL_STATUS,]),
                    IndustryOccupation: strippedFormValues[QUESTION_IDS.WORK] ? strippedFormValues[QUESTION_IDS.WORK][1].value : "Other",
                    "Discounts": {

                        "GoodStudent": false,
                        "SingleParent": false,
                        "DrugAwareness": false,
                        "DriversTraining": false,
                        "DistantStudent": "None",
                        "DefensiveDriving": true,
                        "MultiplePolicies": false,
                        "SeniorDriverDiscount": false,
                        "DefensiveDrivingCourseDate": "2022-10-31T05:00:00Z"

                        //"{"status":"Request Parameter Validated Failed","errors":["Payload is not valid based on requested contract","Required properties are missing from object: SeniorDriverCourseDate. : RatedDrivers[0].Discounts","Required properties are missing from object: AccidentPreventionCourseDate. : RatedDrivers[0].Discounts"],"accountId":"00000000-0000-0000-0000-000000000000","tT2Output":""}"
                    },
                    "FinancialResponsibilityInformation": {
                        "Sr22": false,
                        "Sr22A": false
                    },
                    "Violations": violationsData
                },
                IsDriver2 ? {
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
                    MilesToWork: strippedFormValues[QUESTION_IDS.VEHICLE_1_ANNUAL_MILES] ? (parseInt((Number(strippedFormValues[QUESTION_IDS.VEHICLE_1_ANNUAL_MILES][0].value) / 365 / 3).toString())) : "0",
                    CoverageInformation,
                    GaragingAddress: {
                        State: "Texas",
                        ...returnFormObject(strippedFormValues, [QUESTION_IDS.ADDRESS_LINE_1, QUESTION_IDS.CITY, QUESTION_IDS.STATE, QUESTION_IDS.ZIP_CODE]),
                    },
                },
                IsVehicle2 ? {
                    ...returnFormObject(strippedFormValues, [QUESTION_IDS.VEHICLE_2, QUESTION_IDS.VEHICLE_2_PURCHASE_DATE, QUESTION_IDS.VEHICLE_2_USAGE, QUESTION_IDS.VEHICLE_2_ANNUAL_MILES,]),
                    "HomingDevice": false,
                    AssignedDriverId: 1,
                    MilesToWork: strippedFormValues[QUESTION_IDS.VEHICLE_2_ANNUAL_MILES] ? (parseInt((Number(strippedFormValues[QUESTION_IDS.VEHICLE_2_ANNUAL_MILES][0].value) / 365 / 3).toString())) : "0",
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
            "AllowCreditScore": false,
            "BumpLimits": "Bump Up"
            //"BumpLimits": "No Bumping"
        }
        //console log length of formValues
        if (process.env.NODE_ENV === "development") {
            console.log(data)
            //stringify data
            console.log(JSON.stringify(data))
        }
        return data
    }

    async function handleSave() {
        //   console.log(data);
        setShowResults(true)
        if (process.env.NODE_ENV === "development") {
            console.log(formValues)
        }
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
            if (process.env.NODE_ENV === "development") {
                console.log(rateData)
            }
            if (rateData.error) {
                const emailFormData = {
                    error: rateData.error,
                    requestString: JSON.stringify(completeFormData),
                    company: "Ai United",
                    formTitle: "TurboRater Auto Quote",
                    name: formValues[QUESTION_IDS.FIRST_NAME][0].value + " " + formValues[QUESTION_IDS.LAST_NAME][0].value,
                }

                await fetch(`${PATHCONSTANTS.BACKEND}/rates/email-error`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(emailFormData)
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
    async function sendConfirmationEmail(onlinePhoneCode, callPhoneCode, email) {
        if (!onlinePhoneCode && !callPhoneCode) return
        if (email) {
            try {
                const emailFormData = {
                    company: "Ai United",
                    name: formValues[QUESTION_IDS.FIRST_NAME][0].value + " " + formValues[QUESTION_IDS.LAST_NAME][0].value,
                    questions: [
                        "First Name",
                        "Last Name",
                        "Phone Number",
                        "Email",
                        "Buy Online Code",
                        "Call Code",
                        "Time Spent on Form"
                    ],
                    answers: [
                        formValues[QUESTION_IDS.FIRST_NAME][0].value,
                        formValues[QUESTION_IDS.LAST_NAME][0].value,
                        formValues[QUESTION_IDS.PHONE_NUMBER][0].value,
                        formValues[QUESTION_IDS.EMAIL][0].value,
                        onlinePhoneCode,
                        callPhoneCode,
                        msToTime(new Date().getTime() - timeStarted),
                    ],
                    formTitle: "TurboRater Auto Quote",
                }
                const emailResponse = await fetch(`${PATHCONSTANTS.BACKEND}/rates/email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(emailFormData)
                })
                await emailResponse.json()

            } catch (e) { console.log(e) }
        }

        async function uploadToSheet() {
            const timestamp = new Date().toLocaleString();

            //prepare data to be sent to google sheet
            //Numbering system to make sure the data is in the correct order
            const answersArray = [
                ["Time Spent on Form", msToTime(new Date().getTime() - timeStarted)],
                ["First Name", formValues[QUESTION_IDS.FIRST_NAME][0].value],
                ["Last Name", formValues[QUESTION_IDS.LAST_NAME][0].value],
                ["Phone Number", formValues[QUESTION_IDS.PHONE_NUMBER][0].value],
                ["Email", formValues[QUESTION_IDS.EMAIL][0].value],
                ["Buy Online Code", onlinePhoneCode],
                ["Call Code", callPhoneCode],
            ]
            const formData = new FormData();
            formData.append("1 Timestamp", timestamp);

            for (let i = 0; i < answersArray.length; i++) {
                formData.append(`${2 + i} ${i + 1} ${answersArray[i][0]}`, answersArray[i][1]);
            }
            formData.append("SheetTitle", "TurboRater Auto Quote");
            formData.append("Spreadsheet", "Ai United");
            formData.append("Device Info", window.navigator.userAgent);
            try {
                await fetch(`${PATHCONSTANTS.BACKEND}/rates/phone-code`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        [...formData.entries(),]
                    ),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        //    console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error)
            }
        }
        uploadToSheet()
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
        //    console.log("Active Questions Validity: " + returnValue)
        //    console.log("Error Questions: " + listOfErrors)
        setErrorQuestions(listOfErrors)
        return returnValue
    }

    function backPageHandler() {
        //based on the quotePageIndex if there is another subpage, go to the next subpage
        //if there isn't another subpage, go to the next quotePageIndex
        //and set the subPageIndex to 0
        //if decrementing the quotePageIndex then set the subPageIndex to the highest possible

        let newSubPageIndex = subPageIndex
        let newQuotePageIndex = quotePageIndex
        let questionInNewPage = false
        while (!questionInNewPage) {
            if (newSubPageIndex === 0) {
                newQuotePageIndex = newQuotePageIndex - 1
                newSubPageIndex = props.Form.QuotePages[newQuotePageIndex].SubPages.length - 1
                setQuotePageIndex((prev) => prev - 1)
                setSubPageIndex((prev) => props.Form.QuotePages[newQuotePageIndex].SubPages.length - 1)
            } else {
                newSubPageIndex = newSubPageIndex - 1
                setSubPageIndex((prev) => prev - 1)
            }
            //check newest page and make sure there is atleast one question in the shownIdList if not call nextPageHandler again
            for (let i = 0; i < props.Form.QuotePages[newQuotePageIndex]?.SubPages[newSubPageIndex]?.Questions.length; i++) {
                if (shownIdList.includes(props.Form.QuotePages[newQuotePageIndex].SubPages[newSubPageIndex]?.Questions[i].id)) {
                    questionInNewPage = true
                }
            }
            if (newQuotePageIndex === 0 && newSubPageIndex === 0) questionInNewPage = true

            setTimeout(() => {
            }, 1000)
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
        let newSubPageIndex = subPageIndex
        let newQuotePageIndex = quotePageIndex
        let questionInNewPage = false
        while (!questionInNewPage) {
            if (props.Form.QuotePages[newQuotePageIndex]?.SubPages[newSubPageIndex]?.Questions.length - 1 > newSubPageIndex) {
                newSubPageIndex = subPageIndex + 1
                setSubPageIndex((prev) => prev + 1)
            } else {
                newQuotePageIndex = quotePageIndex + 1
                newSubPageIndex = 0
                setQuotePageIndex((prev) => prev + 1)
                setSubPageIndex((prev) => 0)
            }
            //check newest page and make sure there is atleast one question in the shownIdList if not call nextPageHandler again
            for (let i = 0; i < props.Form.QuotePages[newQuotePageIndex]?.SubPages[newSubPageIndex]?.Questions.length; i++) {
                if (shownIdList.includes(props.Form.QuotePages[newQuotePageIndex].SubPages[newSubPageIndex]?.Questions[i].id)) {
                    questionInNewPage = true
                    break
                }
            }
        }

    }

    useEffect(() => {
        //find quotePageIndex and subPageIndex that matches from the PAGE_FORM_VALUES
        // log the formValues
        function getPreviousPage(passedQuotePageIndex, passedSubPageIndex) {
            //function to get the previous page
            //skips over pages that don't have any questions in the shownIdList just like the backPageHandler
            if (passedQuotePageIndex === 0 && passedSubPageIndex === 0) return [-1, -1]
            let newSubPageIndex = passedSubPageIndex
            let newQuotePageIndex = passedQuotePageIndex
            let questionInNewPage = false
            while (!questionInNewPage) {
                if (newSubPageIndex === 0) {
                    newQuotePageIndex = newQuotePageIndex - 1
                    newSubPageIndex = props.Form.QuotePages[newQuotePageIndex].SubPages.length - 1
                } else {
                    newSubPageIndex = newSubPageIndex - 1
                }
                //check newest page and make sure there is atleast one question in the shownIdList if not call nextPageHandler again
                for (let i = 0; i < props.Form.QuotePages[newQuotePageIndex]?.SubPages[newSubPageIndex]?.Questions.length; i++) {
                    if (shownIdList.includes(props.Form.QuotePages[newQuotePageIndex].SubPages[newSubPageIndex]?.Questions[i].id)) {
                        questionInNewPage = true
                    }
                }
                if (newQuotePageIndex === 0 && newSubPageIndex === 0) questionInNewPage = true
            }
            return [newQuotePageIndex, newSubPageIndex]
        }
        const previousPage = getPreviousPage(quotePageIndex, subPageIndex)

        let maxLength = 0
        function logTheValues(passedQuotePageIndex, passedSubPageIndex) {
            //find if there is a quotePageIndex and subPageIndex that match the PAGE_FORM_VALUES
            let returnValues: Array<[string, string]> = []
            let found = false;
            for (let i = 0; i < PAGE_FORM_VALUES.length; i++) {
                if (PAGE_FORM_VALUES[i].quotePageIndex === passedQuotePageIndex && PAGE_FORM_VALUES[i].subPageIndex === passedSubPageIndex) {
                    maxLength = i + 1
                    console.log("Updating Max Length: " + maxLength)
                    found = true
                    break
                }
            }
            if (!found) return returnValues
            for (let i = 0; i < maxLength; i++) {
                for (let j = 0; j < PAGE_FORM_VALUES[i].formValues.length; j++) {
                    const id = PAGE_FORM_VALUES[i].formValues[j].value
                    if (formValues[id]) {
                        for (let k = 0; k < formValues[id].length; k++) {
                            if (PAGE_FORM_VALUES[i].useQuestionID) {
                                returnValues.push([`${PAGE_FORM_VALUES[i].formValues[j].question} ${formValues[id][k].questionId}`, formValues[id][k].value])
                            } else {
                                returnValues.push([`${PAGE_FORM_VALUES[i].formValues[j].question}`, formValues[id][k].value])
                            }
                        }
                    }
                }
            }
            return returnValues
        }
        const returnedValues = logTheValues(previousPage[0], previousPage[1])
        if (previousPage[0] === -1) return
        //if there isn't anything at maxLength return
        if (PAGE_FORM_VALUES[maxLength - 1] === undefined) return
        const newFormData = new FormData()
        newFormData.append("Company", "Ai United");
        newFormData.append("SheetTitle", PAGE_FORM_VALUES[maxLength - 1].sheettitle);
        const moreData = [
            ["Time Stamp", new Date().toLocaleString()],
            ["Time Spent on Form", msToTime(new Date().getTime() - timeStarted)],
        ]
        for (let i = 0; i < moreData.length; i++) {
            newFormData.append(`${i} ${moreData[i][0]}`, moreData[i][1])
        }
        for (let i = 0; i < returnedValues.length; i++) {
            newFormData.append(`${i + moreData.length} ${returnedValues[i][0]}`, returnedValues[i][1])
        }
        fetch(`${PATHCONSTANTS.BACKEND}/forms/unfinished-quote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                [...newFormData.entries(),]
            ),
        })
            .then((res) => res.json())
            .then((data) => {
            })
            .catch((error) => {
                console.log(error);
            });

    }, [farthestPage])

    useEffect(() => {
        //check farthest page for GTM purposes

        let isFarthestPage = false
        if (quotePageIndex > farthestPage[0]) {
            isFarthestPage = true
        }
        if (isFarthestPage) {
            let newFarthestPage = [quotePageIndex, farthestPage[1]]
            //   setFarthestPage(newFarthestPage)
            if (newFarthestPage[0] === props.Form.QuotePages.length) {
                GTMEventHandler(`${GTMEVENTS.conversion}-TR-Auto`, { 'name': `Auto-Quote` })
                return
            }
            GTMEventHandler(`${GTMEVENTS.audience}-TR-Auto-${(navigationIcons[newFarthestPage[0]] as { title: { en: string } }).title.en}-reached`, { 'name': `Auto-Quote` })
        }
        let newFarthestPage
        if (isFarthestPage) {
            newFarthestPage = [quotePageIndex, 0]
            setFarthestPage(newFarthestPage)
        } else {
            if (subPageIndex > farthestPage[1] && quotePageIndex === farthestPage[0]) {
                newFarthestPage = [quotePageIndex, subPageIndex]
                setFarthestPage(newFarthestPage)
            }
        }

    }, [quotePageIndex, subPageIndex])
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


    return <>
        {quotePageIndex < props.Form.QuotePages.length
            && <Box
                sx={{
                    minHeight: "80vh",
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}
            >
                <Box>
                    {quotePageIndex <= props.Form.QuotePages.length - 1 &&
                        <>
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
                        </>}

                    {props.Form.QuotePages.map((page, pageIndex) => {
                        if (pageIndex !== quotePageIndex) return null;
                        return <React.Fragment key={pageIndex}
                        >
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
                            })}
                        </React.Fragment>
                    })}
                </Box>
                {quotePageIndex < props.Form.QuotePages.length && <Box>
                    <Box
                        sx={{ display: "flex", justifyContent: "space-around", gap: "1rem", width: "100%", margin: "2rem auto" }}
                    >
                        {quotePageIndex !== props.Form.QuotePages.length && <Button onClick={() => { backPageHandler() }}
                            disabled={quotePageIndex === 0 && subPageIndex === 0}
                            variant="outlined" color="secondary"
                        >{returnLocaleText(TEXT.back)}
                        </Button>}
                        {quotePageIndex !== props.Form.QuotePages.length &&
                            !(quotePageIndex === props.Form.QuotePages.length - 1 && subPageIndex === props.Form.QuotePages[quotePageIndex].SubPages.length - 1
                            ) && <Button onClick={() => { nextPageHandler() }}
                                variant="contained"
                                disabled={quotePageIndex === props.Form.QuotePages.length}
                            >
                                {returnLocaleText(TEXT.next)}
                            </Button>}
                        {(quotePageIndex === props.Form.QuotePages.length - 1 && subPageIndex === props.Form.QuotePages[quotePageIndex].SubPages.length - 1
                        ) && <Button
                            sx={{
                            }}
                            onClick={() => {
                                window.scrollTo(0, 0)
                                if (checkValidity() === false) {
                                    return
                                }
                                //     console.log("SUBMITTING")
                                setQuotePageIndex((prev) => prev + 1)
                                handleSave()
                            }}
                            variant="contained"
                        >{returnLocaleText(TEXT.submit)}</Button>}
                    </Box>
                    <>
                        {(DEFAULTS.showDefaultsButton && (!showDefaultValues && !showResults)) && <Box
                            sx={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem auto" }}
                        >
                            {
                                !showResults && <Button onClick={() => setShowDefaultValues(!showDefaultValues)}
                                    disabled={showDefaultValues}
                                >Add Default Input Values</Button>
                            }
                        </Box>}
                    </>
                </Box>}
            </Box >}


        <AutoResults id={showResults ? QuoteId :
            //"858433cb-fdb2-49cc-8237-64b095833e35"
            //            "858433cb-fdb-49cc-8237-64b095833e35"
            undefined
        }
            name={formValues[QUESTION_IDS.FIRST_NAME] ? formValues[QUESTION_IDS.FIRST_NAME][0].value : "John"}
            // disableLoading
            goBack={() => {
                setShowResults(false)
                setQuotePageIndex((prev) => prev - 1)
            }}
            sendConfirmationEmail={sendConfirmationEmail}
        // "511a63bf-da44-4dca-8234-47929da63a67"} 
        />
    </>
}