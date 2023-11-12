'use client'

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
      {data.Search.map((m) => (
        // Use o componente Link para criar um link para a página do filme
        <Link key={m.imdbID} href={`/movies/${m.imdbID}`}>
          
            
            {m.Title} --- {m.Year}
          
            <br></br>
        </Link>
      ))}
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
