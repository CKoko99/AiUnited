import { Accordion, AccordionDetails, AccordionSummary, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const classes = {
    modalRoot: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "1102",
        textAlign: "center",
        overflow: "hidden",
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "80%", sm: "75%", md: "70%", lg: "55%" },
        maxHeight: "70%",
        overflow: "scroll",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
}

export function Disclaimer() {
    const Text = {
        legalDisclaimer: {
            en: "Legal Disclaimer",
            es: "Aviso Legal",
        },
        body: {
            // state that the policy is descriptions are general information and not a contract 
            en: `The descriptions of coverages are general information and not a statement of contract. All coverages are subject to the terms, provisions, exclusions, and conditions in the policy itself and in any endorsements.`,
            es: `Las descripciones de las coberturas son información general y no una declaración de contrato. Todas las coberturas están sujetas a los términos, disposiciones, exclusiones y condiciones en la póliza misma y en cualquier endoso.`,
        },
    }

    return <Accordion
        sx={{
            minWidth: { xs: "90%", md: '47.5%' }, //padding: "rem",
            border: "1px solid #cacaca",
            alignSelf: { xs: "", md: "baseline" },

            flex: "1",
            // margin: "-16px 0 0 !important",
        }}
        TransitionProps={{ style: { margin: "-4px 0", } }}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon fontWeight={"bold"} />}
        >
            <Typography
                variant="h6" fontWeight={700}
            >
                {returnLocaleText(Text.legalDisclaimer)}
            </Typography>

        </AccordionSummary>
        <AccordionDetails

        >
            <Typography
                variant="body1"
            >
                {returnLocaleText(Text.body)}
            </Typography>
        </AccordionDetails>
    </Accordion >
}

