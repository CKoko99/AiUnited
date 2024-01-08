import ArticlesShowcase from "@/components/Articles/ArticlesShowcase";
import PopularArtices from "@/components/Articles/PopularArtices";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import ArticlesBanner from "@/public/assets/images/articles/banner.png"
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
        const res = await fetch(`${process.env.BACKEND}/articles/`,)
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

    return <>
        <HorizontalBanner {...bannerContent} />
        <hr />
        <PopularArtices articles={props.popularArticles} />
        <TextSection {...contentSection2} />
        <ArticlesShowcase articles={props.allArticles} />
    </>
}