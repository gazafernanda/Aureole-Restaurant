const { execSync } = require('child_process');
const fs = require('fs');

console.log('Checking node_modules...');
if (fs.existsSync('./node_modules')) {
    console.log('node_modules exists');
    const tailwindPath = './node_modules/tailwindcss';
    if (fs.existsSync(tailwindPath)) {
        console.log('tailwindcss exists in node_modules');
    } else {
        console.log('tailwindcss MISSING from node_modules');
    }
} else {
    console.log('node_modules DOES NOT exist');
}

try {
    console.log('Attempting to require tailwindcss...');
    require('tailwindcss');
    console.log('SUCCESS: tailwindcss is requirable');
} catch (e) {
    console.log('FAILURE: tailwindcss not requirable:', e.message);
}
