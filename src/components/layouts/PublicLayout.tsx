import { Barlow } from '@next/font/google';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

const PublicLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className={`flex min-h-screen ${barlow.className}`}>
      {children}
    </main>
  )
}

export default PublicLayout;