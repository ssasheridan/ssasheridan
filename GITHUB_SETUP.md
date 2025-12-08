# 📦 Push to GitHub - Quick Guide

## **Before Pushing:**

### **Step 1: Create Repository on GitHub (If not created yet)**

1. Go to: https://github.com/new
2. **Repository name:** `ssa-sheridan-website` (or any name you prefer)
3. **Description:** "Official website for SSA Sheridan"
4. **Visibility:** Choose Public or Private
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

---

## **Step 2: Push Your Code**

Run these commands in your terminal:

```bash
cd "D:\SSA\SSA Website"
git remote add origin https://github.com/ssasheridan/ssa-sheridan-website.git
git push -u origin main
```

*(Replace `ssa-sheridan-website` with your actual repository name if different)*

---

## **If You Get Authentication Error:**

You'll need to authenticate. Options:

### **Option A: Use Personal Access Token**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (full control)
4. Copy the token
5. Use it as password when pushing (username is your GitHub username)

### **Option B: Use GitHub CLI**
```bash
gh auth login
git push -u origin main
```

---

## **After Successful Push:**

✅ Your code is on GitHub!
✅ Now you can deploy to Vercel from GitHub!

---

**Let me know once you've created the repository and I'll help you push!**

