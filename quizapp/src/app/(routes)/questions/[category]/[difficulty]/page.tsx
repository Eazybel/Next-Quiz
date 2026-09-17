type paramsType={
    params:Promise<{category:string,difficulty:string}>
}
type answersType={
isCorrect:boolean,
text:string
}
type questionType={
    answers:answersType[],
    explanation:string,
    text:string,

}
type clickDataType={
    question:string,
    answer:string
}
export default async function Question({params}:paramsType){
const paramsItem=await params
const res =await fetch(`https://quizapi.io/api/v1/questions?category=${paramsItem.category}&difficulty=${paramsItem.difficulty}&type=MULTIPLE_CHOICE&limit=10&offset=0"`,{method:"Get",headers:{"Content-type":"application/json","Authorization":"Bearer qa_sk_84cb0450a91a0e65b7e4461ac4df9decb89b74d2"}
    })
const data=await res.json()
const fetchedData=data.data
console.log(fetchedData)
if(!res.ok){
    console.log(res)
    throw Error("Something went wwrong")
}
const clickData:clickDataType[]=[]
return(
    <>
    {
       <div>
        { fetchedData.map((questions:questionType,index:number)=>{
            const currentQuesition=questions.text
            let currentAnswer=""
            questions.answers.forEach(q=>{if(q.isCorrect){currentAnswer=q.text}})
            return <div key={index}>
                    <div><p>{index+1}</p><h2>{questions.text}</h2></div>
                    {questions.answers.map((answer,index)=>{
                            
                        return <div key={index}>
                            <input  type="radio" name="choose" id={answer.text} value={answer.text}/>
                            <label htmlFor={answer.text}>{answer.text}</label>
                        </div>
                    })}
        {clickData.push({question:currentQuesition,answer:currentAnswer})}
                    </div>
        })}
        {console.log(clickData)}
       </div>
    }
    </>
)

}