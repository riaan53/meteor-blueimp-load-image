Package.describe({
    name: 'riaan53:blueimp-load-image',
    summary: 'Manipulate images client side',
    version: '0.0.1',
    git: 'https://github.com/riaan53/meteor-blueimp-load-image'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0.3.1');

    api.addFiles('lib/JavaScript-Load-Image/js/load-image.js', 'client');
    api.addFiles('lib/JavaScript-Load-Image/js/load-image-ios.js', 'client');
    api.addFiles('lib/JavaScript-Load-Image/js/load-image-orientation.js', 'client');
    api.addFiles('lib/JavaScript-Load-Image/js/load-image-meta.js', 'client');
    api.addFiles('lib/JavaScript-Load-Image/js/load-image-exif.js', 'client');
    api.addFiles('lib/JavaScript-Load-Image/js/load-image-exif-map.js', 'client');

});
