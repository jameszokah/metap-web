import 'tailwindcss/tailwind.css';
import '../styles/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Metap</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
