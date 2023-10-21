import type { BaseURLocation, PageType, SocialLinkPageType } from "./constants";

/**
 * Uses the location and filename param provided to generate quick CDN link for images stored in github repositary
 * @param {BaseURLocation} location:BaseURLocation
 * @param {string} filename:string
 * @returns {string}
 */
export const imageBaseURL = (location: BaseURLocation, filename: string) => {
  return `https://cdn.jsdelivr.net/gh/zedansaheer/zedansaheer-dotcom@main/${location}/${filename}`
}

/**
 * Sets the body tailwind style class tags based on the page type param
 * @param {PageType} pageType:"main"|"error"|"index"
 * @returns {class}
 */
export const setBodyStyles = (pageType: PageType) => {
  let baseStyles = "relative min-h-screen bg-white-100 dark:bg-black-100 overflow-x-hidden pt-40 sm:pt-36"

  switch (pageType) {
    case "index": {
      return `${baseStyles} polka-dots-bg`
    }
    case "error": {
      return "relative min-h-screen bg-white-100 dark:bg-black-100 overflow-x-hidden p-0"
    }
    default: {
      return baseStyles;
    }
  }
};

/**
 * Sets the social links container tailwind style class tags based on the page type param
 * @param {SocialLinkPageType} pageType:"main"|"error"|"index"
 * @returns {class}
 */
export const setSocialLinksStyles = (pageType: SocialLinkPageType) => {
  let baseStyles = "social-container flex justify-center items-center";

  switch (pageType) {
    case "footer": {
      return `${baseStyles} xs:gap-0 gap-4`
    }
    default: {
      return `${baseStyles} show-border gap-4`;
    }
  }
};

/**
 * Takes an array of strings and transforms it into a string of words seperated by ', '
 * @param {string[]} keywords - an array of words 
 * @returns {string} the array combined into a string seperated by commas
 * @example ['this','is','an','example'] => "this, is, an, example"
 */
export const joinKeywordsArrToString = (keywords: string[]) => keywords.join(", "); 

/**
 * Takes a string of image source from Astro and returns the relative path to the source folder, If the image is not provided returns undefined
 * @param {any} src - absolute path to an image
 * @returns {string} relative path / undefined
 * @example "{some}/{long}/{absolute path to your image}" => "{short}/{relative path}"
 */
export const generateImageBaseURL = (src : string | undefined) => src ? src.split("/").slice(-3).join("/").split("?")[0] : undefined;