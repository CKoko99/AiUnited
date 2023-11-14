import { NextPage } from "next";
import Hero from "../../components/Content/Hero/Hero";
import CenterVideo from "../../components/Content/CenterVideo";
import locationImage from '../../public/assets/images/about/index/location.png';
import TextSection from "../../components/Content/TextSection";
import HeadComponent from "../../components/Head";
const heroContent = {
  title: {
    en: "Ai United Insurance",
    es: "Ai United Insurance",
  },
  subtitle: {
    en: `Founded in 2008, Ai United is dedicated to providing insurance coverage that Texans can trust.`,
    es: `Fundada en 2008, Ai United se dedica a proporcionar cobertura de seguro en la que los tejanos pueden confiar.`
  },
  image: {
    src: locationImage,
    alt: "store"
  },
  align: "left" as const,
  opacity: .4
}
const CenterVideoContent = {
  title: "Ai United Insurance",
  video: {
    en: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/Long-Commercial%20With%20Logo%20at%20the%20End.mp4?alt=media&token=e3ab73a8-4f90-42b1-8655-bd8ab6510c87",
    es: "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/Long-Commercial%20With%20Logo%20at%20the%20End%20Spanish.mp4?alt=media&token=1a312a80-7899-4007-9469-189bd927e24e"
  }
}
const textSectionContent = {
  subtitle: {
    en: `Our unwavering commitment is to deliver dependable insurance solutions that Texans can always rely on.`,
    es: `Nuestro compromiso inquebrantable es brindar soluciones de seguros confiables en las que los tejanos siempre puedan confiar.`
  }
}
const About: NextPage = () => {
  return (
    <>
      <HeadComponent title={'Learn More About Ai United'} />
      <Hero {...heroContent} />
      <TextSection {...textSectionContent} />
      <CenterVideo {...CenterVideoContent} />
    </>
  )
}

export default About;
