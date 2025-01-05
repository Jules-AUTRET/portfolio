import { Mastery, type Tool } from './tool';

const postgreSql: Tool = {
	image: "/images/tools/postgresql-wikipedia.png",
	alt: "Système de gestion de base de données PostgreSQL",
	description: "Système de gestion de base de données PostgreSQL",
	mastery: Mastery.High,
}

const mySql: Tool = {
	image: "/images/tools/mysql-stickpng.com.png",
	alt: "Système de gestion de base de données MySQL",
	description: "Système de gestion de base de données MySQL",
	mastery: Mastery.High,
}

const db2Sql: Tool = {
	image: "/images/tools/db2sql-db2tutorial.com.png",
	alt: "Système de gestion de base de données DB2SQL",
	description: "Système de gestion de base de données DB2SQL",
	mastery: Mastery.Medium,
}

const dbeaver: Tool = {
	image: "/images/tools/DBeaver-wikipedia.png",
	alt: "Outil d'administration de base de données DBeaver",
	description: "Outil d'administration de base de données DBeaver",
	mastery: Mastery.High,
}

export const bdd = [postgreSql, mySql, db2Sql, dbeaver];