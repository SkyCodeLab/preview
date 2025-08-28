# GitHub Actions Permissions Fix

You're getting a 403 permission error because GitHub Actions doesn't have the right permissions to deploy to GitHub Pages. Here's how to fix it:

## 🔧 **Method 1: Fix Repository Settings (Recommended)**

### Step 1: Enable GitHub Actions Permissions
1. Go to your repository: `https://github.com/SkyCodeLab/preview`
2. Click **Settings** tab
3. In the left sidebar, click **Actions** → **General**
4. Under **Workflow permissions**, select:
   - ✅ **"Read and write permissions"**
   - ✅ **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

### Step 2: Configure GitHub Pages
1. Still in **Settings**, scroll to **Pages** in left sidebar
2. Under **Source**, select **"GitHub Actions"**
3. Click **Save**

### Step 3: Push Updated Workflow
```bash
git add .
git commit -m "Fix GitHub Actions permissions"
git push origin main
```

## 🔧 **Method 2: Manual Deployment (Quick Fix)**

If GitHub Actions still don't work, deploy manually:

```bash
# Deploy using gh-pages package
npm run deploy
```

Then configure GitHub Pages:
1. Go to **Settings** → **Pages**
2. Under **Source**, select **"Deploy from a branch"**
3. Choose **"gh-pages"** branch
4. Choose **"/ (root)"** folder
5. Click **Save**

## 🔧 **Method 3: Personal Access Token (Advanced)**

If you need more control, create a Personal Access Token:

### Step 1: Create Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **Generate new token (classic)**
3. Select scopes: `repo`, `workflow`
4. Copy the token

### Step 2: Add to Repository Secrets
1. Go to your repository → Settings → Secrets and variables → Actions
2. Click **New repository secret**
3. Name: `DEPLOY_TOKEN`
4. Value: Your token
5. Click **Add secret**

### Step 3: Update Workflow
Replace `github_token: ${{ secrets.GITHUB_TOKEN }}` with `github_token: ${{ secrets.DEPLOY_TOKEN }}`

## ✅ **Verification Steps**

After fixing permissions:
1. Check **Actions** tab for green checkmark ✅
2. Wait 5-10 minutes
3. Visit: `https://skycodelab.github.io/preview`

## 🚨 **Common Issues**

### Issue: Still getting 403 error
- **Solution**: Make sure repository is public and you have admin access

### Issue: Workflow doesn't trigger
- **Solution**: Check that you're pushing to `main` branch

### Issue: Build succeeds but site doesn't update
- **Solution**: Clear browser cache and wait 10 minutes

## 📋 **Quick Checklist**

- [ ] Repository is public
- [ ] You have admin/write access to the repository
- [ ] GitHub Actions has "Read and write permissions"
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] Workflow file is in `.github/workflows/deploy.yml`
- [ ] Code is pushed to `main` branch

## 🎯 **Expected Result**

Your portfolio will be live at: `https://skycodelab.github.io/preview`

The most common fix is Step 1 - enabling "Read and write permissions" for GitHub Actions in your repository settings.