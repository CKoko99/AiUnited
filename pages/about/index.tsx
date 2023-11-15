import { NextPage } from "next";
import Hero from "../../components/Content/Hero/Hero";
import CenterVideo from "../../components/Content/CenterVideo";
import locationImage from '../../public/assets/images/about/index/location.png';
import TextSection from "../../components/Content/TextSection";
import HeadComponent from "../../components/Head";
import VideoWithContent from "../../components/Content/VideoWithContent";
import ContactAndLocations from "../../components/Content/FlexDigrams/Combo/ContactAndLocations";
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
    es: "Experimente la tranquilidad con Ai United Insurance"
  },
  body: {
    en: `At Ai United Insurance, we pride ourselves on delivering personalized service and comprehensive
     coverage options to our valued customers.`,
    es: `En Ai United Insurance, nos enorgullecemos de brindar un servicio personalizado y opciones de cobertura
      integral a nuestros valiosos clientes. `,
  },
  video: {
    title: "Ai United Insurance",
    video: {
      en: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/Long-Commercial%20With%20Logo%20at%20the%20End.mp4?alt=media&token=e3ab73a8-4f90-42b1-8655-bd8ab6510c87",
      es: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/Long-Commercial%20With%20Logo%20at%20the%20End%20Spanish.mp4?alt=media&token=1a312a80-7899-4007-9469-189bd927e24e"
    }
  }
}
const textSectionContent = {
  /*title: {
    en: `Our unwavering commitment is to deliver dependable insurance solutions that Texans can always rely on.`,
    es: `Nuestro compromiso inquebrantable es brindar soluciones de seguros confiables en las que los tejanos siempre puedan confiar.`
  },*/
  title: {
    en: `Providing Trusted Insurance Coverage in Texas since 2008`,
    es: `Brindando cobertura de seguro confiable en Texas desde 2008`
  },
  subtitle: {
    en: `At Ai United Insurance, we have a rich history of growth and dedication to becoming the most trusted 
    insurance provider in Texas. Our Journey has been fueled by a commitment to providing reliable 
    coverage and exceptional customer service to our clients.`,
    es: `En Ai United Insurance, tenemos una rica historia de crecimiento y dedicación para 
    convertirnos en el proveedor de seguros más confiable de Texas. Nuestro viaje ha sido impulsado 
    por un compromiso de brindar cobertura confiable y un servicio al cliente excepcional a nuestros clientes.`
  }
}
const About: NextPage = () => {
  return (
    <>
      <HeadComponent title={'Learn More About Ai United'} />
      <Hero {...heroContent} />
      <TextSection {...textSectionContent} />
      <VideoWithContent {...CenterVideoContent} />
      <ContactAndLocations />
    </>
  )
}

export default About;
