export function parseExpertName(name: string) {
  return name.split("-").join(" ");
}

export interface ApiResponse {
  reply: string;
}

export const fetcher = (url: string): Promise<ApiResponse> =>
  fetch(url).then((res) => res.json());
