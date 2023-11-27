import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

import Table from 'react-bootstrap/Table';


async function getData(pesquisa: string) {
  let linkPesquisa = "http://www.omdbapi.com/?apikey=583e64c4&s=" + pesquisa

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


<Table striped bordered hover>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
        



      {data.Search.map((m: {
        Title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
        Year: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
      }, index: number) => (
        <tr key={index}>
          <td>{m.Title}</td>
          <td>{m.Year}</td>
        </tr>
      ))}

</tbody>
    </Table>
    

    </div>
  )
}
