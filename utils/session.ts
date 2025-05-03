class Session {
  #server: string;
  #token: string | undefined;

  constructor(
    server = "https://api.artifactsmmo.com",
    token = Deno.env.get("API_TOKEN"),
  ) {
    this.#server = server;
    this.#token = token;
  }

  async #fetchApi(path: string, options: RequestInit) {
    const url = this.#server + path;
    const defaultHeaders: HeadersInit = {
      Accept: "application/json",
      Authorization: "Bearer " + this.#token,
    };
    options.headers = {
      ...defaultHeaders,
      ...(options.headers || {}),
    };
    const response = await fetch(url, options);
    if (response.status < 200 || response.status >= 300) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.error
        ? `${errorResponse.error.code}: ${errorResponse.error.message}`
        : `${response.status} ${response.statusText}`;

      console.error(`API request failed: ${errorMessage}`, url);
      throw new Error(`API request failed: ${errorMessage}`);
    }
    const { data } = await response.json();
    return data;
  }

  async postApi(path: string, body: object) {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    return await this.#fetchApi(path, options);
  }

  async getApi(path: string) {
    const options: RequestInit = {
      method: "GET",
    };
    return await this.#fetchApi(path, options);
  }
}

// Export a default singleton instance for convenience
const session = new Session();
export default session;
