type QuestionsProp={
    params:Promise<{questionsParams:string}>
}
export default async function Question({params}:QuestionsProp){
    const questionType=await params
    return(
        <>
        <h1>this is {questionType.questionsParams} question</h1>
        </>
    )
}