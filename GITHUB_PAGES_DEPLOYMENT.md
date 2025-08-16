# GitHub Pages Deployment Guide

This guide will help you deploy Balraj's portfolio website to GitHub Pages.

## Prerequisites

1. **GitHub Account** - Sign up at [github.com](https://github.com)
2. **Git installed** on your local machine
3. **Node.js** installed (version 14 or higher)

## Deployment Methods

### Method 1: Automatic Deployment with GitHub Actions (Recommended)

This method automatically deploys your site whenever you push to the main branch.

#### Step 1: Create GitHub Repository

1. **Create a new repository on GitHub:**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `balraj-portfolio`
   - Make it public (required for free GitHub Pages)
   - Don't initialize with README (we already have files)

#### Step 2: Update Homepage URL

1. **Edit package.json:**
   - Replace `YOUR_USERNAME` with your actual GitHub username in the homepage field:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/balraj-portfolio"
   ```

#### Step 3: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Balraj Portfolio"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/balraj-portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

#### Step 4: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click on "Settings" tab**
3. **Scroll down to "Pages" in the left sidebar**
4. **Under "Source", select "GitHub Actions"**
5. **The workflow will automatically run and deploy your site**

#### Step 5: Access Your Website

- Your site will be available at: `https://YOUR_USERNAME.github.io/balraj-portfolio`
- First deployment takes 2-5 minutes
- Subsequent deployments are faster (1-2 minutes)

### Method 2: Manual Deployment with gh-pages

If you prefer manual deployment or the GitHub Actions method doesn't work:

#### Step 1: Update package.json homepage

Make sure the homepage field in package.json has your correct GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/balraj-portfolio"
```

#### Step 2: Deploy manually

```bash
# Build and deploy
npm run deploy
```

This will:
1. Build the production version
2. Create a `gh-pages` branch
3. Push the build files to that branch
4. GitHub Pages will serve from the `gh-pages` branch

#### Step 3: Configure GitHub Pages (Manual Method)

1. Go to repository Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Choose "gh-pages" branch and "/ (root)" folder
4. Click "Save"

## Configuration Files Explained

### 1. `.github/workflows/deploy.yml`
- **Automatic deployment** workflow
- Triggers on push to main branch
- Builds and deploys automatically
- Uses GitHub Actions

### 2. `package.json` updates
- **Homepage field**: Tells React where the app will be hosted
- **Deploy script**: Uses gh-pages package for manual deployment
- **gh-pages dependency**: Handles GitHub Pages deployment

## Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages**
   - Check that homepage URL in package.json matches your repository
   - Ensure repository is public
   - Wait a few minutes for DNS propagation

2. **Build Fails**
   - Check Node.js version (use 16 or 18)
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

3. **Routing Issues (Blank page on refresh)**
   - GitHub Pages doesn't support client-side routing by default
   - The app uses hash routing fallback for GitHub Pages
   - All routes should work correctly

4. **GitHub Actions Fails**
   - Check the Actions tab in your repository
   - Ensure repository is public
   - Check if GitHub Pages is enabled

### Build Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages (manual method)
npm run deploy

# Test production build locally
npx serve -s build
```

## Custom Domain (Optional)

### Step 1: Purchase Domain
- Use any domain registrar (GoDaddy, Namecheap, etc.)

### Step 2: Configure DNS
Add these DNS records:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### Step 3: Add CNAME file
Create `public/CNAME` file with your domain:
```
yourdomain.com
```

### Step 4: Configure in GitHub
1. Go to Settings → Pages
2. Add your custom domain
3. Enable "Enforce HTTPS"

## Performance Optimizations

The portfolio is optimized for GitHub Pages:
- **Static files**: All assets are optimized
- **Caching**: Browser caching enabled
- **Minification**: CSS and JS are minified
- **Compression**: Gzip compression when possible

## Monitoring

### GitHub Pages Analytics
- Basic traffic stats available in repository Insights
- For detailed analytics, add Google Analytics

### Add Google Analytics
Add to `public/index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Updating Your Site

### Automatic Updates (GitHub Actions)
- Just push to main branch: `git push origin main`
- Site updates automatically in 2-5 minutes

### Manual Updates
```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main

# For manual deployment method
npm run deploy
```

## Cost

- **GitHub Pages**: Free for public repositories
- **Custom domain**: $10-15/year (optional)
- **Total cost**: Free (or $10-15/year with custom domain)

## Security

- **HTTPS**: Automatically enabled
- **No server**: Static site = more secure
- **No database**: No data to compromise

## Limitations

- **Static hosting only**: No server-side processing
- **100GB bandwidth/month**: Usually sufficient for portfolios
- **1GB storage**: More than enough for portfolio sites
- **Public repositories only**: For free accounts

## Next Steps After Deployment

1. **Test on different devices** and browsers
2. **Add Google Analytics** for visitor tracking
3. **Set up custom domain** if desired
4. **Share your portfolio** on social media and job applications
5. **Keep updating** with new projects and skills

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)
- [gh-pages Package Documentation](https://www.npmjs.com/package/gh-pages)

Your portfolio will be live at `https://YOUR_USERNAME.github.io/balraj-portfolio` within minutes of deployment!