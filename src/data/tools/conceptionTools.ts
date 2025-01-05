import { Mastery, type Tool } from './tool';

const figma: Tool = {
	image: '/images/tools/figma-iconscout.com.webp',
	alt: 'Outil en ligne de maquettage Figma',
	description: 'Outil en ligne de maquettage Figma',
	mastery: Mastery.High,
};

const photoshop: Tool = {
	image: '/images/tools/Photoshop-wiktionary.org.png',
	alt: "Logiciel d'édition d'image Photoshop",
	description: "Logiciel d'édition d'image Photoshop",
	mastery: Mastery.VeryHigh,
};

const premierPro: Tool = {
	image: '/images/tools/PremierePro-wikipedia.png',
	alt: 'Logiciel de montage vidéo Premiere Pro',
	description: 'Logiciel de montage vidéo Premiere Pro',
	mastery: Mastery.High,
};

const UML: Tool = {
	image: '/images/tools/uml-sparks-formation.com.png',
	alt: 'Unified Modeling Language (UML)',
	description: 'Unified Modeling Language (UML)',
	mastery: Mastery.High,
};

export const conception = [figma, photoshop, premierPro, UML];