Package.describe({
    summary: "Currencies smart package"
});

Package.on_use(function (api) {
    api.use();
    api.add_files("currencies.js");
});
