import JotFormEmbed from 'react-jotform-embed';
import AutoQuoteHero from '../../components/Content/Hero/AutoQuoteHero';
import HeroImg from "../../public/assets/images/quotes/auto/Hero.png";
import NumbersSection from '../../components/Content/FlexDigrams/NumbersSection';
import americaImg from '../../public/assets/images/quotes/auto/america.png'
const heroContent = {
    title: "Auto Insurance",
    subtitle: "We’ve partnered with Alinsko to provide quick and easy Auto Insurance coverage",
    image: { src: HeroImg, },
    validation: "zipcode",
    cta: {
        type: "input",
        validation: "numbers",
        placeholder: "Zip Code",
        button: "Get A Quote",
    }
}
const slideData = {
    cardType: "counter",
    contrast: true,
    menuContent: [{
        img: {
            src: americaImg,
            alt: "America"
        },
        number: 30,
        afterNumber: "k+",
        body: "Americans Insured",

    },
    {
        img: {
            src: americaImg,
            alt: "America"
        },
        number: 30,
        afterNumber: "k+",
        body: "Americans Insured",

    },
    {
        img: {
            src: americaImg,
            alt: "America"
        },
        number: 30,
        afterNumber: "k+",
        body: "Americans Insured",
    },]
}
export default function () {
    return <>
        <AutoQuoteHero {...heroContent} />
        <NumbersSection {...slideData} menuContent={slideData.menuContent} />
    </>
}