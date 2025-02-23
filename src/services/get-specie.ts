import { api } from "@/lib/axios";

interface GetSpecieRequest {
  id: number;
}

interface GetSpecieResponse {
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
    version: {
      name: string;
    };
  }[];
}

export async function getSpecie({ id }: GetSpecieRequest) {
  const response = await api.get<GetSpecieResponse>(`/pokemon-species/${id}`);

  return response.data;
}
