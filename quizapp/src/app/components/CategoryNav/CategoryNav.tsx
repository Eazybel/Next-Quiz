"use client"

type textProps={
   text:string[]
}
import React from "react";

import {useState} from "react"
import {useRouter} from "next/navigation"
export default function CategoryNav(props:textProps){
    const router=useRouter()
    const [change,setChange] = useState("")
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setChange(e.target.value)
    }
    const clickHandler=(e:React.FormEvent)=>{
        e.preventDefault()
        console.log(change)
router.push(`Questions/${change}`)
    }
    return(
        <form action="">
            {
                props.text.map((inputs:string,index:number)=>{
                    return <>
                    <label key={index} htmlFor={inputs}>{inputs}</label>
                    <input value={inputs} onChange={handleChange} key={inputs} type="radio" name="category" id={`${inputs}`} placeholder={inputs}/>
                    </>
                })
            }
            <button onClick={clickHandler} type="submit">Submit</button>
        </form>
    )
}