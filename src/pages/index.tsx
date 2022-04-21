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
        <h1 className="text-2xl font-bold">Hi, I'm Fernando</h1>

        <div className="mt-2">
          <p className="text-lg">
            Developing technological tools that facilitate the activities performed by people.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Latest projects</h2>
      </div>

      <div className="py-6">
        <div className="grid gap-y-8 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
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
