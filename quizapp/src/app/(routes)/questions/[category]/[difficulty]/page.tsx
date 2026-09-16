"use client"
import {useParams} from "next/navigation"
import {useState} from "react"


export default function Question(){
    const paramsItem=useParams<{category:string,difficulty:string}>()

    return(
        <>
        <p>catagorys are listed below</p>
        
        </>
    )
}