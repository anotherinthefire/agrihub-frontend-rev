import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(timestamp: string) {
  const currentDate: any = new Date();
  const previousDate: any = new Date(timestamp);

  const seconds = Math.floor((currentDate - previousDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  let result;

  switch (true) {
    case seconds < 60:
      result = seconds + " seconds ago";
      break;
    case minutes === 1:
      result = "a minute ago";
      break;
    case minutes < 60:
      result = minutes + " minutes ago";
      break;
    case hours === 1:
      result = "an hour ago";
      break;
    case hours < 24:
      result = hours + " hours ago";
      break;
    case days === 1:
      result = "a day ago";
      break;
    case days < 30:
      result = days + " days ago";
      break;
    case months === 1:
      result = "a month ago";
      break;
    case months < 12:
      result = months + " months ago";
      break;
    case years === 1:
      result = "a year ago";
      break;
    default:
      result = years + " years ago";
      break;
  }

  return result;
}

export function timeAgo2(timestamp: string) {
  const currentDate: any = new Date();

  // Truncate microseconds and parse the date
  const parsedTimestamp = timestamp.substring(0, 19);
  const previousDate: any = new Date(
    Date.parse(parsedTimestamp.replace(" ", "T") + "Z")
  );

  const seconds = Math.floor((currentDate - previousDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  let result;

  switch (true) {
    case seconds < 60:
      result = seconds + " seconds ago";
      break;
    case minutes === 1:
      result = "a minute ago";
      break;
    case minutes < 60:
      result = minutes + " minutes ago";
      break;
    case hours === 1:
      result = "an hour ago";
      break;
    case hours < 24:
      result = hours + " hours ago";
      break;
    case days === 1:
      result = "a day ago";
      break;
    case days < 30:
      result = days + " days ago";
      break;
    case months === 1:
      result = "a month ago";
      break;
    case months < 12:
      result = months + " months ago";
      break;
    case years === 1:
      result = "a year ago";
      break;
    default:
      result = years + " years ago";
      break;
  }

  return result;
}

export function formatDateTime(dateTimeString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC"
  };
  const eventStartDate = new Date(dateTimeString);
  const formattedDateTime = `${eventStartDate.toLocaleDateString(
    "en-US",
    options
  )}`;
  return formattedDateTime;
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const eventStartDate = new Date(dateString);
  const formattedDate = `${eventStartDate.toLocaleDateString(
    "en-US",
    options
  )}`;
  return formattedDate;
}

export function formatRoles(role: string) {
  let formatedRole;

  switch (role) {
    case "member":
      formatedRole = "Member";
      break;
    case "admin":
      formatedRole = "Admin";
      break;
    case "farm_head":
      formatedRole = "Farm Head";
      break;
    case "farmer":
      formatedRole = "Farmer";
      break;
    default:
      formatedRole = "Undefined";
  }
  return formatedRole;
}

export const convertToEmbedLink = (link: string) => {
  const regex =
    /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = link.match(regex);
  const videoId = match ? match[1] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    return link;
  }
};
