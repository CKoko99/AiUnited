import { NextPage } from "next";
import Hero from "../../components/Content/Hero/Hero";
import CenterVideo from "../../components/Content/CenterVideo";
import locationImage from '../../public/assets/images/about/index/location.png';
import TextSection from "../../components/Content/TextSection";
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
  video: {
    en: "https://drive.google.com/file/d/1418FIK-HC5E3EkA98-eZkLLsg7CTAgkv/preview",
    es: "https://drive.google.com/file/d/1-APrP7qmcg4_FvMBZBkgiyl82KGS6JEV/preview"
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
      <Hero {...heroContent} />
      <TextSection {...textSectionContent} />
      <CenterVideo {...CenterVideoContent} />
    </>
  )
}

export default About;
