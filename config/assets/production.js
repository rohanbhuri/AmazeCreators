'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.css',
        'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation-flex.css'
      ],
      js: [
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        // 'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        // 'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/angular-file-upload.min.js'
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  }
};
