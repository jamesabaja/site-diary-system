import { IconPlus } from '@tabler/icons-react'
import styled from 'styled-components'
import type {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  FindUsers,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { QUERY } from 'src/components/User/UsersCell'
import { truncate } from 'src/lib/formatters'

const DELETE_USER_MUTATION: TypedDocumentNode<
  DeleteUserMutation,
  DeleteUserMutationVariables
> = gql`
  mutation DeleteUserMutation($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const NewUserButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const UsersList = ({ users }: FindUsers) => {
  const { currentUser } = useAuth()
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
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

  const onDeleteClick = (id: DeleteUserMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete user ' + id + '?')) {
      deleteUser({ variables: { id } })
    }
  }

  return (
    <>
      <NewUserButtonContainer>
        <Link to={routes.newSiteDiary()} className="rw-button rw-button-small">
          <IconPlus size={16} /> New User
        </Link>
      </NewUserButtonContainer>
      <div className="rw-segment rw-table-wrapper-responsive">
        <table className="rw-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Clerk id</th>
              <th>Role</th>
              <th>Name</th>
              <th>Email</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{truncate(user.id)}</td>
                <td>{truncate(user.clerkId)}</td>
                <td>{truncate(user.role)}</td>
                <td>{truncate(user.name)}</td>
                <td>{truncate(user.email)}</td>
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.user({ id: user.id })}
                      title={'Show user ' + user.id + ' detail'}
                      className="rw-button rw-button-small"
                    >
                      Show
                    </Link>
                    <Link
                      to={routes.editUser({ id: user.id })}
                      title={'Edit user ' + user.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      title={'Delete user ' + user.id}
                      className="rw-button rw-button-small rw-button-red"
                      onClick={() => onDeleteClick(user.id)}
                      disabled={
                        users.length === 0 || user.email === currentUser.email
                      }
                    >
                      Delete
                    </button>
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

export default UsersList
