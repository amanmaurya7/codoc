import { Scrypt } from "lucia";
import { Google } from "arctic";
export const scrypt = new Scrypt();
export const google = new Google(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL
);
