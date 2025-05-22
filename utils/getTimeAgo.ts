export function getTimeAgo(dateString: string): string {
    const now = new Date().getTime();
    const past = new Date(dateString).getTime();
    const diff = now - past;
  
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours   = Math.floor(diff / (1000 * 60 * 60));
    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months  = Math.floor(days / 30);
    const years   = Math.floor(days / 365);
  
    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24)   return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 30)    return `${days} day${days > 1 ? 's' : ''} ago`;
    if (months < 12)  return `${months} month${months > 1 ? 's' : ''} ago`;
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
  