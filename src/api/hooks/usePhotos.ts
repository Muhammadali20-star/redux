import { useQuery } from "@tanstack/react-query";
import { api } from "..";


export const usePhotos =() => {
    const getPhoto = ()=>
    useQuery({
        queryKey: ["photos"],
        queryFn: ()=> api.get("photos?limit10").then(res => res.data)
    })

    return {getPhoto}
}