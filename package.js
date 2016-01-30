Package.describe({
  name: "clinical:device",
  summary: "Device detection for ClinicalFramework apps.",
  version: "1.2.0",
  git: "https://github.com/clinical-meteor/device.git"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.1.0.3');

  api.use([
    'meteor-platform',
    'underscore',
    'tracker',
    'session',
    'templating'
  ], 'client');

  api.add_files([
    'client/device_detection.js',
    'client/device_helpers.js'
  ], 'client');

  api.export("Device");
});
