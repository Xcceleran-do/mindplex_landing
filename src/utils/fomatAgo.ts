export function formatTimeAgo(dateString: string | undefined) {
  if (!dateString) return "";
  const date = new Date(dateString);
  const now = new Date();
  const timeDifference = now - date;

  if (timeDifference < 60000) {
    return "just now";
  } else if (timeDifference < 3600000) {
    const minutesAgo = Math.floor(timeDifference / 60000);
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < 86400000) {
    const hoursAgo = Math.floor(timeDifference / 3600000);
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < 2592000000) {
    const daysAgo = Math.floor(timeDifference / 86400000);
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < 31536000000) {
    const monthsAgo = Math.floor(timeDifference / 2592000000);
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else {
    const yearsAgo = Math.floor(timeDifference / 31536000000);
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  }
}
