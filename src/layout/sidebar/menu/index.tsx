import { Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getTypes } from "../../../services/getTypes";
import { Name } from "../../../utils/types";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState<[{ name: Name; url: string }]>([
    { name: "normal", url: "" },
  ]);

  const getAllTypes = async () => {
    try {
      setLoading(true);
      const { results } = await getTypes();
      setTypes(results);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <Flex flexDir="column" h="full" justifyContent="center" gap=".9rem">
      {loading && <Spinner />}
      {!loading &&
        types.map(({ name, url }) => {
          return <MenuItem key={url} name={name} />;
        })}
    </Flex>
  );
};
