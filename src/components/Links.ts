export interface Link {
    text: string;
    route: string;
}

export const Links: Link[] = [
    {
        text: "Home",
        route: "/"
    },
    {
        text: "Bio",
        route: "/work"
    },
    {
        text: "Music",
        route: "/music"
    }
]