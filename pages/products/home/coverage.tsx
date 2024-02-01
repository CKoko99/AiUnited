import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner"
import TextSection from "@/components/Content/TextSection"
import HeadComponent from "@/components/Head"
import PATHCONSTANTS from "constants/sitemap"
import HomeSubNav from "@/components/SubNavBar/products/home";
import HomeImg1 from "public/assets/images/products/home/home1.png"
import HomeImg2 from "public/assets/images/products/home/home2.png"
import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import CenterImage from "@/components/Content/CenterImage";
import HomeImg3 from "public/assets/images/products/home/furniture1.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg1 from "public/assets/images/products/discount.png";
import CardImg2 from "public/assets/images/products/home/livingroom.png";
import Cards2 from "@/components/Content/Cards/Cards2";
const headContent = {
    title: 'Ai United Home Insurance Coverage Guide',
    metaData: `Dive into the intricacies of home insurance coverage with our comprehensive overview. Explore detailed policies, including property, liability, and personal belongings coverage.`
}

const pageLinks = {
    dwelling: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Dwelling`, id: "Dwelling"
    },
    otherStructures: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Other-Structures`, id: "Other-Structures"
    },
    personalProperty: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Personal-Property`, id: "Personal-Property"
    },
    lossOfUse: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Loss-of-Use`, id: "Loss-of-Use"
    },
    liability: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Liability`, id: "Liability"
    },
}
const verticalBannerContent = {
    title: {
        en: "Types of Home Insurance Coverage Demystified",
        es: "Tipos de cobertura de seguro de hogar desmitificados"
    },
    img: {
        src: HomeImg1,
        alt: "Home"
    }
}

const contentSection1 = {
    title: {
        en: "Home Coverages Explained",
        es: "Coberturas de hogar explicadas"
    },
    subtitle: {
        en: `Welcome to our guide on home insurance coverage. We understand the importance of safeguarding your home and belongings, and that’s why we’re here to provide you with a comprehensive overview of the different aspects of home insurance.`,
        es: `Bienvenido a nuestra guía sobre cobertura de seguro de hogar. Entendemos la importancia de proteger su hogar y sus pertenencias, y por eso estamos aquí para brindarle una descripción general de los diferentes aspectos del seguro de hogar.`
    },
    alignSubtitle: "left",
}

const contentSection2 = {
    title: { en: "Different Types of Home Insurance Coverage", es: "Diferentes tipos de cobertura de seguro de hogar" },
    body: {
        en: [
            `1. LINK: [Dwelling Coverage](${pageLinks.dwelling.link})`,
            `2. LINK: [Other Structures Coverage](${pageLinks.otherStructures.link})`,
            `3. LINK: [Personal Property Coverage](${pageLinks.personalProperty.link})`,
            `4. LINK: [Loss of Use Coverage](${pageLinks.lossOfUse.link})`,
            `5. LINK: [Liability Coverage](${pageLinks.liability.link})`,
        ],
        es: [
            `1. LINK: [Cobertura de vivienda](${pageLinks.dwelling.link})`,
            `2. LINK: [Cobertura de otras estructuras](${pageLinks.otherStructures.link})`,
            `3. LINK: [Cobertura de propiedad personal](${pageLinks.personalProperty.link})`,
            `4. LINK: [Cobertura de pérdida de uso](${pageLinks.lossOfUse.link})`,
            `5. LINK: [Cobertura de responsabilidad](${pageLinks.liability.link})`,
        ]
    },
    img: {
        src: HomeImg2,
        alt: "Home Furniture"
    },
    alignBody: "left",
}

const contentSection3 = {
    title: { en: "Dwelling Coverage", es: "Cobertura de vivienda" },
    id: pageLinks.dwelling.id,
    subtitle: {
        en: [
            `Dwelling coverage is the backbone of your home insurance policy, protecting the physical structure of your house. In the unfortunate event of perils like fire, windstorm, or vandalism, this coverage ensures that the cost of repairing or rebuilding your home is taken care of. It extends beyond just the walls; it includes components like the roof, floors, built-in appliances, and more.`,
        ],
        es: [
            `La cobertura de vivienda es la columna vertebral de su póliza de seguro de hogar, protegiendo la estructura física de su casa. En el desafortunado caso de peligros como incendios, tormentas de viento o vandalismo, esta cobertura garantiza que el costo de reparar o reconstruir su hogar esté cubierto. Se extiende más allá de las paredes; incluye componentes como el techo, los pisos, los electrodomésticos incorporados y más.`,
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}
const contentSection4 = {
    title: { en: "Other Structures Coverage", es: "Cobertura de otras estructuras" },
    id: pageLinks.otherStructures.id,
    subtitle: {
        en: [
            `Sometimes, it’s not just your home that needs protection. Other structures coverage steps in to cover damages to structures like detached garages, sheds, or fences on your property. `,
            `This means that if your garage gets damaged in a storm or your fence is knocked down, the repair or replacement costs are covered by this part of your policy.`
        ],
        es: [
            `A veces, no solo su hogar necesita protección. La cobertura de otras estructuras interviene para cubrir los daños a estructuras como garajes separados, cobertizos o cercas en su propiedad.`,
            `Esto significa que si su garaje se daña en una tormenta o su cerca se cae, los costos de reparación o reemplazo están cubiertos por esta parte de su póliza.`
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}
const contentSection5 = {
    title: { en: "Personal Property Coverage", es: "Cobertura de propiedad personal" },
    id: pageLinks.personalProperty.id,
    subtitle: {
        en: [
            `Your home is not just a structure; it’s filled with memories and possessions. Personal property coverage is designed to protect your belongings, including furniture, electronics, clothing, and more. `,
        ],
        es: [
            `Su hogar no es solo una estructura; está lleno de recuerdos y posesiones. La cobertura de propiedad personal está diseñada para proteger sus pertenencias, incluidos muebles, electrónica, ropa y más.`,
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}
const centerImage1 = {
    img: {
        src: HomeImg3,
        alt: "Home Furniture"
    },
    subtitle: {
        en: `Whether it’s theft, fire, or a natural disaster, this coverage ensures that the financial burden of replacing or repairing your personal items is significantly alleviated.`,
        es: `Ya sea que se trate de un robo, un incendio o un desastre natural, esta cobertura garantiza que la carga financiera de reemplazar o reparar sus artículos personales se alivie significativamente.`
    }
}
const contentSection6 = {
    title: { en: "Loss of Use Coverage", es: "Cobertura de pérdida de uso" },
    id: pageLinks.lossOfUse.id,
    subtitle: {
        en: [
            `In the aftermath of a covered event that renders your home uninhabitable, loss of use coverage becomes invaluable. This aspect of your policy helps with the additional living expenses you may incur, such as hotel bills or temporary rentals, while your home is being repaired or rebuilt. It provides a crucial safety net, ensuring that you can maintain your standard of living even in challenging times.`
        ],
        es: [
            `En las secuelas de un evento cubierto que deja su hogar inhabitado, la cobertura de pérdida de uso se vuelve invaluable. Este aspecto de su póliza ayuda con los gastos de vida adicionales que pueda incurrir, como facturas de hotel o alquileres temporales, mientras su hogar está siendo reparado o reconstruido. Proporciona una red de seguridad crucial, asegurando que pueda mantener su nivel de vida incluso en tiempos difíciles.`
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}
const contentSection7 = {
    title: { en: "Liability Coverage", es: "Cobertura de responsabilidad" },
    id: pageLinks.liability.id,
    subtitle: {
        en: [
            `Homeownership comes with responsibilities, and liability coverage is there to protect you in case of accidents that occur on your property. If someone is injured on your premises and you are found legally responsible, this coverage helps cover medical expenses and legal fees. Additionally, it extends beyond your property, offering protection if you accidentally damage someone else’s property or if a family member (including pets) causes harm to others.`
        ],
        es: [
            `Ser propietario de una casa conlleva responsabilidades, y la cobertura de responsabilidad está ahí para protegerlo en caso de accidentes que ocurran en su propiedad. Si alguien resulta herido en su propiedad y se le encuentra legalmente responsable, esta cobertura ayuda a cubrir los gastos médicos y los honorarios legales. Además, se extiende más allá de su propiedad, ofreciendo protección si daña accidentalmente la propiedad de otra persona o si un miembro de la familia (incluidas las mascotas) causa daños a otros.`
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}
const endCardsContent = {
    content: [
        {
            img: {
                src: CardImg2,
                alt: "Living Room"
            },
            title: {
                en: 'Get A Free Home Insurance Quote',
                es: 'Obtenga una cotización gratuita de seguro de casa',
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`
            },
            link: PATHCONSTANTS.QUOTES.HOME.FORM
        },
        {
            img: {
                src: CardImg1,
                alt: "Discounts"
            },
            title: {
                en: 'Explore Affordable Home Coverage',
                es: 'Explore la cobertura de hogar asequible',
            },
            body: {
                en: `See your options for finding affordable coverages.`,
                es: `Vea sus opciones para encontrar coberturas asequibles.`
            },
            link: PATHCONSTANTS.PRODUCTS.HOME.AFFORDABLE
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles"
            },
            title: {
                en: "Explore Home Insurance Articles",
                es: "Explore artículos de seguro de hogar"
            },
            body: {
                en: `Learn more about home insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro de hogar y cómo protegerse.`
            },
            link: PATHCONSTANTS.ARTICLES.INDEX
        },
    ]
}
export default function () {
    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner {...verticalBannerContent} />
        <HomeSubNav />
        <TextSection {...contentSection1} />
        <BorderBoxWithPicture {...contentSection2} />
        <TextSection {...contentSection3} />
        <TextSection {...contentSection4} />
        <TextSection {...contentSection5} />
        <CenterImage {...centerImage1} />
        <TextSection {...contentSection6} />
        <TextSection {...contentSection7} />
        <CTAPicWText category="home" />
        <Cards2 {...endCardsContent} />
    </>
}