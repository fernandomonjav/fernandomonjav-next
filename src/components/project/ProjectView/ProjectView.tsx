import { CodeIcon, GlobeIcon } from '~/components/icons'
import { Container } from '~/components/ui'
import { Project } from '~/types'

interface Props {
  project: Project
}

const ProjectView: React.FC<Props> = (props) => {
  const { project } = props

  return (
    <Container size="lg">
      <div className="py-12">
        <h1 className="text-4xl md:text-5xl font-bold">{project.name}</h1>

        {project.description && (
          <div className="mt-4">
            <p className="text-gray-600 text-lg md:text-xl">{project.description}</p>
          </div>
        )}

        {(project.repositoryUrl || project.websiteUrl) && (
          <div className="mt-4 flex space-x-2">
            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                rel="noreferrer"
                target="_blank"
                className="group w-12 h-12 md:w-auto md:px-6 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-full transition ease-in-out duration-300"
              >
                <CodeIcon className="w-5 h-5" />
                <span className="ml-2 font-medium hidden md:block">Repository</span>
              </a>
            )}

            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                rel="noreferrer"
                target="_blank"
                className="group w-12 h-12 md:w-auto md:px-6 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-full transition ease-in-out duration-300"
              >
                <GlobeIcon className="w-5 h-5" />
                <span className="ml-2 font-medium hidden md:block">Website</span>
              </a>
            )}
          </div>
        )}

        {project.coverUrl && (
          <div className="mt-8 relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
            <img src={project.coverUrl} alt={project.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </Container>
  )
}

export default ProjectView
