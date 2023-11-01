import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import { Img, } from '@react-email/img';
import AiLogo from '../../public/assets/images/ai-logo-blue.png'
import React from 'react';
import { StaticImageData } from 'next/image';
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

interface ComponentProps {
    company?: string;
    name?: string;
    logo?: any;
    phoneNumber?: string;
}
export default function ({
    company = "Ai United",
    name = "John Doe",
    logo = "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/ai-logo-blue.png?alt=media&token=7d3bacfa-a0c0-4214-975b-c654f8d97e0b&_gl=1*lcyhx9*_ga*MTU3NTQ3NDA0LjE2ODk2OTM1MTk.*_ga_CW55HF8NVT*MTY5ODg1MDg0NS4yMzMuMS4xNjk4ODUwOTA1LjYwLjAuMA..",
    phoneNumber = "800-555-5555",
}: ComponentProps) {
    const previewText = `Thank you for reaching out to ${company}!`;
    // console.log(logo)
    //  console.log(AiLogo)
    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={logo}
                                alt="Vercel"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Thank you for reaching out to <strong>{company}!</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello {name},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            We want to confirm that we've received your recent submission through our form.
                            Your input is important to us, and we appreciate the opportunity to assist you.
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Our team is currently reviewing the information you provided, and we will get back to you as soon as possible with the information
                            you requested or to address your inquiry.
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Give Us a Call at:{' '}
                            <Link
                                href={`tel:${phoneNumber}`}
                                className="text-blue-600 no-underline"
                            >
                                {phoneNumber}
                            </Link>
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            This invitation was intended for{' '}
                            <span className="text-black">{name} </span>. If you were not
                            expecting this invitation, you can ignore this email. If you are
                            concerned about your account's safety, please reply to this email to
                            get in touch with us.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}