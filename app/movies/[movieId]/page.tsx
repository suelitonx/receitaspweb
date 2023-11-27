// pages/movie/[id].tsx
'use client'
import { useRouter } from 'next/router';
import useSWR from 'swr';

import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

interface MovieDetail {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
}

const API_URL = 'http://www.omdbapi.com/?apikey=583e64c4';

export default function MovieDetail( { params } : {
    params: {movieId: string };
} ) {


  // Use o SWR para buscar os detalhes do filme com base no ID
  const { data, error } = useSWR<MovieDetail>(`${API_URL}&i=${params.movieId}`, fetcher);

  if (error) {
    return <div>Falha na requisição: {error.message}</div>;
  }

  if (!data) {
    return <div>


<Spinner animation="border" variant="primary" />

    </div>;
  }

  const { Title, Year, Poster, Plot } = data;

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title} ({Year})</Card.Title>
        <Card.Text>{Plot}</Card.Text>
      </Card.Body>
    </Card>
    </div>

    
  );
}

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
