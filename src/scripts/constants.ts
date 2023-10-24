import { z } from "astro:content";
import { imageBaseURL, returnDateStringBasedOnMDDate } from "./utils";

/* Types */
export type BaseURLocation = "public" | "src" | "dist";
export type PageType = "main" | "error" | "index";
export type SocialLinkPageType = "footer" | "menu";

/* Constants */
export const categories = ["software engineering", "life"] as const;

export const publishDateTransformedToLocaleDate = z.string().transform((date) => {
    const cardDate = returnDateStringBasedOnMDDate(new Date(date));
    const blogDate = new Date(date).toLocaleDateString('en-us', { year: "numeric", weekday: "long", month: "short", day: "2-digit" });

    return {
        cardDate,
        blogDate
    };
});

/* Interfaces */
export interface Header {
    title?: string;
    description?: string;
    image: {
        alt: string;
        src: string;
        share: string;
        shareDark: string;
    }
    keywords?: string[];
    author?: string;
}

/* Variables */
export const defaultKeywords: Header['keywords'] = [
    "portfolio",
    "javascript",
    "developer",
    "software engineer",
    "programmer",
    "typescript",
    "motivation",
    "zedan",
    "programming",
    "career",
    "blogs",
    "content",
    "zedan saheer",
    "writing",
    "engineering",
    "blogging",
    "content-writing",
    "software developer",
    "web developer",
    "thinking",
    "wisdom",
    "startup",
    "ideas",
];

export const defaultImageMetaData: Header['image'] = {
    src: imageBaseURL("public", "media/zedan_banner.jpg"),
    share: imageBaseURL("public", "media/zedan_banner.jpg"),
    shareDark: imageBaseURL("public", "media/zedan_banner_dark.jpg"),
    alt: "Zedan Saheer - Brand Banner"
};

export const defaultMetaData: Header = {
    title: "Zedan Saheer - Software Engineer, Thinker and Creator",
    description: "Zedan Saheer is a Software Engineer, Innovator, Content Writer and an Indie Chef. Focused on building highly performant and scalable code.",
    image: defaultImageMetaData,
    keywords: defaultKeywords,
    author: "Zedan Saheer",
};

export const blogPageMetaData: Header = {
    title: "BLOGS : Content, Learning and Ideas - Zedan Saheer",
    description:
        "The blogs section features a rich curated set of well thought written content, learnings and understanding conveyed verbally based on different subjects around life and software",
    author: "Zedan Saheer",
    image: defaultImageMetaData,
};

export const aboutPageMetaData: Header = {
    title: "About me - Zedan Saheer",
    description:
        "Want to know more about me and my journey? This page features a detailed retrospection of my life over the years and how I transformed into this version of me by my early 20's",
    author: "Zedan Saheer",
    image: defaultImageMetaData,
};
