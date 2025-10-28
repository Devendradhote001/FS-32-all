import { useQuery } from "@tanstack/react-query";
import { fetchProductsApi } from "../apis/ProductApis";

export const getProductDataHook = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsApi,
    staleTime: Infinity,
  });
};
