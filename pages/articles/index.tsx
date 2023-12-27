import ArticlesShowcase from "@/components/Articles/ArticlesShowcase";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import ArticlesBanner from "@/public/assets/images/articles/banner.png"
const bannerContent = {
    img: {
        src: ArticlesBanner,
        alt: "articles-banner"
    },
    title: {
        en: 'Beyond the Basics: Navigating the Insurance Maze with Expert Advice'
    }
}
const contentSection1 = {
    title: {
        en: "Popular Articles",
        es: "Artículos Populares"
    },
    subtitle: {
        en: `Discover In-Depth Knowledge and Insights with Our Highly-Requested and Widely-Read Selection of Popular Articles on Insurance Strategies, Tips, and Comprehensive Coverage Solutions.`,
        es: `Descubra el conocimiento y las ideas en profundidad con nuestra selección de artículos populares sobre estrategias de seguros, consejos y soluciones de cobertura integral, altamente solicitados y ampliamente leídos.`
    },
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

    const res = await fetch(`${process.env.BACKEND}/articles/`,)
    const data = await res.json()

    let tempData = data.data
    let articles = []
    for (let i = 0; i < 10; i++) {
        articles.push(tempData[0] as never);
    }
    data.data = articles
    return {
        props: {
            data: data.data, // This passes the fetched data as a prop to your component
        },
    }
}

export default function (props) {
    console.log(props.data)
    return <>
        <HorizontalBanner {...bannerContent} />
        <hr />
        <TextSection {...contentSection1} />
        <TextSection {...contentSection2} />
        <ArticlesShowcase articles={props.data} />
    </>
}