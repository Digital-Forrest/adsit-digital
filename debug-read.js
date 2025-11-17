const fs = require('fs');
const orig = fs.readFileSync;
fs.readFileSync = function(path, options) {
  try {
    return orig.call(this, path, options);
  } catch (error) {
    console.error('readFileSync failed for:', path, error);
    throw error;
  }
};
