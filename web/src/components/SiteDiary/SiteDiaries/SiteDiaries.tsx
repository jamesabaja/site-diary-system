import { IconPlus } from '@tabler/icons-react'
import styled from 'styled-components'
import type {
  DeleteSiteDiaryMutation,
  DeleteSiteDiaryMutationVariables,
  FindSiteDiaries,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { QUERY } from 'src/components/SiteDiary/SiteDiariesCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const NewSiteDiaryButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const SiteDiariesList = ({ siteDiaries }: FindSiteDiaries) => {
  const { currentUser } = useAuth()

  const [deleteSiteDiary] = useMutation(DELETE_SITE_DIARY_MUTATION, {
    onCompleted: () => {
      toast.success('SiteDiary deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteSiteDiaryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete siteDiary ' + id + '?')) {
      deleteSiteDiary({ variables: { id } })
    }
  }

  return (
    <>
      {currentUser?.roles?.includes?.('site_manager') && (
        <NewSiteDiaryButtonContainer>
          <Link
            to={routes.newSiteDiary()}
            className="rw-button rw-button-small"
          >
            <IconPlus size={16} /> New Site Diary
          </Link>
        </NewSiteDiaryButtonContainer>
      )}
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th>Date</th>
              <th>Notes</th>
              <th>Description</th>
              <th>Weather</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {siteDiaries.map((siteDiary) => (
              <tr key={siteDiary.id}>
                <td>{truncate(siteDiary.id)}</td>
                <td>{timeTag(siteDiary.createdAt)}</td>
                <td>{timeTag(siteDiary.updatedAt)}</td>
                <td>{timeTag(siteDiary.date)}</td>
                <td>{truncate(siteDiary.notes)}</td>
                <td>{truncate(siteDiary.description)}</td>
                <td>{truncate(siteDiary.weather)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.siteDiary({ id: siteDiary.id })}
                      title={'Show siteDiary ' + siteDiary.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    {currentUser?.roles?.includes?.('site_manager') && (
                      <>
                        <Link
                          to={routes.editSiteDiary({ id: siteDiary.id })}
                          title={'Edit siteDiary ' + siteDiary.id}
                          className="rw-button rw-button-small rw-button-blue"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          title={'Delete siteDiary ' + siteDiary.id}
                          className="rw-button rw-button-small rw-button-red"
                          onClick={() => onDeleteClick(siteDiary.id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SiteDiariesList
