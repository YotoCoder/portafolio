import websites from "./websites.js"

const media = {
    discord: "914240860101681163",
    github: "YotoDevis",
    figma: "yoto_dev",
    replit: "YotoDev",
    stackOverflow: "19758208/yoto",
    codewars: "YotoDevis",
    devTo: "yotodevis",
    cssBattle: "yoto_dev",
    codepen: "yoto_dev",
    dribble: "Yoto_dev",
    email: "yoto@yoto-dev.ml"
}

const proxy = {
    get(target, name) {
        if (name === "emailRaw") 
            return target.email

        return `${websites[name] ?? ""}${target[name]}`
    }
}

export default new Proxy(media, proxy);
export const discordTag = "!Yoto#3519"

