import Link from 'next/link'
import { ArrowRightIcon, CodeIcon, GlobeIcon } from '~/components/icons'
import { Project } from '~/types'

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = (props) => {
  const { project } = props

  return (
    <article>
      <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        <div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${project.coverUrl})` }}
        ></div>
      </div>

      <h3 className="mt-6 text-xl font-bold line-clamp-2">{project.name}</h3>

      {project.description && (
        <div className="mt-2">
          <p className="text-gray-600 leading-7 line-clamp-3">{project.description}</p>
        </div>
      )}

      <div className="mt-4 flex justify-between">
        <div className="flex space-x-2">
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              rel="noreferrer"
              target="_blank"
              className="group w-12 h-12 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-full transition ease-in-out duration-300"
            >
              <CodeIcon className="w-5 h-5" />
            </a>
          )}

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              rel="noreferrer"
              target="_blank"
              className="group w-12 h-12 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-full transition ease-in-out duration-300"
            >
              <GlobeIcon className="w-5 h-5" />
            </a>
          )}
        </div>

        <Link href={`/projects/${project.slug}`}>
          <a className="group h-12 px-6 bg-gray-100 hover:bg-gray-200 flex justify-center items-center rounded-full transition ease-in-out duration-300">
            <span className="font-medium">Learn more</span>
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform ease-in-out duration-300 transform group-hover:translate-x-2" />
          </a>
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
