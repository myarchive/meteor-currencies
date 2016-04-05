Package.describe({
	name: 'alisalaah:currencies',
	summary: 'Live updated currencies database',
	version: '2.1.2',
	git: 'https://github.com/alisalaah/meteor-currencies.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2');
	api.use(['http'], 'server');
	api.use(['ui'], 'client');
	api.use(['session'], 'client');
	
    api.add_files("currencies.js");
});
