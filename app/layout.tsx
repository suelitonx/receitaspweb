import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SSRProvider from 'react-bootstrap/SSRProvider';

export const metadata = {
  title: 'Receita 1',
  description: 'por: Sueliton Medeiros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    
   <html lang="en">
      <body data-bs-theme="dark">
      
      <Container fluid>
        {children}
      </Container>
      
      </body>
    </html>
    
  )
}
