import { Metadata } from '@redwoodjs/web'

import { PageTitle } from 'src/components/PageTitle'
import SiteDiariesCell from 'src/components/SiteDiary/SiteDiariesCell'

const SiteDiariesPage = () => {
  return (
    <>
      <PageTitle>Site diaries</PageTitle>
      <Metadata title="Site Diaries" description="Site Diaries page" />
      <SiteDiariesCell />
    </>
  )
}

export default SiteDiariesPage
