import { Box } from "@mui/material";
import ArticleTitle from "./ArticleTitle";
import ArticleText from "./ArticleText";
import RelatedArticles from "./RelatedArticles";
import ArticleImage from "./ArticleImage";
import Image from "next/image";

export default function (props) {
    //  console.log(props)
    return <>
        <ArticleTitle {...props.articleTitle}
            date={props.date}
        />
        <hr />
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                //display: "block",
                maxWidth: "100vw"
            }}
        >
            <Box
                sx={{
                    maxWidth: 854,
                    padding: "0rem 2rem ",
                }}
            >
                {props.thumbnail ? <Box sx={{
                    position: "relative",
                    minWidth: "15rem",
                    minHeight: { xs: "15rem", sm: "22rem" },
                    maxWidth: "90vw", //maxHeight: "100%",
                    margin: "auto",
                }}>
                    <Image src={props.thumbnail} fill style={{
                        objectFit: "contain", padding: "1rem",
                    }}
                        alt={"image"}
                    />
                </Box> : <>      </>}

                {props.articleContent && props.articleContent.map((item, index) => {
                    return <ArticleText category={props.category} key={index} {...item} />
                })}
            </Box>
            <RelatedArticles articles={props.relatedArticles} />
        </Box>
    </>
}