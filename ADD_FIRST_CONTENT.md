# 📝 How to Add Your First Content in Sanity

## **Quick Method: Use Sanity Vision (Query Interface)**

Since you don't have the Studio deployed yet, you can add content using Sanity's Vision tool:

### **Step 1: Go to Sanity Vision**

1. Open your browser
2. Go to: `https://www.sanity.io/manage`
3. Click your project: "Sikh Students Association Sheridan Website"
4. Look for "Vision" or "API" tab

### **Step 2: Add Site Settings Document**

You can use Sanity's API explorer or Vision tool to add documents. However, the easiest way is to deploy the studio.

---

## **Better Method: Deploy Studio (Recommended)**

Let's finish setting up your studio so you have a nice interface:

### **Step 1: Install Dependencies**

Open a new terminal and run:

```bash
cd "D:\SSA\SSA Website\studio"
npm install --legacy-peer-deps
```

**Important:** Let this run for 2-3 minutes without canceling. The warnings are fine.

### **Step 2: Deploy**

Once installation completes:

```bash
sanity deploy
```

When prompted:
- Enter hostname: `ssa-sheridan-studio`
- Wait 1-2 minutes
- Save the URL you get

### **Step 3: Add Content**

1. Visit your studio URL
2. Click "Create" → "Site Settings"
3. Fill in the form:
   - **Hero Title:** `Sikh Students Association, Sheridan`
   - **Hero Subtitle:** `Empowering Students, Celebrating Sikhi`
   - **Mission Text:** (Your mission statement)
   - **Join Form Link:** `https://forms.office.com/r/ackW8bMdtn`
   - **Instagram URL:** `https://instagram.com/ssa_sheridan`
   - **YouTube URL:** `https://www.youtube.com/@SSA.Sheridan`
   - **Email:** `ssa@sheridancollege.ca`
   - **Address:**
     ```
     Sheridan College
     Davis Campus
     7899 McLaughlin Rd
     Brampton, ON L6Y 5H9
     ```
   - **Rehras Sahib Details:**
     - Room Number: (enter room number)
     - Building: `Davis Campus`
     - Day: `Wednesdays and Thursdays`
     - Time: `6:15 PM - 9:15 PM`
     - Semester: `Every semester`

4. Click "Publish" (top right)
5. Wait 30-60 seconds
6. Refresh your website - you should see your content!

---

## **Alternative: Use Sanity CLI to Add Content**

If you want to add content via command line, you can use:

```bash
sanity documents create
```

But the Studio interface is much easier!

---

## **What Happens Next:**

1. ✅ You add content in Studio
2. ✅ Click "Publish"
3. ✅ Wait 30-60 seconds (cache refresh)
4. ✅ Refresh your website
5. ✅ Your content appears! 🎉

---

**Would you like to try deploying the studio now, or do you want to use the web interface method?**

