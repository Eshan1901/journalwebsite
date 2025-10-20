# ✅ MilesWeb Upload Checklist

## Files to Upload (from dist folder)

□ .htaccess (hidden file - CRITICAL!)
□ index.html
□ logo.png
□ JCIDS_Paper_Template.pdf
□ j1.txt
□ j2.txt
□ assets/ folder (entire folder with all contents)

## Pre-Upload Steps

□ Run `npm run build` to generate fresh dist files
□ Check that dist folder contains all files above

## Upload Steps

□ Log into MilesWeb cPanel
□ Open File Manager
□ Navigate to public_html
□ Delete all existing files (if any)
□ Enable "Show Hidden Files" in settings
□ Upload ALL files from dist folder
□ Verify .htaccess is uploaded and visible

## Post-Upload Verification

□ Check .htaccess permissions (should be 644)
□ Check assets folder permissions (should be 755)
□ Visit https://gnosispress.org
□ Test all pages (Home, Journals, Editorial, Submit)
□ Check logo loads
□ Test PDF download
□ Test navigation
□ Clear browser cache if needed (Ctrl+F5)

## If Something Goes Wrong

□ Check browser console (F12) for errors
□ Verify .htaccess exists in public_html
□ Contact MilesWeb support to enable mod_rewrite
□ Re-upload files if needed

---

## Quick Terminal Commands

Build production files:
```
npm run build
```

Check dist folder:
```
dir dist
```

---

**Upload Location:** All files go to `public_html` directory
**Domain:** gnosispress.org
**Hosting:** MilesWeb
