import SiteDiaryCell from 'src/components/SiteDiary/SiteDiaryCell'

type SiteDiaryPageProps = {
  id: number
}

const SiteDiaryPage = ({ id }: SiteDiaryPageProps) => {
  return <SiteDiaryCell id={id} />
}

export default SiteDiaryPage
