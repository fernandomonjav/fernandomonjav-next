import { FindOptions, ObjectId } from 'mongodb'
import { Project } from '~/types'
import clientPromise from './mongodb'

interface LocaleString {
  [index: string]: string
}

type ProjectDoc = Omit<Project, 'id' | 'description' | 'content' | 'createdAt' | 'updatedAt'> & {
  _id: ObjectId
  description: LocaleString
  createdAt: Date
  updatedAt: Date
}

const normalizeProject = (project: ProjectDoc, locale: string): Project => {
  return {
    id: project._id.toString(),
    slug: project.slug,
    name: project.name,
    avatarUrl: project.avatarUrl,
    coverUrl: project.coverUrl,
    description: project.description[locale],
    repositoryUrl: project.repositoryUrl,
    websiteUrl: project.websiteUrl,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
  }
}

const normalizeProjects = (projects: ProjectDoc[], locale: string): Project[] => {
  return projects.map((project) => normalizeProject(project, locale))
}

interface GetProjectsOptions {
  limit?: number
  locale?: string
}

export const getProjects = async (options?: GetProjectsOptions): Promise<Project[]> => {
  const { limit, locale = 'en' } = options || {}

  const client = await clientPromise
  const db = client.db()

  const opts: FindOptions<ProjectDoc> = {}

  opts.sort = { createdAt: -1 }

  if (limit) {
    opts.limit = limit
  }

  const projects = await db.collection('projects').find<ProjectDoc>({}, opts).toArray()

  return normalizeProjects(projects, locale)
}

interface GetProjectOptions {
  slug: string
  locale?: string
}

export const getProject = async (options: GetProjectOptions): Promise<Project | null> => {
  const { slug, locale = 'en' } = options

  const client = await clientPromise
  const db = client.db()

  const project = await db.collection('projects').findOne<ProjectDoc>({ slug })

  if (!project) {
    return null
  }

  return normalizeProject(project, locale)
}
