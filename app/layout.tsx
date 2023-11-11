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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
