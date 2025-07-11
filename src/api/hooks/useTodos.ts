import { useQuery } from "@tanstack/react-query";
import { api } from "..";


export const usetodos =() => {
    const getTodo = ()=>
    useQuery({
        queryKey: ["todos"],
        queryFn: ()=> api.get("todos").then(res => res.data)
    })

    return {getTodo}
}