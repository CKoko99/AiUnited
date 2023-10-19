import { Box, Typography } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { CustomFonts } from "../../../providers/theme";
import Image from "next/image";
interface NumbersSectionProps {
    title: string;
    menuContent: {
        beforeNumber: string;
        beforeNumberGap: boolean;
        number: number;
        afterNumber: string;
        afterNumberGap: boolean;
        body: string;
    }[];
}
interface SectionItemProps {
    beforeNumber: string;
    beforeNumberGap: boolean;
    number: number;
    afterNumber: string;
    afterNumberGap: boolean;
    body: string;
}
//forward ref
function returnRandomTime(number) {
    if (number < 5) return Math.floor(Math.random() * 1000) + 500;
    return Math.floor(Math.random() * 2000) + 1000;
}

const SectionItem = forwardRef((props: SectionItemProps, ref) => {
    const [displayedNumber, setDisplayedNumber] = useState(0);

    //end time will be a random number between 1 and 5 seconds
    const randomTime = Math.floor(Math.random() * 3000) + 1000;
    const [endTime, setEndTime] = useState(1);

    useEffect(() => {
        setEndTime(returnRandomTime(props.number));
    }, []);
    useEffect(() => {
        if (endTime < 100) {
            return
        }
        let startTime;
        let animationFrame;

        const updateNumber = (timestamp) => {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = (timestamp - startTime) / endTime; // 5000ms (5 seconds)
            const nextNumber = Math.min(props.number, Math.floor(props.number * progress));
            setDisplayedNumber(nextNumber);

            if (nextNumber < props.number) {
                animationFrame = requestAnimationFrame(updateNumber);
            }
        };

        if (props.number > 0) {
            animationFrame = requestAnimationFrame(updateNumber);
        }

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [props.number, endTime]);

    return <>
        <Box
            sx={{
                backgroundColor: "white",
                padding: { xs: "1.5rem", md: "1.4rem 1rem" }, borderRadius: "1rem",
                display: "flex", alignItems: "center",
                gap: "1rem", width: "fit-content", margin: "auto",

            }}
        >
            <Box
                sx={{ position: "relative", minHeight: "6rem", minWidth: "5rem" }}
            >
                <Image fill style={{ objectFit: "contain" }} src={props.img.src} alt={props.img.alt} />
            </Box>
            <Box
                sx={{
                    display: "flex", flexDirection: "column", alignItems: "flex-start",
                }}
                ref={ref}
            >
                <Box
                    sx={{
                        display: "flex", flexDirection: "row",
                        fontFamily: CustomFonts.Gustavo,
                        color: "primary.main"
                    }}
                >
                    <Typography variant="h4"
                        fontWeight={"500"} sx={{
                            fontFamily: CustomFonts.Gustavo,
                            marginRight: props.beforeNumberGap ? ".3rem" : "0"

                        }}
                    >{props.beforeNumber}</Typography>
                    <Typography sx={{
                        fontWeight: "500", fontFamily: CustomFonts.Gustavo

                    }} variant="h4">{displayedNumber}</Typography>
                    <Typography sx={{
                        fontWeight: "500", fontFamily: CustomFonts.Gustavo,
                        marginLeft: props.afterNumberGap ? ".3rem" : "0",

                    }} fontWeight={"500"} variant="h4"
                    >{props.afterNumber}</Typography>
                </Box>
                <Typography textAlign={"left"} sx={{ whiteSpace: "nowrap", }} variant="body1">{props.body}</Typography>
            </Box >
        </Box >

    </>
}
)
export default function NumbersSection(props) {

    return (<>
        <Box
            sx={{
                padding: "2rem 0", textAlign: "center",
                height: "fit-content",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    backgroundColor: "primary.main",
                    minWidth: "100%",
                    minHeight: "100%",
                    top: 0, left: 0,
                    zIndex: -1,
                    opacity: .4,
                }}
            >
            </Box>
            <Typography variant="h2" gutterBottom fontWeight={800} fontFamily={CustomFonts.Gustavo}>{props.title}</Typography>
            <Box
                sx={{
                    display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center",
                    justifyContent: "space-around",
                    margin: "1rem auto", gap: { xs: "3rem", md: "" },
                    width: {
                        md: "95%", lg: "75%", xl: "75%"
                    },
                }}
            >
                {props.menuContent.map((item, index) => {
                    return <SectionItem key={index} {...item} />
                }
                )}
            </Box>
        </Box >

    </>)
}