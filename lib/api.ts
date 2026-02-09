const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export const api = {
  documentation: {
    augment: (data: unknown) =>
      fetchAPI("/documentation/augment", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },
  audit: {
    preDischarge: (data: unknown) =>
      fetchAPI("/audit/pre-discharge", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },
  consent: {
    capture: (data: unknown) =>
      fetchAPI("/consent/capture", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },
};
