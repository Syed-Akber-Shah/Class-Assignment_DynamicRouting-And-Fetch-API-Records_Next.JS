import Link from "next/link";
  export default async function Home() {
    const url = await fetch('https://jsonplaceholder.typicode.com/todos')
    const res = await url.json()
    console.log(res);
    
    return (
  <main>
    {
      res.map((json: any, index: number) => (
        <div key={index}>
          <Link href={`/${json.id}`}>
          <h1 className="text-6xl">
            {json.id} &nbsp; &nbsp; <br />
            {json.title} &nbsp; &nbsp; 
            
          </h1>
          </Link>
        </div>
      ))
    }
    </main>
    );
  }