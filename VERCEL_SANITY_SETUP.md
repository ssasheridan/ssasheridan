# 🔧 Fix: Add Sanity Environment Variables to Vercel

If you're not seeing events or team members on your deployed website, it's because **Sanity environment variables are missing in Vercel**.

## ✅ Quick Fix Steps

### 1. Go to Your Vercel Dashboard
- Visit: https://vercel.com
- Sign in and find your project (SSA Sheridan website)

### 2. Navigate to Project Settings
- Click on your project
- Go to **Settings** (top navigation)
- Click **Environment Variables** (left sidebar)

### 3. Add These Environment Variables

Add these **one by one**:

#### Variable 1:
- **Name:** `NEXT_PUBLIC_SANITY_PROJECT_ID`
- **Value:** `u8h3j78v` (your actual Sanity project ID)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

Click **Save**

#### Variable 2:
- **Name:** `NEXT_PUBLIC_SANITY_DATASET`
- **Value:** `production`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

Click **Save**

#### Variable 3:
- **Name:** `NEXT_PUBLIC_SANITY_API_VERSION`
- **Value:** `2024-01-01`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

Click **Save**

### 4. Redeploy Your Site

After adding the variables:
1. Go to **Deployments** tab
2. Click the **3 dots** (⋯) on the latest deployment
3. Click **Redeploy**
4. Wait 2-3 minutes for the build to complete

## 🔍 Verify It Works

1. Visit your deployed website
2. Check the **Events** page - events from Sanity should appear
3. Check the **About** page - team members should appear
4. Open browser DevTools (F12) → Console tab
5. You should **NOT** see any Sanity connection warnings

## ⚠️ Important Notes

- Environment variables are **case-sensitive** - use exact names above
- Changes take effect **only after redeployment**
- Make sure your Sanity project has content published (not just drafts)
- Check Sanity Studio to ensure content is published: https://your-studio.sanity.studio

## 🆘 Still Not Working?

### Check Sanity CORS Settings

1. Go to: https://sanity.io/manage
2. Select your project
3. Go to **API** → **CORS Origins**
4. Make sure your Vercel URL is added:
   - `https://your-domain.vercel.app`
   - `https://*.vercel.app` (for preview deployments)

### Verify Sanity Content is Published

1. Open your Sanity Studio
2. Check that events and team members have green "Published" badges
3. If they show "Draft", click "Publish" on each document

### Check Environment Variables Are Correct

1. In Vercel, go to Settings → Environment Variables
2. Verify all three variables are listed
3. Check that Production, Preview, and Development are all selected

---

**Need help?** Check the browser console for error messages and share them for troubleshooting.

