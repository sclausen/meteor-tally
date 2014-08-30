Package.describe({
  summary: 'Displaying any number as a tally',
  version: '0.1.1',
  git: "https://github.com/sclausen/meteor-tally.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('templating', 'client');
  api.addFiles('lib/tally.html', 'client');
  api.addFiles('lib/tally.js', 'client');
  api.addFiles('lib/tally-mark.regular.ttf', 'client');
  api.addFiles('lib/tally.css', 'client');
});