function ModalBase(props) {
    const [openModal, setOpenModal] = useState(false)

    return <>
        <HelpOutlineIcon fontSize="small"
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenModal(true)} />
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            sx={{ ...classes.modalRoot }}
        >
            <Box
                sx={{ ...classes.modal }}
            >
                {props.children}
                <Disclaimer />
            </Box>
        </Modal>

    </>
}
export function BodilyInjury() {
    const TEXT = {
        title: {
            en: "Bodily Injury",
            es: "Lesiones corporales",
        },
        section1: {
            en: `Bodily injury protection is a cornerstone of auto insurance, providing crucial financial security if you're held responsible for injuring someone in a car accident. This coverage extends beyond medical expenses to include rehabilitation and potential compensation for lost wages incurred by the injured party. Additionally, it shields you from legal expenses if you're sued due to the accident, serving as a safety net to fulfill your financial obligations in such unfortunate circumstances.`,
            es: `La protección por lesiones corporales es una piedra angular del seguro de automóvil, que proporciona seguridad financiera crucial si se le considera responsable de lesionar a alguien en un accidente automovilístico. Esta cobertura se extiende más allá de los gastos médicos para incluir la rehabilitación y la compensación potencial por salarios perdidos incurridos por la parte lesionada. Además, le protege de los gastos legales si es demandado debido al accidente, sirviendo como un colchón de seguridad para cumplir con sus obligaciones financieras en tales circunstancias desafortunadas.`,
        },
        section2: {
            en: `Policy limits, often denoted as "$30k/$60k," represent the maximum coverage provided by the insurance policy. For instance, with limits of $30,000 per person and $60,000 per accident, your insurer would cover up to $30,000 for each injured individual, with a total cap of $60,000 for the entire accident. If medical costs surpass these limits, you'd be responsible for covering the remaining expenses out of pocket. Therefore, it's crucial to understand these limits when selecting coverage to ensure adequate protection in case of a severe accident.`,
            es: `Los límites de la póliza, a menudo denotados como "$30k/$60k," representan la cobertura máxima proporcionada por la póliza de seguro. Por ejemplo, con límites de $30,000 por persona y $60,000 por accidente, su aseguradora cubriría hasta $30,000 para cada individuo lesionado, con un tope total de $60,000 para todo el accidente. Si los costos médicos superan estos límites, usted sería responsable de cubrir los gastos restantes de su bolsillo. Por lo tanto, es crucial entender estos límites al seleccionar la cobertura para asegurar una protección adecuada en caso de un accidente grave.`,
        },
    }

    return <ModalBase>

        <Typography variant="h4"
            sx={{
                fontWeight: "600",
            }}
        >
            {returnLocaleText(TEXT.title)}
        </Typography>
        <Box
            sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Typography variant="body1">
                {returnLocaleText(TEXT.section1)}
            </Typography>
            <Typography variant="body1">
                {returnLocaleText(TEXT.section2)}
            </Typography>
        </Box>

    </ModalBase>
}
export function PropertyDamage() {
    const TEXT = {
        title: {
            en: "Property Damage",
            es: "Daños a la propiedad",
        },
        section1: {
            en: `Property damage liability coverage is another essential aspect of auto insurance, providing financial protection if you damage someone else's property in a car accident. This coverage extends beyond just vehicles to include buildings, fences, and other structures. Property damage liability coverage helps cover the costs of repairing or replacing the damaged property, as well as any legal expenses if you're sued as a result of the accident. Essentially, it ensures that you can fulfill your financial obligations if you're found responsible for property damage in a collision.`,
            es: `La cobertura de responsabilidad por daños a la propiedad es otro aspecto esencial del seguro de automóvil, que proporciona protección financiera si daña la propiedad de otra persona en un accidente automovilístico. Esta cobertura se extiende más allá de los vehículos para incluir edificios, cercas y otras estructuras. La cobertura de responsabilidad por daños a la propiedad ayuda a cubrir los costos de reparación o reemplazo de la propiedad dañada, así como cualquier gasto legal si es demandado como resultado del accidente. Básicamente, asegura que pueda cumplir con sus obligaciones financieras si se le considera responsable de daños a la propiedad en una colisión.`,
        },
        section2: {
            en: `When evaluating property damage liability coverage, you'll often encounter figures like "$50k." This number represents the maximum amount the insurance policy will pay for property damage per accident. For example, with a property damage limit of $50,000, your insurer would cover up to that amount for any property damage caused by the accident. If the cost of repairing or replacing the damaged property exceeds $50,000, you would be responsible for covering the remaining expenses out of pocket. Therefore, it's crucial to select property damage liability limits that adequately protect your assets and financial well-being in the event of an accident.`,
            es: `Al evaluar la cobertura de responsabilidad por daños a la propiedad, a menudo encontrará cifras como "$50k." Este número representa la cantidad máxima que la póliza de seguro pagará por daños a la propiedad por accidente. Por ejemplo, con un límite de daños a la propiedad de $50,000, su aseguradora cubriría hasta esa cantidad por cualquier daño a la propiedad causado por el accidente. Si el costo de reparar o reemplazar la propiedad dañada supera los $50,000, usted sería responsable de cubrir los gastos restantes de su bolsillo. Por lo tanto, es crucial seleccionar límites de responsabilidad por daños a la propiedad que protejan adecuadamente sus activos y bienestar financiero en caso de un accidente.`,
        },
    }
    return <ModalBase>
        <Box>
            <Typography variant="h4"
                sx={{
                    fontWeight: "600",
                }}
            >
                {returnLocaleText(TEXT.title)}
            </Typography>
            <Box
                sx={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section1)}
                </Typography>
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section2)}
                </Typography>
            </Box>
        </Box>
    </ModalBase>
}
export function PersonalInjuryProtection() {
    const TEXT = {
        title: {
            en: `Personal Injury Protection`,
            es: `Protección contra lesiones personales`,
        },
        section1: {
            en: `Personal Injury Protection (PIP) is a vital component of auto insurance, offering coverage for medical expenses, lost wages, and essential services if you or your passengers are injured in a car accident, regardless of fault. This coverage typically extends to medical bills, rehabilitation costs, and even childcare expenses or lost income due to the accident. PIP can also cover funeral expenses in the unfortunate event of a fatality resulting from the accident. It provides peace of mind by ensuring that you and your passengers receive necessary medical treatment and support in the aftermath of a collision, regardless of who caused the accident.`,
            es: `La Protección contra Lesiones Personales (PIP) es un componente vital del seguro de automóvil, que ofrece cobertura para gastos médicos, salarios perdidos y servicios esenciales si usted o sus pasajeros resultan heridos en un accidente automovilístico, independientemente de la culpa. Esta cobertura generalmente se extiende a facturas médicas, costos de rehabilitación e incluso gastos de cuidado infantil o ingresos perdidos debido al accidente. PIP también puede cubrir los gastos funerarios en el desafortunado evento de una fatalidad resultante del accidente. Proporciona tranquilidad al garantizar que usted y sus pasajeros reciban el tratamiento médico necesario y el apoyo en el período posterior a una colisión, independientemente de quién causó el accidente.`,
        },
        section2: {
            en: `When considering PIP coverage, you'll often encounter different coverage limits and options. These limits vary depending on the insurer and the state regulations. Some policies may offer a range of coverage options, such as $10,000, $20,000, or higher, allowing you to select the level of protection that best suits your needs. PIP coverage is typically designed to provide immediate financial assistance without the need to determine fault or wait for legal proceedings to conclude. However, it's essential to review the specifics of your policy and understand any limitations or exclusions to ensure that you have adequate coverage in the event of an accident.`,
            es: `Al considerar la cobertura de PIP, a menudo encontrará diferentes límites y opciones de cobertura. Estos límites varían según el asegurador y las regulaciones estatales. Algunas pólizas pueden ofrecer una variedad de opciones de cobertura, como $10,000, $20,000 o más, lo que le permite seleccionar el nivel de protección que mejor se adapte a sus necesidades. La cobertura de PIP generalmente está diseñada para proporcionar asistencia financiera inmediata sin la necesidad de determinar la culpa o esperar a que concluyan los procedimientos legales. Sin embargo, es esencial revisar los detalles de su póliza y comprender cualquier limitación o exclusión para asegurarse de tener una cobertura adecuada en caso de un accidente.`,
        },
    }

    return <ModalBase>
        <Box>
            <Typography variant="h4"
                sx={{
                    fontWeight: "600",
                }}
            >
                {returnLocaleText(TEXT.title)}
            </Typography>
            <Box
                sx={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section1)}
                </Typography>
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section2)}
                </Typography>
            </Box>
        </Box>
    </ModalBase>
}
export function ComprehensiveDeductible() {
    const TEXT = {
        title: {
            en: `Comprehensive Deductible`,
            es: `Deducible Comprensivo`,
        },
        section1: {
            en: `Comprehensive insurance is a crucial component of auto coverage that protects against damages not caused by a collision. This coverage typically includes incidents like theft, vandalism, weather-related damages (such as hail or flood), and collisions with animals. Essentially, it provides financial protection for a wide range of non-collision events that could damage or total your vehicle. Comprehensive insurance can be particularly valuable for newer or more expensive vehicles, as it helps cover the cost of repairs or replacement in various scenarios beyond typical accidents.`,
            es: `El seguro comprensivo es un componente crucial de la cobertura de automóvil que protege contra daños no causados por una colisión. Esta cobertura generalmente incluye incidentes como robo, vandalismo, daños relacionados con el clima (como granizo o inundación) y colisiones con animales. Básicamente, proporciona protección financiera para una amplia gama de eventos no relacionados con colisiones que podrían dañar o totalizar su vehículo. El seguro comprensivo puede ser particularmente valioso para vehículos más nuevos o más costosos, ya que ayuda a cubrir el costo de reparaciones o reemplazo en varios escenarios más allá de los accidentes típicos.`,
        },
        section2: {
            en: `Deductibles are an important aspect of comprehensive insurance (as well as collision coverage). A deductible is the amount you agree to pay out of pocket before your insurance kicks in to cover the remaining costs of a claim. For example, if you have a comprehensive deductible of $500 and your vehicle sustains $2,000 worth of damage from a hailstorm, you would pay the first $500, and your insurance would cover the remaining $1,500. Deductibles are usually set when you purchase your insurance policy, and you can often choose a higher deductible to lower your premium or a lower deductible for greater coverage with a slightly higher premium. Understanding your deductible is essential because it directly affects how much you'll need to pay in the event of a claim and can influence your overall insurance costs.`,
            es: `Los deducibles son un aspecto importante del seguro comprensivo (así como de la cobertura de colisión). Un deducible es la cantidad con la que usted acepta pagar de su bolsillo antes de que su seguro entre en vigencia para cubrir los costos restantes de un reclamo. Por ejemplo, si tiene un deducible comprensivo de $500 y su vehículo sufre daños por valor de $2,000 debido a una tormenta de granizo, pagaría los primeros $500, y su seguro cubriría los $1,500 restantes. Los deducibles generalmente se establecen al comprar su póliza de seguro, y a menudo puede elegir un deducible más alto para reducir su prima o un deducible más bajo para una mayor cobertura con una prima ligeramente más alta. Comprender su deducible es esencial porque afecta directamente cuánto tendrá que pagar en caso de un reclamo y puede influir en sus costos generales de seguro.`,
        },
    }
    return <ModalBase>
        <Box>
            <Typography variant="h4"
                sx={{
                    fontWeight: "600",
                }}
            >
                {returnLocaleText(TEXT.title)}
            </Typography>
            <Box
                sx={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section1)}
                </Typography>
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section2)}
                </Typography>
            </Box>
        </Box>
    </ModalBase>
}

