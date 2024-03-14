import Article from "@/components/Articles/Article"
import ArticleTitle from "@/components/Articles/ArticleTitle"
import HeadComponent from "@/components/Head"
import { Box, Typography } from "@mui/material"
import PATHCONSTANTS from "constants/sitemap"
import Link from "next/link"
import { GetAllArticles, GetArticle } from "pages/api/GetArticles"


export async function getServerSideProps(context) {
    try {
        const { id } = context.params
        const articleResponse = await GetArticle(id, context.req.headers.referer)
        const allArticlesResponse = await GetAllArticles()
        const { articleData, articleContent } = articleResponse.props
        //filter out the current article from the list of all articles
        allArticlesResponse.props.data = allArticlesResponse.props.data.filter((item) => {
            return item.id !== articleData.id
        })
        //console.log(allArticlesResponse.props.data)
        //filter out all articles that are not in the same category
        const relatedArticles = allArticlesResponse.props.data.filter((item) => {
            return item.attributes.Category === articleData.attributes.Category
        })
        //console.log(relatedArticles)
        return {
            props: {
                articleData: articleData,
                articleContent: articleContent,
                relatedArticles: relatedArticles
            }
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                articleData: {},
                articleContent: [],
                relatedArticles: []
            }
        }
    }
}


export default function (props) {
    const { articleData, articleContent, relatedArticles, updatedAt } = props
    // console.log(props.articleData.data.attributes.ArticleContent)
    const ArticleNotFound = articleData.attributes === undefined || articleContent.length < 0
    //   console.log(articleData.attributes.updatedAt)
    //2024-01-03T18:55:54.569Z
    const updatedDate = new Date(articleData.attributes.updatedAt)
    const date = {
        month: updatedDate.getMonth(),
        day: updatedDate.getDate(),
        year: updatedDate.getFullYear()
    }
    const articleTitle = {
        title: ArticleNotFound ? {} : articleData.attributes.Title,
        summary: ArticleNotFound ? {} : articleData.attributes.Summary,
    }

    return <>
        {ArticleNotFound ?
            <Box
                sx={{ textAlign: "center" }}
            >
                <Typography variant="h4">
                    Article Not Found
                </Typography>
                <Link href={PATHCONSTANTS.ARTICLES.INDEX}>
                    <Typography variant="h6"
                        sx={{ color: "blue", cursor: "pointer" }}
                    >
                        Return to Articles
                    </Typography>
                </Link>
            </Box>
            : <>
                <HeadComponent
                    title={articleData.attributes.Title.en} metaData={articleData.attributes.Summary.en}
                />
                <Article articleTitle={articleTitle} summary={articleData.attributes.Summary}
                    date={date} category={articleData.attributes.Category}
                    articleContent={articleContent} relatedArticles={relatedArticles}
                    thumbnail={articleData.attributes.Thumbnail.data.attributes.url}
                />
            </>
        }
    </>
}