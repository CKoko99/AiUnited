import Hero from "../../components/Content/Hero/Hero"
import Ratings from "../../components/Content/Reviews/Ratings"
import TextSection from "../../components/Content/TextSection"
import ReviewsList from "../../components/Content/Reviews/ReviewsList"
import ContactAndShop from "../../components/Content/FlexDigrams/Combo/ContactAndShop"
import BannerImg from "../../public/assets/images/about/reviews/Banner.png"


const heroContent = {
    title: {
        en: "See What Our Customers Are Saying",
        es: "Vea lo que dicen nuestros clientes",
    },
    subtitle: {
        en: `We take pride in the quality of our products and services. 
        We are thrilled to share what our valued customers have to say about their experiences`,
        es: `Nos enorgullecemos de la calidad de nuestros productos y servicios.
        Estamos encantados de compartir lo que nuestros valiosos clientes tienen que decir sobre sus experiencias`
    },
    image: {
        src: BannerImg,
        alt: "Ai United Insurance Reviews",
    },
    align: "center",
}

const textSectionContent = {
    subtitle: {
        en: "We have earned HUNDREDS of reviews averaging over 4.5/5 stars across our 80+ locations located all across Texas.",
        es: "Hemos ganado CIENTOS de reseñas con un promedio de más de 4.5 / 5 estrellas en nuestras más de 80 ubicaciones ubicadas en todo Texas.",
    },
}

const reviews = [
    {
        title: {
            en: "Impressive Professionalism",
            es: "Profesionalismo impresionante"
        },
        body: {
            en: `I was very impressed with the professionalism and customer service this place provides. 
            Customer service was second to none. I will definitely be recommending this place to family and friends.`,
            es: `Me impresionó mucho el profesionalismo y el servicio al cliente que brinda este lugar. El servicio
            al cliente de Karla fue insuperable. Definitivamente recomendaré este lugar a familiares y amigos.`,
        },
        author: "Paul R",
        reviewLink: "https://g.co/kgs/pzzSY4",
    },
    {
        title: {
            en: "Excellent Service",
            es: "Excelente servicio"
        },
        body: {
            en: `I definitely appreciated my agents service and her polite and professional mannerism and 
            she was very helpful and she helped me understand things about insurance that I didn’t know. 
            Thanks Ai United!`,
            es: `Definitivamente aprecié el servicio de mi agente y su educada y profesional manera de ser y
        ella fue muy servicial y me ayudó a comprender cosas sobre el seguro que no sabía.
        ¡Gracias Ai United!`,
        },
        author: "Robert B",
        reviewLink: "https://g.co/kgs/B3vmvs",
    },
    {
        title: {
            en: "Committed Staff",
            es: "Personal comprometido"
        },
        body: {
            en: `I have been a loyal customer of AI United for several years, and I cannot 
            speak highly enough of their services. From the moment I signed up, their commitment
             to providing top-notch coverage and exceptional customer service has been consistently outstanding. `,
            es: `He sido un cliente leal de AI United durante varios años y no puedo
                hablar lo suficientemente bien de sus servicios. Desde el momento en que me inscribí, su compromiso
                para proporcionar una cobertura de primera categoría y un servicio al cliente excepcional ha sido consistentemente excepcional.`,
        },
        author: 'Dylan P',
        reviewLink: "https://g.co/kgs/qt5XVv",
    },
    {
        title: {
            en: "Great Experience",
            es: "Gran experiencia"
        },
        body: {
            en: `I’ve dealt with lots of insurance agencies over the 35 years I’ve been driving, 
            but none compare to this place. They have the friendliest and most courteous  staff.
             They know what they’re doing and don’t just push some policy on customers to 
            make a commission, they actually advise and put serious effort into finding the right product 
            for their clients. If it was possible, I’d give more than 5 stars.`,
            es: `He tratado con muchas agencias de seguros durante los 35 años que llevo conduciendo,
            pero ninguna se compara con este lugar. Tienen el personal más amable y cortés.
            Saben lo que están haciendo y no solo empujan alguna póliza a los clientes para
            ganar una comisión, en realidad asesoran y hacen un esfuerzo serio para encontrar el producto adecuado
            para sus clientes. Si fuera posible, daría más de 5 estrellas.`,
        },
        author: "David A",
        reviewLink: "https://g.co/kgs/JASCBG",
    },
    {
        title: {
            en: "Exceeded Expectations",
            es: "Superó las expectativas"
        },
        body: {
            en: `I am thrilled to share my amazing experience with this insurance company from the very beginning,
             they have exceeded my expectations in every aspect. Their customer service is truly exceptional, 
             as their representatives are always friendly, knowledgeable,
             and willing to go the extra mile to assist me with any inquiries or concerns.`,
            es: `Estoy encantado de compartir mi increíble experiencia con esta compañía de seguros desde el principio,
            han superado mis expectativas en todos los aspectos. Su servicio al cliente es realmente excepcional,
            ya que sus representantes son siempre amables, conocedores y dispuestos a ir más allá para ayudarme con cualquier consulta o inquietud.`,
        },
        author: "Roberto G",
        reviewLink: "https://g.co/kgs/7F8e58"
    },
    {
        title: {
            en: "Above and Beyond",
            es: "Por encima y más allá"
        },
        body: {
            en: `I got insurance the other day and I must say their team has excellent customer service. 
            Not only did they go above and beyond in finding a good insurance. But they also helped me 
            understand the terms and what I was signing up for. I would 100% go here again.`,
            es: `Obtuve un seguro el otro día y debo decir que su equipo tiene un excelente servicio al cliente.
            No solo hicieron todo lo posible para encontrar un buen seguro. Pero también me ayudaron
            a comprender los términos y lo que estaba contratando. Volvería aquí 100%.`,
        },
        author: "Paula C",
        reviewLink: "https://g.co/kgs/iADBir",
    },
]
export default function () {
    return <>
        <Hero {...heroContent} />
        <TextSection subtitleVariant="h5" {...textSectionContent} />
        <Ratings />
        <ReviewsList reviews={reviews} />
        <ContactAndShop />

    </>
}