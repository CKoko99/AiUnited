import PATHCONSTANTS from "../constants/sitemap";

const url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://www.aiunited.com";
export default async function sitemap() {
    let Pages = [];
    //let sitemap = PathConstants minus pathconstants.backend
    let Sitemap = { ...PATHCONSTANTS };
    delete Sitemap.BACKEND;
    delete Sitemap.BACKEND2;
    delete Sitemap.STRAPI;
    delete Sitemap.PHONE;
    delete Sitemap.PHONETEXT;
    delete Sitemap.SALESPHONE;
    delete Sitemap.QUOTES.LIABILITY;
    delete Sitemap.HOMEFULL;
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
                            lastModified: new Date(),
                        });
                    }
                }
                //if the subpath is a string, add it to the Pages array
                else {
                    Pages.push({
                        url: url + Sitemap[path][subpath],
                        lastModified: new Date(),
                    });
                }
            }
        }
        //if the path is a string, add it to the Pages array
        else {
            Pages.push({
                url: url + Sitemap[path],
                lastModified: new Date(),
            });
        }
    }

    //filter pages for urls that don't have a # in them
    Pages = Pages.filter((page) => !page.url.includes("#"));

    //get all the locations from the backend and add them to the sitemap
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND}/locations/aiunited`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await res.json();
        data.locations.forEach((location) => {
            Pages.push({
                url: url + "/locations/" + location.link,
                lastModified: new Date(),
            });
        });
    } catch (err) {
        console.log(err);
    }
    //get all the articles from the backend and add them to the sitemap
    try {
        let page = 1;
        const pageSize = 9;
        const category = "All Categories";
        const res = await fetch(
            `${PATHCONSTANTS.BACKEND}/articles?category=${category}&page=${page}`,
        );
        const data = await res.json();
        const totalPages = Math.ceil(data.total / pageSize);
        for (let i = 1; i <= totalPages; i++) {
            const res = await fetch(
                `${PATHCONSTANTS.BACKEND}/articles?category=${category}&page=${i}`,
            );
            const data = await res.json();
            data.data.forEach((article) => {
                Pages.push({
                    url: url + "/articles/" + article.attributes.title_slug,
                    lastModified: new Date(article.attributes.updatedAt),
                });
            });
        }
    } catch (err) {
        console.log(err);
    }

    return [...Pages];
}
