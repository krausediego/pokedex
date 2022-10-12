import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex w="100vw" h="100vh" boxSizing="border-box">
      <Sidebar />
      <Flex w="75%" flexDir="column" p="2rem" h="full" overflowY="scroll">
        {children}
      </Flex>
    </Flex>
  );
};
