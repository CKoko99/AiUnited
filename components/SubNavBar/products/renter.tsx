import SubNavBar from "../SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";

const SubNavBarContent = {
    shortTitle: {
        en: "Learn More About Renter Insurance",
        es: "Aprende más sobre el seguro de inquilino"
    },
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.RENTER.INDEX,
            text: { en: "Renter Insurance", es: "Seguro de Inquilino" }
        },
        {
            text: { en: "Coverage Details", es: "Detalles de Cobertura" },
            link: PATHCONSTANTS.PRODUCTS.RENTER.COVERAGE
        },
        {
            text: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
            link: PATHCONSTANTS.PRODUCTS.RENTER.FAQ
        }
    ]
}
export default function RenterSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}