This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Getting Started with the new Ai United Website

The purpose of this project was to create a new user experience for our online customers
Backend Repository can be seen [here](https://github.com/Ckoko99/InsuranceHubBackend)

# Highlighted Features of the New Training Portal

- Improved User Interface
- Spanish Language Select
- Advanced Google Analytics User Tracking
- 99/100 Google Lighthouse Site Performance Score
- Added Sitemap.xml

- Quoting 
-   - Removed broken alinsko auto quote widget
-   - Replaced JotForm Embedded Quotes

- Locations
-   - Added Find A Nearest Store via Address, Zip Code, or State 
-   - Added Quick Call Store Button
-   - Added Quick Google Maps Direction

- About Us
-   - Added About Us Page
-   - Simplified Contact Form
-   - Consildated "Now Hiring" and "Careers" Page
-   - Improved review page by linking real Google reviews
- Payments
-   - Removed list of companies on first glance
-   - Added find company by policy number search
-   - If incorrect policy number is entered twice a list of companies will show


# Technical Details

Webpage is built with Next Js, and Material Ui
Google Cloud Storage handles our favicon and video assets

# Enviroment Variables

REACT_APP_API_URL= BACKEND URL

# Deploy

Continous Integration / Continous Deployment pipeline is created using docker, google cloud build, and google cloud run

On every push to the main branch the code is built and uploaded to AiUnited.com

The following secrets need to be setup on GCP Cloud Run
    NEXT_PUBLIC_BACKEND

The Status of every deployment can be seen in Google Cloud Build and Google Cloud Run