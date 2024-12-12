import type {
  CreateSiteDiaryMutation,
  CreateSiteDiaryInput,
  CreateSiteDiaryMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SiteDiaryForm from 'src/components/SiteDiary/SiteDiaryForm'

const CREATE_SITE_DIARY_MUTATION: TypedDocumentNode<
  CreateSiteDiaryMutation,
  CreateSiteDiaryMutationVariables
> = gql`
  mutation CreateSiteDiaryMutation($input: CreateSiteDiaryInput!) {
    createSiteDiary(input: $input) {
      id
    }
  }
`

const NewSiteDiary = () => {
  const [createSiteDiary, { loading, error }] = useMutation(
    CREATE_SITE_DIARY_MUTATION,
    {
      onCompleted: () => {
        toast.success('SiteDiary created')
        navigate(routes.siteDiaries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateSiteDiaryInput) => {
    createSiteDiary({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Site Diary</h2>
      </header>
      <div className="rw-segment-main">
        <SiteDiaryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSiteDiary
