# 🚀 Deploy Your Website to Vercel

## **Current Status:**
- ✅ Website works locally
- ✅ Sanity CMS configured
- ⏳ **Website NOT deployed yet**

---

## **Quick Deployment Steps:**

### **Option 1: Deploy via Vercel Dashboard (Easiest)**

1. **Push to GitHub first:**
   ```bash
   cd "D:\SSA\SSA Website"
   git init
   git add .
   git commit -m "Initial commit - SSA Sheridan website"
   git branch -M main
   git remote add origin https://github.com/ssasheridan/ssa-sheridan-website.git
   git push -u origin main
   ```
   *(Create the repo on GitHub first if needed)*

2. **Deploy on Vercel:**
   - Go to: https://vercel.com
   - Sign up/login (use GitHub account)
   - Click "Add New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `u8h3j78v`
     - `NEXT_PUBLIC_SANITY_DATASET` = `production`
     - `NEXT_PUBLIC_SANITY_API_VERSION` = `2024-01-01`
   - Click "Deploy"
   - **Save your URL!** (e.g., `https://ssa-sheridan-website.vercel.app`)

---

### **Option 2: Deploy via Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd "D:\SSA\SSA Website"
   vercel
   ```
   - Follow prompts
   - Add environment variables when asked

---

## **After Deployment:**

1. **Configure Sanity CORS:**
   - Go to: https://sanity.io/manage
   - Click your project
   - Go to **API** → **CORS Origins**
   - Add your Vercel URL: `https://your-site.vercel.app`

2. **Update Environment Variables:**
   - In Vercel dashboard → Settings → Environment Variables
   - Update `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL

3. **Redeploy** (if needed)

---

## **Your Website Will Be Live At:**
`https://your-site-name.vercel.app`

---

**Need help with any step? Let me know!**

