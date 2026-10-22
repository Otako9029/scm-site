# SCM Pipeline Demo

Static site (HTML/CSS/JS) deployed to GitHub Pages by GitHub Actions.
On every push to `main`: ESLint runs first; the deploy job only runs if lint passes.

## Run lint locally
    npm install
    npm run lint
