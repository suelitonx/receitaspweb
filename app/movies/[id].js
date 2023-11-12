'use client'

import { useRouter } from 'next/router';
import useSWR from 'swr';

const API_URL = 'http://www.omdbapi.com/?apikey=583e64c4';

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Use o SWR para buscar os detalhes do filme com base no ID
  const { data, error } = useSWR(`${API_URL}&i=${id}`, fetcher);

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

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
