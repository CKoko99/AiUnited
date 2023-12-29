import PATHCONSTANTS from '../constants/sitemap'

const url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://aiunited.com"
export default async function sitemap() {
    let Pages = []
    //let sitemap = PathConstants minus pathconstants.backend
    let Sitemap = PATHCONSTANTS
    delete Sitemap.BACKEND
    delete Sitemap.STRAPI
    delete Sitemap.PHONE
    delete Sitemap.PHONETEXT
    delete Sitemap.ARTICLES
    delete Sitemap.QUOTES.LIABILITY
    //loop through all the paths in PATHCONSTANTS
    for (const path in Sitemap) {
        //if the path is an object, loop through the subpaths
        if (typeof Sitemap[path] === "object") {
            for (const subpath in Sitemap[path]) {
                //if the subpath is an object, loop through the subsubpaths
                if (typeof Sitemap[path][subpath] === "object") {
                    for (const subsubpath in Sitemap[path][subpath]) {
                        Pages.push({
                            url: url + Sitemap[path][subpath][subsubpath],
                            lastModified: new Date()
                        })
                    }
                }
                //if the subpath is a string, add it to the Pages array
                else {
                    Pages.push({
                        url: url + Sitemap[path][subpath],
                        lastModified: new Date()
                    })
                }
            }
        }
        //if the path is a string, add it to the Pages array
        else {
            Pages.push({
                url: url + Sitemap[path],
                lastModified: new Date()
            })
        }
    }

    //filter pages for urls that don't have a # in them
    Pages = Pages.filter(page => !page.url.includes("#"))

    return [
        {
            url: "https://aiunited-uc3v53rceq-ue.a.run.app",
            lastModified: new Date()
        },
        ...Pages
    ]
}