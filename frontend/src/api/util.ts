const BASE_URL = "http://localhost:3000/api";

async function fetchData(endpoint: string, options = {}): Promise<CustomResponse> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!response.ok) {
      console.error(`API call failed with status ${response.status}`);
      return { message: "API call failed " + response.statusText };
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

export { fetchData };
