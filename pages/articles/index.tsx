import ArticlesShowcase from "@/components/Articles/ArticlesShowcase";
import PopularArtices from "@/components/Articles/PopularArtices";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import ArticlesBanner from "@/public/assets/images/articles/banner.png"
import HeadComponent from "@/components/Head";
import { useRouter } from "next/router";

const headContent = {
    title: "Ai United Insurance - Articles",
    metaData: "We provide valuable insights, tips, and expert advice to help you navigate the complex world of insurance and make choices that align with your unique needs.",
}

const bannerContent = {
    img: {
        src: ArticlesBanner,
        alt: "articles-banner"
    },
    title: {
        en: 'Beyond the Basics: Navigating the Insurance Maze with Expert Advice',
        es: 'Más allá de lo básico: navegando por el laberinto de los seguros con consejos de expertos'
    }
}
const contentSection2 = {
    title: {
        en: "Discover More Articles",
        es: "Descubre Más Artículos"
    },
    subtitle: {
        en: `We provide valuable insights, tips, and expert advice to help you navigate the complex world of insurance and make choices that align with your unique needs.`,
        es: `Brindamos información valiosa, consejos y asesoramiento experto para ayudarlo a navegar por el complejo mundo de los seguros y tomar decisiones que se alineen con sus necesidades únicas.`
    }

}

export async function getServerSideProps(context) {
    try {

        const category = context.query.category || 'All Categories'
        const page = context.query.page || 1

        const res = await fetch(`${process.env.BACKEND}/articles?category=${category}&page=${page}`)
        const data = await res.json()

        /*
            let tempData = data.data
            let articles = []
            for (let j = 0; j < data.data.length; j++) {
                for (let i = 0; i < 4; i++) {
                    articles.push(tempData[j] as never);
                }
            }
            data.data = articles
            */

        const popularArticles = data.data.filter((article) => article.attributes.PopularRank > 0)
        popularArticles.sort((b, a) => a.attributes.PopularRank - b.attributes.PopularRank)
        return {
            props: {
                popularArticles: popularArticles,
                allArticles: data.data, // This passes the fetched data as a prop to your component
                total: data.total
            },
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                popularArticles: [],
                allArticles: [], // This passes the fetched data as a prop to your component
            },
        }
    }
}

export default function (props) {
    let articlesList = props.allArticles
    //check for search parameter page
    const router = useRouter()
    let { page } = router.query

    if (page === undefined) {
        page = "1"
    }
    const pageInt = parseInt(page as string)
    // if page = 1 then show the first 9 articles
    // if page = 2 then show the next 9 articles

    const shownArticles = articlesList.slice((pageInt - 1) * 12, pageInt * 12)

    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner {...bannerContent} />
        <hr />
        <PopularArtices articles={props.popularArticles} />
        <TextSection {...contentSection2} />
        <ArticlesShowcase articles={articlesList}
            currentPage={page} shownArticles={shownArticles}
            totalPages={Math.ceil(props.total / 12)}
        />
    </>
}