import { GetStaticPaths, GetStaticProps } from 'next'
import { getLayout } from '~/components/common'
import { ProjectView } from '~/components/project'
import { getProject, getProjects } from '~/lib/projects'
import { Project } from '~/types'

interface Props {
  project: Project | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string } }[] = []

  const projects = await getProjects()

  for (const project of projects) {
    paths.push({ params: { slug: project.slug } })
  }

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params!.slug as string
  const project = await getProject({ slug })

  return {
    props: {
      project,
    },
  }
}

const ProjectPage = (props: Props) => {
  const { project } = props

  if (!project) {
    return null
  }

  return <ProjectView project={project} />
}

ProjectPage.getLayout = getLayout

export default ProjectPage
