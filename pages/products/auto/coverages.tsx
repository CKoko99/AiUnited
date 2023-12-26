import PATHCONSTANTS from "constants/sitemap";

const pageLinks = {
    liability: {
        link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGES}#Liability-Insurance`,
        id: "Liability-Insurance"
    },
    collision: { id: "Collision-Coverage", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGES}#Collision-Coverage` },
    comprehensive: { id: "Comprehensive-Coverage", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGES}#Comprehensive-Coverage` },
    pip: { id: "Personal-Injury-Protection", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGES}#Personal-Injury-Protection` },
    umuim: { id: "Uninsured-UnderInsured-Coverage", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGES}#Uninsured-UnderInsured-Coverage` },
}
const verticalBannerContent = {
    title: {
        en: "Types of Auto Insurance Coverage Demystified",
    },
}

const contentSection1 = {
    title: {
        en: "Auto Coverages Explained",
    },
    subtitle: {
        en: `At Ai United, we believe in empowering our customers with the knowledge, making your journey on the road
        smoother and safer. Our comprehensive guide breaks down the intricacies of auto insurance coverage, providing 
        you with a roadmap to confidently choose the protection that suits your needs.`
    }

}

const contentSection2 = {
    title: "Different Types of Auto Insurance Coverage",
    body: [
        `1. LINK: [Liability Insurance](${pageLinks.liability.link})`,
        `2. LINK: [Collision Coverage](${pageLinks.collision.link})`,
        `3. LINK: [Comprehensive Coverage](${pageLinks.comprehensive.link})`,
        `4. LINK: [Personal Injury Protection](${pageLinks.pip.link})`,
        `4. LINK: [Uninsured/ Underinsured Motorist Coverage](${pageLinks.umuim.link})`,
    ],
    img: {
        src: AutoImg1,
        alt: "Woman driving"
    },
    alignBody: "left",
}
export default function () {
    return <></>;
}