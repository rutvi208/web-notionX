export function getReadingTime(text) {
    if (!text) return "1 min read";
    
    const words = text.split(/\s+/).length;
    const wordsPerMinute = 200; // Standard reading speed
    const minutes = Math.ceil(words / wordsPerMinute);
  
    return `${minutes} min${minutes > 1 ? "s" : ""} read`;
  }
  