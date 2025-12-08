# 🚀 Simple Sanity Setup Guide
## For Project ID: u8h3j78v

Your `.env.local` file is already created! ✅

---

## **What You Need to Do Next**

### Step 1: Login to Sanity CLI (Interactive - Do This Manually)

Open your terminal/command prompt and run:

```bash
cd "D:\SSA\SSA Website"
sanity login
```

**When prompted:**
- Choose your login method (Google, GitHub, or Email)
- Complete authentication in your browser
- Come back to terminal - it should say "Logged in"

---

### Step 2: Initialize Sanity Studio in a Separate Folder

Once logged in, run:

```bash
mkdir studio
cd studio
sanity init --env
```

**When prompted:**
- **Select your project:** Choose your project (should show "SSA Sheridan" or similar)
- **Select dataset:** Press Enter for `production` (default)
- **Output path:** Press Enter (already in studio folder)
- **Use TypeScript:** Type `Yes` and press Enter
- **Template:** Choose `Clean project with no predefined schemas`

---

### Step 3: Copy Your Schemas

**After initialization completes:**

```bash
# Go back to project root
cd ..

# Copy schemas to studio folder
xcopy /E /I "src\sanity\schemas" "studio\schemas"
```

Or manually:
1. Go to `src/sanity/schemas/` folder
2. Copy ALL these files:
   - `event.ts`
   - `gallery.ts`
   - `index.ts`
   - `siteSettings.ts`
   - `team.ts`
3. Paste them into `studio/schemas/` folder

---

### Step 4: Update Studio Config

Open `studio/sanity.config.ts` and make sure it has:

```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'SSA Sheridan CMS',
  projectId: 'u8h3j78v', // Your project ID
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
```

---

### Step 5: Deploy Studio

```bash
cd studio
sanity deploy
```

**When asked for hostname:**
- Enter: `ssa-sheridan-studio` (or any name you like)
- **Save the URL** they give you - this is your content management dashboard!

The URL will look like: `https://ssa-sheridan-studio.sanity.studio`

---

### Step 6: Test Your Website

```bash
# Go back to project root
cd ..

# Start your dev server
npm run dev
```

Visit: `http://localhost:3001`

The warning about Sanity Project ID should be gone! ✅

---

## **Alternative: Use Sanity's Web Studio (No CLI Needed)**

If the CLI setup is too complicated, you can manage schemas directly:

1. Go to: https://www.sanity.io/manage
2. Click on your project
3. Go to **API** → **CORS Origins**
4. Add these URLs:
   - `http://localhost:3001`
   - `https://your-vercel-url.vercel.app` (after deployment)

5. **Install Sanity Studio in your Next.js app:**

```bash
npm install sanity @sanity/vision
```

Then create `src/app/studio/[[...index]]/page.tsx` (we can help with this if needed)

---

## **What's Next?**

Once your studio is deployed:

1. ✅ Visit your studio URL
2. ✅ Create "Site Settings" document
3. ✅ Add your content
4. ✅ Watch it appear on your website!

---

## **Need Help?**

If you get stuck:
- Check that your Project ID is correct: `u8h3j78v`
- Make sure you're logged into the same account that created the project
- The organization setup is fine - it doesn't matter!

