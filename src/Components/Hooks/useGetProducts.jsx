import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic.get(`/products`)
            // console.log(res.data)
            return res.data;
        }
    })
    return [products, refetch]
};

export default useGetProducts;