# FuelFoods Deployment Fix Guide

## Critical Issues Found & Fixed

### 1. Video File Too Large ⚠️
**Problem:** `sample-vid-edited.mp4` is 230MB (Vercel limit: ~100MB for git)
**Status:** ⚠️ ACTION REQUIRED

### 2. Configuration Fixed ✅
- Created `vercel.json` with proper routing
- Updated `next.config.js` with standalone output
- Added proper headers for static assets

## Quick Fix Options for Video:

### Option A: Use Online Compression (NO SOFTWARE NEEDED)
1. Go to https://www.freeconvert.com/video-compressor
2. Upload `/public/videos/sample-vid-edited.mp4`
3. Set target size to 15-20MB
4. Download compressed version
5. Replace the file in `/public/videos/`

### Option B: Upload to CDN (BEST for large files)
**Use Cloudflare R2 (FREE for first 10GB):**
1. Sign up at https://dash.cloudflare.com/
2. Go to R2 Object Storage
3. Create bucket "fuelfoods-media"
4. Upload video
5. Enable public access
6. Get URL and update HTML files

### Option C: Use Vimeo (Professional)
1. Upload to Vimeo
2. Get embed code
3. Replace video tag with iframe embed

## Files Changed:

### ✅ vercel.json (CREATED)
- Configured rewrites for HTML pages
- Added headers for static assets
- Set up proper routing for images/videos

### ✅ next.config.js (UPDATED)
- Added standalone output mode
- Configured image optimization
- Preserved rewrites for landing pages

## Deployment Steps:

### Step 1: Fix Video File
**Choose one option above and complete it**

### Step 2: Update HTML Files (IF using CDN)
If you chose CDN option, update these files:
- `/public/samplebox.html` - Line 1355
- Change: `src="/videos/sample-vid-edited.mp4"`
- To: `src="https://your-cdn-url/sample-vid-edited.mp4"`

### Step 3: Commit & Deploy
```bash
cd "/Users/base/Desktop/marketing-campaigns/FuelFoods Culinary Creative/fuelfoods_restaurants"

# Check what's being tracked
git status

# Add the new config files
git add vercel.json next.config.js

# Commit
git commit -m "Fix: Add Vercel config for static assets and HTML rewrites"

# Push to deploy
git push origin main
```

### Step 4: Verify Deployment
After deployment, check these URLs:
- Main site: https://fuelfoods-culinaryfinal.vercel.app
- Sample box: https://fuelfoods-culinaryfinal.vercel.app/samplebox
- Pairing guide: https://fuelfoods-culinaryfinal.vercel.app/seasonal-pairing-guide
- Test image: https://fuelfoods-culinaryfinal.vercel.app/images/brand/Logo.png
- Test video: https://fuelfoods-culinaryfinal.vercel.app/videos/sample-vid-edited.mp4

## Why Images Weren't Showing:

1. **Missing Vercel Configuration:** No `vercel.json` to handle static file routing
2. **Next.js Config:** Missing standalone output configuration
3. **Video File Size:** 230MB video likely timing out or being blocked
4. **Build Settings:** Need proper static file handling

## Current Status:

✅ Configuration files created/updated
✅ Routing configured for HTML pages
✅ Headers set for static assets
⚠️  Video needs compression or CDN

## Next Actions:

1. **IMMEDIATELY:** Fix the video file (choose Option A, B, or C above)
2. **THEN:** Commit and push changes
3. **VERIFY:** Test all URLs after deployment

## Testing Locally:

```bash
cd "/Users/base/Desktop/marketing-campaigns/FuelFoods Culinary Creative/fuelfoods_restaurants"

# Install dependencies if needed
npm install

# Build
npm run build

# Start local server
npm start

# Test URLs:
# http://localhost:3000
# http://localhost:3000/samplebox
# http://localhost:3000/seasonal-pairing-guide
```

## Additional Notes:

### Image Paths (These are CORRECT ✅)
- `/images/brand/Logo.png`
- `/images/microgreens/*.png`
- `/images/hero/*.png`
- `/images/restaurant_partners/*.png`

All image paths in your HTML and React components are correct. The issue was the Vercel configuration.

### Video Path
- Current: `/videos/sample-vid-edited.mp4` (230MB - TOO LARGE)
- After compression: `/videos/sample-vid-compressed.mp4` (15-20MB - OK)
- OR use CDN URL: `https://cdn.example.com/video.mp4`

## Support:

If you encounter any issues:
1. Check Vercel deployment logs
2. Check browser console for 404 errors
3. Verify git push succeeded
4. Check Vercel dashboard for build status
