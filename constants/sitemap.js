const PATHCONSTANTS = {
    HOME: '/',
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
            COVERAGES: '/products/auto/coverages',
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
    BACKEND: process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://insurancehubbackend-uc3v53rceq-ue.a.run.app"
};
export default PATHCONSTANTS