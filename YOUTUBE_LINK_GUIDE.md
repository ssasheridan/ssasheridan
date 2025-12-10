# YouTube Link Guide for Sanity CMS

## How to Add YouTube Videos to Events

When adding a YouTube video link to an event in Sanity CMS, use one of these formats:

### ✅ Accepted Formats:

1. **Full URL (Recommended)**
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```

2. **Shortened URL**
   ```
   https://youtu.be/dQw4w9WgXcQ
   ```

3. **Video ID Only**
   ```
   dQw4w9WgXcQ
   ```

### ❌ Common Issues & Solutions:

#### Problem: Video shows as "Unavailable"
**Possible Causes:**
- The video is **private** or **unlisted** (check YouTube privacy settings)
- The video has **embedding disabled** (check YouTube video settings)
- The video has **age restrictions** (may not embed)
- The URL format is incorrect

**Solutions:**
1. Make sure the video is **Public** or **Unlisted** (not Private)
2. Go to YouTube → Video → Settings → Visibility
3. Under "Advanced settings", ensure "Allow embedding" is checked
4. Verify the URL format matches one of the accepted formats above

#### Problem: Invalid URL Format Error
**Cause:** The URL doesn't match any recognized YouTube format

**Solution:** 
- Copy the URL directly from your browser's address bar when viewing the video
- Or copy the "Share" link from YouTube's share button
- Make sure you're copying the full URL, not just part of it

### How to Get the Correct YouTube URL:

1. Open the YouTube video in your browser
2. Click the "Share" button below the video
3. Click "Copy link" 
4. Paste that link into Sanity CMS

### Example URLs That Work:

✅ `https://www.youtube.com/watch?v=jNQXAC9IVRw`
✅ `https://youtu.be/jNQXAC9IVRw`
✅ `jNQXAC9IVRw` (just the ID)

### Video Privacy Settings:

For videos to embed properly:
- **Public**: ✅ Works (anyone can view)
- **Unlisted**: ✅ Works (only people with link can view, but embeds work)
- **Private**: ❌ Does NOT work (only owner can view)

### Still Having Issues?

If your video still shows as unavailable after checking all the above:
1. Verify the video ID is correct (11 characters: letters, numbers, underscores, hyphens)
2. Try opening the video URL directly in a new browser tab
3. Check if the video exists and is accessible
4. Make sure you're not using a playlist URL or channel URL instead of a video URL

