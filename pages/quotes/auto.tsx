import JotFormEmbed from 'react-jotform-embed';
import AutoQuoteHero from '../../components/Content/Hero/AutoQuoteHero';
import HeroImg from "../../public/assets/images/quotes/auto/Hero.png";
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

export default function () {
    return <>
        <AutoQuoteHero {...heroContent} />
    </>
}