# 🚀 Deploy to Vercel - Next Steps

## ✅ **What's Done:**
- ✅ Code pushed to GitHub: https://github.com/ssasheridan/ssasheridan
- ✅ Repository is ready for deployment

---

## **Step 1: Deploy to Vercel**

### **Option A: Via Vercel Dashboard (Recommended)**

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Click **"Sign Up"** or **"Log In"**
   - **Use "Continue with GitHub"** (easiest - connects automatically)

2. **Import Your Project:**
   - After logging in, click **"Add New..."** → **"Project"**
   - You'll see your GitHub repositories
   - Find and click **"Import"** next to `ssasheridan/ssasheridan`

3. **Configure Project:**
   - **Project Name:** `ssa-sheridan-website` (or keep default)
   - **Framework Preset:** Should auto-detect "Next.js" ✅
   - **Root Directory:** Leave as `./` (default)
   - **Build Command:** Leave as `npm run build` (default)
   - **Output Directory:** Leave as `.next` (default)
   - **Install Command:** Leave as `npm install` (default)

4. **Add Environment Variables (IMPORTANT!):**
   - Scroll down to **"Environment Variables"**
   - Click **"Add"** and add these one by one:

     **Variable 1:**
     - **Name:** `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - **Value:** `u8h3j78v`
     - **Environments:** ✅ Production, ✅ Preview, ✅ Development

     **Variable 2:**
     - **Name:** `NEXT_PUBLIC_SANITY_DATASET`
     - **Value:** `production`
     - **Environments:** ✅ Production, ✅ Preview, ✅ Development

     **Variable 3:**
     - **Name:** `NEXT_PUBLIC_SANITY_API_VERSION`
     - **Value:** `2024-01-01`
     - **Environments:** ✅ Production, ✅ Preview, ✅ Development

5. **Deploy:**
   - Click **"Deploy"** button
   - Wait 2-3 minutes for build
   - **Save your deployment URL!** (e.g., `https://ssasheridan.vercel.app`)

---

### **Option B: Via Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```
   - Follow prompts in browser

3. **Deploy:**
   ```bash
   cd "D:\SSA\SSA Website"
   vercel
   ```
   - Follow prompts
   - Add environment variables when asked

---

## **Step 2: Configure Sanity CORS**

After deployment, allow your Vercel URL to access Sanity:

1. **Go to Sanity Dashboard:**
   - Visit: https://sanity.io/manage
   - Click your project: "Sikh Students Association Sheridan Website"

2. **Add CORS Origin:**
   - Go to **"API"** → **"CORS Origins"** tab
   - Click **"Add CORS origin"**
   - **Origin:** `https://your-vercel-url.vercel.app` (replace with your actual URL)
   - ✅ Check **"Allow credentials"**
   - Click **"Save"**

3. **Add www version too (if applicable):**
   - Add: `https://www.your-vercel-url.vercel.app`
   - ✅ Check **"Allow credentials"**
   - Click **"Save"**

---

## **Step 3: Update Site URL in Vercel**

1. **Go to Vercel Dashboard:**
   - Select your project
   - Go to **"Settings"** → **"Environment Variables"**

2. **Add/Update:**
   - **Name:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** Your actual Vercel URL (e.g., `https://ssasheridan.vercel.app`)
   - **Environments:** ✅ Production only

3. **Redeploy:**
   - Go to **"Deployments"** tab
   - Click **"..."** on latest deployment
   - Click **"Redeploy"**

---

## **Step 4: Verify Everything Works**

1. **Visit your live site:**
   - Go to your Vercel URL
   - Check all pages load correctly

2. **Test Sanity Connection:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Should NOT see Sanity errors

3. **Add Content:**
   - Go to your Sanity Studio URL
   - Add "Site Settings" document
   - Refresh your website - content should appear!

---

## **Your URLs:**

- **GitHub Repository:** https://github.com/ssasheridan/ssasheridan
- **Vercel Deployment:** (will be provided after deployment)
- **Sanity Studio:** (your studio URL from earlier)

---

**Ready to deploy? Go to https://vercel.com and follow Step 1!** 🚀

