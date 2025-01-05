import { realiseTag, optimiserTag, collaborerTag, gererTag, conduireTag, administrerTag, type Tag } from './tagType';

export interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
    alt: string;
    tags: Tag[];
}

const connect4: Project = {
    title: "Jeu du puissance 4 et intelligence artificielle",
    description: "Le fameux jeu stratégique, le Puissance 4, réalisé en C : conception et réalisation d'une maquette, réalisation de l'intégralité d'un jeu fonctionnel avec interface en ligne de commande, ainsi qu'une IA. Celle-ci est basée sur un algorithme de recherche de solution par élagage alpha-bêta.",
    link: "/",
    image: "/images/prototype-app.png",
    alt: "Mon projet",
    tags: [realiseTag, optimiserTag, collaborerTag],
}

const connect433: Project = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    tags: [],
}

const connect4222: Project = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    tags: [],
}

const connect411: Project = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    tags: [],
}

const connect43: Project = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    tags: [],
}

const connect41: Project = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    tags: [],
}

const connect42: Project = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    tags: [],
}

export const projects = [connect4];