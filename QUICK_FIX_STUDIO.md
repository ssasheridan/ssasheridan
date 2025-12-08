# 🔧 Quick Fix: Sanity Studio Deployment

## **The Problem:**
The error says: `command "deploy" is not available outside of Sanity project context`

This means you need to:
1. Install dependencies in the `studio` folder first
2. Then deploy from inside that folder

---

## **Solution: Follow These Steps**

### **Step 1: Close All Programs**
Close:
- VS Code (if open)
- Any terminal windows
- Any browser with the project open
- This releases file locks

### **Step 2: Install Studio Dependencies**

Open a **NEW** terminal/command prompt and run:

```bash
cd "D:\SSA\SSA Website\studio"
npm install --legacy-peer-deps
```

**Wait for this to complete** (takes 2-3 minutes)
- You'll see lots of text scrolling
- Wait until it says "added XXX packages" or "up to date"
- If it fails, see "Alternative Solutions" below

### **Step 3: Deploy Studio**

Once installation is complete, run:

```bash
sanity deploy
```

**When prompted:**
- **Hostname:** Type `ssa-sheridan-studio` and press Enter
- Confirm when asked
- **Wait 1-2 minutes** for deployment
- **Save the URL** you get (looks like `https://ssa-sheridan-studio.sanity.studio`)

---

## **Alternative Solutions if npm install Fails**

### **Option A: Use the Batch Script**

I've created a `SETUP_STUDIO.bat` file. Just:
1. Double-click `SETUP_STUDIO.bat`
2. Let it run
3. Follow prompts

### **Option B: Use Sanity's Web Interface**

Skip local studio deployment entirely:

1. Go to: https://www.sanity.io/manage
2. Click your project: "Sikh Students Association Sheridan Website"  
3. Use the web interface to add content
4. We'll configure CORS later for your website

### **Option C: Force Close and Retry**

1. **Close everything:**
   ```bash
   taskkill /f /im node.exe
   taskkill /f /im code.exe
   ```
   (Wait 5 seconds)

2. **Delete node_modules and retry:**
   ```bash
   cd "D:\SSA\SSA Website\studio"
   rmdir /s /q node_modules 2>nul
   del package-lock.json 2>nul
   npm install --legacy-peer-deps
   ```

---

## **After Successful Deployment:**

1. ✅ **Save your studio URL** (from `sanity deploy` output)
2. ✅ **Visit the URL** in your browser
3. ✅ **Create "Site Settings" document**
4. ✅ **Add your content!**

---

## **Then Test Your Website:**

```bash
cd "D:\SSA\SSA Website"
npm run dev
```

Visit: `http://localhost:3001`

Your website should now connect to Sanity! 🎉

---

**Which option would you like to try first?**

