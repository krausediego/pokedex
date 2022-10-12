import { TypeName } from "../utils/types";
import { api } from "./api";

interface TypesProps {
  count: number;
  next?: any;
  previous?: any;
  results: [
    {
      name: TypeName;
      url: string;
    }
  ];
}

export const getTypes = async (): Promise<TypesProps> => {
  const { data } = await api.get<TypesProps>("/type");
  return data;
};
