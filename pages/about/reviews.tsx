import Hero from "../../components/Content/Hero/Hero"
import Ratings from "../../components/Content/Reviews/Ratings"
import TextSection from "../../components/Content/TextSection"
import TextContent from "../../components/Content/TextContent"
import ReviewsList from "../../components/Content/Reviews/ReviewsList"
import { CustomFonts } from "../../providers/theme"
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
        en: "We have earned HUNDREDS of reviews averaging over 4.5/5 stars across out 80+ locations located all across Texas.",
        es: "Hemos ganado CIENTOS de reseñas con un promedio de más de 4.5 / 5 estrellas en nuestras más de 80 ubicaciones ubicadas en todo Texas.",
    },
}

const reviews = [
    {
        body: {
            en: `I definitely appreciated Kimberly service and her polite and professional mannerism and 
            she was very helpful and she helped me understand things about insurance that I didn’t know. 
            Thanks Kim, good job.`,
            es: `Definitivamente aprecié el servicio de Kimberly y su manera educada y profesional de ser y
            ella fue muy servicial y me ayudó a entender cosas sobre el seguro que no sabía.
            Gracias Kim, buen trabajo.`,
        },
        author: "Robert Butler",
        reviewLink: "https://g.co/kgs/B3vmvs",
    },
    {
        body: {
            en: `I have been a loyal customer of AI United for several years, and I cannot 
            speak highly enough of their services. From the moment I signed up, their commitment
             to providing top-notch coverage and exceptional customer service has been consistently outstanding. `,
            es: `He sido un cliente leal de AI United durante varios años y no puedo
                hablar lo suficientemente bien de sus servicios. Desde el momento en que me inscribí, su compromiso
                para proporcionar una cobertura de primera categoría y un servicio al cliente excepcional ha sido consistentemente excepcional.`,
        },
        author: 'Dylan Pachuca',
        reviewLink: "https://g.co/kgs/qt5XVv",
    },
    {
        body: {
            en: `I’ve dealt with lots of insurance agencies over the 35 years I’ve been driving, 
            but none compare to this place. The friendliest and most courteous  staff, especially Esmeralda 
            in that office. They know what they’re doing and don’t just push some policy on customers to 
            make a commission, thay actually advise and put serious effort into finding the right product 
            for their clients. If it was possible, I’d give more than 5 stars.`,
            es: `He tratado con muchas agencias de seguros durante los 35 años que he estado conduciendo,
            pero ninguno se compara con este lugar. El personal más amable y cortés, especialmente Esmeralda
            en esa oficina. Saben lo que están haciendo y no solo empujan alguna póliza a los clientes para
            hacer una comisión, realmente asesoran y ponen un esfuerzo serio en encontrar el producto adecuado
            para sus clientes. Si fuera posible, daría más de 5 estrellas.`,
        },
        author: "David Anderson",
        reviewLink: "https://g.co/kgs/JASCBG",
    },
    {
        body: {
            en: `I am thrilled to share my amazing experience with this insurance company from the very beginning,
             they have exceeded my expectations in every aspect. Their customer service is truly exceptional, 
             as their representatives are always friendly, knowledgeable,
             and willing to go the extra mile to assist me with any inquiries or concerns.`,
            es: `Estoy encantado de compartir mi increíble experiencia con esta compañía de seguros desde el principio,
            han superado mis expectativas en todos los aspectos. Su servicio al cliente es realmente excepcional,
            ya que sus representantes son siempre amables, conocedores y dispuestos a ir más allá para ayudarme con cualquier consulta o inquietud.`,
        },
        author: "Roberto Guerrero",
        reviewLink: "https://g.co/kgs/7F8e58"
    },
    {
        body: {
            en: `I was very impressed with the professionalism and customer service this place provides. Karla’s 
            customer service was second to none. I will definitely be recommending this place to family and friends.`,
            es: `Me impresionó mucho el profesionalismo y el servicio al cliente que brinda este lugar. El servicio
            al cliente de Karla fue insuperable. Definitivamente recomendaré este lugar a familiares y amigos.`,
        },
        author: "Paul Ramos",
        reviewLink: "https://g.co/kgs/pzzSY4",
    },
    {
        body: {
            en: `I got insurance the other day and I must say Emely has excellent customer service. 
            Not only did she go above and beyond in finding a good insurance. But she also helped me 
            understand the terms and what I was signing up for. I would 100% go here again.`,
            es: `Obtuve un seguro el otro día y debo decir que Emely tiene un excelente servicio al cliente.
            No solo hizo todo lo posible para encontrar un buen seguro. Pero también me ayudó a
            comprender los términos y para qué me estaba registrando. Volvería aquí 100%.`,
        },
        author: "Paula Castro",
        reviewLink: "https://g.co/kgs/iADBir",
    },
]
export default function () {
    return <>
        <Hero {...heroContent} />
        <TextSection {...textSectionContent} />
        <Ratings />
        <ReviewsList reviews={reviews} />
        <ContactAndShop />

    </>
}