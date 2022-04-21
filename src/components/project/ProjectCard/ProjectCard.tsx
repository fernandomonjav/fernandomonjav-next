import Link from 'next/link'
import { ArrowRightIcon, GithubIcon, GlobeIcon } from '~/components/icons'
import { Project } from '~/types'

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = (props) => {
  const { project } = props

  return (
    <article className="px-4 py-6 md:p-6 flex flex-col border rounded-xl">
      <div className="flex-1">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={project.avatarUrl}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="ml-4 flex-1">
            <h3 className="text-lg font-bold line-clamp-2">{project.name}</h3>
          </div>
        </div>

        {project.description && (
          <div className="mt-4">
            <p className="line-clamp-3">{project.description}</p>
          </div>
        )}
      </div>

      <div className="mt-4 space-x-2 flex justify-between">
        <div className="space-x-2 flex">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              rel="noreferrer"
              target="_blank"
              aria-label="Website"
              className="w-9 h-9 flex justify-center items-center hover:bg-gray-300 rounded-full transition ease-in-out duration-300"
            >
              <GlobeIcon className="w-5 h-5" />
            </a>
          )}

          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              rel="noreferrer"
              target="_blank"
              aria-label="Repository"
              className="w-9 h-9 flex justify-center items-center hover:bg-gray-300 rounded-full transition ease-in-out duration-300"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        <Link href={`/projects/${project.slug}`}>
          <a
            aria-label="Read more"
            className="group w-9 md:w-auto h-9 md:px-4 flex justify-center items-center text-white bg-black rounded-full transition ease-in-out duration-300"
          >
            <span className="hidden md:block text-sm font-medium">Read more</span>
            <ArrowRightIcon className="w-5 h-5 md:ml-2 transition-transform ease-in-out duration-300 md:group-hover:translate-x-2" />
          </a>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
