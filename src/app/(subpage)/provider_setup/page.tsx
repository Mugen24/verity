import LocationForm from "@/app/components/locationForm";
import { ReactNode } from "react";

export default function page({children}: {
    children: ReactNode
}) {
    return (
        <>
            {/* <h1>hello</h1> */}
            <LocationForm></LocationForm>
        </>
    )    
}