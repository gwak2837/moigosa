import { useContext } from 'react'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import { GlobalContext } from 'src/pages/_app'

const description = ''

function TestResultPage() {
  const { answers } = useContext(GlobalContext)

  return (
    <PageHead title="수능 모의고사 - " description={description}>
      <NavigationLayout>
        모의고사 결과 페이지
        <br />
        {JSON.stringify(answers)}
      </NavigationLayout>
    </PageHead>
  )
}

export default TestResultPage
