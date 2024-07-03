import { Box, Typography } from "@mui/material";
import InputQuestion from "./InputQuestion";
import SelectQuestion from "./SelectQuestion";
import DateQuestion from "./DateQuestion";
import WorkSelect from "./WorkSelect";
import VehicleSelect from "./VehicleSelect";
import ButtonQuestion from "./ButtonQuestion";
import PriorInsuranceQuestion from "./PriorInsuranceQuestion";
import CoverageQuestion from "./Coverage/CoverageQuestion";
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { CustomFonts } from "providers/theme";
import StateSelect from "./StateSelect";
import Violations from "./Violations";
export default function (props: {
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
    return (
        <>
            <Box
                sx={{
                    width: { xs: "85%", sm: "70%", md: "60%", lg: "50%" },
                    margin: "1.5rem auto 2rem",
                }}
            >
                {props.heading && (
                    <Typography
                        variant="h4"
                        fontFamily={CustomFonts.Gustavo}
                        textAlign={"center"}
                        sx={{
                            padding: "0 0 2rem",
                        }}
                    >
                        {returnLocaleText(props.heading)}
                    </Typography>
                )}
                {props.type.toLowerCase() === "input" && (
                    <>
                        <InputQuestion {...props} />
                    </>
                )}
                {props.type.toLowerCase() === "select" && (
                    <>
                        <SelectQuestion
                            {...props}
                            answers={props.answers || []}
                        />
                    </>
                )}
                {props.type.toLowerCase() === "state-select" && (
                    <>
                        <StateSelect {...props} />
                    </>
                )}
                {props.type.toLowerCase() === "date" && (
                    <>
                        <DateQuestion {...props} />
                    </>
                )}
                {props.type.toLowerCase() === "work-select" && (
                    <>
                        <WorkSelect {...props} />
                    </>
                )}
                {props.type.toLowerCase() === "vehicle" && (
                    <>
                        <VehicleSelect {...props} />
                    </>
                )}
                {props.type.toLowerCase() === "button" && (
                    <>
                        <ButtonQuestion
                            {...props}
                            answers={props.answers || []}
                        />
                    </>
                )}
                {props.type.toLowerCase() === "violations" && (
                    <>
                        <Violations {...props} />
                    </>
                )}
                {props.type.toLowerCase() === "prior-insurance" && (
                    <>
                        <PriorInsuranceQuestion {...props} />
                    </>
                )}
            </Box>
            {props.type.toLowerCase() === "coverage" && (
                <>
                    <CoverageQuestion {...props} />
                </>
            )}
        </>
    );
}
