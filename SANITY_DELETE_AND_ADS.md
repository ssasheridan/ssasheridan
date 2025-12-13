# How to Enable Deletion and See Promotional Ads in Sanity Studio

## Issue 1: Can't See Delete Option

The delete option in Sanity Studio is available, but it might be in a different location depending on your Sanity Studio version:

### Method 1: Using the Menu Button (Three Dots)
1. Open any document (Event, Team Member, or Gallery)
2. Look for a **menu button (three vertical dots `⋮`)** in the top-right corner of the document toolbar
3. Click on it - you should see "Delete" option in the dropdown menu

### Method 2: Right-Click on Document
1. Go to the document list (e.g., the "Event" list)
2. **Right-click** on any document name
3. You should see a context menu with "Delete" option

### Method 3: Using Keyboard Shortcut
1. Open any document
2. Press **`Ctrl + Shift + D`** (or `Cmd + Shift + D` on Mac) while the document is open

### If Delete is Still Not Available:
- **Check your permissions**: Make sure you're logged in as an admin/editor
- **Refresh the Studio**: Sometimes the UI needs a refresh
- **Check Sanity Project Settings**: Go to https://sanity.io/manage → Your Project → API → Permissions

---

## Issue 2: Can't See "Promotional Ads & Announcements"

The promotional ads field won't appear until you **redeploy your Sanity Studio** with the updated schemas.

### Step-by-Step Solution:

1. **Open Terminal/Command Prompt**

2. **Navigate to your studio folder:**
   ```bash
   cd "D:\SSA\SSA Website\studio"
   ```

3. **Redeploy the Studio:**
   ```bash
   sanity deploy
   ```
   
   When prompted:
   - **Hostname:** Enter the same hostname you used before (or a new one)
   - Confirm the deployment

4. **Wait for deployment** (takes 1-2 minutes)

5. **Refresh your Sanity Studio** in the browser (hard refresh: `Ctrl + F5` or `Cmd + Shift + R`)

6. **Go to Site Settings:**
   - Click on "Site Settings" in the left sidebar
   - You should now see **"Promotional Ads & Announcements"** field below the "Weekly Rehras Sahib Path Details" field

---

## Alternative: If `sanity deploy` Doesn't Work

If you get an error during deployment, try:

1. **Make sure you're logged in:**
   ```bash
   sanity login
   ```

2. **Check if you're in the right directory:**
   ```bash
   cd studio
   dir  # Should show sanity.config.ts, schemas folder, etc.
   ```

3. **Install dependencies if needed:**
   ```bash
   npm install
   ```

4. **Then deploy:**
   ```bash
   sanity deploy
   ```

---

## Verify Everything Works:

After redeploying:

1. ✅ **Delete Test:**
   - Create a test event
   - Try to delete it using one of the methods above

2. ✅ **Promotional Ads Test:**
   - Go to Site Settings
   - Scroll down - you should see "Promotional Ads & Announcements"
   - Click "Add item" to create your first ad

---

## Still Having Issues?

If you still can't see the delete option or promotional ads after redeploying:

1. **Check your browser console** (F12) for any errors
2. **Try a different browser** or incognito mode
3. **Clear browser cache** and hard refresh
4. **Verify schemas are correct** - Make sure `studio/schemas/index.ts` includes `promotionalAd`
5. **Check Sanity Studio URL** - Make sure you're accessing the deployed studio, not a local one

---

**Note:** The delete functionality should be available by default - no special configuration needed. If it's not appearing, it's likely a permissions issue or you need to look in the right place (menu button or right-click).

