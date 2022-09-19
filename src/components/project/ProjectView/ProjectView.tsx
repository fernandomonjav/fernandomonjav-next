import { NextSeo } from 'next-seo'
import ReactMarkdown from 'react-markdown'
import { GithubIcon, GlobeIcon } from '~/components/icons'
import { Container } from '~/components/ui'
import { Project } from '~/types'

interface Props {
  project: Project
}

const ProjectView: React.FC<Props> = (props) => {
  const { project } = props

  return (
    <Container size="md">
      <NextSeo
        title={project.name}
        description={project.description}
        openGraph={{ images: [{ url: project.coverUrl, alt: project.name }] }}
      />

      <div className="py-12">
        <h1 className="text-2xl font-bold">{project.name}</h1>

        {project.description && (
          <div className="mt-2">
            <p className="text-lg">{project.description}</p>
          </div>
        )}

        {(project.websiteUrl || project.repositoryUrl) && (
          <div className="mt-4 flex space-x-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                rel="noreferrer"
                target="_blank"
                className="h-9 px-4 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full transition ease-in-out duration-300"
              >
                <GlobeIcon className="w-5 h-5" />
                <span className="ml-2 text-sm font-medium  md:block">Website</span>
              </a>
            )}

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                rel="noreferrer"
                target="_blank"
                className="h-9 px-4 flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full transition ease-in-out duration-300"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="ml-2 text-sm font-medium md:block">GitHub</span>
              </a>
            )}
          </div>
        )}

        {project.coverUrl && (
          <div className="mt-6 aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
            <img src={project.coverUrl} alt={project.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      <div className="mb-6 border-b"></div>

      {project.content && (
        <div className="max-w-full pb-12 prose mx-auto">
          <ReactMarkdown children={project.content} />
        </div>
      )}
    </Container>
  )
}

export default ProjectView
