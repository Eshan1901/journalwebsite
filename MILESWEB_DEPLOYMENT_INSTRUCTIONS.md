# MilesWeb Deployment Instructions for Gnosis Press

## 📦 Files Ready for Upload

All production files are in the **`dist`** folder and are ready to upload directly to MilesWeb.

---

## 🚀 Step-by-Step Deployment Process

### Step 1: Access Your MilesWeb cPanel
1. Log in to your MilesWeb hosting account
2. Navigate to **cPanel**
3. Open **File Manager**

### Step 2: Navigate to Public Directory
1. In File Manager, go to `public_html` (or your domain's root directory)
2. **Delete all existing files** in this directory (if any)

### Step 3: Upload Files
1. Click **Upload** button in File Manager
2. Navigate to your local computer: `d:\journals website\dist`
3. **Select ALL files and folders** inside the `dist` folder:
   - `.htaccess` (IMPORTANT - this file may be hidden, make sure to show hidden files)
   - `index.html`
   - `logo.png`
   - `JCIDS_Paper_Template.pdf`
   - `j1.txt`
   - `j2.txt`
   - `assets` folder (contains all CSS and JavaScript files)

4. Upload all these files to `public_html`

### Step 4: Verify .htaccess File
1. In cPanel File Manager, click **Settings** (top right)
2. Enable **Show Hidden Files (dotfiles)**
3. Verify that `.htaccess` file exists in `public_html`
4. If it's not there, upload it separately from `dist/.htaccess`

### Step 5: Set Correct Permissions
1. Right-click on `.htaccess` → **Change Permissions**
2. Set to **644** (rw-r--r--)
3. For all folders (like `assets`): Set to **755** (rwxr-xr-x)
4. For all other files: Set to **644**

---

## ✅ Final Structure on Server

Your `public_html` folder should look like this:

```
public_html/
├── .htaccess                       ← IMPORTANT (hidden file)
├── index.html                      ← Main HTML file
├── logo.png                        ← Logo image
├── JCIDS_Paper_Template.pdf        ← Template file
├── j1.txt
├── j2.txt
└── assets/
    ├── index-0e4c9e6c.css         ← Compiled CSS
    └── index-ce40b033.js          ← Compiled JavaScript
```

---

## 🔧 Important Notes

### 1. **Always Upload from `dist` Folder**
   - Never upload source files (src, node_modules, etc.)
   - Only upload contents of the `dist` folder

### 2. **The `.htaccess` File is Critical**
   - It configures correct MIME types for JavaScript
   - Enables React Router (SPA) to work properly
   - Must be present in public_html root

### 3. **If You Make Changes**
   - Make changes in your local development environment
   - Run `npm run build` to create new production files
   - Delete old files from server
   - Upload new files from `dist` folder

### 4. **Clear Browser Cache**
   - After uploading, clear your browser cache (Ctrl+F5)
   - Or test in incognito/private mode

---

## 🐛 Troubleshooting

### Problem: MIME Type Error
**Solution:** 
- Ensure `.htaccess` file is uploaded and visible
- Check file permissions (should be 644)
- Contact MilesWeb support to ensure mod_rewrite is enabled

### Problem: 404 Error on Logo
**Solution:**
- Verify `logo.png` is in the root of public_html
- Check file name is exactly `logo.png` (lowercase)
- Check file permissions (should be 644)

### Problem: Blank Page
**Solution:**
- Check browser console for errors (F12)
- Verify all files in `assets` folder are uploaded
- Clear browser cache and reload

### Problem: Routes Don't Work (404 on refresh)
**Solution:**
- Verify `.htaccess` file exists and has correct content
- Contact MilesWeb to enable mod_rewrite module
- Check that RewriteEngine is allowed in your hosting plan

---

## 📞 MilesWeb Support

If you encounter issues:
- **Support Portal:** https://clients.milesweb.com
- **Email:** support@milesweb.com
- **Phone:** Check your welcome email

Ask them to:
1. Enable mod_rewrite module
2. Enable mod_headers module
3. Confirm .htaccess is being processed

---

## ✨ After Deployment

Visit: **https://gnosispress.org**

The website should now be live with:
- ✅ All pages working (Home, Journals, Editorial, Submit)
- ✅ Logo displaying correctly
- ✅ PDF template downloadable
- ✅ Navigation working properly
- ✅ All styles applied correctly

---

## 🔄 Future Updates

When you need to update the website:

1. Make changes in your local files (d:\journals website)
2. Run: `npm run build`
3. Upload new files from `dist` folder to server
4. Clear browser cache

---

**Last Build Date:** October 18, 2025
**Version:** 1.0.0
**Domain:** gnosispress.org
