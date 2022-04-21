import cx from 'classnames'
import { MAX_W_SCREEEN } from '~/utils/const'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const Container: React.FC<ContainerProps> = (props) => {
  const { size = 'xl', children, ...rest } = props

  return (
    <div className={cx('mx-auto px-4 container', MAX_W_SCREEEN[size])} {...rest}>
      {children}
    </div>
  )
}

export default Container
