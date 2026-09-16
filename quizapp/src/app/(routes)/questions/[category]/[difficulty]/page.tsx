"use client"
import {useParams} from "next/navigation"
import {useState} from "react"
import FetchCategory from "@/app/api/fetchCategory"

export default function Question(){
    const paramsItem=useParams<{category:string,difficulty:string}>()

    return(
        <>
        <p>catagorys are listed below</p>
        <FetchCategory/>
        </>
    )
}