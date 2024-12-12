import type {
  EditSiteDiaryById,
  UpdateSiteDiaryInput,
  UpdateSiteDiaryMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SiteDiaryForm from 'src/components/SiteDiary/SiteDiaryForm'

export const QUERY: TypedDocumentNode<EditSiteDiaryById> = gql`
  query EditSiteDiaryById($id: Int!) {
    siteDiary: siteDiary(id: $id) {
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

const UPDATE_SITE_DIARY_MUTATION: TypedDocumentNode<
  EditSiteDiaryById,
  UpdateSiteDiaryMutationVariables
> = gql`
  mutation UpdateSiteDiaryMutation($id: Int!, $input: UpdateSiteDiaryInput!) {
    updateSiteDiary(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ siteDiary }: CellSuccessProps<EditSiteDiaryById>) => {
  const [updateSiteDiary, { loading, error }] = useMutation(
    UPDATE_SITE_DIARY_MUTATION,
    {
      onCompleted: () => {
        toast.success('SiteDiary updated')
        navigate(routes.siteDiaries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateSiteDiaryInput,
    id: EditSiteDiaryById['siteDiary']['id']
  ) => {
    updateSiteDiary({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Site Diary {siteDiary?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SiteDiaryForm
          siteDiary={siteDiary}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
