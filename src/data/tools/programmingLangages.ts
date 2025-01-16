import { Mastery, type Tool } from './tool';

const c: Tool = {
	image: "/images/tools/C-wikipedia.webp",
	alt: "Langage de programmation C",
	description: "Langage de programmation C",
	mastery: Mastery.Medium,
};

const csharp: Tool = {
	image: "/images/tools/Csharp-wikipedia.webp",
	alt: "Langage de programmation C#",
	description: "Langage de programmation C#",
	mastery: Mastery.High,
}

const java: Tool = {
	image: "/images/tools/java-wallpapers.com.webp",
	alt: "Langage de programmation Java",
	description: "Langage de programmation Java",
	mastery: Mastery.High,
}

const python: Tool = {
	image: "/images/tools/python-cleanpng.com.webp",
	alt: "Langage de programmation Python",
	description: "Langage de programmation Python",
	mastery: Mastery.VeryHigh,
}

const bash: Tool = {
	image: "/images/tools/bash-notos.fr.webp",
	alt: "Bourne-Again shell (Bash)",
	description: "Bourne-Again shell (Bash)",
	mastery: Mastery.High,
}

const visualStudioCode: Tool = {
	image: "/images/tools/VisualStudioCode-wikipedia.webp",
	alt: "Logiciel Visual Studio Code",
	description: "Logiciel Visual Studio Code",
	mastery: Mastery.VeryHigh,
}

const jetBrainsSoftware: Tool = {
	image: "/images/tools/jetbrains-wikipedia.webp",
	alt: "Les logiciels de Jetbrains Software",
	description: "Les logiciels de Jetbrains Software",
	mastery: Mastery.High,
}

const godot: Tool = {
	image: "/images/tools/godot-godotengine.org.webp",
	alt: "Moteur de jeu Godot",
	description: "Moteur de jeu Godot",
	mastery: Mastery.High,
}

const docker: Tool = {
	image: "/images/tools/docker-iconfinder.com.webp",
	alt: "Outil de conteneurisation Docker",
	description: "Outil de conteneurisation Docker",
	mastery: Mastery.High,
}

const git: Tool = {
	image: "/images/tools/git-git-scm.com.webp",
	alt: "Logiciel de gestion de versions décentralisé Git",
	description: "Logiciel de gestion de versions décentralisé Git",
	mastery: Mastery.High,
}

export const programmingLangages = [c, csharp, java, python, bash, visualStudioCode, jetBrainsSoftware, godot, docker, git];