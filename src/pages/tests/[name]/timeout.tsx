import { useRouter } from 'next/router'
import { PrimaryButton } from 'src/components/atoms/Button'
import { FlexContainerColumn } from 'src/components/atoms/Styles'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import useQueryString from 'src/hooks/useQueryString'
import { formatMinuteSecond } from 'src/utils/commons'
import styled from 'styled-components'

export const FlexContainerBetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`

export const CenterPaddingH1 = styled.h1`
  padding: 3rem 1rem;
  text-align: center;
`

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 1rem;
`

const title = '수능 모의고사 - 시간 초과'
const description = '수능 모의고사를 빨리 풀어야 겠어요..!'

function TimeoutPage() {
  const router = useRouter()
  const name = (router.query.name ?? '') as string

  const goToTestPage = useGoToPage(`/tests/${name}`)
  const goToTestsPage = useGoToPage('/tests')
  const goToHomePage = useGoToPage('/')

  const maxSecond = useQueryString()

  return (
    <PageHead title={title} description={description}>
      <CenterPaddingH1>
        {formatMinuteSecond(+maxSecond)} 시간초과입니다. 다시 하실까요?
      </CenterPaddingH1>
      <FlexContainerColumnPadding>
        <PrimaryButton onClick={goToTestPage}>다시 하기</PrimaryButton>
        <PrimaryButton onClick={goToTestsPage}>다른 모의고사 풀기</PrimaryButton>
        <PrimaryButton onClick={goToHomePage}>홈으로 가기</PrimaryButton>
      </FlexContainerColumnPadding>
    </PageHead>
  )
}
export default TimeoutPage
