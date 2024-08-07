import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
//import { DateField, LocalizationProvider } from "@mui/x-date-pickers"
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import validationText from "./validationText";
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
//const DateField = lazy(() => import('@mui/x-date-pickers').then(({ DateField }) => ({ default: DateField })));
//const LocalizationProvider = lazy(() => import('@mui/x-date-pickers').then(({ LocalizationProvider }) => ({ default: LocalizationProvider })));
const dateLabel = {
    en: "Date",
    es: "Fecha",
};
export default function DateQuestion(props: {
    title: { [lang: string]: string };
    index: number;
    setValid: Function;
    setAnswer: Function;
    future?: boolean;
    fullWidth?: boolean;
}) {
    const [value, setValue] = useState<Dayjs | null>(null);
    const [error, setError] = useState("");

    const [check, setCheck] = useState(false);
    const maxDate = dayjs();

    useEffect(() => {
        //check if value is a valid date
        if (!check) {
            return;
        }
        if (value) {
            let numMonth = value.month() + 1;
            let numDate = value.date();
            let stringMonth;
            let stringDate;
            if (numMonth < 10) {
                stringMonth = "0" + numMonth;
            } else {
                stringMonth = numMonth;
            }
            if (numDate < 10) {
                stringDate = "0" + numDate;
            } else {
                stringDate = numDate;
            }
            //const date = `${stringMonth}-${stringDate}-${value.year()}`
            const date = `${value.year()}-${stringMonth}-${stringDate}`;
            //check if date is less than max date
            if (props.future) {
                if (dayjs(date).isAfter(maxDate)) {
                    props.setValid(props.index, true);
                    props.setAnswer(props.index, date);
                    setError("");
                } else {
                    props.setValid(props.index, false);
                    //setError(`${date} ${dayjs(date)} `)
                    setError(returnLocaleText(validationText.date));
                }
            } else {
                if (
                    dayjs(date).isBefore(maxDate) &&
                    dayjs(date).isAfter("1900-01-01")
                ) {
                    props.setValid(props.index, true);
                    props.setAnswer(props.index, date);
                    setError("");
                } else {
                    props.setValid(props.index, false);
                    //setError(`${date} ${dayjs(date)} `)
                    setError(returnLocaleText(validationText.date));
                }
            }
        } else {
            props.setValid(props.index, false);
            setError(returnLocaleText(validationText.date));
        }
    }, [value, check]);
    return (
        <>
            <Box
                sx={{
                    width: props.fullWidth ? "100%" : { xs: "100%", md: "49%" },
                    display: "flex",
                    flexDirection: props.fullWidth
                        ? { xs: "column", md: "row" }
                        : "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: props.fullWidth
                            ? { xs: "100%", md: "50%" }
                            : "100%",
                    }}
                >
                    <Typography variant="h6">
                        {returnLocaleText(props.title)}
                        {
                            //if last letter is a question mark, don't add another
                            returnLocaleText(props.title).slice(-1) === "?"
                                ? ""
                                : ":"
                        }
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: "2rem",
                        justifyContent: "space-around",
                        width: props.fullWidth
                            ? { xs: "100%", md: "49%" }
                            : "100%",
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateField
                            sx={{ width: "100%" }}
                            label={returnLocaleText(dateLabel)}
                            value={value}
                            helperText={error}
                            onChange={(newValue: Dayjs | null) => {
                                setValue(newValue);
                            }}
                            onBlur={() => {
                                setCheck(true);
                            }}
                            slotProps={{
                                textField: {
                                    helperText: error.length > 0 ? error : null,
                                    error: error.length > 0,
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Box>
            </Box>
        </>
    );
}
