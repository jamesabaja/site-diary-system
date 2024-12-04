import type {
  FindSiteDiaryById,
  FindSiteDiaryByIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import SiteDiary from 'src/components/SiteDiary/SiteDiary'

export const QUERY: TypedDocumentNode<
  FindSiteDiaryById,
  FindSiteDiaryByIdVariables
> = gql`
  query FindSiteDiaryById($id: Int!) {
    siteDiary: siteDiary(id: $id) {
      id
      createdAt
      updatedAt
      date
      notes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SiteDiary not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSiteDiaryByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  siteDiary,
}: CellSuccessProps<FindSiteDiaryById, FindSiteDiaryByIdVariables>) => {
  return <SiteDiary siteDiary={siteDiary} />
}
