export type User = {
  username: string;
  password: string;
};
const BASE_URL = "http://localhost:3001";
export const login = async (user: User) => {
  // get the current URL
  const url = new URL(window.location.href);

  // get the value of the redirect_uri parameter
  const redirectUri = url.searchParams.get("redirect_uri");
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ ...user, redirect_uri: redirectUri }),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  // return { user };
  if (res.ok && redirectUri) {
    window.location.href = redirectUri;
  }
};
