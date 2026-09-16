"use client"
import {useParams} from "next/navigation"


export default function Question(){
    const paramsItem=useParams<{category:string,difficulty:string}>()

    return(
        <>
        <p>you selected {paramsItem.category} of {paramsItem.difficulty} level questions</p>

        </>
    )
}