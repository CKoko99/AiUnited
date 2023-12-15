import { NextPage } from "next";
import Hero from "../../components/Content/Hero/Hero";
import CenterVideo from "../../components/Content/CenterVideo";
import locationImage from '../../public/assets/images/about/index/location.png';
import TextSection from "../../components/Content/TextSection";
import HeadComponent from "../../components/Head";
import ContactAndLocations from "../../components/Content/FlexDigrams/Combo/ContactAndLocations";
import PATHCONSTANTS from "../../constants/sitemap";
import HorizontalText from "../../components/Content/Text/TextWithSubSections";
import ContentSplit from "@/components/Content/ContentSplit";
import VideoBanner from "@/components/Content/Hero/VideoBanner";
const heroContent = {
  title: {
    en: "Ai United Insurance",
    es: "Ai United Insurance",
  },
  subtitle: {
    en: `Insurance you can trust from a company you can depend on.`,
    es: `Seguro en el que puede confiar de una compañía en la que puede confiar.`
  },
  image: {
    src: locationImage,
    alt: "store"
  },
  align: "left" as const,
  opacity: .4
}
const CenterVideoContent = {
  title: {
    en: "Experience peace of mind with Ai United Insurance",
    es: "Experimente la Tranquilidad con Ai United Insurance"
  },
  subtitle: {
    en: `At Ai United Insurance, we pride ourselves on delivering personalized service and comprehensive
     coverage options to our valued customers.`,
    es: `En Ai United Insurance, nos enorgullece brindar un servicio personalizado con opciones de cobertura
      integral a nuestros valiosos clientes. `,
  },
  body: {
    en: `At Ai United Insurance, we pride ourselves on delivering personalized service and comprehensive
     coverage options to our valued customers.`,
    es: `En Ai United Insurance, nos enorgullece brindar un servicio personalizado con opciones de cobertura
      integral a nuestros valiosos clientes. `,
  },
  video: {
    title: "Ai United Insurance",
    video: {
      en: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/About%20Us.mp4?alt=media&token=98ab4a11-4a34-4f2f-a321-f35f9cd5e569",
      es: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/About%20Us%20Spanish.mp4?alt=media&token=7d2b0eea-5085-4512-9192-3b855595d079"
    }
  },
}
const VideoBannerContent = {
  title: {
    en: "Experience Peace of Mind with Ai United Insurance",
    es: "Experimente la Tranquilidad con Ai United Insurance"
  },
  subtitle: {
    en: `At Ai United Insurance, we pride ourselves on delivering personalized service and comprehensive
     coverage options to our valued customers.`,
    es: `En Ai United Insurance, nos enorgullece brindar un servicio personalizado con opciones de cobertura
      integral a nuestros valiosos clientes. `,
  },
  body: {
    en: `At Ai United Insurance, we pride ourselves on delivering personalized service and comprehensive
     coverage options to our valued customers.`,
    es: `En Ai United Insurance, nos enorgullece brindar un servicio personalizado con opciones de cobertura
      integral a nuestros valiosos clientes. `,
  },
  video: {
    en: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/About%20Us.mp4?alt=media&token=98ab4a11-4a34-4f2f-a321-f35f9cd5e569",
    es: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/About%20Us%20Spanish.mp4?alt=media&token=7d2b0eea-5085-4512-9192-3b855595d079"

  },
}
const videoButtons = {
  ctaButtons: [
    {
      text: {
        en: "Give us a call",
        es: "Danos una llamada"
      },
      href: PATHCONSTANTS.PHONE
    },
    {
      text: {
        en: "Find a Location",
        es: "Encuentra una ubicación"
      },
      href: PATHCONSTANTS.LOCATIONS.INDEX
    }
  ]
}
const textSectionContent = {
  /*title: {
    en: `Our unwavering commitment is to deliver dependable insurance solutions that Texans can always rely on.`,
    es: `Nuestro compromiso inquebrantable es brindar soluciones de seguros confiables en las que los tejanos siempre puedan confiar.`
  },*/
  title: {
    en: `Celebrating Our Journey: Over 15 Years of Providing Trusted Insurance Coverage in Texas`,
    es: `Celebrando Nuestro Viaje: Más de 15 Años Brindando Cobertura de Seguros Confiable en Texas`
  },
  subtitle: {
    en: `At Ai United Insurance, we have a rich history of growth and dedication to becoming the most trusted 
    insurance provider in Texas. Our Journey has been fueled by a commitment to providing reliable 
    coverage and exceptional customer service to our clients.`,
    es: `En Ai United Insurance, tenemos una increíble historia de crecimiento y dedicación para 
    convertirnos en el proveedor de seguros más confiable de Texas. Nuestro viaje ha sido impulsado 
    por un compromiso de brindar cobertura fiable y un servicio al cliente excepcional a nuestros clientes.`
  },
  miniSections: [
    {
      title: {
        en: "98%",
        es: "98%",
      },
      body: {
        en: "of our customers renew their policies with us.",
        es: "de nuestros clientes renuevan sus pólizas con nosotros."
      }
    },
    {
      title: {
        en: "95%",
        es: "95%",
      },
      body: {
        en: "of our customers recommend us to friends and family.",
        es: "de nuestros clientes nos recomiendan a amigos y familiares."
      }
    },
  ],
  textAlign: "center"
}
const InsuranceProductsContent = {
  title: {
    en: "Discover Our Insurance Products",
    es: "Descubra nuestros productos de seguro"
  },
  subtitle: {
    en: "Explore our range of insurance products and find the coverage that is right for you.",
    es: "Explore nuestra gama de productos de seguro y encuentre la cobertura que sea adecuada para usted."
  },
  ctaButtons: [
    {
      text: {
        en: "Our Products",
        es: "Nuestros productos"
      },
      href: PATHCONSTANTS.PRODUCTS.INDEX,
      color: "secondary",
      variant: "contained"
    },
    {
      text: {
        en: "Contact Us",
        es: "Contáctenos"
      },
      href: PATHCONSTANTS.ABOUT.CONTACT,
      variant: "outlined",
      color: "secondary",

    }
  ]
}
const About: NextPage = () => {
  return (
    <>
      <HeadComponent title={'Learn More About Ai United'} />
      {//  <Hero {...heroContent} />
      }

      <VideoBanner  {...VideoBannerContent} />
      {/*
      <TextSection {...CenterVideoContent} />
      <CenterVideo {...CenterVideoContent.video} />
      <TextSection {...CenterVideoContent} />
    */}
      <HorizontalText horizontal {...textSectionContent} />
      {/*
      <TextSection {...InsuranceProductsContent} />
    */}
      <ContactAndLocations />
    </>
  )
}

export default About;
