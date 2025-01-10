import { realiseTag, optimiserTag, collaborerTag, gererTag, conduireTag, administrerTag, type Tag } from './tagType';

export interface Project {
    title: string;
    description: string;
    link: string;
    image: string;
    alt: string;
    tags: Tag[];
}

export const breizhIle: Project = {
    title: "BreizhÎle: Site de location immobilière en Bretagne",
    description: "Projet final de 2ème année du BUT Informatique. Réalisation de platforme de location de bien immobilier: Maquette, base de données, front/back office. Réalisé en 2 sprints de 2 semaines.",
    link: "/projects/breizh-ile",
    image: "/images/projects/breizh-ile/1.png",
    alt: "Mon projet",
    tags: [realiseTag, optimiserTag, administrerTag, gererTag, conduireTag, collaborerTag],
}

export const connect4: Project = {
    title: "Jeu du puissance 4 et intelligence artificielle",
    description: "Le fameux jeu stratégique, le Puissance 4, réalisé en C : conception et réalisation d'une maquette, réalisation de l'intégralité d'un jeu fonctionnel avec interface en ligne de commande, ainsi qu'une IA. Celle-ci est basée sur un algorithme de recherche de solution par élagage alpha-bêta.",
    link: "/projects/puissance4",
    image: "/images/prototype-app.png",
    alt: "Mon projet",
    tags: [realiseTag, optimiserTag, collaborerTag],
}

export const LLTK: Project = {
    title: "LLTK: Long live the king!",
    description: "Long live the king, ou LLTK, est un jeu mobile fait sur Godot Engine. Réalisé seul en 1 mois, il s'agit d'un jeu simple sur la base de questions qui pousseront le joueur dans des choix qui influenceront sa partie. Les assets ainsi que le code ont entièrement été réalisés par mes soins.",
    link: "/projects/LLTK",
    image: "/images/prototype-app.png",
    alt: "Mon projet",
    tags: [realiseTag, optimiserTag],
}

export const outilInfoSchema: Project = {
    title: "Outil InfoSchema",
    description: "Projet web réalisé dans le cadre de mon alternance au GIE Even Distribution. Il permet d'accéder simplement a toutes les informations des bibliothèques et tables SQL de l'entreprise avec des options avancés d'exportation PDF / Excel et de comparaison de tables.",
    link: "/projects/outil-info-schema",
    image: "/images/prototype-app.png",
    alt: "Mon projet",
    tags: [realiseTag, optimiserTag, administrerTag, conduireTag, collaborerTag],
}

export const teamBuilding: Project = {
    title: "TeamBuilding",
    description: "Imagination et conception d'un faux projet de Team Building pour OVHCloud. Réalisation d'un rapport détaillé sur le projet, conception de flyer et d'une vidéo promotionnelle. ",
    link: "/projects/team-building",
    image: "/images/prototype-app.png",
    alt: "Mon projet",
    tags: [gererTag, conduireTag, collaborerTag],
}

export const automatisation: Project = {
    title: "Automatisation création de document PDF",
    description: "Automatisation de la création de document PDF détaillé à partir de données de régions fournies par des fichiers textes. Réalisation de multiples scripts bash et PHP ainsi que d'une utilisation de Docker pour assurer la virtualisation.\n",
    link: "/projects/automatisation",
    image: "/images/prototype-app.png",
    alt: "Mon projet",
    tags: [realiseTag, administrerTag, collaborerTag],
}

export const projects = [breizhIle, connect4, LLTK, outilInfoSchema, teamBuilding, automatisation];