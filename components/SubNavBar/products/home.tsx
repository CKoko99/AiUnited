import SubNavBar from "../SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";

const SubNavBarContent = {
    shortTitle: {
        en: "Learn More About Home Insurance",
        es: "Aprende más sobre el seguro de hogar"
    },
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.HOME.INDEX,
            text: { en: "Home Insurance", es: "Seguro de Casa" }
        },
        {
            text: { en: "Coverage Details", es: "Detalles de Cobertura" },
            link: PATHCONSTANTS.PRODUCTS.HOME.COVERAGE
        },
        {
            text: { en: "Affordable Coverage", es: "Cobertura Asequible" },
            link: PATHCONSTANTS.PRODUCTS.HOME.AFFORDABLE
        },
        {
            text: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
            link: PATHCONSTANTS.PRODUCTS.HOME.FAQ
        }
    ]
}
export default function AutoSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}