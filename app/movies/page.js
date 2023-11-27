'use client'

import Table from 'react-bootstrap/Table';

import useSWR from 'swr';
import Link from 'next/link'; // Importe o componente Link do Next.js

const API_URL = 'http://www.omdbapi.com/?apikey=583e64c4&s=bagdad';

export default function Movies2() {
  const { data, error } = useSWR(API_URL, fetcher);

  if (error) {
    return <div>Falha na requisição: {error.message}</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }

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
      


      
      {data.Search.map((m) => (
 
          <tr key={m.imdbID}>
            <td><Link href={`/movies/${m.imdbID}`}>{m.Title}</Link></td>
            <td>{m.Year}</td>
          </tr>
          
      ))}

    </tbody>
    </Table>

    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
