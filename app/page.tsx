import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

async function getData(pesquisa: string) {
  let linkPesquisa = "http://www.omdbapi.com/?apikey=cf01091f&s=" + pesquisa

  const res = await fetch(linkPesquisa)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData("avengers")

  return (
    <div>
      {data.Search.map( (m: { Title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; Year: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => <div>{m.Title} --- {m.Year}</div>  )}
    </div>
  )
}