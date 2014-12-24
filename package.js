Package.describe({
	name: 'alisalaah:currencies',
	summary: 'Meteor package to use live currencies and exchange rates in your app',
	version: '1.0.2',
	git: 'https://github.com/alisalaah/meteor-currencies.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	api.use(['http'], 'server');
	api.use(['ui'], 'client');
	
    api.add_files("currencies.js");
});
