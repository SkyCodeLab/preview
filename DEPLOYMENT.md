# AWS Amplify Deployment Guide

This guide will help you deploy Balraj's portfolio website to AWS Amplify.

## Prerequisites

1. **AWS Account** - Sign up at [aws.amazon.com](https://aws.amazon.com)
2. **GitHub Repository** - Push your code to GitHub
3. **AWS Amplify CLI** (optional) - For advanced configurations

## Deployment Methods

### Method 1: AWS Amplify Console (Recommended)

#### Step 1: Push to GitHub
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit - Balraj Portfolio"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/balraj-portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy via Amplify Console

1. **Login to AWS Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Sign in with your AWS credentials

2. **Create New App**
   - Click "New app" → "Host web app"
   - Choose "GitHub" as your Git provider
   - Authorize AWS Amplify to access your GitHub account

3. **Connect Repository**
   - Select your repository: `balraj-portfolio`
   - Choose branch: `main`
   - Click "Next"

4. **Configure Build Settings**
   - App name: `balraj-portfolio`
   - Environment: `production`
   - The build settings should auto-detect from `amplify.yml`:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
   - Click "Next"

5. **Review and Deploy**
   - Review all settings
   - Click "Save and deploy"

6. **Wait for Deployment**
   - Provision (1-2 minutes)
   - Build (3-5 minutes)
   - Deploy (1-2 minutes)
   - Verify (30 seconds)

#### Step 3: Access Your Website
- Once deployment completes, you'll get a URL like: `https://main.d1234567890.amplifyapp.com`
- Your portfolio is now live!

### Method 2: Amplify CLI (Advanced)

#### Step 1: Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
amplify configure
```

#### Step 2: Initialize Amplify
```bash
amplify init
```
Follow the prompts:
- Project name: `balraj-portfolio`
- Environment: `production`
- Default editor: Your preferred editor
- App type: `javascript`
- Framework: `react`
- Source directory: `src`
- Build directory: `build`
- Build command: `npm run build`
- Start command: `npm start`

#### Step 3: Add Hosting
```bash
amplify add hosting
```
Choose:
- Hosting with Amplify Console
- Manual deployment

#### Step 4: Deploy
```bash
amplify publish
```

## Custom Domain Setup (Optional)

### Step 1: Purchase Domain
- Use Route 53, GoDaddy, or any domain registrar

### Step 2: Add Custom Domain in Amplify
1. Go to Amplify Console → Your App
2. Click "Domain management" in sidebar
3. Click "Add domain"
4. Enter your domain (e.g., `balrajportfolio.com`)
5. Follow DNS configuration steps

### Step 3: SSL Certificate
- Amplify automatically provisions SSL certificates
- Your site will be available at `https://yourdomain.com`

## Environment Variables (If Needed)

If you need to add environment variables:

1. **Via Amplify Console:**
   - Go to App Settings → Environment variables
   - Add key-value pairs

2. **Via CLI:**
   ```bash
   amplify env add
   ```

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Pull requests create preview deployments
- Build status shows in GitHub commits

## Performance Optimizations

The portfolio includes:
- **Optimized Build**: React production build with minification
- **CDN**: Amplify uses CloudFront for global distribution
- **Caching**: Static assets cached for optimal performance
- **Compression**: Gzip compression enabled by default

## Monitoring and Analytics

### Built-in Monitoring
- Access logs in Amplify Console
- Performance metrics available
- Error tracking included

### Add Google Analytics (Optional)
Add to `public/index.html`:
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

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies in package.json
   - Check build logs in Amplify Console

2. **Routing Issues**
   - Ensure `_redirects` file is in `public/` folder
   - Content: `/*    /index.html   200`

3. **Environment Variables**
   - Prefix with `REACT_APP_` for client-side variables
   - Rebuild after adding variables

### Build Commands Reference
```bash
# Local development
npm start

# Production build
npm run build

# Test production build locally
npx serve -s build
```

## Cost Estimation

AWS Amplify pricing (as of 2024):
- **Build minutes**: $0.01 per build minute
- **Data transfer**: $0.15 per GB
- **Storage**: $0.023 per GB per month
- **Free tier**: 1,000 build minutes, 15 GB storage, 100 GB transfer per month

Estimated monthly cost for portfolio: **$0-5** (likely free tier)

## Security Best Practices

1. **HTTPS Only**: Enforced by default
2. **Access Control**: Configure if needed
3. **Environment Variables**: Never commit secrets
4. **Branch Protection**: Protect main branch in GitHub

## Next Steps After Deployment

1. **Test thoroughly** on different devices
2. **Set up custom domain** if desired
3. **Configure analytics** for visitor tracking
4. **Add contact form backend** (AWS Lambda + SES)
5. **Set up monitoring alerts**

## Support Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Amplify Console Guide](https://docs.aws.amazon.com/amplify/latest/userguide/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

Your portfolio will be live and accessible worldwide within minutes of deployment!