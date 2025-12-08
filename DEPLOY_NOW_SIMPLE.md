# 🚀 Deploy to Vercel - Simple Steps

## **You're NOT using GitHub Actions - You're using Vercel!**

---

## **Step 1: Go to Vercel Website**

1. **Open your browser**
2. **Go to:** https://vercel.com
3. **Click "Sign Up" or "Log In"** (top right)
4. **Choose "Continue with GitHub"** (easiest way - uses your GitHub account)

---

## **Step 2: Connect Your GitHub Repository**

1. **After logging in**, you'll see the Vercel Dashboard
2. **Click "Add New..."** button (usually top right)
3. **Click "Project"** from the dropdown
4. **You'll see a list of your GitHub repositories**
5. **Find:** `ssasheridan/ssasheridan`
6. **Click "Import"** button next to it

**If you don't see your repository:**
- Click "Adjust GitHub App Permissions"
- Authorize Vercel to access your repositories
- Refresh the page
- You should now see `ssasheridan/ssasheridan`

---

## **Step 3: Configure Your Project**

1. **Project Name:** 
   - Keep default: `ssasheridan` 
   - Or change to: `ssa-sheridan-website`

2. **Framework Preset:** 
   - Should auto-detect: **Next.js** ✅
   - If not, select "Next.js" manually

3. **Root Directory:** 
   - Leave as `./` (default) ✅

4. **Build Settings:**
   - **Build Command:** `npm run build` (already set)
   - **Output Directory:** `.next` (already set)
   - **Install Command:** `npm install` (already set)

5. **Environment Variables (IMPORTANT!):**
   - Scroll down to **"Environment Variables"** section
   - Click **"Add"** button
   - Add these **ONE BY ONE**:

   **Variable 1:**
   - **Key:** `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - **Value:** `u8h3j78v`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   - Click **"Save"**

   **Variable 2:**
   - Click **"Add"** again
   - **Key:** `NEXT_PUBLIC_SANITY_DATASET`
   - **Value:** `production`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   - Click **"Save"**

   **Variable 3:**
   - Click **"Add"** again
   - **Key:** `NEXT_PUBLIC_SANITY_API_VERSION`
   - **Value:** `2024-01-01`
   - **Environments:** ✅ Production, ✅ Preview, ✅ Development
   - Click **"Save"**

---

## **Step 4: Deploy!**

1. **Scroll down** to the bottom
2. **Click the big "Deploy" button**
3. **Wait 2-3 minutes** - Vercel will:
   - Install dependencies
   - Build your website
   - Deploy it

---

## **Step 5: Get Your Live URL**

After deployment completes:

1. **You'll see:** "Congratulations! Your project has been deployed"
2. **Your website URL will be:** `https://ssasheridan.vercel.app` (or similar)
3. **Click the URL** to visit your live site!
4. **Bookmark it** - this is your live website!

---

## **What Happens Next?**

- ✅ Every time you push to GitHub, Vercel **automatically deploys** your changes
- ✅ Your site is **live and public** - anyone can visit it
- ✅ **Free SSL certificate** (HTTPS) - your site is secure
- ✅ **Global CDN** - fast loading worldwide

---

## **Need Help?**

**Common Issues:**

**Q: I don't see my repository?**
- A: Click "Adjust GitHub App Permissions" and authorize Vercel

**Q: Build fails?**
- A: Check that all 3 environment variables are added correctly

**Q: Site deployed but shows errors?**
- A: Go to Vercel Dashboard → Your Project → "Deployments" → Click on failed deployment to see logs

---

**Ready? Go to https://vercel.com and start deploying!** 🚀
