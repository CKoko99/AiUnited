import type { NextPage } from 'next'
import HeadComponent from "../components/Head";
import Banner from "../components/Content/Hero/Banner";
import BannerImage from "../public/assets/images/home/Umbrella.png";
import FlexDiagram from "../components/Content/FlexDigrams/CompaniesDiagram";
import partnerImg1 from "../public/assets/images/home/partners/progressive.png";
import partnerImg2 from "../public/assets/images/home/partners/alinsco.png";
import partnerImg3 from "../public/assets/images/home/partners/appllo.png";
import partnerImg4 from "../public/assets/images/home/partners/bluefire.png";
import partnerImg5 from "../public/assets/images/home/partners/falcon.png";
import ContentSplit from "../components/Content/ContentSplit";
import QuotesDiagram from "../components/Content/FlexDigrams/QuotesDiagram";
import autoQuoteImg from "../public/assets/images/home/quotes/auto.png";
import homeQuoteImg from "../public/assets/images/home/quotes/home.png";
import motorcycleQuoteImg from "../public/assets/images/home/quotes/motorcycle.png";
import sr22QuoteImg from "../public/assets/images/home/quotes/sr22.png";
import rentersQuoteImg from "../public/assets/images/home/quotes/renter.png";
import mexicoQuoteImg from "../public/assets/images/home/quotes/mexico.png";
import suretyQuoteImg from "../public/assets/images/home/quotes/surety.png";
import CTAContent from '../components/Content/CTAContent';
import representativeImg from "../public/assets/images/home/quotes/representative.png";
import HomeReview from '../components/Content/Reviews/CloudReview';
import ReviewImg from "../public/assets/images/home/reviews/review.png";
import Card from '../components/Content/Cards/Cards';
import PoliciesImg from "../public/assets/images/home/about/policies.png";
import AboutImg from "../public/assets/images/home/about/about.png";
import CareersImg from "../public/assets/images/home/about/careers.png";

const bannerContent = {
  title: "Simplify Your Coverage and Save Money Today",
  subtitle: "Your One-Stop Insurance Destination: Fast, Easy, and Affordable Coverages for All Your Needs",
  ctaButton: {
    text: "Get a Quote!",
    link: "/quote"
  },
  image: BannerImage
}
const partnerCompanies = {
  title: "We Shop For the Best Deals to Save You Time and Money",
  content: [
    {
      img: partnerImg1,
    },
    { img: partnerImg2 },
    { img: partnerImg3 },
    { img: partnerImg4 },
    { img: partnerImg5 },
  ]
}
const onlineQuotesContent = {
  title: "Shop Online",
  content: [
    {
      img: autoQuoteImg,
      title: "Auto Insurance",
      link: "/quote/auto"
    },
    {
      img: homeQuoteImg,
      title: "Home Insurance",
      link: "/quote/home"
    },
    {
      img: motorcycleQuoteImg,
      title: "Motorcycle Insurance",
      link: "/quote/motorcycle"
    },
    {
      img: sr22QuoteImg,
      title: "SR-22 Insurance",
      link: "/quote/sr22"
    },
    {
      img: rentersQuoteImg,
      title: "Renters Insurance",
      link: "/quote/renters"
    },
    {
      img: mexicoQuoteImg,
      title: "Mexico Insurance",
      link: "/quote/mexico"
    },
    {
      img: suretyQuoteImg,
      title: "Surety Bonds",
      link: "/quote/surety"
    },
  ]
}
const callQuoteContent = {
  title: "Contact a Representative",
  img: representativeImg,
  text: "Whether You Give Us a Call or Request a Quote Online, Our Experts Are Here to Provide You With Excellent Assistance.",
  cta1: {
    text: "(555)-555-5555",
    link: "tel:5555555555"
  },
  cta2: {
    text: "Get in Touch!",
    link: "/about/contact"
  }
}
const reviewContent = {
  title: "See What Our Customers Are Saying about Ai United",
  content: {
    name: "Jacob B",
    review: `I'd been shopping around for a better auto insurance rate with little success. Bethany saved me almost $100 per month with the same coverage! 
    I'm very pleased with my policy and I recommend Ai United to all my friends and family!`
  },
  cta: {
    text: "Read More Reviews",
    link: "/about/reviews"
  },
  img: ReviewImg
}
const aboutContent = {
  title: "Learn More",
  subtitle: "Insights, Information, and Beyond",
  content: [
    {
      title: "Our Policies",
      img: PoliciesImg,
      link: "/about/policies"
    },
    {
      title: "About Us",
      img: AboutImg,
      link: "/about"
    },
    {
      title: "Careers",
      img: CareersImg,
      link: "/about/careers"
    }
  ]
}
const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title={'Ai United'} metaData={'Ai United Insurnace'} />
      <Banner {...bannerContent} />
      <FlexDiagram {...partnerCompanies} />
      <ContentSplit
        title="Get a Free Quote in Minutes!"
      >
        <QuotesDiagram {...onlineQuotesContent} />
        <CTAContent {...callQuoteContent} />
      </ContentSplit>
      <HomeReview {...reviewContent} />
      <Card {...aboutContent} />
    </>

  )
}

export default Home
