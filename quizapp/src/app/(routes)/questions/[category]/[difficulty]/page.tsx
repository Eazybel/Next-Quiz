import Question from '@/app/components/Question/Question'
import Choose from '@/app/components/Choose/Choose'
import SubmitForm from '@/app/components/Submit/Submit'
type paramsType={
    params:Promise<{category:string,difficulty:string}>
}
type QuestionsType={
text:string
answers:ChooseType[]
}
type ChooseType={
    text:string,
    id:string,
    isCorrect:boolean
}
export default async function SingleTest({params}:paramsType){
const paramsItem=await params
const res =await fetch(`https://quizapi.io/api/v1/questions?category=${paramsItem.category}&difficulty=${paramsItem.difficulty}&type=MULTIPLE_CHOICE&limit=10&offset=0"`,{method:"Get",headers:{"Content-type":"application/json","Authorization":"Bearer qa_sk_84cb0450a91a0e65b7e4461ac4df9decb89b74d2"}
    })
const data=await res.json()
const fetchedData=data.data

if(!res.ok){
    throw Error("Something went wwrong")
}

const handleClick=async(prevState:unknown,formData:FormData)=>{
    "use server"
   const inputs=Array.from(formData.entries())

    return inputs
}
return(<>
 <div>
     <SubmitForm action={handleClick}>
         {fetchedData.map((questions:QuestionsType,index:number)=>{
           return  <div key={index+1}>
               <div  className="flex">
                  <h1>{index+1}</h1><Question text={questions.text} key={index+1}/> 
                    </div><br />
                      <div>
                        { questions.answers.map((choose:ChooseType,index2:number)=>{
                          return (  
                            <div key={index2}>
                              <Choose question={`question-${index}`} text={choose.text}/>
                                </div>    
                                  )
             })}
                </div><br />                    
          </div>
                })}
             </SubmitForm>
 </div>
       
   
</>)

}
