import { realiseTag, optimiserTag, collaborerTag, gererTag, conduireTag, administrerTag, type Tag } from './tagType';
import {
    alexandre,
    charlesAlexandre,
    type Collaborator, duncan,
    gabin, kim,
    mathis,
    raphael,
    rayane,
    romain
} from './collaborators';

export interface Project {
    shortTitle: string;
    title: string;
    description: string;
    link: string;
    image: string;
    alt: string;
    tags: Tag[];
    file: string;
    detail: {
        context: string;
        problematic: string;
        realisation: string;
        conclusion: string;
        image1: string;
        image2: string;
        image3: string;
        image4: string;
        collaborators: Collaborator[];
        creationDate: Date;
    };
}

export const breizhIle: Project = {
    shortTitle: 'Breizh Ile',
    title: "BreizhÎle: Site de location immobilière en Bretagne",
    description: "Projet final de 2ème année du BUT Informatique. Réalisation de platforme de location de bien immobilier: Maquette, base de données, front/back office. Réalisé en 2 sprints de 2 semaines.",
    link: "/projects/breizh-ile",
    image: "/images/projects/breizh-ile/1.png",
    alt: "Mon projet",
    file: "/images/projects/breizh-ile/breizh-ile.zip",
    tags: [realiseTag, optimiserTag, administrerTag, gererTag, conduireTag, collaborerTag],
    detail: {
        context: "L'association ALHaIZ Breizh (association fictive dans le cadre d'un projet d'étude), un regroupement de propriétaires de logements en Bretagne, souhaite créer une plateforme en ligne indépendante pour gérer la location saisonnière. L'objectif est de proposer une alternative qui serait locale et différente des autres platformes de location, tout en promouvant le tourisme breton et en respectant une charte éco-responsable.",
        problematic: "Nous avons été mandaté afin concevoir et développer cette plateforme de A à Z. La mission inclut l’analyse des besoins, la rédaction des User Stories, la conception technique, et la livraison du site, comprenant un Front Office pour les visiteurs et un Back Office pour les propriétaires.",
        realisation: "Nous avons commencé par réaliser une analyse des besoins de notre client. Ainsi, nous avons pu communiquer avec eux sur les différents aspects de ce projet pour éclaircir des demandes ou encore proposer de toutes nouvelles fonctionnalités. <br><br>Ensuite, nous avons réalisé une maquette interactive sur Figma pour le format desktop et mobile de notre front-office et back-office. <br><br>Nous nous sommes ensuite chargés de la réalisation du site lui-même. Il a été réalisé en PHP natif pour le front et le back, Sass pour la mise en forme et une API réalisée en C pour l'accès aux données de notre base de données MySQL.",
        conclusion: "La plateforme a été livrée dans les temps. Suite à la review, le client s'est dit satisfait du résultat final. Ce projet m'a appris beaucoup de choses : l'autonomie offerte par celui-ci nous a permis de nous tromper, comprendre et apprendre. En plus de la maquette et du site lui-même, j'ai été en charge de la réalisation de l'API en C, ce qui s'est révélé complexe et exigeant. Il s'agit sûrement de l'un de mes plus gros projets à ce jour.",
        image1: "/images/projects/breizh-ile/1.png",
        image2: "/images/projects/breizh-ile/2.png",
        image3: "/images/projects/breizh-ile/3.png",
        image4: "/images/projects/breizh-ile/4.png",
        collaborators: [gabin, raphael, rayane, alexandre, duncan, kim],
        creationDate: new Date("2024-06-30"),
    },
}

export const connect4: Project = {
    shortTitle: 'Puissance 4',
    title: "Jeu du puissance 4 et intelligence artificielle",
    description: "Le fameux jeu stratégique, le Puissance 4, réalisé en C : conception et réalisation d'une maquette, réalisation de l'intégralité d'un jeu fonctionnel avec interface en ligne de commande, ainsi qu'une IA. Celle-ci est basée sur un algorithme de recherche de solution par élagage alpha-bêta.",
    link: "/projects/puissance4",
    image: "/images/projects/connect4/5.jpg",
    alt: "Mon projet",
    file: "/images/projects/connect4/puissance4.zip",
    tags: [realiseTag, optimiserTag, collaborerTag],
    detail: {
        context: "Dans le cadre de mes études, j’ai participé à un projet visant à créer un jeu de Puissance 4 jouable dans un terminal. L’objectif était de suivre une méthodologie complète : prototype en pseudo-code, maquette, développement en C, et implémentation d’une intelligence artificielle pour les parties homme-machine.",
        problematic: "Comment développer un jeu de Puissance 4 jouable dans un terminal en respectant une démarche structurée, depuis la conception initiale jusqu’à l’intégration d’une intelligence artificielle compétitive ?",
        realisation: "Le projet était bien plus complexe que je ne voulais bien l'admettre. J'avais une vision bien trop simpliste de l'algorithme du minimax, ce qui m'a ralenti au départ. La conception même du jeu en C était cependant assez rudimentaire, les règles étant claires, le jeu n'était pas bien complexe à réaliser. Il m'a fallu du temps et de la patience pour apprendre et comprendre le minimax afin de réaliser ce jeu.",
        conclusion: "Ce projet est l'un de ceux que j'ai préféré dans ma première année en étude supérieure. J'y ai énormément appris, je comprends désormais bien mieux les algorithmes complexes et cela m'a apprit plein de méthodes et astuces que j'utilise désormais constamment dans mes projets.",
        image1: "/images/projects/connect4/1.jpg",
        image2: "/images/projects/connect4/2.png",
        image3: "/images/projects/connect4/3.png",
        image4: "/images/projects/connect4/4.jpg",
        collaborators: [romain],
        creationDate: new Date("2022-11-20"),
    },
}

