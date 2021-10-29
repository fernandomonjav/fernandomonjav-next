import { getLayout } from '~/components/common'
import { Container } from '~/components/ui'

const HomePage = () => {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Fernando</h1>

        <div className="mt-4">
          <p className="text-gray-600 text-lg md:text-xl">
            Developing technological tools that facilitate the activities performed by people.{' '}
          </p>
        </div>
      </div>
    </Container>
  )
}

HomePage.getLayout = getLayout

export default HomePage
