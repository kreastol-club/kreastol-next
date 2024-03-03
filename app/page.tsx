import { HeroParallax } from '@/components/ui/hero-parallax'
import { HoveredLinkProps, Navbar } from '@/components/ui/navbar'


const links: HoveredLinkProps[] = [
  { href: '/contact', children: 'Contact' },
  { href: '/blog', children: 'Blog' },
];

export default function Home() {
  return (
    <div>
      <Navbar links={links} />
      <HeroParallax products={[]} />
    </div>
  )
}
