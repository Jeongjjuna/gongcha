import Navigation from "../components/navigation"

export const metadata = {
  title: {
    template: '%s | 온통살',
    default: '온통살',
  },
  description: '설명',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
