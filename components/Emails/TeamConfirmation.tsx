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
import React from 'react';
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

interface ComponentProps {
    company?: string;
    name?: string;
    formTitle?: string;
    logo?: any;
    phoneNumber?: string;
    questions?: any;
    answers?: Array<string>;
}
export default function ({
    company = "Unknown Company",
    formTitle = 'Unknown Form',
    name = "John Doe",
    logo = "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/ai-logo-blue.png?alt=media&token=7d3bacfa-a0c0-4214-975b-c654f8d97e0b&_gl=1*lcyhx9*_ga*MTU3NTQ3NDA0LjE2ODk2OTM1MTk.*_ga_CW55HF8NVT*MTY5ODg1MDg0NS4yMzMuMS4xNjk4ODUwOTA1LjYwLjAuMA..",
    phoneNumber = "800-555-5555",
    questions = [],
    answers = [],
}: ComponentProps) {
    const previewText = `${name} completed a ${formTitle} form for ${company}!`;

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
                            {previewText}
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello Team,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {name} has completed a {formTitle} form for {company}! Please Reach out to them as soon as possible!
                        </Text>
                        {questions.map((question, index) => {
                            return <Text className="text-black text-[14px] leading-[24px]">
                                {question.title.en}: {answers[index]}
                            </Text>
                        })}
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}