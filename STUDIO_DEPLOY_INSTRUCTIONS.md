# 🚀 Deploy Sanity Studio - Simple Instructions

Your schemas are already copied! ✅

## **Option 1: Use Sanity CLI to Deploy (Easiest)**

Since you're already logged in, you can deploy directly:

1. **Navigate to studio folder:**
   ```bash
   cd studio
   ```

2. **Deploy the studio:**
   ```bash
   sanity deploy
   ```

3. **When prompted:**
   - **Hostname:** Enter `ssa-sheridan-studio` (or any name you like)
   - It will ask you to confirm
   - **Wait for deployment** (takes 1-2 minutes)

4. **Save the URL!**
   - After deployment, you'll get a URL like: `https://ssa-sheridan-studio.sanity.studio`
   - **This is where you'll manage your content!**

---

## **Option 2: Install Dependencies First (If Option 1 Doesn't Work)**

If `sanity deploy` asks for dependencies:

1. **Close any programs using the studio folder** (VS Code, terminals, etc.)

2. **Install dependencies:**
   ```bash
   cd studio
   npm install --legacy-peer-deps
   ```

3. **Then deploy:**
   ```bash
   sanity deploy
   ```

---

## **Option 3: Use Sanity's Web Studio (No Deployment Needed)**

If deployment is complicated, you can use Sanity's web interface:

1. Go to: https://www.sanity.io/manage
2. Click on your project: "Sikh Students Association Sheridan Website"
3. Click "Open Studio" button (if available)
4. Or manually configure schemas through the API

---

## **After Studio is Deployed:**

1. **Visit your studio URL** (from Option 1)
2. **Create your first "Site Settings" document**
3. **Start adding content!**

---

## **Your Current Status:**

✅ Project ID configured: `u8h3j78v`  
✅ `.env.local` file created  
✅ Schemas copied to `studio/schemas/` folder  
✅ Studio config files created  
⏳ **Next:** Deploy the studio

---

**Try Option 1 first - it's the simplest!**

