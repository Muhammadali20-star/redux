import { useQuery } from "@tanstack/react-query";
import { api } from "..";


export const useUsers =() => {
    const getUser = ()=>
    useQuery({
        queryKey: ["users"],
        queryFn: ()=> api.get("users").then(res => res.data)
    })

    return {getUser}
}