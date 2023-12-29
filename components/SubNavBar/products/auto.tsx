import SubNavBar from "../SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";

const SubNavBarContent = {
    shortTitle: {
        en: "Learn More About Auto Insurance",
        es: "Aprende más sobre el seguro de auto"
    },
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.AUTO.INDEX,
            text: { en: "Auto Insurance", es: "Seguro de Auto" }
        },
        {
            text: { en: "Coverage Details", es: "Detalles de Cobertura" },
            link: PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE
        },
        {
            text: { en: "Affordable Coverage", es: "Cobertura Asequible" },
            link: PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE
        },
        {
            text: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
            link: PATHCONSTANTS.PRODUCTS.AUTO.FAQ
        }
    ]
}
export default function AutoSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}