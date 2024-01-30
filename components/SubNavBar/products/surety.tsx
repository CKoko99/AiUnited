import SubNavBar from "../SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";

const SubNavBarContent = {
    shortTitle: {
        en: "Learn More About Surety Bonds",
        es: "Aprende más sobre las fianzas"
    },
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.SURETY.INDEX,
            text: { en: "Surety Bonds", es: "Fianzas" }
        },
        {
            text: { en: "Coverage Details", es: "Detalles de Cobertura" },
            link: PATHCONSTANTS.PRODUCTS.SURETY.COVERAGE
        },
        {
            text: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
            link: PATHCONSTANTS.PRODUCTS.SURETY.FAQ
        }
    ]
}

export default function SuretySubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}