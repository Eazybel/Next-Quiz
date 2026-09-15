type QuestionParams={
    questionsParams:string
}
export default function Question(params:QuestionParams){
    return (
        <>
        <h1>Welcome to {params.questionsParams} question</h1>
        </>
    )
}