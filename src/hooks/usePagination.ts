import { useState } from "react";

interface UsePaginationProps {
  total: number;
  nextPage: () => void;
  previousPage: () => void;
}

export const usePagination = ({
  total,
  nextPage,
  previousPage,
}: UsePaginationProps) => {
  const [offset, setOffset] = useState(0);

  const totalPages = total / 9;

  return {
    totalPages,
    offset,
  };
};
