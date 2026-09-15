"use client"
type textProp={
    text:string[]
}
import {useState} from "react"
import {useRouter} from "next/navigation"
export default function CategoryNav(props:textProp){
const router=useRouter()
const [change,setChange]=useState("string")
const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{

setChange(e.target.value)
}
const clickHandler=(e:React.SubmitEvent)=>{
e.preventDefault()
router.push(`/questions/${change}`)
}
    return(
        <>
        <form onSubmit={clickHandler}>
        {
            props.text.map((inputs:string,index:number)=>{
                return <>
                <label key={index} htmlFor={inputs}>{inputs}</label>   
                <input key={inputs} onChange={changeHandler} name="category" type="radio" value={inputs} /><br />

                        </>
            })
        }
        <button type="submit">Submit</button>
        </form>
        </>
    )
}