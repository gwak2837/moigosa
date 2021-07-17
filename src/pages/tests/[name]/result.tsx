import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import { FlexContainerColumn } from 'src/components/atoms/Styles'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import { GlobalContext } from 'src/pages/_app'
import styled from 'styled-components'

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 1rem;
`

const description = ''

function TestResultPage() {
  const { answers } = useContext(GlobalContext)

  const router = useRouter()
  const name = (router.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')
  const title = `수능 모의고사 - ${nameWithSpace} 결과`

  const goToTestsPage = useGoToPage('/tests')

  return (
    <PageHead title={title} description={description}>
      <NavigationLayout>
        모의고사 결과 페이지
        <br />
        {JSON.stringify(answers)}
        <br />
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToTestsPage}>다른 테스트 보기</PrimaryButton>
        </FlexContainerColumnPadding>
      </NavigationLayout>
    </PageHead>
  )
}

export default TestResultPage
