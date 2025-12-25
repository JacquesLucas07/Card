const fs = require('fs');
const path = require('path');

console.log('🚀 Building site statique...\n');

// Créer le dossier dist s'il n'existe pas
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
    console.log('✅ Dossier dist créé');
}

// Copier les fichiers
function copyFile(src, dest) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`✅ Copié: ${src} -> ${dest}`);
}

// Copier index.html
copyFile('index.html', path.join(distDir, 'index.html'));

// Copier le dossier src
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir('src', path.join(distDir, 'src'));
console.log('✅ Dossier src copié');

// Copier le dossier asset s'il existe
const assetDir = path.join(__dirname, 'asset');
if (fs.existsSync(assetDir)) {
    copyDir('asset', path.join(distDir, 'asset'));
    console.log('✅ Dossier asset copié');
}

console.log('\n✨ Build terminé ! Les fichiers sont dans le dossier dist/');
console.log('📦 Prêt pour le déploiement sur :');
console.log('   - GitHub Pages');
console.log('   - Netlify (glissez-déposez le dossier dist)');
console.log('   - Vercel');
console.log('   - Surge.sh');
