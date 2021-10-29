import { GetStaticProps } from 'next'
import { getLayout } from '~/components/common'
import { ProjectCard } from '~/components/project'
import { Container } from '~/components/ui'
import { getProjects } from '~/lib/projects'
import { Project } from '~/types'

interface Props {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjects({ limit: 3 })

  return {
    props: {
      projects,
    },
  }
}

const HomePage = (props: Props) => {
  const { projects } = props

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

      <div>
        <h1 className="text-3xl font-bold">Latest projects</h1>
      </div>

      <div className="py-12">
        <div className="grid gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Container>
  )
}

HomePage.getLayout = getLayout

export default HomePage
