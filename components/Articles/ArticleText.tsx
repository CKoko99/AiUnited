import { Box, Typography } from "@mui/material";
import { returnLocaleText } from "../locale/LocaleSwitcher";
import { marked } from "marked";
import { CustomFonts } from "providers/theme";
import Image from "next/image";
import CTAText from "../PrefilledCTA/CTAText";
import CTAPicWText from "../PrefilledCTA/CTAPicWText";
import PATHCONSTANTS from "constants/sitemap";

function richTextReducer(rawRichText) {
    const renderer = new marked.Renderer();

    // Override the link renderer to add a custom style
    renderer.link = (href, title, text) => {
        // Modify the style attribute as needed
        const style = 'color: #0070f3; text-decoration: underline;';
        return `<a href="${href}" title="${title || ''}" style="${style}">${text}</a>`;
    };

    const parsedRichText = marked(rawRichText, { renderer });
    return parsedRichText;
}

export default function (props) {
    console.log(props)
    let text = returnLocaleText(props.text)
    let ImageUrl = props.Image.url ? `${props.Image.url}` : "/"
    // console.log(props)
    return <>
        <Box
            sx={{
                maxWidth: 804,
                padding: "0rem 2rem ",
            }}
        >
            {props.Image.url ? <Box sx={{
                position: "relative",
                minWidth: "15rem",
                minHeight: { xs: "15rem", sm: "22rem" },
                maxWidth: "90vw", //maxHeight: "100%",
                margin: "auto",
            }}>
                <Image src={ImageUrl} fill style={{
                    objectFit: "contain", padding: "1rem",
                }}
                    alt={"image"}
                />
            </Box> : <>      </>}
            <Typography
                fontFamily={CustomFonts.Poppins}
                component="div" // Add the 'component' property with a value of "div"
                dangerouslySetInnerHTML={{
                    __html: richTextReducer(text) as string // Cast the value to string
                }}
            />
            {props.CTA1 && <CTAText category={props.category} />}
            {props.CTA2 && <CTAPicWText article category={props.category} />}
        </Box>
    </>
}