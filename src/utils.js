export const timeAgo = unixTimeStamp => {
  const now = Math.floor(Date.now() / 1000);
  const publicationDate = new Date(unixTimeStamp).getTime();
  const secondsElapsedSincePublication = now - publicationDate;
  const minutes = Math.floor(secondsElapsedSincePublication / 60);
  const hours = Math.floor(secondsElapsedSincePublication / (60 * 60));
  const days = Math.floor(secondsElapsedSincePublication / (60 * 60 * 24));

  if (secondsElapsedSincePublication < 5) {
    return "Just now";
  } else if (minutes < 60) {
    return minutes === 1 ? "A minute ago" : `${minutes} minutes ago`;
  } else if (hours < 24) {
    return hours === 1 ? "An hour ago" : `${hours} hours ago`;
  } else {
    return days === 1 ? "Yesterday" : `${days} days ago`;
  }
};

export const formatURL = storyId => {
  return `/ask/${storyId}`;
};

export const linkToStoryOnHN = storyId =>
  `https://news.ycombinator.com/item?id=${storyId}`;

export const getStoryDomainName = storyURL => {
  const domain = new URL(storyURL).hostname;
  return domain.replace(/^www\./, "");
};

export const extractIdFromURL = path => {
  const split_url = path.split("/");
  return split_url[split_url.length - 1];
};

export const linkToUserProfile = userId =>
  `https://news.ycombinator.com/user?id=${userId}`;
