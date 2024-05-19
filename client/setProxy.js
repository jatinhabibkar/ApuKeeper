const fs = require('fs');
const path = require('path');

const proxy = process.env.REACT_APP_PROXY;

if (proxy) {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    packageJson.proxy = proxy;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
