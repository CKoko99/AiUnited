import { Box } from "@mui/material";
import ArticleTitle from "./ArticleTitle";
import ArticleText from "./ArticleText";
import RelatedArticles from "./RelatedArticles";
import ArticleImage from "./ArticleImage";

export default function (props) {
    console.log(props)
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
            >
                {props.articleContent && props.articleContent.map((item, index) => {
                    return <ArticleText category={props.category} key={index} {...item} />
                })}
            </Box>
            <RelatedArticles />
        </Box>
    </>
}