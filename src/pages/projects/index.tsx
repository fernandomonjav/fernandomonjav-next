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
        <h1 className="text-2xl font-bold">Projects</h1>

        <div className="mt-2">
          <p className="text-lg">Learn about the amazing projects I have worked on.</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">All</h2>
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

ProjectsPage.getLayout = getLayout

export default ProjectsPage
