import SubNavBar from "../SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";

const SubNavBarContent = {
    shortTitle: {
        en: "Learn More About SR-22 Insurance",
        es: "Aprende más sobre el seguro SR-22"
    },
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.SR22.INDEX,
            text: { en: "SR-22 Insurance", es: "Seguro SR-22" }
        },
        {
            text: { en: "Coverage Details", es: "Detalles de Cobertura" },
            link: PATHCONSTANTS.PRODUCTS.SR22.COVERAGE
        },
        {
            text: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
            link: PATHCONSTANTS.PRODUCTS.SR22.FAQ
        }
    ]
}
export default function SR22SubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}