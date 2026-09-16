"use client"
type textProp={
    text:string[]
}
import {useState} from "react"
import {useRouter} from "next/navigation"
import {useQueryState} from "nuqs"
export default function CategoryNav(props:textProp){
const router=useRouter()
const [level,setLevel]=useState("string")
const [isOpen,setOpen]=useState(false)
const [course,setCourse]=useState("")
const [category,setCategory]=useQueryState("category")
const [difficulty,setDiffifulty]=useQueryState("difficulty")
const courseChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setCategory(e.target.value)
    setCourse(e.target.value)
}
const levelChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setDiffifulty(e.target.value)
setLevel(e.target.value)
}
const clickHandler=(e:React.SubmitEvent)=>{
e.preventDefault()
setOpen(true)
router.push(`/questions/{category}/${difficulty}`)
}
const closeHandler=()=>{
    setOpen(false)
}
    return(
        <>
        <form onSubmit={clickHandler}>
        {
            props.text.map((inputs:string,index:number)=>{
                return <div key={index}>
                <label htmlFor={inputs}>{inputs}</label>   
                <input required  onChange={courseChangeHandler} name="category" type="radio" value={inputs} /><br />

                        </div>
            })
        }
        <button type="submit">Submit</button>
        </form>
        {isOpen&&<div>
            <button onClick={closeHandler}>Close</button>
           <form onSubmit={clickHandler}>
            <label htmlFor="easy">Easy</label>
            <input onChange={levelChangeHandler} type="radio" name="difficulty" id="easy" value="easy"/>
            <label htmlFor="medium">medium</label>
            <input onChange={levelChangeHandler} type="radio" name="difficulty" id="medium" value="medium"/>
            <label htmlFor="hard">hard</label>
            <input onChange={levelChangeHandler} type="radio" name="difficulty" id="hard" value="hard"/>
            <button type="submit">Submit</button>
           </form>
            
    </div>}
        </>
    )
}