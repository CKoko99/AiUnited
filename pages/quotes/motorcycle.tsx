import JotFormEmbed from 'react-jotform-embed';
import SimpleForm from '../../components/Forms/Simple/Simple';

const formContent = {
    title: "Motorcycle Insurance Quote",
    questions: [
        {
            title: "Full Name",
            type: "group",
            questions: [
                {
                    title: "First Name",
                    type: "short-text"
                },
                {
                    title: "Last Name",
                    type: "short-text"
                }
            ]
        },
        {
            title: "Phone Number",
            type: "phone"
        },
        {
            title: "Email",
            type: "email"
        },
        {
            title: "Address",
            type: "list",
            questions: [
                {
                    title: "Street Address",
                    type: "short-text"
                },
                {
                    title: "Street Address Line 2",
                    type: "short-text"
                },
                {
                    title: "City",
                    type: "short-text"
                },
                {
                    title: "State",
                    type: "short-text"
                },
                {
                    title: "Zip Code",
                    type: "short-text"
                }
            ]
        },
        {
            title: "Do you currently have motorcycle insurance?",
            type: "radio",
            answers: [
                {
                    title: "Yes",
                    value: "yes"
                },
                {
                    title: "No",
                    value: "no"
                }
            ]
        },
        {
            title: "Vehicle Identification Number (VIN)",
            type: "short-text"
        },
        {
            title: "Gender",
            type: "radio",
            answers: [
                {
                    title: "Yes",
                    value: "yes"
                },
                {
                    title: "No",
                    value: "no"
                }
            ]
        },
        {
            title: "Maritial Status",
            type: "dropdown",
            answers: [
                {
                    title: "Single",
                    value: "single"
                },
                {
                    title: "Married",
                    value: "married"
                },
                {
                    title: "Divorced",
                    value: "divorced"
                },
                {
                    title: "Widowed",
                    value: "widowed"
                },
                {
                    title: "Separated",
                    value: "Separated"
                }
            ]
        },
        {
            title: "Date of Birth",
            type: "date"
        },
        {
            title: "Any incidents in the last 3 years?",
            type: "radio",
            answers: [
                {
                    title: "Yes",
                    value: "yes"
                },
                {
                    title: "No",
                    value: "no"
                }
            ]
        },
    ]
}
export default function () {
    return <>
        <SimpleForm />
        <JotFormEmbed src="https://form.jotform.com/82874216328159" />
    </>
}