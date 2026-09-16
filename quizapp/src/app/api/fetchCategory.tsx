"use client"
import React, {useState,useEffect} from "react"
type Category={
    name:string
}

export default function FetchCategory(){
    const [category,setCategory]=useState<Category[]>([])
    const [isLoading,setLoad]=useState(true)
    const [error,setError]=useState<string|null>()
    const [categoryType,setCategoryType]=useState("")
    const [level,setLevel]=useState("")
    const [isOpen,setOpen]=useState(false)
    const changeHandlerCategory=(e:React.SubmitEvent<HTMLFormElement>)=>{
        setCategoryType(e.target.value)
        setOpen(true)
    }
    const changeHandlerLevel=(e:React.SubmitEvent<HTMLFormElement>)=>{
            setLevel(e.target.value)
            console.log(level,categoryType)
    }
    useEffect(()=>{
    fetch("https://quizapi.io/api/v1/categories")
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        setCategory(data.data)
        setLoad(false)
    })
    .catch(error=>{
        setError(error)
    })
    },[])
    return(
            <>
            {isLoading&&<p>Loading</p>}
            {category&&<>
            <form onChange={changeHandlerCategory}>
                  {category&&category.map((categories,index)=>{
                 return (
                 <>
                    <div key={index}>
                    <label htmlFor={categories.name}>{categories.name}</label>
                    <input required key={index} type="radio" value={categories.name} name="category"/>
                    <br/>
                     </div>
                        </>
                        
                    )
               })}
               <button type="submit">Submit</button>
            </form>
            <br />
           
                        </>
          
            }
            {
                isOpen&& <form onChange={changeHandlerLevel}>
                <label htmlFor="easy">easy</label><br />
                <input required type="radio" name="level" id="easy" value="easy"/>
                <label htmlFor="medium">medium</label><br />
                <input required type="radio" name="level" id="medium" value="medium"/>
                <label htmlFor="hard">hard</label><br />
                <input required type="radio" name="level" id="hard" value="hard"/>
                <button type="submit">Submit</button>
            </form>
            }
            </>
    )
}