'use strict';

angular.module('checkPayment.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive'
])

.value('version', '0.1');
