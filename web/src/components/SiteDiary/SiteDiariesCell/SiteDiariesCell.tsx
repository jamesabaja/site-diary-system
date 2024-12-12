import type { FindSiteDiaries, FindSiteDiariesVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import SiteDiaries from 'src/components/SiteDiary/SiteDiaries'

export const QUERY: TypedDocumentNode<
  FindSiteDiaries,
  FindSiteDiariesVariables
> = gql`
  query FindSiteDiaries {
    siteDiaries {
      id
      createdAt
      updatedAt
      date
      notes
      description
      weather
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No site diaries yet.{' '}
      <Link to={routes.newSiteDiary()} className="rw-link">
        Create one?
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindSiteDiaries>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  siteDiaries,
}: CellSuccessProps<FindSiteDiaries, FindSiteDiariesVariables>) => {
  return <SiteDiaries siteDiaries={siteDiaries} />
}
