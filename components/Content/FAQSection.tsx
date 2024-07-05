import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    List,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { returnLocaleText } from "../locale/LocaleSwitcher";

function ContentItem(props: {
    title: { [lang: string]: string };
    body: { [lang: string]: string };
}) {
    return (
        <>
            <Accordion
                sx={{
                    minWidth: { xs: "90%", md: "47.5%" }, //padding: "rem",
                    border: "1px solid #cacaca",
                    alignSelf: { xs: "", md: "baseline" },
                    minHeight: {
                        md: "8rem",
                        lg: "6rem",
                    },
                    flex: "1",
                    // margin: "-16px 0 0 !important",
                }}
                TransitionProps={{ style: { margin: "-4px 0" } }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon fontWeight={"bold"} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={
                        {
                            //       display: "flex", alignItems: "center", justifyContent: "center",
                        }
                    }
                >
                    <Typography variant="h6" fontWeight={700}>
                        {returnLocaleText(props.title)}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ margin: "auto" }}>
                    <Typography variant="body1">
                        {returnLocaleText(props.body)}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default function (props: {
    content: {
        title: { [lang: string]: string };
        body: { [lang: string]: string };
    }[];
}) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "space-around" },
                    gap: "1.5rem",
                    flexDirection: { xs: "column", md: "row" },
                    width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                    margin: "auto",
                    alignItems: "center",
                    padding: "1rem 0",
                }}
            >
                {props.content.map((item, index) => {
                    return <ContentItem key={index} {...item} />;
                })}
            </Box>
        </>
    );
}
