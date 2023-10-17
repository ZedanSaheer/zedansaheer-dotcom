export const imageBaseURL = (filename: string) => {
  return `https://cdn.jsdelivr.net/gh/zedansaheer/zedansaheer-dotcom@main/public/${filename}`
}

export const setBodyStyles = (condition: "main" | "error" | "index") => {
  let baseStyles = "relative min-h-screen bg-white-100 dark:bg-black-100 overflow-x-hidden pt-40 sm:pt-36"

  switch (condition) {
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
