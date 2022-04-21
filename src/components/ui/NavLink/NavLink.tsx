import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import cx from 'classnames'

export type NavLinkProps = {
  exact?: boolean
  activeClassName?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps

const NavLink: React.FC<NavLinkProps> = (props) => {
  const {
    href,
    as,
    locale,
    passHref,
    replace,
    scroll,
    shallow,

    exact,
    activeClassName,

    className,
    children,

    ...rest
  } = props

  const { asPath } = useRouter()

  const active = exact ? asPath === href.toString() : asPath.includes(href.toString())

  const rootClassName = active ? cx(activeClassName) : cx(className)

  return (
    <Link
      href={href}
      as={as}
      locale={locale}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <a className={rootClassName} {...rest}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
