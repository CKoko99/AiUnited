


export default async function (id, referer) {
    try {
        const res = await fetch(`${process.env.BACKEND}/articles/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "origin": referer
                },
            })
        if (res.ok) {
            const data = await res.json()
            //for every location give it a position attribute with lat and long combined
            return {
                props: {
                    data: data.data, // This passes the fetched data as a prop to your component
                    ArticleContent: data.ArticleContent
                },
            }
        } else {
            return {
                props: {
                    data: [], // This passes the fetched data as a prop to your component
                },
            }
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                data: [], // This passes the fetched data as a prop to your component
            },
        }
    }
}