export const LLTK: Project = {
    shortTitle: 'LLTK: Long live the king!',
    title: "LLTK: Long live the king!",
    description: "Long live the king, ou LLTK, est un jeu mobile fait sur Godot Engine. Réalisé seul en 1 mois, il s'agit d'un jeu simple sur la base de questions qui pousseront le joueur dans des choix qui influenceront sa partie. Les assets ainsi que le code ont entièrement été réalisés par mes soins.",
    link: "/projects/LLTK",
    image: "/images/projects/LLTK/1.png",
    alt: "Mon projet",
    file: "",
    tags: [realiseTag, optimiserTag],
    detail: {
        context: "Dans le cadre d’un projet personnel, j’ai souhaité créer un jeu vidéo complet avec Godot Engine, mon moteur de jeu préféré. Mon objectif était de concevoir un jeu simple et stratégique, basé sur des dialogues interactifs et des choix moraux, offrant une durée de vie \"infinie\". Ce projet m’a permis d’explorer toutes les étapes de création, de la conception graphique à la publication en ligne.",
        problematic: "Comment concevoir et développer, seul, un jeu vidéo simple et stratégique avec Godot Engine, en intégrant des mécaniques de choix interactifs et en assurant une expérience immersive tout en facilitant sa publication en ligne ?",
        realisation: "Afin de mener à bien ce projet, j'ai dans un premier temps réalisé les graphismes de celui-ci afin de poser une ambiance et un thème qui me convenaient. Après avoir bien défini ma charte graphique et mon but, j'ai dû choisir mon moteur de jeu. Un choix peu complexe puisque j'étais déjà très attiré par Godot. <br><br>Il me fallait un moyen simple mais efficace de pouvoir gérer des centaines de dialogues avec leurs réponses et leurs impacts sur la partie. J'ai opté pour un format JSON, simple et efficace, je pouvais facilement stocker tout ce que je voulais. De plus, le langage GDScript me permettait de facilement en récupérer les données. Par la suite, ce n'était que l'affaire des interactions des joueurs avec le jeu, j'ai donc réalisé une interface simple avec seulement deux réponses possibles. Quelques finitions, la réalisation des documents légaux pour publier le jeu, et c'était fini !",
        conclusion: "Ce projet m'a appris énormément de choses. Il m'a apprit à conduire un projet seul que ce soit par l'aspect graphique ou technique. Mais il m'a aussi apprit beaucoup de choses que je ne savais pas lors de la publication d'un jeu en ligne. J'ai maintenant une bien meilleure appréhension des problèmes complexes et des documents légaux lors d'une publication.",
        image1: "/images/projects/LLTK/1.png",
        image2: "/images/projects/LLTK/2.webp",
        image3: "/images/projects/LLTK/3.webp",
        image4: "/images/projects/LLTK/4.webp",
        collaborators: [],
        creationDate: new Date("2022-11-06"),
    },
}

export const outilInfoSchema: Project = {
    shortTitle: 'Outil info schema',
    title: "Outil InfoSchema",
    description: "Projet web réalisé dans le cadre de mon alternance au GIE Even Distribution. Il permet d'accéder simplement a toutes les informations des bibliothèques et tables SQL de l'entreprise avec des options avancés d'exportation PDF / Excel et de comparaison de tables.",
    link: "/projects/outil-info-schema",
    image: "/images/projects/outil-info-schema/1.png",
    alt: "Mon projet",
    file: "",
    tags: [realiseTag, optimiserTag, administrerTag, conduireTag, collaborerTag],
    detail: {
        context: "",
        problematic: "",
        realisation: "",
        conclusion: "",
        image1: "/images/projects/outil-info-schema/1.png",
        image2: "/images/projects/outil-info-schema/2.png",
        image3: "/images/projects/outil-info-schema/3.png",
        image4: "/images/projects/outil-info-schema/4.png",
        collaborators: [],
        creationDate: new Date("2023-12-18"),
    },
}

