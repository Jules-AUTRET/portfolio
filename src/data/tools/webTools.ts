import { Mastery, type Tool } from './tool';

const html: Tool = {
	image: "/images/tools/html-iconscout.webp",
	alt: "Langage de balisage HTML",
	description: "Langage de balisage HTML",
	mastery: Mastery.VeryHigh,
}

const css: Tool = {
	image: "/images/tools/css-wikipedia.webp",
	alt: "Cascading Style Sheets (CSS)",
	description: "Cascading Style Sheets (CSS)",
	mastery: Mastery.High,
}

const sass: Tool = {
	image: "/images/tools/sass-sass-lang.com.webp",
	alt: "Syntactically awesome stylesheets (SASS)",
	description: "Syntactically awesome stylesheets (SASS)",
	mastery: Mastery.High,
}

const javascript: Tool = {
	image: "/images/tools/JavaScript-wikipedia.webp",
	alt: "Langage de programmation JavaScript",
	description: "Langage de programmation JavaScript",
	mastery: Mastery.High,
}

const typescript: Tool = {
	image: "/images/tools/TypeScript-wikipedia.webp",
	alt: "Langage de programmation TypeScript",
	description: "Langage de programmation TypeScript",
	mastery: Mastery.Medium,
}

const php: Tool = {
	image: "/images/tools/PHP-wikipedia.webp",
	alt: "Langage de programmation PHP",
	description: "Langage de programmation PHP",
	mastery: Mastery.High,
}

const svelte: Tool = {
	image: "/images/tools/svelte-wikipedia.webp",
	alt: "Framemork pour interface utilisateur web Svelte",
	description: "Framemork pour interface utilisateur web Svelte",
	mastery: Mastery.Medium,
}

export const web = [html, css, sass, javascript, typescript, php, svelte];