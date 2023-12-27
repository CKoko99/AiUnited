import Article from "@/components/Articles/Article"
import ArticleTitle from "@/components/Articles/ArticleTitle"
import { Box, Typography } from "@mui/material"
import PATHCONSTANTS from "constants/sitemap"
import Link from "next/link"
import GetArticles from "pages/api/GetArticles"

/*
Hey there, savvy driver! We get it – auto insurance can be a bit of a head-scratcher. But fear not, because we're here to guide you through the maze of policies and premiums to help you find the sweet spot of affordable coverage. Let's buckle up and dive into the world of auto insurance!

## Understanding Auto Insurance Basics

First things first, let's break down the basics. Auto insurance isn't a one-size-fits-all deal. There's liability coverage, which is like the guardian angel for damages you cause to others. Then there's collision coverage, which swoops in like a superhero when your car meets an unexpected foe, be it a pole or another vehicle. And don't forget about comprehensive coverage, the shield against non-collision mishaps like theft or hailstorms. [Read more about auto coverages here.](/products/auto/coverages)

Oh, and did you know each state has its own set of rules for insurance? It's like navigating a road with different speed limits and traffic signs. We'll help you decode your state's insurance requirements so you can cruise worry-free.

## Factors Affecting Auto Insurance Rates

Now, let's talk about the nitty-gritty – the factors that make your insurance rate go vroom. Your driving history is like your insurance report card. A clean slate can earn you gold stars in the form of lower premiums. And don't underestimate the power of your credit score; it's like your insurance GPA. Keep it high, and you might qualify for the honor roll of lower rates.

As for your car, its make and model play a big role. Flashy sports cars might turn heads, but they can also turn up your insurance premium. On the flip side, safety features can be your insurance BFFs. Airbags, anti-lock brakes – these aren't just cool add-ons; they can save you some serious cash.

## Tips for Lowering Auto Insurance Premiums

Now, let's get into the nuts and bolts of saving money. Bundle up! No, not in warm clothes – bundle your insurance policies. Combine auto and home insurance, and watch the savings stack up like a perfectly made sandwich. Consider increasing your deductibles; it's like opting for a smaller entrance fee to the insurance party.

Keep that driving record squeaky clean. Think of it as maintaining a zen garden – one reckless move, and the insurance bonsai might suffer. And don't be shy about claiming those discounts. Safe driver, multi-car owner, good student – if you've got it, flaunt it!

## Common Mistakes to Avoid

Picture this: you find a seemingly fantastic deal, but it's too good to be true. You jump at it, only to realize later that you're underinsured. It's like buying a bargain parachute – it might not open when you need it most. And hey, honesty is the best policy, especially when it comes to disclosing information. Forget to mention that fender bender? It might come back to haunt you.

And don't treat your insurance coverage like a relic from the past. Review and update regularly. Life changes, and so should your coverage. It's like upgrading from a flip phone to a smartphone – you wouldn't stick with outdated tech, right?

## Why Choose Ai United for Auto Insurance

Now, here's where the rubber meets the road. Why choose us? Well, besides the fact that we're awesome, we offer the latest tech tools to make your insurance journey smooth. Our online platform is user-friendly, making it a breeze to get quotes and compare options. But we're not just algorithms and codes – we've got a squad of satisfied customers ready to vouch for us. Check out their stories and discover why we're not just an insurance agency; we're your trusted travel companions on the road of life.

## How to Get a Quote with Ai United

Ready to roll with us? Getting a quote is as easy as ordering your favorite takeout. Follow our step-by-step guide, explore our online quoting tool, and if you prefer the human touch, we're just a call away. Our team is here to customize a plan that fits you like a glove – or in this case, like the perfect driving gloves.

## Conclusion
And there you have it, the ultimate guide to finding cheap auto insurance quotes. We've covered everything from insurance basics to avoiding common pitfalls. Now, armed with knowledge and a solid plan, you're ready to hit the road with confidence. So go ahead, get that quote, and let's make sure you're covered for whatever twists and turns life throws your way. Safe travels!
*/



export async function getServerSideProps(context) {
    const { id } = context.params
    return await GetArticles(id, context.req.headers.referer)
}


export default function (props) {
    //console.log(props.data)
    //console.log(props.ArticleContent)
    // console.log(props.data.attributes.ArticleContent)
    const ArticleNotFound = props.data === undefined || props.ArticleContent === undefined
    const date = {
        month: new Date().getMonth(),
        day: new Date().getDate(),
        year: new Date().getFullYear()
    }
    const articleTitle = {
        title: ArticleNotFound ? {} : props.data.attributes.Title,
        summary: ArticleNotFound ? {} : props.data.attributes.Summary,
    }

    return <>
        {ArticleNotFound ?
            <Box
                sx={{ textAlign: "center" }}
            >
                <Typography variant="h4">
                    Article Not Found
                </Typography>
                <Link href={PATHCONSTANTS.ARTICLES.INDEX}>
                    <Typography variant="h6"
                        sx={{ color: "blue", cursor: "pointer" }}
                    >
                        Return to Articles
                    </Typography>
                </Link>
            </Box>
            :
            <Article articleTitle={articleTitle} summary={props.data.attributes.Summary}
                date={date} category={props.data.attributes.Category}
                articleContent={props.ArticleContent}
            />
        }
    </>
}