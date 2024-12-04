import EditSiteDiaryCell from 'src/components/SiteDiary/EditSiteDiaryCell'

type SiteDiaryPageProps = {
  id: number
}

const EditSiteDiaryPage = ({ id }: SiteDiaryPageProps) => {
  return <EditSiteDiaryCell id={id} />
}

export default EditSiteDiaryPage
