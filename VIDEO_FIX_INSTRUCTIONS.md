# Video File Issue - URGENT FIX NEEDED

## Problem
The video file `sample-vid-edited.mp4` is **230MB**, which exceeds Vercel's deployment limits and is too large for web delivery.

## Vercel Limits
- Serverless Functions: 50MB max
- Edge Functions: 1-4MB max
- Static files in git: 100MB recommended max
- **Your video: 230MB** ❌

## Solutions (Choose One):

### Option 1: Compress the Video (RECOMMENDED)
```bash
# Install ffmpeg if you don't have it
brew install ffmpeg  # Mac
# or: sudo apt-get install ffmpeg  # Linux

# Compress the video to ~10-20MB (high quality)
cd "/Users/base/Desktop/marketing-campaigns/FuelFoods Culinary Creative/fuelfoods_restaurants/public/videos"

ffmpeg -i sample-vid-edited.mp4 \
  -vcodec h264 \
  -crf 28 \
  -preset slow \
  -vf "scale=1280:-2" \
  -acodec aac \
  -b:a 128k \
  sample-vid-compressed.mp4

# Check the new size
ls -lh sample-vid-compressed.mp4
```

Then update the HTML files to use the compressed version:
- Change `/videos/sample-vid-edited.mp4` to `/videos/sample-vid-compressed.mp4`

### Option 2: Use a CDN (CloudFront, Cloudflare, etc.)
1. Upload the video to AWS S3, Cloudflare R2, or similar
2. Get the CDN URL
3. Update HTML files to use the CDN URL:
   ```html
   <source src="https://your-cdn.com/sample-vid-edited.mp4" type="video/mp4">
   ```

### Option 3: Use YouTube/Vimeo Embed
1. Upload video to YouTube or Vimeo
2. Use their embed code instead of the video tag
3. Faster loading and better streaming

## Immediate Action Required:
Run this command to compress the video NOW:

```bash
cd "/Users/base/Desktop/marketing-campaigns/FuelFoods Culinary Creative/fuelfoods_restaurants/public/videos"
ffmpeg -i sample-vid-edited.mp4 -vcodec h264 -crf 28 -preset slow -vf "scale=1280:-2" -acodec aac -b:a 128k sample-vid-compressed.mp4
```

Then I'll update the HTML files for you.
