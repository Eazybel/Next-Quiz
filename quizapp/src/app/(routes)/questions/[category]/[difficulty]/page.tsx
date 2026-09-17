"use client"
import {useState,useEffect} from "react"
import {useParams}from "next/navigation"
export default  function Question(){
   const {category,difficulty}=useParams<{category:string,difficulty:string}>()
    return(
        <>
        <p>you selected {category} of {difficulty} level questions</p>

        </>
    )
}