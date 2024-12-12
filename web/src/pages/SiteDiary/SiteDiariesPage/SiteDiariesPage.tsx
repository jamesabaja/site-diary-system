import styled from 'styled-components'

import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { PageTitle } from 'src/components/PageTitle'
import SiteDiariesCell from 'src/components/SiteDiary/SiteDiariesCell'

const PageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const SiteDiariesPage = () => {
  const { currentUser, logOut } = useAuth()

  return (
    <>
      <PageTitle>
        <PageTitleContainer>
          <p>
            Site diaries {'('}Welcome, {currentUser?.first_name}!{')'}
          </p>
          <button onClick={() => logOut()} className="rw-button rw-button-red">
            Log out
          </button>
        </PageTitleContainer>
      </PageTitle>
      <Metadata title="Site Diaries" description="Site Diaries page" />
      <SiteDiariesCell />
    </>
  )
}

export default SiteDiariesPage
