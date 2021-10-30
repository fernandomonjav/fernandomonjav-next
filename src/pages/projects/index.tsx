import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { getLayout } from '~/components/common'
import { ProjectCard } from '~/components/project'
import { Container } from '~/components/ui'
import { getProjects } from '~/lib/projects'
import { Project } from '~/types'

interface Props {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjects()

  return {
    props: {
      projects,
    },
  }
}

const ProjectsPage = (props: Props) => {
  const { projects } = props

  return (
    <Container>
      <NextSeo
        title={`Projects | Fernando Monja Vasquez`}
        description="Learn about the amazing projects I have worked on."
      />

      <div className="py-12">
        <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>

        <div className="mt-4">
          <p className="text-gray-600 text-lg md:text-xl">
            Learn about the amazing projects I have worked on.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">All</h1>
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

ProjectsPage.getLayout = getLayout

export default ProjectsPage
