# 🔐 GitHub Authentication Fix

## **The Problem:**
Git is trying to use account `CGJSingh` but the repository belongs to `ssasheridan`.

## **Solution Options:**

### **Option 1: Use Personal Access Token (Recommended)**

1. **Generate a Token:**
   - Go to: https://github.com/settings/tokens
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   - **Note:** Give it a name like "SSA Website"
   - **Expiration:** Choose 90 days or No expiration
   - **Select scopes:** Check `repo` (full control of private repositories)
   - Click **"Generate token"**
   - **COPY THE TOKEN** (you won't see it again!)

2. **Push using the token:**
   ```bash
   cd "D:\SSA\SSA Website"
   git push -u origin main
   ```
   When prompted:
   - **Username:** `ssasheridan`
   - **Password:** Paste your Personal Access Token (not your GitHub password!)

---

### **Option 2: Use GitHub CLI**

1. **Install GitHub CLI:**
   - Download from: https://cli.github.com/
   - Or via Chocolatey: `choco install gh`

2. **Login:**
   ```bash
   gh auth login
   ```
   - Follow prompts
   - Select `GitHub.com`
   - Select `HTTPS`
   - Authenticate via browser

3. **Push:**
   ```bash
   cd "D:\SSA\SSA Website"
   git push -u origin main
   ```

---

### **Option 3: Update Git Credentials**

1. **Clear old credentials:**
   ```bash
   git config --global --unset credential.helper
   ```

2. **Or use Windows Credential Manager:**
   - Open: Control Panel → Credential Manager
   - Go to "Windows Credentials"
   - Find `github.com` entries
   - Delete or update them

3. **Push again:**
   ```bash
   git push -u origin main
   ```
   Enter credentials when prompted

---

## **Quick Fix - Try This First:**

Run these commands:

```bash
cd "D:\SSA\SSA Website"
git config --global user.name "ssasheridan"
git push -u origin main
```

When prompted for credentials, use:
- **Username:** `ssasheridan`
- **Password:** Your Personal Access Token (generate one if needed - see Option 1)

---

**Which option would you like to try?**

