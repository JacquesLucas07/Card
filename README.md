# Carte de Visite Professionnelle

Carte de visite numérique interactive pour Lucas Jacques - DevOps Engineer chez RaceUp.

## ✨ Fonctionnalités

- 🎨 Design futuriste avec effets néon et glassmorphism
- 🌌 Arrière-plan spatial animé
- 🔄 Carte 3D interactive (recto/verso)
- 🎯 Effet parallaxe au mouvement de la souris
- ✨ Animations de particules
- 📱 Responsive (mobile-friendly)
- 🎮 Easter egg caché (Konami Code)

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📦 Déploiement

### GitHub Pages
```bash
# Pushez sur GitHub, activez GitHub Pages dans les settings
git add .
git commit -m "Deploy"
git push origin main
```

### Netlify
1. Glissez-déposez le dossier `dist` sur [Netlify Drop](https://app.netlify.com/drop)
2. Ou connectez votre repo GitHub pour un déploiement automatique

### Vercel
```bash
npm install -g vercel
vercel
```

## 📂 Structure du projet

```
├── asset/          # Ressources (images, icônes)
├── src/
│   ├── script/    # card.js - Animations et interactivité
│   └── style/     # card.css - Styles et animations
├── dist/          # Fichiers de production (après build)
├── index.html     # Page principale
├── package.json   # Dépendances npm
└── build.js       # Script de build
```

## 🛠️ Technologies

- HTML5
- CSS3 (Animations, Gradients, Glassmorphism)
- JavaScript Vanilla
- Font Awesome (icônes)

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement (port 3000)
- `npm run build` - Crée la version de production dans `dist/`
- `npm run preview` - Prévisualise la version de production

## 👨‍💻 Auteur

**Lucas Jacques**
- DevOps Engineer @ RaceUp
- Passionné d'informatique

## 📄 License

MIT