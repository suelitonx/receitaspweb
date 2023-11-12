// pages/movie/[id].tsx
'use client'
import { useRouter } from 'next/router';
import useSWR from 'swr';

interface MovieDetail {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
}

const API_URL = 'http://www.omdbapi.com/?apikey=cf01091f';

export default function MovieDetail( { params } : {
    params: {movieId: string };
} ) {


  // Use o SWR para buscar os detalhes do filme com base no ID
  const { data, error } = useSWR<MovieDetail>(`${API_URL}&i=${params.movieId}`, fetcher);

  if (error) {
    return <div>Falha na requisição: {error.message}</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }

  const { Title, Year, Poster, Plot } = data;

  return (
    <div>
      <h1>{Title}</h1>
      <p>{Year}</p>
      <img src={Poster} alt={Title} />
      <p>{Plot}</p>
    </div>
  );
}

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
