import { getSession } from "next-auth/react";
import sanitizeHtml from "sanitize-html";

/**
 *
 * @param timestamp string holding the timestamp of the post
 * @returns string holding the time difference between the current time and the timestamp
 */
export function getTimeDifference(timestamp: string): string {
  const currentTime = new Date();
  const postTime = new Date(timestamp);

  const timeDifference = currentTime.getTime() - postTime.getTime();
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const yearsDifference = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24 * 365)
  );

  if (yearsDifference > 0) {
    return `Posted ${yearsDifference} year${
      yearsDifference > 1 ? "s" : ""
    } ago`;
  } else if (daysDifference > 0) {
    return `Posted ${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
  } else if (hoursDifference > 0) {
    return `Posted ${hoursDifference} hour${
      hoursDifference > 1 ? "s" : ""
    } ago`;
  } else if (minutesDifference > 0) {
    return `Posted ${minutesDifference} minute${
      minutesDifference !== 1 ? "s" : ""
    } ago`;
  } else {
    return "Posted just now";
  }
}

export async function getClientSession() {
  const session = await getSession();
  return session;
}

export async function streamToJSON(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value, { stream: true });
  }
  return JSON.parse(result);
}

export function sanitize(dirty: string) {
  // Defaults and usage in: https://www.npmjs.com/package/sanitize-html

  const allowedTags = ["b", "i", "em", "strong", "ul", "ol", "li", "br"];

  return sanitizeHtml(dirty, {
    allowedTags,
    allowedAttributes: false,
  });
}
