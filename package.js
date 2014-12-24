Package.describe({
	name: 'alisalaah:currencies',
	summary: 'Meteor package to use live currencies and exchange rates in your app',
	version: '2.0.0',
	git: 'https://github.com/alisalaah/meteor-currencies.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2');
	api.use(['http'], 'server');
	api.use(['ui'], 'client');
	
    api.add_files("currencies.js");
});
