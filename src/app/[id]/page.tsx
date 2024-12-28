const DynamicBook = async (props:any, index: number) => {
 // const url = await fetch(https://jsonplaceholder.typicode.com/todos/2')
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    const res = await url.json()
    console.log("SingleJSON: ", res);
    return (
            <div key={index}>
            <h1 className="pl-5 text-5xl">
            {props.params.id} <br />
            {res.title} <br />
            {res.completed}
            </h1>
            </div>
    )
}
export default DynamicBook
