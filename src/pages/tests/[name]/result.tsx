import { Progress } from 'antd'
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
import { PRIMARY_TEXT_COLOR } from 'src/models/constants'

const Padding2 = styled.div`
  padding: 2rem;
`

const Table = styled.table`
  width: 100%;

  th,
  td {
    padding: 0.5rem;
    text-align: center;
    white-space: nowrap;
    border: 2px solid ${PRIMARY_TEXT_COLOR};
  }
`

const GreyDel = styled.s`
  color: grey;
`

const Green = styled.div`
  color: green;
`

const Red = styled.div`
  color: red;
`

const FlexContainerColumnPadding = styled(FlexContainerColumn)`
  padding: 1rem;
`

const gradientBlueGreen = {
  '0%': '#108ee9',
  '100%': '#87d068',
}

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

  if (answers.length === 0) {
    return (
      <PageHead title={title} description={description}>
        <NavigationLayout>
          <Padding>
            <h2 style={{ textAlign: 'center' }}>결과 없음</h2>
            <br />
            <p>
              <b>{nameWithSpace}</b> 문제를 모두 풀어야 결과를 볼 수 있어요.
            </p>
          </Padding>
          <FlexContainerColumnPadding>
            <PrimaryButton onClick={goToTestsPage}>다른 테스트 보기</PrimaryButton>
          </FlexContainerColumnPadding>
        </NavigationLayout>
      </PageHead>
    )
  }

  console.log(data)

  const score = data?.reduce((acc, cur) => (cur.isCorrect ? acc + 1 : acc), 0) ?? 0

  return (
    <PageHead title={title} description={description}>
      <NavigationLayout>
        <Padding>
          <h2 style={{ textAlign: 'center' }}>{nameWithSpace} 채점 결과</h2>

          {data ? (
            <>
              <Padding2>
                <Progress
                  format={(_) => `${score} / ${data.length}`}
                  percent={(score * 100) / data.length}
                  status="active"
                  strokeColor={gradientBlueGreen}
                />
              </Padding2>
              <Table>
                <thead>
                  <tr>
                    <th>문제 번호</th>
                    <th>문제 정답</th>
                    <th>응답</th>
                    <th>결과</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((answer, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{answer.correctAnswer}</td>
                      <td>
                        {answer.correctAnswer === answer.answer ? (
                          `${answer.answer}`
                        ) : (
                          <GreyDel>{answer.answer}</GreyDel>
                        )}
                      </td>
                      <td>{answer.isCorrect ? <Green>O</Green> : <Red>X</Red>}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : error ? (
            '네트워크 요청 오류'
          ) : (
            '모의고사 채점 중..'
          )}
        </Padding>
        <FlexContainerColumnPadding>
          <PrimaryButton onClick={goToTestPage}>다시 풀기</PrimaryButton>
          <PrimaryButton onClick={goToTestsPage}>다른 테스트 보기</PrimaryButton>
        </FlexContainerColumnPadding>
      </NavigationLayout>
    </PageHead>
  )
}

export default TestResultPage
