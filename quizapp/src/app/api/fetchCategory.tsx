"use client"
import React, {useState,useEffect} from "react"
import {useRouter} from "next/navigation"
type Category={
    name:string
}

export default function FetchCategory(){
    const router=useRouter()
    const [category,setCategory]=useState<Category[]>([])
    const [isLoading,setLoad]=useState(true)
    const [error,setError]=useState<string|null>()
    const [categoryType,setCategoryType]=useState("")
    const [level,setLevel]=useState("")
    const [isOpen,setOpen]=useState(false)
    const changeHandlerCategory=(e:React.ChangeEvent<HTMLFormElement>)=>{
        setCategoryType(e.target.value)
        localStorage.setItem("category",JSON.stringify(category.filter(name=>{return name.name===e.target.value})))
        setOpen(true)
    }
    const changeHandlerLevel=(e:React.ChangeEvent<HTMLFormElement>)=>{
            setLevel(e.target.value)
    }       
    const clickHandler=(e:React.SubmitEvent<HTMLFormElement>)=>{
                e.preventDefault()
                
         router.push(`/questions/${categoryType}/${level}`)
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
                    <div key={categories.name}>
                    <label htmlFor={categories.name}>{categories.name}</label>
                    <input required key={index} type="radio" value={categories.name} name="category"/>
                    <br/>
                     </div>

                        
                    )
               })}
            </form>
            <br />
           
                        </>
          
            }
            {
                isOpen&& <form onSubmit={clickHandler} onChange={changeHandlerLevel}>
                <label htmlFor="easy">easy</label>
                <input required type="radio" name="level" id="easy" value="easy"/><br/>
                <label htmlFor="medium">medium</label>
                <input required type="radio" name="level" id="medium" value="medium"/><br/>
                <label htmlFor="hard">hard</label>
                <input required type="radio" name="level" id="hard" value="hard"/>
                <button type="submit">Submit</button>
            </form>
            }
            </>
    )
}