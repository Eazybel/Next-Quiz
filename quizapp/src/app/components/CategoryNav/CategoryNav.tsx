import React from "react";
import {useState} from "react"
export default function CategoryNav(){
    const [change,setChange] = useState("")
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setChange(e.target.value)
    }
    const clickHandler=(e:React.FormEvent)=>{
console.log(change)
    }
    return(
        <form action="">
            <input onChange={handleChange} type="radio" name="categoryy" id="chemistry" >chemistry</input>
            <input onChange={handleChange} type="radio" name="categoryy" id="biology" >biology</input>
            <input onChange={handleChange} type="radio" name="categoryy" id="history" >history</input>
            <input onChange={handleChange} type="radio" name="categoryy" id="math" >math</input>
            <button onClick={clickHandler} type="submit">Submit</button>
        </form>
    )
}