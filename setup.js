const { execSync } = require('child_process');

function setupAll() {
    // setup the html base, install dependencies and run build
    console.log('Setting up html base : install dependencies and build');
    execSync('cd html && npm install && npm run build', { stdio: 'inherit' });

    // setup the app base, install dependencies and run build
    console.log('\nSetting up docs app : install dependencies');
    execSync('cd app && npm install', { stdio: 'inherit' });

    console.log('\nProject initialized successfully!');
}

setupAll();