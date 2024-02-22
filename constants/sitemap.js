const PATHCONSTANTS = {
    HOME: '/',
    GETAQUOTE: {
        AUTO: '/get-a-quote/auto',
    },
    QUOTES: {
        // INDEX: '/quotes',
        AUTO: {
            INDEX: '/quotes/auto',
            FORM: '/quotes/auto#Auto-quote'
        },
        HOME: {
            INDEX: '/quotes/home',
            FORM: '/quotes/home#Home-quote'
        },
        MEXICO: { INDEX: '/quotes/mexico', FORM: '/quotes/mexico#Mexico-quote' },
        MOTORCYCLE: { INDEX: '/quotes/motorcycle', FORM: '/quotes/motorcycle#Motorcycle-quote' },
        RENTER: { INDEX: '/quotes/renter', FORM: '/quotes/renter#Renter-quote' },
        SURETY: { INDEX: '/quotes/surety-bond', FORM: '/quotes/surety-bond#Surety-quote' },
        SR22: { INDEX: '/quotes/sr22', FORM: '/quotes/sr22#SR22-quote' },
        LIABILITY: { INDEX: '/quotes/liability', FORM: '/quotes/liability#Liability-quote' },
    },
    PRODUCTS: {
        INDEX: '/products',
        AUTO: {
            INDEX: '/products/auto',
            COVERAGE: '/products/auto/coverage',
            AFFORDABLE: '/products/auto/affordable',
            FAQ: '/products/auto/faq',
        },
        HOME: {
            INDEX: '/products/home',
            COVERAGE: '/products/home/coverage',
            AFFORDABLE: '/products/home/affordable',
            FAQ: '/products/home/faq',
        },
        MEXICO: {
            INDEX: '/products/mexico',
            COVERAGE: '/products/mexico/coverage',
            FAQ: '/products/mexico/faq',
        },
        MOTORCYCLE: {
            INDEX: '/products/motorcycle',
            COVERAGE: '/products/motorcycle/coverage',
            FAQ: '/products/motorcycle/faq',
        },
        RENTER: {
            INDEX: '/products/renter',
            COVERAGE: '/products/renter/coverage',
            FAQ: '/products/renter/faq',
        },
        SURETY: {
            INDEX: '/products/surety-bond',
            COVERAGE: '/products/surety-bond/coverage',
            FAQ: '/products/surety-bond/faq',
        },
        SR22: {
            INDEX: '/products/sr22',
            COVERAGE: '/products/sr22/coverage',
            FAQ: '/products/sr22/faq',
        },
        /*     AUTO: '/products/auto',
             HOME: '/products/home',
             MEXICO: '/products/mexico',
             MOTORCYCLE: '/products/motorcycle',
             RENTER: '/products/renter',
             SURETY: '/products/surety-bond',
             SR22: '/products/sr22',
             */
    },
    LOCATIONS: {
        INDEX: '/locations',
        AUSTIN: '/locations/austin',
        HOUSTON: '/locations/houston',
        SAN_ANTONIO: '/locations/san-antonio',
        DALLAS: '/locations/dallas',
        CORPUS_CHRISTI: '/locations/corpus-christi',
        VICTORIA: '/locations/victoria',
    },
    ABOUT: {
        INDEX: '/about',
        CONTACT: '/about/contact',
        CAREERS: {
            INDEX: '/about/careers',
            CSR: '/about/careers/csr',
            OPERATIONS: '/about/careers/operations',
            DM: '/about/careers/district-manager',
        },
        REVIEWS: '/about/reviews',
    },
    ARTICLES: {
        INDEX: '/articles',
    },
    PAYMENTS: '/payments',
    PHONE: "tel:2819336333",
    PHONETEXT: "(281)-933-6333",
    PRIVACY: '/privacy-policy',
    TERMS: '/terms-of-service',
    BACKEND: process.env.NODE_ENV === "development" ? "http://192.168.20.122:8080" : "https://insurancehubbackend-uc3v53rceq-ue.a.run.app",
    BACKEND2: process.env.NODE_ENV === "development" ? "http://192.168.20.122:8081" : "https://spring-backend-uc3v53rceq-ue.a.run.app",
    STRAPI: process.env.NODE_ENV === "development" ? "http://localhost:1337" : "https://ai-united-strapi-uc3v53rceq-ue.a.run.app"
};
export default PATHCONSTANTS