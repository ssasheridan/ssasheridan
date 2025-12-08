# ⚡ Quick Start Guide
## Deployment Order - At a Glance

**Follow this order exactly:**

## 🎯 **THE ORDER (What to Do First)**

```
1. Sanity CMS Setup          ← DO THIS FIRST!
   ↓
2. Local Environment Setup
   ↓
3. Local Testing
   ↓
4. Prepare for Deployment
   ↓
5. Deploy to Vercel
   ↓
6. Post-Deployment Config
   ↓
7. Add Content
```

---

## 📝 **QUICK CHECKLIST**

### Step 1: Sanity CMS (15-20 minutes)
- [ ] Create account at sanity.io
- [ ] Create new project
- [ ] Copy Project ID (save it!)
- [ ] Install Sanity CLI: `npm install -g @sanity/cli`
- [ ] Run `sanity login`
- [ ] Initialize studio: `sanity init --env`
- [ ] Copy schemas to studio folder
- [ ] Deploy studio: `cd studio && sanity deploy`
- [ ] Save studio URL

### Step 2: Local Environment (5 minutes)
- [ ] Create `.env.local` file
- [ ] Add your Project ID
- [ ] Run `npm install`

### Step 3: Test Locally (5 minutes)
- [ ] Run `npm run dev`
- [ ] Visit `http://localhost:3001`
- [ ] Test all pages
- [ ] Run `npm run build` (should succeed)

### Step 4: Prepare (10 minutes)
- [ ] Create GitHub repo (optional but recommended)
- [ ] Push code to GitHub
- [ ] Verify `.gitignore` has `.env.local`

### Step 5: Deploy (10 minutes)
- [ ] Create Vercel account
- [ ] Import project from GitHub
- [ ] Add environment variables in Vercel
- [ ] Click Deploy
- [ ] Save your live URL

### Step 6: Configure (5 minutes)
- [ ] Add CORS origins in Sanity dashboard
- [ ] Update Vercel environment variables
- [ ] Redeploy

### Step 7: Content (ongoing)
- [ ] Add Site Settings in Sanity Studio
- [ ] Add Team Members
- [ ] Add Events
- [ ] Add Gallery albums

---

## 🔑 **CRITICAL VALUES TO SAVE**

Save these somewhere safe:

1. **Sanity Project ID:** `your_project_id_here`
2. **Sanity Studio URL:** `https://your-studio.sanity.studio`
3. **Vercel Deployment URL:** `https://your-site.vercel.app`

---

## ⚠️ **COMMON MISTAKES TO AVOID**

1. ❌ **Don't deploy before setting up Sanity** - Your site needs CMS connection
2. ❌ **Don't forget CORS settings** - Site won't load content without it
3. ❌ **Don't commit `.env.local`** - Keep it in `.gitignore`
4. ❌ **Don't skip build test** - Test locally before deploying
5. ❌ **Don't forget to publish in Sanity** - Drafts don't show on site

---

## 📚 **DETAILED GUIDE**

For step-by-step instructions with detailed explanations, see:
**👉 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**

---

## 🆘 **QUICK HELP**

**Problem:** Site shows placeholder content
**Fix:** Check Sanity Project ID in `.env.local` and Vercel env vars

**Problem:** CORS errors
**Fix:** Add your Vercel URL to Sanity CORS origins

**Problem:** Build fails
**Fix:** Run `npm run build` locally first, fix errors

**Problem:** Content not updating
**Fix:** Wait 60 seconds (cache), check if published (not draft)

---

**Ready? Start with Step 1: Sanity CMS Setup!** 🚀

