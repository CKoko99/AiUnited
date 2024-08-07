import AutoQuote, { QUESTION_IDS } from "@/components/Forms/Auto/AutoQuote";
import GrayStartImg from "../../public/assets/images/get-a-quote/auto/startgray.png";
import ColorStartImg from "../../public/assets/images/get-a-quote/auto/startcolor.png";
import GrayVehiclesImg from "../../public/assets/images/get-a-quote/auto/vehiclesgray.png";
import ColorVehiclesImg from "../../public/assets/images/get-a-quote/auto/vehiclescolor.png";
import GrayDriversImg from "../../public/assets/images/get-a-quote/auto/driversgray.png";
import ColorDriversImg from "../../public/assets/images/get-a-quote/auto/driverscolor.png";
import GrayCoverageImg from "../../public/assets/images/get-a-quote/auto/coveragegray.png";
import ColorCoverageImg from "../../public/assets/images/get-a-quote/auto/coveragecolor.png";
import HeadComponent from "@/components/Head";
import { kMaxLength } from "buffer";

//_f errors are due to duplicate IDs or missing questionId

const DevAutoForm = {
    QuotePages: [
        {
            title: { en: "Start", es: "Comenzar" },
            grayIcon: GrayStartImg,
            colorIcon: ColorStartImg,
            SubPages: [
                {
                    Questions: [
                        {
                            id: QUESTION_IDS.FIRST_NAME,
                            nextQuestionId: QUESTION_IDS.LAST_NAME,
                            type: "input",
                            defaultValue: "test",
                            heading: {
                                en: "Let's get started",
                                es: "Comencemos",
                            },
                            question: {
                                en: "First Name",
                                es: "Nombre",
                            },
                            questionId: "FirstName",
                            validationError: {
                                en: "Please enter a valid first name",
                                es: "Por favor ingrese un nombre válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.LAST_NAME,
                            nextQuestionId: QUESTION_IDS.PHONE_NUMBER,
                            type: "input",
                            defaultValue: "test",
                            question: {
                                en: "Last Name",
                                es: "Apellido",
                            },
                            questionId: "LastName",
                            validationError: {
                                en: "Please enter a valid last name",
                                es: "Por favor ingrese un apellido válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.PHONE_NUMBER,
                            nextQuestionId: QUESTION_IDS.EMAIL,
                            type: "input",
                            defaultValue: "5555555555",
                            question: {
                                en: "Phone Number",
                                es: "Número de teléfono",
                            },
                            questionId: "MobilePhone",
                            validationError: {
                                en: "Please enter a valid phone number",
                                es: "Por favor ingrese un número de teléfono válido",
                            },
                            validation: {
                                required: true,
                                minLength: 10,
                                pattern: /\D/g,
                            },
                        },
                        {
                            id: QUESTION_IDS.EMAIL,
                            nextQuestionId: QUESTION_IDS.ADDRESS_LINE_1,
                            type: "input",
                            defaultValue: "test@test.com",
                            question: {
                                en: "Email Address",
                                es: "Correo electrónico",
                            },
                            questionId: "EmailAddress",
                            validationError: {
                                en: "Please enter a valid email address",
                                es: "Por favor ingrese una dirección de correo electrónico válida",
                            },
                            validation: {
                                required: true,
                                minLength: 3,
                                type: "email",
                                pattern: /\s+/g,
                            },
                        },
                    ],
                },
                {
                    Questions: [
                        {
                            id: QUESTION_IDS.ADDRESS_LINE_1,
                            nextQuestionId: QUESTION_IDS.ZIP_CODE,
                            type: "input",
                            defaultValue: "5215 LAKE PLACID DR",
                            question: {
                                en: "Address",
                                es: "Dirección",
                            },
                            heading: {
                                en: "Where will you park your vehicle overnight?",
                                es: "¿Dónde estacionará su vehículo durante la noche?",
                            },
                            questionId: "Street1",
                            validationError: {
                                en: "Please enter a valid address",
                                es: "Por favor ingrese una dirección válida",
                            },
                            validation: {
                                required: true,
                                maxLength: 50,
                            },
                        },
                        {
                            id: QUESTION_IDS.ZIP_CODE,
                            nextQuestionId: QUESTION_IDS.CITY,
                            defaultValue: "75232",
                            type: "input",
                            validation: {
                                required: true,
                                minLength: 5,
                                maxLength: 5,
                                pattern: /\D/g,
                            },
                            question: {
                                en: "Zip Code",
                                es: "Código postal",
                            },
                            questionId: "ZipCode",
                            validationError: {
                                en: "Please enter a 5 digit zip code",
                                es: "Por favor ingrese un código postal de 5 dígitos",
                            },
                        },
                        {
                            id: QUESTION_IDS.CITY,
                            nextQuestionId: QUESTION_IDS.STATE,
                            defaultValue: "Dallas",
                            type: "input",
                            question: {
                                en: "City",
                                es: "Ciudad",
                            },
                            questionId: "City",
                            validationError: {
                                en: "Please enter a valid city",
                                es: "Por favor ingrese una ciudad válida",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.STATE,
                            nextQuestionId: QUESTION_IDS.TIME_AT_ADDRESS,
                            defaultValue: "Texas",
                            type: "select",
                            question: {
                                en: "State",
                                es: "Estado",
                            },
                            questionId: "State",
                            validationError: {
                                en: "Please select a state",
                                es: "Por favor seleccione un estado",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Texas",
                                        es: "Texas",
                                    },
                                    value: "Texas",
                                },
                                {
                                    text: {
                                        en: "Alabama",
                                        es: "Alabama",
                                    },
                                    value: "Alabama",
                                },
                                {
                                    text: {
                                        en: "Alaska",
                                        es: "Alaska",
                                    },
                                    value: "Alaska",
                                },
                                {
                                    text: {
                                        en: "Arizona",
                                        es: "Arizona",
                                    },
                                    value: "Arizona",
                                },
                                {
                                    text: {
                                        en: "Arkansas",
                                        es: "Arkansas",
                                    },
                                    value: "Arkansas",
                                },
                                {
                                    text: {
                                        en: "California",
                                        es: "California",
                                    },
                                    value: "California",
                                },
                                {
                                    text: {
                                        en: "Colorado",
                                        es: "Colorado",
                                    },
                                    value: "Colorado",
                                },
                                {
                                    text: {
                                        en: "Connecticut",
                                        es: "Connecticut",
                                    },
                                    value: "Connecticut",
                                },
                                {
                                    text: {
                                        en: "Delaware",
                                        es: "Delaware",
                                    },
                                    value: "Delaware",
                                },
                                {
                                    text: {
                                        en: "Florida",
                                        es: "Florida",
                                    },
                                    value: "Florida",
                                },
                                {
                                    text: {
                                        en: "Georgia",
                                        es: "Georgia",
                                    },
                                    value: "Georgia",
                                },
                                {
                                    text: {
                                        en: "Hawaii",
                                        es: "Hawaii",
                                    },
                                    value: "Hawaii",
                                },
                                {
                                    text: {
                                        en: "Idaho",
                                        es: "Idaho",
                                    },
                                    value: "Idaho",
                                },
                                {
                                    text: {
                                        en: "Illinois",
                                        es: "Illinois",
                                    },
                                    value: "Illinois",
                                },
                                {
                                    text: {
                                        en: "Indiana",
                                        es: "Indiana",
                                    },
                                    value: "Indiana",
                                },
                                {
                                    text: {
                                        en: "Iowa",
                                        es: "Iowa",
                                    },
                                    value: "Iowa",
                                },
                                {
                                    text: {
                                        en: "Kansas",
                                        es: "Kansas",
                                    },
                                    value: "Kansas",
                                },
                                {
                                    text: {
                                        en: "Kentucky",
                                        es: "Kentucky",
                                    },
                                    value: "Kentucky",
                                },
                                {
                                    text: {
                                        en: "Louisiana",
                                        es: "Louisiana",
                                    },
                                    value: "Louisiana",
                                },
                                {
                                    text: {
                                        en: "Maine",
                                        es: "Maine",
                                    },
                                    value: "Maine",
                                },
                                {
                                    text: {
                                        en: "Maryland",
                                        es: "Maryland",
                                    },
                                    value: "Maryland",
                                },
                                {
                                    text: {
                                        en: "Massachusetts",
                                        es: "Massachusetts",
                                    },
                                    value: "Massachusetts",
                                },
                                {
                                    text: {
                                        en: "Michigan",
                                        es: "Michigan",
                                    },
                                    value: "Michigan",
                                },
                                {
                                    text: {
                                        en: "Minnesota",
                                        es: "Minnesota",
                                    },
                                    value: "Minnesota",
                                },
                                {
                                    text: {
                                        en: "Mississippi",
                                        es: "Mississippi",
                                    },
                                    value: "Mississippi",
                                },
                                {
                                    text: {
                                        en: "Missouri",
                                        es: "Missouri",
                                    },
                                    value: "Missouri",
                                },
                                {
                                    text: {
                                        en: "Montana",
                                        es: "Montana",
                                    },
                                    value: "Montana",
                                },
                                {
                                    text: {
                                        en: "Nebraska",
                                        es: "Nebraska",
                                    },
                                    value: "Nebraska",
                                },
                                {
                                    text: {
                                        en: "Nevada",
                                        es: "Nevada",
                                    },
                                    value: "Nevada",
                                },
                                {
                                    text: {
                                        en: "New Hampshire",
                                        es: "New Hampshire",
                                    },
                                    value: "New Hampshire",
                                },
                                {
                                    text: {
                                        en: "New Jersey",
                                        es: "New Jersey",
                                    },
                                    value: "New Jersey",
                                },
                                {
                                    text: {
                                        en: "New Mexico",
                                        es: "New Mexico",
                                    },
                                    value: "New Mexico",
                                },
                                {
                                    text: {
                                        en: "New York",
                                        es: "New York",
                                    },
                                    value: "New York",
                                },
                                {
                                    text: {
                                        en: "North Carolina",
                                        es: "North Carolina",
                                    },
                                    value: "North Carolina",
                                },
                                {
                                    text: {
                                        en: "North Dakota",
                                        es: "North Dakota",
                                    },
                                    value: "North Dakota",
                                },
                                {
                                    text: {
                                        en: "Ohio",
                                        es: "Ohio",
                                    },
                                    value: "Ohio",
                                },
                                {
                                    text: {
                                        en: "Oklahoma",
                                        es: "Oklahoma",
                                    },
                                    value: "Oklahoma",
                                },
                                {
                                    text: {
                                        en: "Oregon",
                                        es: "Oregon",
                                    },
                                    value: "Oregon",
                                },
                                {
                                    text: {
                                        en: "Pennsylvania",
                                        es: "Pennsylvania",
                                    },
                                    value: "Pennsylvania",
                                },
                                {
                                    text: {
                                        en: "Rhode Island",
                                        es: "Rhode Island",
                                    },
                                    value: "Rhode Island",
                                },
                                {
                                    text: {
                                        en: "South Carolina",
                                        es: "South Carolina",
                                    },
                                    value: "South Carolina",
                                },
                                {
                                    text: {
                                        en: "South Dakota",
                                        es: "South Dakota",
                                    },
                                    value: "South Dakota",
                                },
                                {
                                    text: {
                                        en: "Tennessee",
                                        es: "Tennessee",
                                    },
                                    value: "Tennessee",
                                },
                                {
                                    text: {
                                        en: "Texas",
                                        es: "Texas",
                                    },
                                    value: "Texas",
                                },
                                {
                                    text: {
                                        en: "Utah",
                                        es: "Utah",
                                    },
                                    value: "Utah",
                                },
                                {
                                    text: {
                                        en: "Vermont",
                                        es: "Vermont",
                                    },
                                    value: "Vermont",
                                },
                                {
                                    text: {
                                        en: "Virginia",
                                        es: "Virginia",
                                    },
                                    value: "Virginia",
                                },
                                {
                                    text: {
                                        en: "Washington",
                                        es: "Washington",
                                    },
                                    value: "Washington",
                                },
                                {
                                    text: {
                                        en: "West Virginia",
                                        es: "West Virginia",
                                    },
                                    value: "West Virginia",
                                },
                                {
                                    text: {
                                        en: "Wisconsin",
                                        es: "Wisconsin",
                                    },
                                    value: "Wisconsin",
                                },
                                {
                                    text: {
                                        en: "Wyoming",
                                        es: "Wyoming",
                                    },
                                    value: "Wyoming",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.TIME_AT_ADDRESS,
                            nextQuestionId: QUESTION_IDS.VEHICLE_1,
                            defaultValue: 60,
                            type: "select",
                            question: {
                                en: "Time at Address",
                                es: "Tiempo en la dirección",
                            },
                            validationError: {
                                en: "Please enter a valid time at address",
                                es: "Por favor ingrese un tiempo de residencia válido",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Less than 6 months",
                                        es: "Menos de 6 meses",
                                    },
                                    value: 6,
                                },
                                {
                                    text: {
                                        en: "6 months to 1 year",
                                        es: "6 meses a 1 año",
                                    },
                                    value: 12,
                                },
                                {
                                    text: {
                                        en: "1 to 2 years",
                                        es: "1 a 2 años",
                                    },
                                    value: 24,
                                },
                                {
                                    text: {
                                        en: "2 to 3 years",
                                        es: "2 a 3 años",
                                    },
                                    value: 36,
                                },
                                {
                                    text: {
                                        en: "3 to 4 years",
                                        es: "3 a 4 años",
                                    },
                                    value: 48,
                                },
                                {
                                    text: {
                                        en: "4 to 5 years",
                                        es: "4 a 5 años",
                                    },
                                    value: 60,
                                },
                                {
                                    text: {
                                        en: "5+ years",
                                        es: "5+ años",
                                    },
                                    value: 61,
                                },
                            ],
                            questionId: "MonthsAtResidence",
                        },
                    ],
                },
            ],
        },
        {
            title: { en: "Vehicles", es: "Vehículos" },
            grayIcon: GrayVehiclesImg,
            colorIcon: ColorVehiclesImg,
            SubPages: [
                {
                    Questions: [
                        {
                            id: QUESTION_IDS.VEHICLE_1,
                            nextQuestionId: QUESTION_IDS.VEHICLE_1_OWNERSHIP,
                            questionId: "Vehicle",
                            type: "vehicle",
                            heading: {
                                en: "Let's add your vehicle",
                                es: "Agreguemos su vehículo",
                            },
                            defaultValue: ["2016", "TOYOTA", "CAMRY LE"],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_1_OWNERSHIP,
                            questionId: "Ownership",
                            type: "button",
                            defaultValue: "Owned",
                            question: {
                                en: "Do you currently own, finance, or lease your vehicle?",
                                es: "¿Actualmente posee, financia o arrienda su vehículo?",
                            },
                            validationError: {
                                en: "Please select an ownership type",
                                es: "Por favor seleccione un tipo de propiedad",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Owned",
                                        es: "Propio",
                                    },
                                    value: "Owned",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_1_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .LIABILITY_MINIMUM,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Financed",
                                        es: "Financiado",
                                    },
                                    value: "Financed",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_1_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Leased",
                                        es: "Arrendado",
                                    },
                                    value: "Leased",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_1_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_1_PURCHASE_DATE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_1_USAGE,
                            questionId: "PurchaseDate",
                            defaultValue: "2023-06-30T05:00:00Z",
                            type: "date",
                            question: {
                                en: "Purchase Date",
                                es: "Fecha de compra",
                            },
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_1_USAGE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_1_ANNUAL_MILES,
                            questionId: "Usage",
                            type: "select",
                            defaultValue: "Work School",
                            question: {
                                en: "What is the primary use of this vehicle?",
                                es: "¿Cuál es el uso principal de este vehículo?",
                            },
                            validationError: {
                                en: "Please select a usage type",
                                es: "Por favor seleccione un tipo de uso",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Work School",
                                        es: "Trabajo escuela",
                                    },
                                    value: "Work School",
                                },
                                {
                                    text: {
                                        en: "Artisan Use",
                                        es: "Uso artesanal",
                                    },
                                    value: "Artisan Use",
                                },
                                {
                                    text: {
                                        en: "Business Use",
                                        es: "Uso comercial",
                                    },
                                    value: "Business Use",
                                },
                                {
                                    text: {
                                        en: "Farm",
                                        es: "Granja",
                                    },
                                    value: "Farm",
                                },
                                {
                                    text: {
                                        en: "Pleasure",
                                        es: "Placer",
                                    },
                                    value: "Pleasure",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_1_ANNUAL_MILES,
                            nextQuestionId: QUESTION_IDS.VEHICLE_2_ADD,
                            questionId: "AnnualMiles",
                            type: "input",
                            defaultValue: "10000",
                            question: {
                                en: "Annual Miles",
                                es: "Millas anuales",
                            },
                            validationError: {
                                en: "Please enter a valid annual mileage",
                                es: "Por favor ingrese un kilometraje anual válido",
                            },
                            validation: {
                                required: true,
                                minLength: 1,
                                maxLength: 6,
                                pattern: /\D/g,
                            },
                            convertToNumber: true,
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_2_ADD,
                            question: {
                                en: "Would you like to add another vehicle?",
                                es: "¿Le gustaría agregar otro vehículo?",
                            },
                            type: "button",
                            questionId: "AddAnotherVehicle",
                            defaultValue: "false",
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId: QUESTION_IDS.VEHICLE_2,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId: QUESTION_IDS.DATE_OF_BIRTH,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_2,
                            nextQuestionId: QUESTION_IDS.VEHICLE_2_OWNERSHIP,
                            questionId: "Vehicle",
                            type: "vehicle",
                            defaultValue: ["2008", "HONDA", "CIVIC EX"],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_2_OWNERSHIP,
                            questionId: "Ownership",
                            type: "button",
                            defaultValue: "Owned",
                            question: {
                                en: "Ownership",
                                es: "Propiedad",
                            },
                            validationError: {
                                en: "Please select an ownership type",
                                es: "Por favor seleccione un tipo de propiedad",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Owned",
                                        es: "Propio",
                                    },
                                    value: "Owned",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_2_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .LIABILITY_MINIMUM,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Financed",
                                        es: "Financiado",
                                    },
                                    value: "Financed",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_2_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Leased",
                                        es: "Arrendado",
                                    },
                                    value: "Leased",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_2_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_2_PURCHASE_DATE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_2_USAGE,
                            questionId: "PurchaseDate",
                            defaultValue: "2023-06-30T05:00:00Z",
                            type: "date",
                            question: {
                                en: "Purchase Date",
                                es: "Fecha de compra",
                            },
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_2_USAGE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_2_ANNUAL_MILES,
                            questionId: "Usage",
                            type: "select",
                            defaultValue: "Work School",
                            question: {
                                en: "What is the primary use of this vehicle?",
                                es: "¿Cuál es el uso principal de este vehículo?",
                            },
                            validationError: {
                                en: "Please select a usage type",
                                es: "Por favor seleccione un tipo de uso",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Work School",
                                        es: "Trabajo escuela",
                                    },
                                    value: "Work School",
                                },
                                {
                                    text: {
                                        en: "Artisan Use",
                                        es: "Uso artesanal",
                                    },
                                    value: "Artisan Use",
                                },
                                {
                                    text: {
                                        en: "Business Use",
                                        es: "Uso comercial",
                                    },
                                    value: "Business Use",
                                },
                                {
                                    text: {
                                        en: "Farm",
                                        es: "Granja",
                                    },
                                    value: "Farm",
                                },
                                {
                                    text: {
                                        en: "Pleasure",
                                        es: "Placer",
                                    },
                                    value: "Pleasure",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_2_ANNUAL_MILES,
                            nextQuestionId: QUESTION_IDS.VEHICLE_3_ADD,
                            questionId: "AnnualMiles",
                            type: "input",
                            defaultValue: "10000",
                            question: {
                                en: "Annual Miles",
                                es: "Millas anuales",
                            },
                            validationError: {
                                en: "Please enter a valid annual mileage",
                                es: "Por favor ingrese un kilometraje anual válido",
                            },
                            validation: {
                                required: true,
                                minLength: 1,
                                maxLength: 6,
                                pattern: /\D/g,
                            },
                            convertToNumber: true,
                        },
                        //Add up to 4 vehicles
                        {
                            id: QUESTION_IDS.VEHICLE_3_ADD,
                            question: {
                                en: "Would you like to add another vehicle?",
                                es: "¿Le gustaría agregar otro vehículo?",
                            },
                            type: "button",
                            questionId: "AddAnotherVehicle",
                            defaultValue: "false",
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId: QUESTION_IDS.VEHICLE_3,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId: QUESTION_IDS.DATE_OF_BIRTH,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_3,
                            nextQuestionId: QUESTION_IDS.VEHICLE_3_OWNERSHIP,
                            questionId: "Vehicle",
                            type: "vehicle",
                            defaultValue: ["2008", "HONDA", "CIVIC EX"],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_3_OWNERSHIP,
                            questionId: "Ownership",
                            type: "button",
                            defaultValue: "Owned",
                            question: {
                                en: "Ownership",
                                es: "Propiedad",
                            },
                            validationError: {
                                en: "Please select an ownership type",
                                es: "Por favor seleccione un tipo de propiedad",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Owned",
                                        es: "Propio",
                                    },
                                    value: "Owned",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_3_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .LIABILITY_MINIMUM,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Financed",
                                        es: "Financiado",
                                    },
                                    value: "Financed",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_3_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Leased",
                                        es: "Arrendado",
                                    },
                                    value: "Leased",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_3_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_3_PURCHASE_DATE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_3_USAGE,
                            questionId: "PurchaseDate",
                            defaultValue: "2023-06-30T05:00:00Z",
                            type: "date",
                            question: {
                                en: "Purchase Date",
                                es: "Fecha de compra",
                            },
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_3_USAGE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_3_ANNUAL_MILES,
                            questionId: "Usage",
                            type: "select",
                            defaultValue: "Work School",
                            question: {
                                en: "What is the primary use of this vehicle?",
                                es: "¿Cuál es el uso principal de este vehículo?",
                            },
                            validationError: {
                                en: "Please select a usage type",
                                es: "Por favor seleccione un tipo de uso",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Work School",
                                        es: "Trabajo escuela",
                                    },
                                    value: "Work School",
                                },
                                {
                                    text: {
                                        en: "Artisan Use",
                                        es: "Uso artesanal",
                                    },
                                    value: "Artisan Use",
                                },
                                {
                                    text: {
                                        en: "Business Use",
                                        es: "Uso comercial",
                                    },
                                    value: "Business Use",
                                },
                                {
                                    text: {
                                        en: "Farm",
                                        es: "Granja",
                                    },
                                    value: "Farm",
                                },
                                {
                                    text: {
                                        en: "Pleasure",
                                        es: "Placer",
                                    },
                                    value: "Pleasure",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_3_ANNUAL_MILES,
                            nextQuestionId: QUESTION_IDS.VEHICLE_4_ADD,
                            questionId: "AnnualMiles",
                            type: "input",
                            defaultValue: "10000",
                            question: {
                                en: "Annual Miles",
                                es: "Millas anuales",
                            },
                            validationError: {
                                en: "Please enter a valid annual mileage",
                                es: "Por favor ingrese un kilometraje anual válido",
                            },
                            validation: {
                                required: true,
                                minLength: 1,
                                maxLength: 6,
                                pattern: /\D/g,
                            },
                            convertToNumber: true,
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_4_ADD,
                            question: {
                                en: "Would you like to add another vehicle?",
                                es: "¿Le gustaría agregar otro vehículo?",
                            },
                            type: "button",
                            questionId: "AddAnotherVehicle",
                            defaultValue: "false",
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId: QUESTION_IDS.VEHICLE_4,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId: QUESTION_IDS.DATE_OF_BIRTH,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_4,
                            nextQuestionId: QUESTION_IDS.VEHICLE_4_OWNERSHIP,
                            questionId: "Vehicle",
                            type: "vehicle",
                            defaultValue: ["2008", "HONDA", "CIVIC EX"],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_4_OWNERSHIP,
                            questionId: "Ownership",
                            type: "button",
                            defaultValue: "Owned",
                            question: {
                                en: "Ownership",
                                es: "Propiedad",
                            },
                            validationError: {
                                en: "Please select an ownership type",
                                es: "Por favor seleccione un tipo de propiedad",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Owned",
                                        es: "Propio",
                                    },
                                    value: "Owned",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_4_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .LIABILITY_MINIMUM,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Financed",
                                        es: "Financiado",
                                    },
                                    value: "Financed",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_4_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Leased",
                                        es: "Arrendado",
                                    },
                                    value: "Leased",
                                    nextQuestionId: [
                                        QUESTION_IDS.VEHICLE_4_PURCHASE_DATE,
                                        QUESTION_IDS.SELECTED_COVERAGES
                                            .FULL_COVERAGE,
                                    ],
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_4_PURCHASE_DATE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_4_USAGE,
                            questionId: "PurchaseDate",
                            defaultValue: "2023-06-30T05:00:00Z",
                            type: "date",
                            question: {
                                en: "Purchase Date",
                                es: "Fecha de compra",
                            },
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_4_USAGE,
                            nextQuestionId: QUESTION_IDS.VEHICLE_4_ANNUAL_MILES,
                            questionId: "Usage",
                            type: "select",
                            defaultValue: "Work School",
                            question: {
                                en: "What is the primary use of this vehicle?",
                                es: "¿Cuál es el uso principal de este vehículo?",
                            },
                            validationError: {
                                en: "Please select a usage type",
                                es: "Por favor seleccione un tipo de uso",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Work School",
                                        es: "Trabajo escuela",
                                    },
                                    value: "Work School",
                                },
                                {
                                    text: {
                                        en: "Artisan Use",
                                        es: "Uso artesanal",
                                    },
                                    value: "Artisan Use",
                                },
                                {
                                    text: {
                                        en: "Business Use",
                                        es: "Uso comercial",
                                    },
                                    value: "Business Use",
                                },
                                {
                                    text: {
                                        en: "Farm",
                                        es: "Granja",
                                    },
                                    value: "Farm",
                                },
                                {
                                    text: {
                                        en: "Pleasure",
                                        es: "Placer",
                                    },
                                    value: "Pleasure",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.VEHICLE_4_ANNUAL_MILES,
                            nextQuestionId: QUESTION_IDS.DATE_OF_BIRTH,
                            questionId: "AnnualMiles",
                            type: "input",
                            defaultValue: "10000",
                            question: {
                                en: "Annual Miles",
                                es: "Millas anuales",
                            },
                            validationError: {
                                en: "Please enter a valid annual mileage",
                                es: "Por favor ingrese un kilometraje anual válido",
                            },
                            validation: {
                                required: true,
                                minLength: 1,
                                maxLength: 6,
                                pattern: /\D/g,
                            },
                            convertToNumber: true,
                        },
                    ],
                },
            ],
        },
        {
            title: { en: "Drivers", es: "Conductores" },
            grayIcon: GrayDriversImg,
            colorIcon: ColorDriversImg,
            SubPages: [
                {
                    Questions: [
                        {
                            id: QUESTION_IDS.DATE_OF_BIRTH,
                            nextQuestionId: QUESTION_IDS.GENDER,
                            type: "date",
                            defaultValue: ["01", "01", 1990],
                            question: {
                                en: "Date of Birth",
                                es: "Fecha de nacimiento",
                            },
                            heading: {
                                en: "Please provide additional information about yourself.",
                                es: "Proporcione información adicional sobre usted.",
                            },
                            questionId: "DateOfBirth",
                        },
                        {
                            id: QUESTION_IDS.GENDER,
                            nextQuestionId: QUESTION_IDS.MARITAL_STATUS,
                            type: "select",
                            defaultValue: "Male",
                            question: {
                                en: "Gender",
                                es: "Género",
                            },
                            validationError: {
                                en: "Please select a gender",
                                es: "Por favor seleccione un género",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Male",
                                        es: "Masculino",
                                    },
                                    value: "Male",
                                },
                                {
                                    text: {
                                        en: "Female",
                                        es: "Femenino",
                                    },
                                    value: "Female",
                                },
                            ],
                            questionId: "Gender",
                        },
                        {
                            id: QUESTION_IDS.MARITAL_STATUS,
                            nextQuestionId: QUESTION_IDS.WORK,
                            type: "select",
                            defaultValue: "Single",
                            question: {
                                en: "Marital Status",
                                es: "Estado civil",
                            },
                            validationError: {
                                en: "Please select a marital status",
                                es: "Por favor seleccione un estado civil",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Single",
                                        es: "Soltero",
                                    },
                                    value: "Single",
                                },
                                {
                                    text: {
                                        en: "Married",
                                        es: "Casado",
                                    },
                                    value: "Married",
                                },
                                {
                                    text: {
                                        en: "Divorced",
                                        es: "Divorciado",
                                    },
                                    value: "Divorced",
                                },
                                {
                                    text: {
                                        en: "Widowed",
                                        es: "Viudo",
                                    },
                                    value: "Widowed",
                                },
                                {
                                    text: {
                                        en: "Separated",
                                        es: "Separado",
                                    },
                                    value: "Separated",
                                },
                            ],
                            questionId: "MaritalStatus",
                        },
                        {
                            id: QUESTION_IDS.WORK,
                            nextQuestionId: QUESTION_IDS.EDUCATION_LEVEL,
                            questionId: "Industry",
                            type: "work-select",
                            defaultValue: [
                                "Agriculture/Forestry/Fishing",
                                "Arborist",
                            ],
                            question: {
                                en: "What Do You Do For Work?",
                                es: "¿A qué te dedicas?",
                            },
                        },
                        {
                            id: QUESTION_IDS.EDUCATION_LEVEL,
                            nextQuestionId: QUESTION_IDS.RESIDENCY_TYPE,
                            questionId: "EducationLevel",
                            type: "select",
                            defaultValue: "Bachelors Degree",
                            question: {
                                en: "Education",
                                es: "Educación",
                            },
                            validationError: {
                                en: "Please select an education level",
                                es: "Por favor seleccione un nivel de educación",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "None",
                                        es: "Ninguno",
                                    },
                                    value: "None",
                                },
                                {
                                    text: {
                                        en: "Bachelors Degree",
                                        es: "Licenciatura",
                                    },
                                    value: "Bachelors Degree",
                                },
                                {
                                    text: {
                                        en: "Masters Degree",
                                        es: "Maestría",
                                    },
                                    value: "Masters Degree",
                                },
                                {
                                    text: {
                                        en: "Ph. D / Doctorate",
                                        es: "Ph. D / Doctorado",
                                    },
                                    value: "Doctorate Degree",
                                },
                                {
                                    text: {
                                        en: "Medical Degree",
                                        es: "Título médico",
                                    },
                                    value: "Medical Degree",
                                },
                                {
                                    text: {
                                        en: "Law Degree",
                                        es: "Título de abogado",
                                    },
                                    value: "Law Degree",
                                },
                                {
                                    text: {
                                        en: "No High School Diploma",
                                        es: "Sin diploma de escuela secundaria",
                                    },
                                    value: "No High School Diploma",
                                },
                                {
                                    text: {
                                        en: "High School Diploma",
                                        es: "Diploma de escuela secundaria",
                                    },
                                    value: "High School Diploma",
                                },
                                {
                                    text: {
                                        en: "Associates Degree",
                                        es: "Título de asociado",
                                    },
                                    value: "Associates Degree",
                                },
                                {
                                    text: {
                                        en: "Some College",
                                        es: "Algo de universidad",
                                    },
                                    value: "Some College",
                                },
                                {
                                    text: {
                                        en: "Vocational/Technical Degree",
                                        es: "Título vocacional / técnico",
                                    },
                                    value: "Vocational Degree",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.RESIDENCY_TYPE,
                            nextQuestionId: QUESTION_IDS.RESIDENCY_STATUS,
                            questionId: "ResidencyType",
                            type: "select",
                            defaultValue: "Home",
                            question: {
                                en: "Residence Type",
                                es: "Tipo de residencia",
                            },
                            validationError: {
                                en: "Please select a residency type",
                                es: "Por favor seleccione un tipo de residencia",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Home",
                                        es: "Casa",
                                    },
                                    value: "Home",
                                },
                                {
                                    text: {
                                        en: "Apartment",
                                        es: "Apartamento",
                                    },
                                    value: "Apartment",
                                },
                                {
                                    text: {
                                        en: "Condo",
                                        es: "Condominio",
                                    },
                                    value: "Condo",
                                },
                                {
                                    text: {
                                        en: "Mobile Home",
                                        es: "Casa móvil",
                                    },
                                    value: "Mobile Home",
                                },
                                {
                                    text: {
                                        en: "Fixed Mobile Home",
                                        es: "Casa móvil fija",
                                    },
                                    value: "Fixed Mobile Home",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.RESIDENCY_STATUS,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_1_LICENSE_NUMBER,
                            questionId: "ResidencyStatus",
                            type: "select",
                            defaultValue: "Own",
                            question: {
                                en: "Residence Status",
                                es: "Estado de residencia",
                            },
                            validationError: {
                                en: "Please select a residency status",
                                es: "Por favor seleccione un estado de residencia",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Own",
                                        es: "Propio",
                                    },
                                    value: "Own",
                                },
                                {
                                    text: {
                                        en: "Rent",
                                        es: "Alquilar",
                                    },
                                    value: "Rent",
                                },
                                {
                                    text: {
                                        en: "Lease",
                                        es: "Arrendamiento",
                                    },
                                    value: "Lease",
                                },
                            ],
                        },
                        /*
                      DRIVER_1_LICENSE_NUMBER: "DRIVER_1_LICENSE_NUMBER",
    DRIVER_1_LICENSE_STATUS: "DRIVER_1_LICENSE_STATUS",
    DRIVER_1_STATE_LICENSED: "DRIVER_1_STATE_LICENSED",
    DRIVER_1_MONTHS_LICENSED: "DRIVER_1_MONTHS_LICENSED",
    DRIVER_1_MONTHS_STATE_LICENSED: "DRIVER_1_MONTHS_STATE_LICENSED",
    DRIVER_1_MONTHS_SUSPENDED: "DRIVER_1_MONTHS_SUSPENDED",
                    */
                        {
                            id: QUESTION_IDS.DRIVER_1_LICENSE_NUMBER,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_1_LICENSE_STATUS,
                            questionId: "LicenseNumber",
                            type: "input",
                            defaultValue: "123456789",
                            question: {
                                en: "Driver's License Number",
                                es: "Número de licencia de conducir",
                            },
                            validationError: {
                                en: "Please enter a valid driver's license number",
                                es: "Por favor ingrese un número de licencia de conducir válido",
                            },
                            validation: {
                                required: true,
                                minLength: 5,
                                maxLength: 20,
                                //pattern: /\D/g
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_1_LICENSE_STATUS,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_1_STATE_LICENSED,
                            questionId: "LicenseStatus",
                            type: "button",
                            buttonWidth: "half",
                            defaultValue: "Valid",
                            question: {
                                en: "Driver's License Status",
                                es: "Estado de la licencia de conducir",
                            },
                            validationError: {
                                en: "Please select a driver's license status",
                                es: "Por favor seleccione un estado de licencia de conducir",
                            },
                            // Valid, Unlicensed, Permit, Suspended
                            answers: [
                                {
                                    text: {
                                        en: "Valid",
                                        es: "Válido",
                                    },
                                    value: "Valid",
                                    nextQuestionId: [
                                        QUESTION_IDS.DRIVER_1_STATE_LICENSED,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Unlicensed",
                                        es: "Sin licencia",
                                    },
                                    value: "Unlicensed",
                                    nextQuestionId: [
                                        QUESTION_IDS.DRIVER_1_STATE_LICENSED,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Permit",
                                        es: "Permiso",
                                    },
                                    value: "Permit",
                                    nextQuestionId: [
                                        QUESTION_IDS.DRIVER_1_STATE_LICENSED,
                                    ],
                                },
                                {
                                    text: {
                                        en: "Suspended",
                                        es: "Suspendido",
                                    },
                                    value: "Suspended",
                                    nextQuestionId: [
                                        QUESTION_IDS.DRIVER_1_MONTHS_SUSPENDED,
                                    ],
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_1_MONTHS_SUSPENDED,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_1_STATE_LICENSED,
                            type: "select",
                            defaultValue: 60,
                            question: {
                                en: "Months License Suspended",
                                es: "Meses de licencia suspendida",
                            },
                            validationError: {
                                en: "Please select a months suspended",
                                es: "Por favor seleccione un mes suspendido",
                            },
                            questionId: "MonthsLicensed",
                            answers: [
                                {
                                    text: {
                                        en: "Less than 6 months",
                                        es: "Menos de 6 meses",
                                    },
                                    value: 6,
                                },
                                {
                                    text: {
                                        en: "6 months to 1 year",
                                        es: "6 meses a 1 año",
                                    },
                                    value: 12,
                                },
                                {
                                    text: {
                                        en: "1 to 2 years",
                                        es: "1 a 2 años",
                                    },
                                    value: 24,
                                },
                                {
                                    text: {
                                        en: "2 to 3 years",
                                        es: "2 a 3 años",
                                    },
                                    value: 36,
                                },
                                {
                                    text: {
                                        en: "3 to 5 years",
                                        es: "3 a 5 años",
                                    },
                                    value: 60,
                                },
                                {
                                    text: {
                                        en: "5 to 10 years",
                                        es: "5 a 10 años",
                                    },
                                    value: 61,
                                },
                                {
                                    text: {
                                        en: "10+ years",
                                        es: "10+ años",
                                    },
                                    value: 120,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_1_STATE_LICENSED,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_1_MONTHS_LICENSED,
                            questionId: "StateLicensed",
                            type: "state-select",
                            defaultValue: "Texas",
                            question: {
                                en: "State Licensed",
                                es: "Estado con licencia",
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_1_MONTHS_LICENSED,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_1_MONTHS_STATE_LICENSED,
                            type: "select",
                            defaultValue: 60,
                            question: {
                                en: "Months Licensed",
                                es: "Meses con licencia",
                            },
                            validationError: {
                                en: "Please select a months licensed",
                                es: "Por favor seleccione un mes con licencia",
                            },
                            questionId: "MonthsLicensed",
                            answers: [
                                {
                                    text: {
                                        en: "Less than 6 months",
                                        es: "Menos de 6 meses",
                                    },
                                    value: 6,
                                },
                                {
                                    text: {
                                        en: "6 months to 1 year",
                                        es: "6 meses a 1 año",
                                    },
                                    value: 12,
                                },
                                {
                                    text: {
                                        en: "1 to 2 years",
                                        es: "1 a 2 años",
                                    },
                                    value: 24,
                                },
                                {
                                    text: {
                                        en: "2 to 3 years",
                                        es: "2 a 3 años",
                                    },
                                    value: 36,
                                },
                                {
                                    text: {
                                        en: "3 to 5 years",
                                        es: "3 a 5 años",
                                    },
                                    value: 60,
                                },
                                {
                                    text: {
                                        en: "5 to 10 years",
                                        es: "5 a 10 años",
                                    },
                                    value: 61,
                                },
                                {
                                    text: {
                                        en: "10+ years",
                                        es: "10+ años",
                                    },
                                    value: 120,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_1_MONTHS_STATE_LICENSED,
                            nextQuestionId: QUESTION_IDS.DRIVER_2_ADD,
                            type: "select",
                            defaultValue: 60,
                            question: {
                                en: "Months Licensed in State",
                                es: "Meses con licencia en el estado",
                            },
                            validationError: {
                                en: "Please select a number of months licensed in state",
                                es: "Por favor seleccione un número de meses con licencia en el estado",
                            },
                            questionId: "MonthsStateLicensed",
                            answers: [
                                {
                                    text: {
                                        en: "Less than 6 months",
                                        es: "Menos de 6 meses",
                                    },
                                    value: 6,
                                },
                                {
                                    text: {
                                        en: "6 months to 1 year",
                                        es: "6 meses a 1 año",
                                    },
                                    value: 12,
                                },
                                {
                                    text: {
                                        en: "1 to 2 years",
                                        es: "1 a 2 años",
                                    },
                                    value: 24,
                                },
                                {
                                    text: {
                                        en: "2 to 3 years",
                                        es: "2 a 3 años",
                                    },
                                    value: 36,
                                },
                                {
                                    text: {
                                        en: "3 to 5 years",
                                        es: "3 a 5 años",
                                    },
                                    value: 60,
                                },
                                {
                                    text: {
                                        en: "5 to 10 years",
                                        es: "5 a 10 años",
                                    },
                                    value: 61,
                                },
                                {
                                    text: {
                                        en: "10+ years",
                                        es: "10+ años",
                                    },
                                    value: 120,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_2_ADD,
                            question: {
                                en: "Would you like to add another driver?",
                                es: "¿Le gustaría agregar otro conductor?",
                            },
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            type: "button",
                            questionId: "AddAnotherDriver",
                            defaultValue: "false",
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId:
                                        QUESTION_IDS.DRIVER_2_FIRST_NAME,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId:
                                        QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_2_FIRST_NAME,
                            nextQuestionId: QUESTION_IDS.DRIVER_2_LAST_NAME,
                            type: "input",
                            defaultValue: "Longest",
                            question: {
                                en: "First Name",
                                es: "Nombre",
                            },
                            questionId: "FirstName",
                            validationError: {
                                en: "Please enter a valid first name",
                                es: "Por favor ingrese un nombre válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_2_LAST_NAME,
                            nextQuestionId: QUESTION_IDS.DRIVER_2_DATE_OF_BIRTH,
                            type: "input",
                            defaultValue: "Johnest",
                            question: {
                                en: "Last Name",
                                es: "Apellido",
                            },
                            questionId: "LastName",
                            validationError: {
                                en: "Please enter a valid last name",
                                es: "Por favor ingrese un apellido válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_2_DATE_OF_BIRTH,
                            nextQuestionId: QUESTION_IDS.DRIVER_2_GENDER,
                            type: "date",
                            defaultValue: ["01", "01", 1990],
                            question: {
                                en: "Date of Birth",
                                es: "Fecha de nacimiento",
                            },
                            questionId: "DateOfBirth",
                        },
                        {
                            id: QUESTION_IDS.DRIVER_2_GENDER,
                            nextQuestionId: QUESTION_IDS.DRIVER_2_RELATION,
                            type: "select",
                            questionId: "Gender",
                            defaultValue: "Male",
                            question: {
                                en: "Gender",
                                es: "Género",
                            },
                            validationError: {
                                en: "Please select a gender",
                                es: "Por favor seleccione un género",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Male",
                                        es: "Masculino",
                                    },
                                    value: "Male",
                                },
                                {
                                    text: {
                                        en: "Female",
                                        es: "Femenino",
                                    },
                                    value: "Female",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_2_RELATION,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_2_MARITAL_STATUS,
                            type: "select",
                            defaultValue: "Spouse",
                            question: {
                                en: "Relationship",
                                es: "Relación",
                            },
                            validationError: {
                                en: "Please select a relationship",
                                es: "Por favor seleccione una relación",
                            },
                            questionId: "Relationship",
                            answers: [
                                {
                                    text: {
                                        en: "Spouse",
                                        es: "Cónyuge",
                                    },
                                    value: "Spouse",
                                },
                                {
                                    text: {
                                        en: "Child",
                                        es: "Niño",
                                    },
                                    value: "Child",
                                },
                                {
                                    text: {
                                        en: "Other",
                                        es: "Otro",
                                    },
                                    value: "Other",
                                },
                            ],
                        },
                        //Add up to 4 drivers
                        {
                            id: QUESTION_IDS.DRIVER_2_MARITAL_STATUS,
                            nextQuestionId: QUESTION_IDS.DRIVER_3_ADD,
                            type: "select",
                            questionId: "MaritalStatus",
                            defaultValue: "Married",
                            question: {
                                en: "Marital Status",
                                es: "Estado civil",
                            },
                            validationError: {
                                en: "Please select a marital status",
                                es: "Por favor seleccione un estado civil",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Single",
                                        es: "Soltero",
                                    },
                                    value: "Single",
                                },
                                {
                                    text: {
                                        en: "Married",
                                        es: "Casado",
                                    },
                                    value: "Married",
                                },
                                {
                                    text: {
                                        en: "Divorced",
                                        es: "Divorciado",
                                    },
                                    value: "Divorced",
                                },
                                {
                                    text: {
                                        en: "Widowed",
                                        es: "Viudo",
                                    },
                                    value: "Widowed",
                                },
                                {
                                    text: {
                                        en: "Separated",
                                        es: "Separado",
                                    },
                                    value: "Separated",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_3_ADD,
                            question: {
                                en: "Would you like to add another driver?",
                                es: "¿Le gustaría agregar otro conductor?",
                            },
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            type: "button",
                            questionId: "AddAnotherDriver",
                            defaultValue: "false",
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId:
                                        QUESTION_IDS.DRIVER_3_FIRST_NAME,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId:
                                        QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_3_FIRST_NAME,
                            nextQuestionId: QUESTION_IDS.DRIVER_3_LAST_NAME,
                            type: "input",
                            defaultValue: "Longerest",
                            question: {
                                en: "First Name",
                                es: "Nombre",
                            },
                            questionId: "FirstName",
                            validationError: {
                                en: "Please enter a valid first name",
                                es: "Por favor ingrese un nombre válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_3_LAST_NAME,
                            nextQuestionId: QUESTION_IDS.DRIVER_3_DATE_OF_BIRTH,
                            type: "input",
                            defaultValue: "Johnerest",
                            question: {
                                en: "Last Name",
                                es: "Apellido",
                            },
                            questionId: "LastName",
                            validationError: {
                                en: "Please enter a valid last name",
                                es: "Por favor ingrese un apellido válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_3_DATE_OF_BIRTH,
                            nextQuestionId: QUESTION_IDS.DRIVER_3_GENDER,
                            type: "date",
                            defaultValue: ["01", "01", 1990],
                            question: {
                                en: "Date of Birth",
                                es: "Fecha de nacimiento",
                            },
                            questionId: "DateOfBirth",
                        },
                        {
                            id: QUESTION_IDS.DRIVER_3_GENDER,
                            nextQuestionId: QUESTION_IDS.DRIVER_3_RELATION,
                            type: "select",
                            questionId: "Gender",
                            defaultValue: "Male",
                            question: {
                                en: "Gender",
                                es: "Género",
                            },
                            validationError: {
                                en: "Please select a gender",
                                es: "Por favor seleccione un género",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Male",
                                        es: "Masculino",
                                    },
                                    value: "Male",
                                },
                                {
                                    text: {
                                        en: "Female",
                                        es: "Femenino",
                                    },
                                    value: "Female",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_3_RELATION,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_3_MARITAL_STATUS,
                            type: "select",
                            defaultValue: "Spouse",
                            question: {
                                en: "Relationship",
                                es: "Relación",
                            },
                            validationError: {
                                en: "Please select a relationship",
                                es: "Por favor seleccione una relación",
                            },
                            questionId: "Relationship",
                            answers: [
                                {
                                    text: {
                                        en: "Spouse",
                                        es: "Cónyuge",
                                    },
                                    value: "Spouse",
                                },
                                {
                                    text: {
                                        en: "Child",
                                        es: "Niño",
                                    },
                                    value: "Child",
                                },
                                {
                                    text: {
                                        en: "Other",
                                        es: "Otro",
                                    },
                                    value: "Other",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_3_MARITAL_STATUS,
                            nextQuestionId: QUESTION_IDS.DRIVER_4_ADD,
                            type: "select",
                            questionId: "MaritalStatus",
                            defaultValue: "Married",
                            question: {
                                en: "Marital Status",
                                es: "Estado civil",
                            },
                            validationError: {
                                en: "Please select a marital status",
                                es: "Por favor seleccione un estado civil",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Single",
                                        es: "Soltero",
                                    },
                                    value: "Single",
                                },
                                {
                                    text: {
                                        en: "Married",
                                        es: "Casado",
                                    },
                                    value: "Married",
                                },
                                {
                                    text: {
                                        en: "Divorced",
                                        es: "Divorciado",
                                    },
                                    value: "Divorced",
                                },
                                {
                                    text: {
                                        en: "Widowed",
                                        es: "Viudo",
                                    },
                                    value: "Widowed",
                                },
                                {
                                    text: {
                                        en: "Separated",
                                        es: "Separado",
                                    },
                                    value: "Separated",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_4_ADD,
                            question: {
                                en: "Would you like to add another driver?",
                                es: "¿Le gustaría agregar otro conductor?",
                            },
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            type: "button",
                            questionId: "AddAnotherDriver",
                            defaultValue: "false",
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId:
                                        QUESTION_IDS.DRIVER_4_FIRST_NAME,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId:
                                        QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_4_FIRST_NAME,
                            nextQuestionId: QUESTION_IDS.DRIVER_4_LAST_NAME,
                            type: "input",
                            defaultValue: "Longest",
                            question: {
                                en: "First Name",
                                es: "Nombre",
                            },
                            questionId: "FirstName",
                            validationError: {
                                en: "Please enter a valid first name",
                                es: "Por favor ingrese un nombre válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_4_LAST_NAME,
                            nextQuestionId: QUESTION_IDS.DRIVER_4_DATE_OF_BIRTH,
                            type: "input",
                            defaultValue: "Johnest",
                            question: {
                                en: "Last Name",
                                es: "Apellido",
                            },
                            questionId: "LastName",
                            validationError: {
                                en: "Please enter a valid last name",
                                es: "Por favor ingrese un apellido válido",
                            },
                            validation: {
                                required: true,
                            },
                        },
                        {
                            id: QUESTION_IDS.DRIVER_4_DATE_OF_BIRTH,
                            nextQuestionId: QUESTION_IDS.DRIVER_4_GENDER,
                            type: "date",
                            defaultValue: ["01", "01", 1990],
                            question: {
                                en: "Date of Birth",
                                es: "Fecha de nacimiento",
                            },
                            questionId: "DateOfBirth",
                        },
                        {
                            id: QUESTION_IDS.DRIVER_4_GENDER,
                            nextQuestionId: QUESTION_IDS.DRIVER_4_RELATION,
                            type: "select",
                            questionId: "Gender",
                            defaultValue: "Male",
                            question: {
                                en: "Gender",
                                es: "Género",
                            },
                            validationError: {
                                en: "Please select a gender",
                                es: "Por favor seleccione un género",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Male",
                                        es: "Masculino",
                                    },
                                    value: "Male",
                                },
                                {
                                    text: {
                                        en: "Female",
                                        es: "Femenino",
                                    },
                                    value: "Female",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_4_RELATION,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_4_MARITAL_STATUS,
                            type: "select",
                            defaultValue: "Spouse",
                            question: {
                                en: "Relationship",
                                es: "Relación",
                            },
                            validationError: {
                                en: "Please select a relationship",
                                es: "Por favor seleccione una relación",
                            },
                            questionId: "Relationship",
                            answers: [
                                {
                                    text: {
                                        en: "Spouse",
                                        es: "Cónyuge",
                                    },
                                    value: "Spouse",
                                },
                                {
                                    text: {
                                        en: "Child",
                                        es: "Niño",
                                    },
                                    value: "Child",
                                },
                                {
                                    text: {
                                        en: "Other",
                                        es: "Otro",
                                    },
                                    value: "Other",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_4_MARITAL_STATUS,
                            nextQuestionId:
                                QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS,
                            type: "select",
                            questionId: "MaritalStatus",
                            defaultValue: "Married",
                            question: {
                                en: "Marital Status",
                                es: "Estado civil",
                            },
                            validationError: {
                                en: "Please select a marital status",
                                es: "Por favor seleccione un estado civil",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Single",
                                        es: "Soltero",
                                    },
                                    value: "Single",
                                },
                                {
                                    text: {
                                        en: "Married",
                                        es: "Casado",
                                    },
                                    value: "Married",
                                },
                                {
                                    text: {
                                        en: "Divorced",
                                        es: "Divorciado",
                                    },
                                    value: "Divorced",
                                },
                                {
                                    text: {
                                        en: "Widowed",
                                        es: "Viudo",
                                    },
                                    value: "Widowed",
                                },
                                {
                                    text: {
                                        en: "Separated",
                                        es: "Separado",
                                    },
                                    value: "Separated",
                                },
                            ],
                        },
                    ],
                },
                {
                    Questions: [
                        {
                            id: QUESTION_IDS.DRIVER_1_HAS_VIOLATIONS,
                            type: "button",
                            questionId: "Driver1Violations",
                            defaultValue: "false",
                            question: {
                                en: "Do you have any violations or accidents in the last 3 years?",
                                es: "¿Tiene alguna violación o accidente en los últimos 3 años?",
                            },
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId:
                                        QUESTION_IDS.DRIVER_1_VIOLATIONS,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId:
                                        QUESTION_IDS.PRIOR_INSURANCE,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.DRIVER_1_VIOLATIONS,
                            nextQuestionId: QUESTION_IDS.PRIOR_INSURANCE,
                            questionId: "Driver1Violations",
                            type: "violations",
                        },
                    ],
                },
            ],
        },
        {
            title: { en: "Coverage", es: "Cobertura" },
            grayIcon: GrayCoverageImg,
            colorIcon: ColorCoverageImg,
            SubPages: [
                {
                    Questions: [
                        {
                            id: QUESTION_IDS.PRIOR_INSURANCE,
                            type: "button",
                            questionId: "PriorInsurance",
                            defaultValue: "true",
                            question: {
                                en: "Do you have prior insurance?",
                                es: "¿Tiene seguro anterior?",
                            },
                            validationError: {
                                en: "Please select an option",
                                es: "Por favor seleccione una opción",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Yes",
                                        es: "Sí",
                                    },
                                    value: "true",
                                    nextQuestionId:
                                        QUESTION_IDS.PRIOR_INSURANCE_COMPANY,
                                },
                                {
                                    text: {
                                        en: "No",
                                        es: "No",
                                    },
                                    value: "false",
                                    nextQuestionId:
                                        QUESTION_IDS.REASON_FOR_NO_INSURANCE,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.PRIOR_INSURANCE_COMPANY,
                            nextQuestionId: QUESTION_IDS.PRIOR_LIABILITY_LIMIT,
                            questionId: "PriorInsuranceCompany",
                            type: "prior-insurance",
                            defaultValue:
                                "8c5e439a-a706-4d6d-83af-cfb12649b405",
                        },
                        {
                            id: QUESTION_IDS.PRIOR_LIABILITY_LIMIT,
                            nextQuestionId:
                                QUESTION_IDS.PRIOR_INSURANCE_EXPIRATION,
                            questionId: "PriorLiabilityLimit",
                            type: "select",
                            question: {
                                en: "Prior Liability Limit",
                                es: "Límite de responsabilidad anterior",
                            },
                            validationError: {
                                en: "Please select a prior liability limit",
                                es: "Por favor seleccione un límite de responsabilidad anterior",
                            },
                            defaultValue: "30000/60000/25000",
                            answers: [
                                {
                                    text: {
                                        en: "None",
                                        es: "Ninguna",
                                    },
                                    value: "None",
                                },
                                {
                                    text: {
                                        en: "30000/60000/25000",
                                        es: "30000/60000/25000",
                                    },
                                    value: "30000/60000/25000",
                                },
                                {
                                    text: {
                                        en: "30000/60000/30000",
                                        es: "30000/60000/30000",
                                    },
                                    value: "30000/60000/30000",
                                },
                                {
                                    text: {
                                        en: "50000/100000/30000",
                                        es: "50000/100000/30000",
                                    },
                                    value: "50000/100000/30000",
                                },
                                {
                                    text: {
                                        en: "50000/100000/50000",
                                        es: "50000/100000/50000",
                                    },
                                    value: "50000/100000/50000",
                                },
                                {
                                    text: {
                                        en: "100000/300000/50000",
                                        es: "100000/300000/50000",
                                    },
                                    value: "100000/300000/50000",
                                },
                                {
                                    text: {
                                        en: "100000/300000/100000",
                                        es: "100000/300000/100000",
                                    },
                                    value: "100000/300000/100000",
                                },
                                {
                                    text: {
                                        en: "250000/500000/100000",
                                        es: "250000/500000/100000",
                                    },
                                    value: "250000/500000/100000",
                                },
                                {
                                    text: {
                                        en: "250000/500000/250000",
                                        es: "250000/500000/250000",
                                    },
                                    value: "250000/500000/250000",
                                },
                                {
                                    text: {
                                        en: "300000/500000/250000",
                                        es: "300000/500000/250000",
                                    },
                                    value: "300000/500000/250000",
                                },
                                {
                                    text: {
                                        en: "300000/500000/300000",
                                        es: "300000/500000/300000",
                                    },
                                    value: "300000/500000/300000",
                                },
                                {
                                    text: {
                                        en: "500000/500000/300000",
                                        es: "500000/500000/300000",
                                    },
                                    value: "500000/500000/300000",
                                },
                                {
                                    text: {
                                        en: "500000/500000/500000",
                                        es: "500000/500000/500000",
                                    },
                                    value: "500000/500000/500000",
                                },
                                {
                                    text: {
                                        en: "500000/1000000/300000",
                                        es: "500000/1000000/300000",
                                    },
                                    value: "500000/1000000/300000",
                                },
                                {
                                    text: {
                                        en: "500000/1000000/500000",
                                        es: "500000/1000000/500000",
                                    },
                                    value: "500000/1000000/500000",
                                },
                                {
                                    text: {
                                        en: "1000000/1000000/500000",
                                        es: "1000000/1000000/500000",
                                    },
                                    value: "1000000/1000000/500000",
                                },
                                {
                                    text: {
                                        en: "1000000/1000000/1000000",
                                        es: "1000000/1000000/1000000",
                                    },
                                    value: "1000000/1000000/1000000",
                                },
                                {
                                    text: {
                                        en: "5000000/5000000/1000000",
                                        es: "5000000/5000000/1000000",
                                    },
                                    value: "5000000/5000000/1000000",
                                },
                                {
                                    text: {
                                        en: "100000 CSL",
                                        es: "100000 CSL",
                                    },
                                    value: "100000 CSL",
                                },
                                {
                                    text: {
                                        en: "300000 CSL",
                                        es: "300000 CSL",
                                    },
                                    value: "300000 CSL",
                                },
                                {
                                    text: {
                                        en: "500000 CSL",
                                        es: "500000 CSL",
                                    },
                                    value: "500000 CSL",
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.PRIOR_INSURANCE_EXPIRATION,
                            nextQuestionId: QUESTION_IDS.PRIOR_MONTHS_COVERAGE,
                            questionId: "PriorExpirationDate",
                            type: "date",
                            defaultValue: "2023-06-30T05:00:00Z",
                            question: {
                                en: "Prior Insurance Expiration",
                                es: "Vencimiento del seguro anterior",
                            },
                        },
                        {
                            id: QUESTION_IDS.PRIOR_MONTHS_COVERAGE,
                            questionId: "PriorMonthsCoverage",
                            type: "select",
                            defaultValue: 60,
                            question: {
                                en: "Months of Prior Coverage",
                                es: "Meses de cobertura anterior",
                            },
                            validationError: {
                                en: "Please select a months of prior coverage",
                                es: "Por favor seleccione un mes de cobertura anterior",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "Less than 6 months",
                                        es: "Menos de 6 meses",
                                    },
                                    value: 6,
                                },
                                {
                                    text: {
                                        en: "6 months to 1 year",
                                        es: "6 meses a 1 año",
                                    },
                                    value: 12,
                                },
                                {
                                    text: {
                                        en: "1 to 2 years",
                                        es: "1 a 2 años",
                                    },
                                    value: 24,
                                },
                                {
                                    text: {
                                        en: "2 to 3 years",
                                        es: "2 a 3 años",
                                    },
                                    value: 36,
                                },
                                {
                                    text: {
                                        en: "3 to 4 years",
                                        es: "3 a 4 años",
                                    },
                                    value: 48,
                                },
                                {
                                    text: {
                                        en: "4 to 5 years",
                                        es: "4 a 5 años",
                                    },
                                    value: 60,
                                },
                                {
                                    text: {
                                        en: "5+ years",
                                        es: "5+ años",
                                    },
                                    value: 61,
                                },
                            ],
                        },
                        {
                            id: QUESTION_IDS.REASON_FOR_NO_INSURANCE,
                            //   nextQuestionId: 2200,
                            questionId: "ReasonForNoInsurance",
                            type: "select",
                            defaultValue: "No Reason Given",
                            question: {
                                en: "Reason for no insurance",
                                es: "Razón por la que no tiene seguro",
                            },
                            validationError: {
                                en: "Please select a reason for no insurance",
                                es: "Por favor seleccione una razón por la que no tiene seguro",
                            },
                            answers: [
                                {
                                    text: {
                                        en: "No Reason Given",
                                        es: "No se dio ninguna razón",
                                    },
                                    value: "No Reason Given",
                                },
                                {
                                    text: {
                                        en: "Car In Storage",
                                        es: "Auto en almacenamiento",
                                    },
                                    value: "Car In Storage",
                                },
                                {
                                    text: {
                                        en: "Company Car",
                                        es: "Coche de la empresa",
                                    },
                                    value: "Company Car",
                                },
                                {
                                    text: {
                                        en: "Deployed Military",
                                        es: "Militar desplegado",
                                    },
                                    value: "Deployed Military",
                                },
                                {
                                    text: {
                                        en: "Did Not Own Vehicle",
                                        es: "No poseía vehículo",
                                    },
                                    value: "Did Not Own Vehicle",
                                },
                                {
                                    text: {
                                        en: "Driving Without Insurance",
                                        es: "Conduciendo sin seguro",
                                    },
                                    value: "Driving Without Insurance",
                                },
                                {
                                    text: {
                                        en: "Incarcerated",
                                        es: "Encarcelado",
                                    },
                                    value: "Incarcerated",
                                },
                                {
                                    text: {
                                        en: "No Insurance Required",
                                        es: "No se requiere seguro",
                                    },
                                    value: "No Insurance Required",
                                },
                                {
                                    text: {
                                        en: "Out Of Country",
                                        es: "Fuera del país",
                                    },
                                    value: "Out Of Country",
                                },
                                {
                                    text: {
                                        en: "Physically Impaired",
                                        es: "Físicamente impedido",
                                    },
                                    value: "Physically Impaired",
                                },
                                {
                                    text: {
                                        en: "Self Insured",
                                        es: "Autoasegurado",
                                    },
                                    value: "Self Insured",
                                },
                                {
                                    text: {
                                        en: "Under Others Policy",
                                        es: "Bajo la póliza de otros",
                                    },
                                    value: "Under Others Policy",
                                },
                                {
                                    text: {
                                        en: "Other",
                                        es: "Otro",
                                    },
                                    value: "Other",
                                },
                            ],
                        },
                    ],
                },
                {
                    Questions: [
                        {
                            id: QUESTION_IDS.SELECTED_COVERAGES
                                .LIABILITY_MINIMUM,
                            type: "coverage",
                            questionId: "LiabilityMinimum",
                            //  defaultValue: "30000/60000/25000",
                            options: [0, 2, 3],
                        },
                        {
                            id: QUESTION_IDS.SELECTED_COVERAGES.FULL_COVERAGE,
                            type: "coverage",
                            questionId: "FullCoverage",
                            //  defaultValue: "30000/60000/25000",
                            options: [2, 4],
                        },
                    ],
                },
            ],
        },
    ],
};

export default function () {
    return (
        <>
            <HeadComponent
                title={"Car Insurance | Get a Free Auto Insurance Quote"}
                metaData={
                    "Secure your ride with a free car insurance quote from Ai United Insurance today. Drive confidently with tailored coverage."
                }
            />
            <AutoQuote
                Form={
                    process.env.NODE_ENV === "development"
                        ? DevAutoForm
                        : DevAutoForm
                }
            />
        </>
    );
}
