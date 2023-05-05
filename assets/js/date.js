export function daysLeft(deadline) {
    let now = new Date();
    let diff = deadline.getTime() - now.getTime();
    let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    return daysLeft.toLocaleString();
  }