export const teamBuilding: Project = {
    shortTitle: 'Team Building',
    title: "TeamBuilding",
    description: "Imagination et conception d'un faux projet de Team Building pour OVHCloud. Réalisation d'un rapport détaillé sur le projet, conception de flyer et d'une vidéo promotionnelle. ",
    link: "/projects/team-building",
    image: "/images/projects/team-building/2.png",
    alt: "Mon projet",
    file: "/images/projects/team-building/travail-d-equipe.zip",
    tags: [gererTag, conduireTag, collaborerTag],
    detail: {
        context: "Dans le cadre d’un projet scolaire collaboratif, nous avons travaillé sur la conception et la réalisation d’un événement de team building pour l’entreprise OVHCloud Brest (dans un cadre fictionnel). Ce projet avait pour objectif de répondre aux besoins spécifiques de l’entreprise en matière de cohésion d’équipe, tout en respectant les contraintes organisationnelles, graphiques, et légales.",
        problematic: "Comment concevoir et organiser un événement de team building efficace et attrayant pour les employés d’OVHCloud Brest, tout en respectant les contraintes organisationnelles, graphiques, et légales ?",
        realisation: "Après avoir récolté les données, nous avons commencé par créer un document détaillé sur le type d’événement que nous voulions créer, avec notamment une phase explicative des contraintes et des solutions proposées pour les lever. Suite à cela, nous avons créé des flyers ainsi qu’une charte graphique pour OVHCloud, en n’oubliant pas les différentes mentions légales nécessaires. Et enfin, nous avons réalisé un film promotionnel dynamique et respectant la charte graphique pour donner envie aux salariés de venir à l’événement.",
        conclusion: "J’ai appris beaucoup de choses au cours de ce projet. J’ai réappris à me servir d’un logiciel de montage, j’ai amélioré mes compétences en graphisme et c’était une expérience très amusante à faire.",
        image1: "/images/projects/team-building/1.png",
        image2: "/images/projects/team-building/2.png",
        image3: "/images/projects/team-building/3.png",
        image4: "/images/projects/team-building/4.png",
        collaborators: [romain, mathis],
        creationDate: new Date("2023-05-29"),
    },
}

export const automatisation: Project = {
    shortTitle: 'Automatisation',
    title: "Automatisation création de document PDF",
    description: "Automatisation de la création de document PDF détaillé à partir de données de régions fournies par des fichiers textes. Réalisation de multiples scripts bash et PHP ainsi que d'une utilisation de Docker pour assurer la virtualisation.",
    link: "/projects/automatisation",
    image: "/images/projects/automatisation/5.png",
    alt: "Mon projet",
    file: "/images/projects/automatisation/automatisation-avec-docker.zip",
    tags: [realiseTag, administrerTag, collaborerTag],
    detail: {
        context: "Dans le cadre de ce projet en équipe, nous avons conçu un système automatisé et conteneurisé pour générer des PDF à partir de données extraites de Wikipédia. L'objectif était de permettre à un client de facilement entrer des informations sur des régions de France et obtenir des documents PDF correspondants, tout en fournissant une documentation claire et accessible.",
        problematic: "Comment concevoir et mettre en place un système automatisé, conteneurisé avec Docker, pour extraire, convertir et générer des PDF à partir de données spécifiques sur des régions de France ?",
        realisation: "Dans un premier temps, nous avons appris les bases de ce nouvel outil qu'est Docker. Suite à quoi nous avons commencé individuellement des prototypes de script Bash ou PHP avant de réellement en venir à la réalisation. <br><br>Personnellement, je me suis occupé de la partie conversion des données en JSON, afin de faciliter l'utilisation de celles-ci, et de la conversion des données en page HTML avec du PHP (pour la conversion en PDF). Ce projet n'était pas de tout repos, nous avions beaucoup de difficultés à faire fonctionner nos scripts ensemble.",
        conclusion: "Ce projet en équipe m'a appris énormément de choses. J'ai d'abord appris que notre méthodologie de travail individuel que l'on lie par la suite était loin d'être la plus optimale. De plus, je connais désormais bien mieux le Bash et le PHP qui sont des composants essentiels pour un informaticien.",
        image1: "/images/projects/automatisation/1.png",
        image2: "/images/projects/automatisation/2.png",
        image3: "/images/projects/automatisation/3.png",
        image4: "/images/projects/automatisation/4.png",
        collaborators: [gabin, romain, charlesAlexandre],
        creationDate: new Date("2023-01-19"),
    },
}

export const projects = [
    {link: "breizh-ile", data: breizhIle},
    {link: "puissance4", data: connect4},
    {link: "LLTK", data: LLTK},
    {link: "outil-info-schema", data: outilInfoSchema},
    {link: "team-building", data: teamBuilding},
    {link: "automatisation", data: automatisation},
]