export function CollisionDeductible() {
    const TEXT = {
        title: {
            en: `Collision Deductible`,
            es: `Deducible de Colisión`,
        },
        section1: {
            en: `Collision insurance is another critical aspect of auto coverage, specifically designed to protect against damages resulting from collisions with other vehicles or objects. This coverage provides financial protection for repairing or replacing your vehicle if it's damaged in a collision, regardless of who is at fault. Collision insurance is particularly important for vehicles that are still being financed or leased, as it helps cover the cost of repairs or replacement in the event of an accident.`,
        },
        section2: {
            en: `Similar to comprehensive insurance, collision coverage also involves deductibles. A deductible is the amount you agree to pay out of pocket before your insurance kicks in to cover the remaining costs of a claim. For instance, if you have a collision deductible of $1,000 and your vehicle sustains $5,000 worth of damage from a collision, you would pay the first $1,000, and your insurance would cover the remaining $4,000. Deductibles are typically chosen when you purchase your insurance policy, and you can often adjust them to suit your preferences. Opting for a higher deductible can lower your premium, while a lower deductible may result in a slightly higher premium but provides more coverage in the event of a claim. Understanding your collision deductible is crucial as it directly impacts your out-of-pocket expenses in case of an accident and can influence your overall insurance costs.`,
        },
    }
    return <ModalBase>
        <Box>
            <Typography variant="h4"
                sx={{
                    fontWeight: "600",
                }}
            >
                {returnLocaleText(TEXT.title)}
            </Typography>
            <Box
                sx={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section1)}
                </Typography>
                <Typography variant="body1">
                    {returnLocaleText(TEXT.section2)}
                </Typography>
            </Box>
        </Box>
    </ModalBase>
}
const TEXT = {
    title: {
        en: ``,
    },
    section1: {
        en: ``,
    },
    section2: {
        en: ``,
    },
}