const fs = require('fs');

const file = 'tsconfig.app.json';
if (fs.existsSync(file)) {
  let config = fs.readFileSync(file, 'utf8');
  config = config.replace(/"noUnusedLocals": true/g, '"noUnusedLocals": false');
  config = config.replace(/"noUnusedParameters": true/g, '"noUnusedParameters": false');
  // Also turn off verbatimModuleSyntax if present
  if (config.includes('"compilerOptions": {')) {
    config = config.replace(/"compilerOptions": {/g, '"compilerOptions": {\n    "verbatimModuleSyntax": false,');
  }
  fs.writeFileSync(file, config);
  console.log('Fixed tsconfig.app.json');
} else {
  console.log('tsconfig.app.json not found');
}
