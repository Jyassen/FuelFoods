#!/usr/bin/env node

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const inputVideo = path.join(__dirname, 'public', 'videos', 'sample-vid-edited.mp4');
const outputVideo = path.join(__dirname, 'public', 'videos', 'sample-vid-compressed.mp4');

console.log('🎬 Starting video compression...');
console.log(`Input: ${inputVideo}`);
console.log(`Output: ${outputVideo}`);

// Check if input file exists
if (!fs.existsSync(inputVideo)) {
  console.error('❌ Error: Input video file not found!');
  process.exit(1);
}

// Get input file size
const inputStats = fs.statSync(inputVideo);
const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);
console.log(`📊 Original file size: ${inputSizeMB} MB`);

ffmpeg(inputVideo)
  .outputOptions([
    '-vcodec h264',           // H.264 codec
    '-crf 28',                 // Quality (18-28 is good, higher = smaller file)
    '-preset slow',            // Encoding speed vs compression ratio
    '-vf scale=1280:-2',       // Scale to 1280px width, maintain aspect ratio
    '-acodec aac',             // AAC audio codec
    '-b:a 128k',               // Audio bitrate
    '-movflags +faststart'     // Enable fast start for web playback
  ])
  .on('start', (commandLine) => {
    console.log('🚀 FFmpeg command:', commandLine);
  })
  .on('progress', (progress) => {
    if (progress.percent) {
      process.stdout.write(`\r⏳ Progress: ${progress.percent.toFixed(1)}%`);
    }
  })
  .on('end', () => {
    console.log('\n✅ Video compression completed!');
    
    // Get output file size
    const outputStats = fs.statSync(outputVideo);
    const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`📊 Compressed file size: ${outputSizeMB} MB`);
    console.log(`📉 Size reduction: ${reduction}%`);
    console.log(`💾 Saved: ${(inputSizeMB - outputSizeMB).toFixed(2)} MB`);
    
    if (outputStats.size > 50 * 1024 * 1024) {
      console.log('⚠️  Warning: File is still large (>50MB). Consider using a CDN for deployment.');
    } else {
      console.log('✅ File size is suitable for Vercel deployment!');
    }
  })
  .on('error', (err, stdout, stderr) => {
    console.error('\n❌ Error during compression:', err.message);
    console.error('FFmpeg stderr:', stderr);
    process.exit(1);
  })
  .save(outputVideo);
