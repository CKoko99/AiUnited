import PATHCONSTANTS from "constants/sitemap";

export interface ArticleDetailsInterface {
    id: number;
    attributes: {
        Category: string;
        title_slug: string;
        LinkTitle: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        PopularRank?: number;
        Title: {
            en: string;
            es: string;
        };
        Summary: {
            en: string;
            es: string;
        };
        Thumbnail: { data: { attributes: { url: string } } };

        ArticleContent: {
            id: number;
            en: string;
            es: string;
            Image: {
                Image: {
                    data: {
                        attributes: {
                            url: string;
                        };
                    };
                };
                en: string;
                es: string;
            };
            CTA1: boolean;
            CTA2: boolean;
        }[];
    };
}
export interface ArticleContentSectionInterface {
    id: string;
    text: {
        en: string;
        es: string;
    };
    Image: {
        url: string;
        caption: {
            en: string;
            es: string;
        };
    };
    CTA1: boolean;
    CTA2: boolean;
}

export async function GetArticle(id: string, referer: string) {
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND}/articles/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                origin: referer,
            },
        });
        if (!res.ok) {
            throw new Error(`Error fetching article: ${id}`);
        }
        const data = (await res.json()) as {
            data: ArticleDetailsInterface;
            ArticleContent: ArticleContentSectionInterface[];
        };
        //for every location give it a position attribute with lat and long combined
        return {
            props: {
                articleData: data.data, // This passes the fetched data as a prop to your component
                articleContent: data.ArticleContent,
            },
        };
    } catch (err) {
        throw new Error(`Error fetching article: ${id}`);
    }
}

export interface ArticleInterface {
    id: number;
    attributes: {
        Category: string;
        title_slug: string;
        LinkTitle: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        PopularRank?: number;
        Title: {
            en: string;
            es: string;
        };
        Summary: {
            en: string;
            es: string;
        };
        Thumbnail: { data: { attributes: { url: string } } };
        ArticleContent: {
            id: number;
            en: string;
            es: string;
            Image: {
                Image: {
                    data: {
                        attributes: {
                            url: string;
                        };
                    };
                };
                en: string;
                es: string;
            };
            CTA1: boolean;
            CTA2: boolean;
        }[];
    };
}

export async function GetAllArticles() {
    const res = await fetch(`${PATHCONSTANTS.BACKEND}/articles/`);
    const data = (await res.json()) as {
        data: ArticleInterface[];
        total: number;
    };

    return {
        props: {
            data: data.data, // This passes the fetched data as a prop to your component
        },
    };
}

export async function GetAllArticlesByCategoryAndPage({
    category,
    page,
}: {
    category: string;
    page: number;
}) {
    try {
        const res = await fetch(
            `${PATHCONSTANTS.BACKEND}/articles?category=${category}&page=${page}`,
        );
        const data = (await res.json()) as {
            data: ArticleInterface[];
            total: number;
        };
        return data;
    } catch (err) {
        throw new Error(`Error fetching articles for category: ${category}`);
    }
}
export async function GetPopularArticles() {
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND}/articles/popular`);
        const data = (await res.json()) as {
            data: ArticleInterface[];
        };
        return data.data;
    } catch (err) {
        throw new Error(`Error fetching popular articles`);
    }
}
