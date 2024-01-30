import SubNavBar from "../SubNavBar";
import PATHCONSTANTS from "../../../constants/sitemap";

const SubNavBarContent = {
    shortTitle: {
        en: "Learn More About Motorcycle Insurance",
        es: "Aprende más sobre el seguro de motocicleta"
    },
    content: [
        {
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.INDEX,
            text: { en: "Motorcycle Insurance", es: "Seguro de Motocicleta" }
        },
        {
            text: { en: "Coverage Details", es: "Detalles de Cobertura" },
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.COVERAGE
        },
        {
            text: { en: "Frequently Asked Questions", es: "Preguntas Frecuentes" },
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.FAQ
        }
    ]
}
export default function MotorcycleSubNav() {
    return (<>
        <SubNavBar {...SubNavBarContent} />
    </>);
}