#!/bin/bash

# Resize all images in assets/images to 800px width (maintaining aspect ratio)
# Requires ImageMagick: sudo apt install imagemagick

IMAGE_DIR="assets/images"
TARGET_WIDTH=800

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is not installed. Install with: sudo apt install imagemagick"
    exit 1
fi

# Process each image file
find "$IMAGE_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.webp" \) | while read -r img; do
    # Get current width
    current_width=$(identify -format "%w" "$img[0]" 2>/dev/null)

    if [ -z "$current_width" ]; then
        echo "Skipping (cannot read): $img"
        continue
    fi

    # Only resize if wider than target
    if [ "$current_width" -gt "$TARGET_WIDTH" ]; then
        echo "Resizing: $img (${current_width}px -> ${TARGET_WIDTH}px)"
        convert "$img" -resize "${TARGET_WIDTH}x" "$img"
    else
        echo "Skipping (already ${current_width}px): $img"
    fi
done

echo "Done!"
