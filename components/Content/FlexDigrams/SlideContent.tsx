import { Box, Typography } from "@mui/material";
import { CustomFonts } from "../../../providers/theme";
import Image, { StaticImageData } from "next/image";
import React, { forwardRef, useEffect, useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SwipeableViews from 'react-swipeable-views-react-18-fix';



interface ContentSliderProps {
    menuContent: {
        title?: string;
        body?: string;
        img: {
            src: StaticImageData;
            alt: string;
        }
    }[],
    cardType?: string;
    contrast?: boolean;
}
const styles = {
    root: {
        textAlign: "center",
        padding: "2rem 0"
    },
    NonSlideContentContainer: {
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        width: { lg: "85%" },
        margin: "0 auto",
        justifyContent: "space-around",
        //    gap: "2rem",
    },
    SlideContentContainer: {
        display: { xs: "flex", md: "none" },
        flexDirection: "row",
        width: "85%",
        margin: "0 auto",
        justifyContent: { xs: "center", md: "space-between", }
    },
    contentItem: {
        maxWidth: { md: "25vw" },
        width: "100%",
    },
    contentImage: {
        height: "5rem",
        position: "relative",
        transition: 'transform 0.3s',

    },
    contentImageHover: {
        //make the image move up 10px
        transform: 'translateY(-1rem)',
    },
    contentTitle: {
        fontFamily: CustomFonts.Gustavo,
        color: "primary.main",
    },
}
function NonSlideContentItem(props) {
    const [isHovered, setIsHovered] = useState(false);

    return <Box
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
        sx={{ ...styles.contentItem }}
    >
        <Box
            sx={
                isHovered ?
                    { ...styles.contentImage, ...styles.contentImageHover } :
                    { ...styles.contentImage }
            }
        >
            <Image fill style={{ objectFit: "contain" }} src={props.img.src} alt={props.img.alt} />
        </Box>
        <Typography variant="h4"
            sx={{
                ...styles.contentTitle,
            }}
        >
            {props.title}
        </Typography>
        <Typography variant="h6">
            {props.body}
        </Typography>
    </Box >

}


interface SectionItemProps {
    beforeNumber: string;
    beforeNumberGap: boolean;
    number: number;
    afterNumber: string;
    afterNumberGap: boolean;
    body: string;
    img: {
        src: StaticImageData;
        alt: string;
    }

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
                padding: "1.4rem 1rem", borderRadius: "1rem",
                display: "flex", alignItems: "center",
                gap: ".75rem", width: "fit-content", margin: "auto"
            }}
        >
            <Box
                sx={{ position: "relative", minHeight: "5rem", minWidth: "4rem" }}
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
                            , fontSize: { xs: "1.7rem", md: "1.5625rem" }
                        }}
                    >{props.beforeNumber}</Typography>
                    <Typography sx={{
                        fontWeight: "500", fontFamily: CustomFonts.Gustavo

                        , fontSize: { xs: "1.7rem", md: "1.5625rem" }
                    }} variant="h4">{displayedNumber}</Typography>
                    <Typography sx={{
                        fontWeight: "500", fontFamily: CustomFonts.Gustavo,
                        marginLeft: props.afterNumberGap ? ".3rem" : "0",
                        fontSize: { xs: "1.7rem", md: "1.5625rem" }
                    }} fontWeight={"500"} variant="h4"
                    >{props.afterNumber}</Typography>
                </Box>
                <Typography textAlign={"left"} sx={{ whiteSpace: "nowrap", fontSize: { xs: "1.3rem", sm: "1rem" } }} variant="body1">{props.body}</Typography>
            </Box >
        </Box >

    </>
}
)

function NonSlideContent(props) {
    return <>
        {
            props.menuContent.map((item, index) => {
                return <>
                    {props.cardType == "counter" ? <>
                        <SectionItem key={index} {...item} />
                    </> : <NonSlideContentItem key={index} {...item} />}</>
            }
            )
        }
    </>
}
function SlideContent(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);


    function handleChangeIndex(index, stopAutoPlay = false) {
        if (index >= props.menuContent.length) {
            setCurrentSlide(0)
        } else if (index < 0) {
            setCurrentSlide(props.menuContent.length - 1)
        } else {
            setCurrentSlide(index)
        }
        if (stopAutoPlay) {
            setAutoPlay(false)
        }
    }

    //call the function to change the slide every 5 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (autoPlay) {
                handleChangeIndex(currentSlide + 1);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [currentSlide, autoPlay]);
    return <>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <Box sx={{ width: "85%", margin: "auto" }}>
                <SwipeableViews index={currentSlide} onChangeIndex={handleChangeIndex} slideStyle={{}} enableMouseEvents>
                    {
                        props.menuContent.map((item, index) => {
                            console.log(props.cardType == "counter")
                            return <>

                                <Box
                                    sx={{ ...styles.contentItem }}
                                    key={index}
                                >
                                    <Box
                                        sx={{
                                            ...styles.contentImage,
                                        }}
                                    >
                                        <Image fill style={{ objectFit: "contain" }} src={item.img.src} alt={item.img.alt} />
                                    </Box>
                                    <Typography variant="h4"
                                        sx={{
                                            ...styles.contentTitle,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h6">
                                        {item.body}
                                    </Typography>
                                </Box>
                            </>
                        })
                    }
                </SwipeableViews>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                margin: "1rem"
            }}>
                <ArrowBackIosIcon onClick={() => {
                    handleChangeIndex(currentSlide - 1)
                }} sx={{ fontSize: "2rem", cursor: "pointer", marginRight: "-1rem" }} />
                {
                    props.menuContent.map((item, index) => {
                        if (index === currentSlide) {
                            return <FiberManualRecordIcon key={index} onClick={
                                () => { handleChangeIndex(index, true) }
                            } sx={{ fontSize: "1.5rem", cursor: "pointer" }} />
                        } else {
                            return <TripOriginIcon
                                key={index}
                                onClick={
                                    () => { handleChangeIndex(index, true) }
                                } sx={{ fontSize: "1.25rem", cursor: "pointer" }} />
                        }
                    })
                }
                <ArrowForwardIosIcon onClick={() => {
                    handleChangeIndex(currentSlide + 1, true)
                }
                } sx={{ fontSize: "2rem", cursor: "pointer", marginLeft: "-.7rem" }} />
            </Box>
        </Box>
    </>
}

export default function ContentSlider(props: ContentSliderProps) {
    return (<>
        <Box sx={{
            ...styles.root,
            backgroundColor: props.contrast ? "primary.light" : "background.default",
        }}>
            <Box
                sx={{
                    ...styles.NonSlideContentContainer,
                }}
            >
                <NonSlideContent {...props} menuContent={props.menuContent} />
            </Box>
            <Box
                sx={{
                    ...styles.SlideContentContainer,
                }}
            >
                <SlideContent {...props} menuContent={props.menuContent} />
            </Box>
        </Box>
    </>)
}