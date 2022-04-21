import Link from 'next/link'
import { Container, NavLink } from '~/components/ui'

const Header = () => {
  const links = [
    { id: 'home', name: 'Home', href: '/', exact: true },
    { id: 'projects', name: 'Projects', href: '/projects', exact: false },
  ]

  return (
    <header className="w-full sticky top-0 left-0 z-30 bg-white/75 backdrop-blur-md border-b">
      <Container>
        <div className="md:h-14 py-2 md:py-auto flex items-center justify-between flex-wrap">
          <Link href="/">
            <a className="flex mb-2 md:mb-0">
              <span className="text-lg font-bold">fernandomonjav</span>
            </a>
          </Link>

          <nav className="w-full md:w-auto nav">
            <ul className="space-x-2 flex items-center overflow-x-auto">
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink
                    href={link.href}
                    exact={link.exact}
                    className="h-9 px-6 flex items-center hover:bg-gray-200 rounded-full transition ease-in-out duration-300"
                    activeClassName="h-9 px-6 flex items-center text-white bg-black rounded-full transition ease-in-out duration-300"
                    passHref
                  >
                    <span className="text-sm font-medium">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
