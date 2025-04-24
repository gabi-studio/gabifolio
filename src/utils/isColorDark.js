// src/utils/isColorDark.js
export default function isColorDark(hexColor) {
    if (!hexColor) return false;
  
    // Remove # if present
    const hex = hexColor.replace('#', '');
  
    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // Calculate brightness (YIQ formula)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Return true if dark
    return brightness < 128;
  }
  