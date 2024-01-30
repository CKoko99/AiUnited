import SubNavBar from "../SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";

const SubNavBarContent = {
    shortTitle: {
        en: "Learn More About Mexico Insurance",
        es: "Aprende más sobre el seguro de México"
    },
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.MEXICO.INDEX,
            text: { en: "Mexico Insurance", es: "Seguro de México" }
        },
        {
            text: { en: "Coverage Details", es: "Detalles de Cobertura" },
            link: PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE
        },
        {
            text: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
            link: PATHCONSTANTS.PRODUCTS.MEXICO.FAQ
        }
    ]
}
export default function MexicoSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}