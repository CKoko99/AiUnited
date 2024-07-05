import Article from "@/components/Articles/Article";
import HeadComponent from "@/components/Head";
import PATHCONSTANTS from "constants/sitemap";
import { GetServerSidePropsContext } from "next";
import {
    ArticleContentSectionInterface,
    ArticleDetailsInterface,
    ArticleInterface,
    GetAllArticles,
    GetArticle,
} from "api/GetArticles";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const id = String(context.params.id);
        const articleResponse = await GetArticle(
            id,
            context.req.headers.referer,
        );
        const { articleData, articleContent } = articleResponse.props;
        const allArticlesResponse = await GetAllArticles();
        //filter out the current article from the list of all articles
        allArticlesResponse.props.data = allArticlesResponse.props.data.filter(
            (item) => {
                return item.id !== articleData.id;
            },
        );
        //console.log(allArticlesResponse.props.data)
        //filter out all articles that are not in the same category
        const relatedArticles = allArticlesResponse.props.data.filter(
            (item) => {
                return (
                    item.attributes.Category === articleData.attributes.Category
                );
            },
        );
        //console.log(relatedArticles)
        return {
            props: {
                articleData: articleData,
                articleContent: articleContent,
                relatedArticles: relatedArticles,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            redirect: {
                destination: PATHCONSTANTS.ARTICLES.INDEX,
                permanent: false,
            },
        };
    }
}

export default function ({
    articleData,
    articleContent,
    relatedArticles,
}: {
    articleData: ArticleDetailsInterface;
    articleContent: ArticleContentSectionInterface[];
    relatedArticles: ArticleInterface[];
}) {
    // console.log(props.articleData.data.attributes.ArticleContent)

    //   console.log(articleData.attributes.updatedAt)
    //2024-01-03T18:55:54.569Z
    const updatedDate = new Date(articleData.attributes.updatedAt);
    const date = {
        month: updatedDate.getMonth(),
        day: updatedDate.getDate(),
        year: updatedDate.getFullYear(),
    };
    const articleTitle = {
        title: articleData.attributes.Title,
        summary: articleData.attributes.Summary,
    };

    return (
        <>
            <HeadComponent
                title={articleData.attributes.Title.en}
                metaData={articleData.attributes.Summary.en}
            />
            <Article
                articleTitle={articleTitle}
                date={date}
                category={articleData.attributes.Category}
                articleContent={articleContent}
                relatedArticles={relatedArticles}
                thumbnail={articleData.attributes.Thumbnail.data.attributes.url}
            />
        </>
    );
}
