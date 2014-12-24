Package.describe({
	name: 'alisalaah:currencies',
	summary: 'Meteor package to create a live collection with up to date currencies and exchange rates with functions to access the data.',
	version: '1.0',
	git: 'https://github.com/alisalaah/meteor-currencies.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	api.use(['http'], 'server');
	api.use(['ui'], 'client');
	
    api.add_files("currencies.js");
});
