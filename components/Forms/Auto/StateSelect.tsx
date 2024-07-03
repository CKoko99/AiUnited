import SelectQuestion from "./SelectQuestion";
const STATES = [
    { value: "Alabama", text: { en: "Alabama" } },
    { value: "Alaska", text: { en: "Alaska" } },
    { value: "Arizona", text: { en: "Arizona" } },
    { value: "Arkansas", text: { en: "Arkansas" } },
    { value: "California", text: { en: "California" } },
    { value: "Colorado", text: { en: "Colorado" } },
    { value: "Connecticut", text: { en: "Connecticut" } },
    { value: "Delaware", text: { en: "Delaware" } },
    { value: "Florida", text: { en: "Florida" } },
    { value: "Georgia", text: { en: "Georgia" } },
    { value: "Hawaii", text: { en: "Hawaii" } },
    { value: "Idaho", text: { en: "Idaho" } },
    { value: "Illinois", text: { en: "Illinois" } },
    { value: "Indiana", text: { en: "Indiana" } },
    { value: "Iowa", text: { en: "Iowa" } },
    { value: "Kansas", text: { en: "Kansas" } },
    { value: "Kentucky", text: { en: "Kentucky" } },
    { value: "Louisiana", text: { en: "Louisiana" } },
    { value: "Maine", text: { en: "Maine" } },
    { value: "Maryland", text: { en: "Maryland" } },
    { value: "Massachusetts", text: { en: "Massachusetts" } },
    { value: "Michigan", text: { en: "Michigan" } },
    { value: "Minnesota", text: { en: "Minnesota" } },
    { value: "Mississippi", text: { en: "Mississippi" } },
    { value: "Missouri", text: { en: "Missouri" } },
    { value: "Montana", text: { en: "Montana" } },
    { value: "Nebraska", text: { en: "Nebraska" } },
    { value: "Nevada", text: { en: "Nevada" } },
    { value: "New Hampshire", text: { en: "New Hampshire" } },
    { value: "New Jersey", text: { en: "New Jersey" } },
    { value: "New Mexico", text: { en: "New Mexico" } },
    { value: "New York", text: { en: "New York" } },
    { value: "North Carolina", text: { en: "North Carolina" } },
    { value: "North Dakota", text: { en: "North Dakota" } },
    { value: "Ohio", text: { en: "Ohio" } },
    { value: "Oklahoma", text: { en: "Oklahoma" } },
    { value: "Oregon", text: { en: "Oregon" } },
    { value: "Pennsylvania", text: { en: "Pennsylvania" } },
    { value: "Rhode Island", text: { en: "Rhode Island" } },
    { value: "South Carolina", text: { en: "South Carolina" } },
    { value: "South Dakota", text: { en: "South Dakota" } },
    { value: "Tennessee", text: { en: "Tennessee" } },
    { value: "Texas", text: { en: "Texas" } },
    { value: "Utah", text: { en: "Utah" } },
    { value: "Vermont", text: { en: "Vermont" } },
    { value: "Virginia", text: { en: "Virginia" } },
    { value: "Washington", text: { en: "Washington" } },
    { value: "West Virginia", text: { en: "West Virginia" } },
    { value: "Wisconsin", text: { en: "Wisconsin" } },
    { value: "Wyoming", text: { en: "Wyoming" } },
];
export default function StateSelect(props: {
    id: string;
    questionId: string;
    question?: {
        [lang: string]: string;
    };
    type: string;
    heading?: {
        [lang: string]: string;
    };
    defaultValue: any;
    passedError: boolean;
    validationError?: {
        [lang: string]: string;
    };
    validation?: {
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: RegExp;
        type?: string;
    };
    formValues: {
        [questionId: string]: {
            questionId: string;
            value: any;
            valid: boolean;
        }[];
    };
    largeText?: boolean;
    convertToNumber?: boolean;
    nextQuestionId?: string | string[];
    addIdToList: Function;
    removeIdFromList: Function;
    updateFormValues: any;
    clearError: any;
    required?: boolean;
    shownIdList: string[];
    fullWidth?: boolean;
    answers?: {
        value: string;
        text: {
            [lang: string]: string;
        };
        nextQuestionId?: string | string[];
    }[];
    buttonAddIdToList: Function;
}) {
    return <SelectQuestion {...props} answers={STATES} />;
}
