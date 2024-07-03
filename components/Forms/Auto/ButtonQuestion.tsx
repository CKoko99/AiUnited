import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, FormHelperText, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function (props: {
    id: string;
    questionId: string;
    question?: { [lang: string]: string };
    answers: {
        value: any;
        text: {
            [lang: string]: string;
        };
        nextQuestionId?: string | string[];
    }[];
    buttonWidth?: string;
    defaultValue: any;
    passedError: boolean;
    validationError?: { [lang: string]: string };
    buttonAddIdToList: any;
    updateFormValues: any;
    clearError: any;
}) {
    const [selected, setSelected] = useState(null);
    const [hidden, setHidden] = useState(true);

    function handleIdList(value: any) {
        //loop through props.answers
        //if answer.value === selected then add answer.nextQuestionId to idList
        //if answer.value !== selected then remove answer.nextQuestionId from idList
        const newIdList: String[] = [];
        const removeIdList: String[] = [];
        props.answers.forEach((answer) => {
            if (answer.value === value) {
                //if answer.nextQuestionId is an array then loop through it and add each id to idList
                if (Array.isArray(answer.nextQuestionId)) {
                    answer.nextQuestionId.forEach((id) => {
                        newIdList.push(id);
                    });
                } else {
                    newIdList.push(answer.nextQuestionId);
                }
            } else {
                //if answer.nextQuestionId is an array then loop through it and remove each id from idList
                if (Array.isArray(answer.nextQuestionId)) {
                    answer.nextQuestionId.forEach((id) => {
                        removeIdList.push(id);
                    });
                } else {
                    removeIdList.push(answer.nextQuestionId);
                }
            }
        });
        //remove elements from removeIdList that are in newIdList
        newIdList.forEach((id) => {
            const index = removeIdList.indexOf(id);
            if (index > -1) {
                removeIdList.splice(index, 1);
            }
        });

        //loop through newIdList and add each id to idList
        props.buttonAddIdToList(props.id, newIdList);
        //loop through removeIdList and remove each id from idList
        removeIdList.forEach((id) => {
            //    props.removeIdFromList(id)
        });
    }
    function handleButtonSelect(value: any) {
        if (value !== selected) {
            handleIdList(value);
        }
        setSelected(value);
        props.updateFormValues(props.id, [
            { questionId: props.questionId, value: value, valid: true },
        ]);
        props.clearError();
    }

    useEffect(() => {
        if (props.defaultValue) {
            handleButtonSelect(props.defaultValue);
        }
        setHidden(false);
    }, []);
    return (
        <>
            <Box
                sx={{
                    opacity: hidden ? 0 : 1,
                    transition: "opacity 1s",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Box>
                    <Typography variant="h6" textAlign={"center"}>
                        {returnLocaleText(props.question)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {props.answers.map((answer, index) => {
                        return (
                            <Button
                                key={index}
                                variant={
                                    selected === answer.value
                                        ? "contained"
                                        : "outlined"
                                }
                                color={
                                    selected === answer.value
                                        ? "primary"
                                        : "secondary"
                                }
                                onClick={(
                                    e: React.MouseEvent<HTMLButtonElement>,
                                ) => {
                                    handleButtonSelect(e.currentTarget.value);
                                }}
                                value={answer.value}
                                sx={{
                                    minWidth: "12rem",
                                    width:
                                        props.buttonWidth === "half"
                                            ? "45%"
                                            : "",
                                }}
                            >
                                {returnLocaleText(answer.text)}
                            </Button>
                        );
                    })}
                </Box>
                {props.passedError && (
                    <FormHelperText error={true}>
                        {returnLocaleText(props.validationError)}
                    </FormHelperText>
                )}
            </Box>
        </>
    );
}
