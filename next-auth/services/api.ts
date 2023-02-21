export const BASE_AUTH_URL = "http://localhost:3001";
export const BASE_URL = "http://localhost:3000";
export const BASE_API_URL = "http://localhost:3000/api";

const redirectTo = async (path: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const windowRef = window;
    windowRef.addEventListener("load", () => {
      resolve(true);
    });
    window.location.href = path;
  });
};

const fetchApi = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<Response> => {
  try {
    const res = await fetch(input, {
      ...init,
      credentials: "include",
    });
    if (res.ok) return res;
    const redirectUri = window.location.href;
    const emptyResponse = JSON.stringify({});
    if (res.status === 401) {
      const loginPath = `${BASE_AUTH_URL}/login?redirect_uri=${redirectUri}`;
      await redirectTo(loginPath);
      return res;
    }
    return res;
  } catch (e: any) {
    console.log(e);
    return new Response(JSON.stringify({ error: e.message }));
  }
};
export const getPosts = async (endpoint: string) => {
  const res = await fetchApi(`${BASE_API_URL}/${endpoint}`);
  const posts = await res.json();

  return posts;
};
export const create = async <T>(endpoint: string, params: T) => {
  console.log({ params });
  const res = await fetchApi(`${BASE_API_URL}/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  console.log(post);
  return post;
};
export const update = async <T extends { id: string }>(
  endpoint: string,
  params: T
) => {
  const res = await fetchApi(`${BASE_API_URL}/${endpoint}/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await res.json();
  console.log(post);
  return post;
};
export const remove = async <T extends { id: string }>(
  endpoint: string,
  params: T
) => {
  try {
    const res = await fetchApi(`${BASE_API_URL}/${endpoint}/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const post = await res.json();
    return post;
  } catch (e: any) {
    console.log(e.message);
  }
};

export const logout = async () => {
  const res = await fetchApi(`${BASE_API_URL}/auth/logout`, {
    method: "POST",
  });
};
export const getCurrentUser = async () => {
  const res = await fetchApi(`${BASE_API_URL}/auth/current`, {
    method: "GET",
  });
  const { user } = await res.json();
  return user;
};
