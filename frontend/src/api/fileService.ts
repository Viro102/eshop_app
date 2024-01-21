import { fetchData } from "./util";

async function upload(data: FormData): Promise<void> {
  await fetchData(`upload`, { method: "POST", body: data });
}

export { upload };
