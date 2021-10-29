import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '~/components/icons'
import { Container } from '~/components/ui'

const Footer = () => {
  const links = [
    {
      id: 'twitter',
      name: 'Twitter',
      href: 'https://twitter.com/fernandomonjav',
      icon: TwitterIcon,
    },
    {
      id: 'github',
      name: 'Github',
      href: 'https://github.com/fernandomonjav',
      icon: GithubIcon,
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/fernandomonjav',
      icon: LinkedinIcon,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      href: 'https://www.facebook.com/fernandomonjav',
      icon: FacebookIcon,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      href: 'https://www.instagram.com/fernandomonjav',
      icon: InstagramIcon,
    },
  ]

  return (
    <footer>
      <Container>
        <div className="py-12">
          <div className="flex flex-col items-center">
            <div className="flex space-x-2">
              {links.map(({ icon: Icon, ...link }) => (
                <a
                  key={link.id}
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-12 h-12 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-full transition ease-in-out duration-300"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <span className="text-gray-600">fernandomonjav © {new Date().getFullYear()}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
