import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PrimaryButton } from 'src/components/atoms/Button'
import { FlexContainerColumn, Padding } from 'src/components/atoms/Styles'
import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import useGoToPage from 'src/hooks/useGoToPage'
import { GlobalContext, UserAnswers } from 'src/pages/_app'
import styled from 'styled-components'
import useSWR from 'swr'
import { Response } from 'src/pages/api/results'

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 1rem;
`

function fetchOnlyIfAnswersExist(answers: UserAnswers) {
  if (answers.length === 0) return null
  return '/api/results'
}

const description = ''

function TestResultPage() {
  const { answers } = useContext(GlobalContext)

  const router = useRouter()
  const name = (router.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')
  const title = `수능 모의고사 - ${nameWithSpace} 결과`

  const goToTestPage = useGoToPage(`/tests/${name}`)
  const goToTestsPage = useGoToPage('/tests')

  const { data, error } = useSWR<Response>(fetchOnlyIfAnswersExist(answers), async (url) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    })
    return await response.json()
  })

  console.log(answers)
  console.log(data, error)

  if (answers.length === 0) {
    return (
      <PageHead title={title} description={description}>
        <NavigationLayout>
          <Padding>
            <h2 style={{ textAlign: 'center' }}>결과 없음</h2>
            <br />
            <p>모의고사를 모두 풀어야 결과를 볼 수 있어요.</p>
          </Padding>
          <FlexContainerColumnPadding>
            <PrimaryButton onClick={goToTestsPage}>다른 테스트 보기</PrimaryButton>
          </FlexContainerColumnPadding>
        </NavigationLayout>
      </PageHead>
    )
  }

  return (
    <PageHead title={title} description={description}>
      <NavigationLayout>
        <h2 style={{ textAlign: 'center' }}>모의고사 결과</h2>
        <br />
        <ol>
          {data
            ? data.map((answer, i) => (
                <li key={i}>
                  문제 {i + 1} | {answer.answer} | {answer.correctAnswer} |{' '}
                  {answer.isCorrect ? 'O' : 'X'}
                </li>
              ))
            : error
            ? '오류'
            : '모의고사 채점 중..'}
        </ol>
        <br />
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToTestPage}>다시 풀기</PrimaryButton>
          <PrimaryButton onClick={goToTestsPage}>다른 테스트 보기</PrimaryButton>
        </FlexContainerColumnPadding>
      </NavigationLayout>
    </PageHead>
  )
}

export default TestResultPage
