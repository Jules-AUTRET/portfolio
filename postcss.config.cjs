module.exports = {
	plugins: {
		'postcss-import': {},       // Pour importer d'autres fichiers CSS
		'postcss-mixins': {},       // Pour utiliser des mixins
		'autoprefixer': {},         // Pour ajouter les préfixes spécifiques aux navigateurs
		'cssnano': {                // Pour minifier le CSS en production
			preset: 'default',
		},
	},
};