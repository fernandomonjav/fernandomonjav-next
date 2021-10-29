import Link from 'next/link'
import { Container, NavLink } from '~/components/ui'

const Header = () => {
  const links = [
    { id: 'home', name: 'Home', href: '/', exact: true },
    { id: 'projects', name: 'Projects', href: '/projects', exact: false },
  ]

  return (
    <header className="w-full sticky top-0 left-0 z-30 bg-white">
      <Container>
        <div className="py-4 flex items-center justify-between flex-wrap">
          <Link href="/">
            <a className="flex mb-4 md:mb-0">
              <span className="text-xl font-bold">fernandomonjav</span>
            </a>
          </Link>

          <nav className="w-full md:w-auto nav">
            <ul className="flex items-center overflow-x-auto">
              {links.map((link) => (
                <li key={link.id}>
                  <NavLink
                    href={link.href}
                    exact={link.exact}
                    activeClassName="bg-gray-100 hover:bg-gray-200"
                    passHref
                  >
                    <a className="h-10 px-6 hover:bg-gray-100 flex items-center rounded-full">
                      <span className="font-medium">{link.name}</span>
                    </a>
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
