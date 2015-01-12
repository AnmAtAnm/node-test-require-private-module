var Anm = require('anm-math')({});
Anm = require('anm-private')(Anm);

if (typeof(Anm.normalizeRad) == typeof(Function)) {
  console.log('Found Anm.normalizeRad from require(\'anm-math\').');
} else {
  console.warn('Missing Anm.normalizeRad(..) from require(\'anm-math\').');
}

if (typeof(Anm.privateFn) == typeof(Function)) {
  console.log('Found Anm.privateFn from require(\'anm-private\').');
} else {
  console.warn('Missing Anm.privateFn(..) from require(\'anm-private\').');
}

