import { randomBytes, createHash } from "crypto";
import users from "@/content/users.json";

const ENCODING = "base64";
const SHA256 = "sha256";

export const encryptPassword = (
  password: string
): { password: string; salt: string } => {
  const salt = randomBytes(16).toString(ENCODING);
  const hash = createHash(SHA256)
    .update(password + salt)
    .digest(ENCODING);

  return { password: hash, salt: salt };
};

export const validateCredentials = (
  username: string,
  password: string
): boolean => {
  const user = users.find((user) => user.name === username);

  if (user) {
    const { password: hashedPassword, salt } = user;
    const hashedAttempt = createHash(SHA256)
      .update(password + salt)
      .digest(ENCODING);

    return hashedPassword === hashedAttempt;
  }

  return false;
};
