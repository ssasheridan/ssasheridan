# Fix: Delete Button and Promotional Ads Not Showing

## Issue 1: Delete Button Not Visible

In **Sanity Studio v3**, the delete action is available but might be in a different location. Here's how to find it:

### For Sanity Studio v3 (Your Version):

1. **When viewing a document:**
   - Look for the **three-dot menu (⋮)** in the **top-right corner** of the document editor
   - OR look for a **dropdown arrow** next to "Publish" button
   - Click it - you should see "Delete" option

2. **From the document list:**
   - **Right-click** on any document name in the list
   - A context menu should appear with "Delete" option

3. **Alternative method - Using the API directly:**
   - Go to https://www.sanity.io/manage
   - Select your project
   - Go to "API" → "Vision" tab
   - You can run queries to delete documents there

### If Delete Still Doesn't Appear:

This might be a **permissions issue** at the project level:

1. Go to https://www.sanity.io/manage
2. Click on your project: "Sikh Students Association Sheridan Website"
3. Go to **"Members"** or **"Roles"** section
4. Make sure your account has **"Administrator"** role (not just "Editor")
5. Administrator role has full delete permissions

---

## Issue 2: Promotional Ads Field Not Showing After Deployment

Even though deployment was successful, the field might not appear if:

### Solution 1: Site Settings Document Doesn't Exist

The field only appears when you're **editing** a Site Settings document. If the document doesn't exist yet:

1. In Sanity Studio, click **"Site Settings"** in the left sidebar
2. Click **"Create"** or **"New Document"** if it doesn't exist
3. The "Promotional Ads & Announcements" field should now be visible

### Solution 2: Hard Refresh Browser Cache

Sometimes the browser caches the old schema:

1. **Hard refresh** your browser:
   - Windows: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`
2. Or **clear browser cache** completely
3. Or try **incognito/private mode**

### Solution 3: Verify Schema Files Are Deployed

Check if the promotionalAd schema is actually being loaded:

1. In Sanity Studio, open browser console (F12)
2. Look for any errors related to "promotionalAd" or schema loading
3. If you see errors, the schema might not be properly exported

### Solution 4: Redeploy with Build

Sometimes `sanity deploy` might not rebuild properly. Try:

```bash
cd studio
npm run build
sanity deploy
```

### Solution 5: Check Studio URL

Make sure you're accessing the **deployed studio**, not a local one:
- ✅ Correct: `https://www.sanity.io/@o0DFUSA19/studio/...`
- ❌ Wrong: `http://localhost:3333` (local development)

---

## Quick Diagnostic Steps:

1. **Check if promotionalAd schema is loaded:**
   - Open browser console (F12) in Sanity Studio
   - Type: `window.__sanity` (might not be available, but worth checking)
   - Look for any schema-related errors

2. **Check Site Settings document:**
   - Make sure Site Settings document exists
   - Click "Edit" on it
   - Scroll down - you should see "Promotional Ads & Announcements"

3. **Verify deployment:**
   - Check the deployment timestamp in the studio
   - Make sure it's recent (within last few minutes)

---

## Still Not Working?

If after trying all above, the promotional ads field still doesn't appear:

1. **Check schema file structure:**
   - Verify `studio/schemas/index.ts` exports `promotionalAd`
   - Verify `studio/schemas/promotionalAd.ts` exists and is valid TypeScript

2. **Try creating the field manually via API:**
   - This shouldn't be necessary, but as a last resort, you could add it via Vision query

3. **Contact Sanity Support:**
   - Go to https://www.sanity.io/help
   - They can check your project directly

---

**Note:** For delete functionality, if you're definitely an admin and it's still not showing, this might be a Sanity Studio v3 UI change. The delete action should be in the document menu (three dots) in the top-right when viewing a document.

