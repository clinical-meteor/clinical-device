Package.describe({
  name: "clinical:device",
  summary: "Device detection for ClinicalFramework apps.",
  version: "1.3.0",
  git: "https://github.com/clinical-meteor/device.git"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.1.0.3');

  api.use([
    'underscore',
    'session'
  ], 'client');

  api.addFiles([
    'client/device_detection.js'
  ], 'client');

  api.export("Device");
});
