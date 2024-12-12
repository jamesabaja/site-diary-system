import type {
  DeleteSiteDiaryMutation,
  DeleteSiteDiaryMutationVariables,
  FindSiteDiaryById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { timeTag } from 'src/lib/formatters'

const DELETE_SITE_DIARY_MUTATION: TypedDocumentNode<
  DeleteSiteDiaryMutation,
  DeleteSiteDiaryMutationVariables
> = gql`
  mutation DeleteSiteDiaryMutation($id: Int!) {
    deleteSiteDiary(id: $id) {
      id
    }
  }
`

interface Props {
  siteDiary: NonNullable<FindSiteDiaryById['siteDiary']>
}

const SiteDiary = ({ siteDiary }: Props) => {
  const { currentUser } = useAuth()

  const [deleteSiteDiary] = useMutation(DELETE_SITE_DIARY_MUTATION, {
    onCompleted: () => {
      toast.success('SiteDiary deleted')
      navigate(routes.siteDiaries())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteSiteDiaryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete siteDiary ' + id + '?')) {
      deleteSiteDiary({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SiteDiary {siteDiary.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{siteDiary.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(siteDiary.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(siteDiary.updatedAt)}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(siteDiary.date)}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{siteDiary.notes}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{siteDiary.description}</td>
            </tr>
            <tr>
              <th>Weather</th>
              <td>{siteDiary.weather}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {currentUser?.roles?.includes?.('site_manager') && (
        <nav className="rw-button-group">
          <Link
            to={routes.editSiteDiary({ id: siteDiary.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(siteDiary.id)}
          >
            Delete
          </button>
        </nav>
      )}
    </>
  )
}

export default SiteDiary
