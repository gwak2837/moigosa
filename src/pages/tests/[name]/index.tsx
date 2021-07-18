import { useRouter } from 'next/router'
import { useContext, useRef, useState } from 'react'
import PageHead from 'src/components/layouts/PageHead'
import { fetcher } from 'src/utils/commons'
import Question from 'src/components/Question'
import useSWR, { useSWRInfinite } from 'swr'
import { GlobalContext } from 'src/pages/_app'
import { toast } from 'react-toastify'
import { gradientBlueGreen } from './result'
import { Progress } from 'antd'
import { NoMarginH2, Padding } from 'src/components/atoms/Styles'
import { PrimaryButton } from 'src/components/atoms/Button'
import styled from 'styled-components'
import Timer from 'src/components/Timer'
import useBoolean from 'src/hooks/useBoolean'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  gap: 1rem;
  align-items: center;

  padding: 0 1rem;
`

const description = '수능 모의고사를 풀어볼 수 있어요'

function TestPage() {
  const { answers, setAnswers } = useContext(GlobalContext)

  const router = useRouter()
  const name = (router.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')
  const title = `수능 모의고사 - ${nameWithSpace}`

  const wasTestFetched = useRef(false)

  const testResponse = useSWR(`/api/tests/${name}`, fetcher, {
    isPaused: () => wasTestFetched.current,
    onSuccess: (data) => {
      wasTestFetched.current = true
      setAnswers(data.questionIds.map((questionId: string) => ({ questionId, answer: null })))
    },
  })

  const totalQuestionCount = testResponse.data?.questionIds.length

  const [questionNumber, setQuestionNumber] = useState(1)
  const questionIndex = questionNumber - 1

  function getKey(pageIndex: number) {
    if (!testResponse.data || testResponse.error) return null

    return `/api/questions/${testResponse.data.questionIds[pageIndex]}`
  }

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, { initialSize: 2 })

  function goPreviousQuestion() {
    setQuestionNumber((prev) => prev - 1)
  }

  function goNextQuestion() {
    if (questionNumber < totalQuestionCount) {
      setQuestionNumber((prev) => prev + 1)
      if (questionNumber === size - 1) {
        setSize(size + 1)
      }
    } else if (questionNumber === totalQuestionCount) {
      if (answers.every((answer) => answer.answer !== null)) {
        router.push(`/tests/${name}/result`)
      } else {
        toast.warn('문제를 모두 풀어주세요')
      }
    }
  }

  function setAnswer(answer: number | null) {
    const newAnswers = [...answers]
    newAnswers[questionIndex].answer = answer
    setAnswers(newAnswers)
  }

  const [showTimer, toggleShowingTimer] = useBoolean(true)

  return (
    <PageHead title={title} description={description}>
      {data ? (
        data[questionIndex] ? (
          <>
            <GridContainer>
              <PrimaryButton disabled={questionNumber === 1} onClick={goPreviousQuestion}>
                이전
              </PrimaryButton>
              <div
                onClick={toggleShowingTimer}
                role="button"
                style={{ textAlign: 'center' }}
                tabIndex={0}
              >
                <NoMarginH2>{nameWithSpace}</NoMarginH2>
                <div style={{ display: showTimer ? 'block' : 'none' }}>
                  <Timer
                    maxTime={600}
                    onTimeout={() => router.push(`/tests/${name}/timeout?${600}`)}
                  />
                </div>
              </div>
              <PrimaryButton onClick={goNextQuestion}>
                {questionNumber === testResponse.data.questionIds.length ? '제출' : '다음'}
              </PrimaryButton>
            </GridContainer>

            <Padding>
              <Progress
                format={() => `${questionNumber} / ${totalQuestionCount}`}
                percent={(questionNumber * 100) / totalQuestionCount}
                status="normal"
                strokeColor={gradientBlueGreen}
              />
            </Padding>

            <Question
              answer={answers[questionIndex].answer}
              setAnswer={setAnswer}
              number={questionNumber}
              question={data[questionIndex]}
            />
          </>
        ) : (
          '다음 문제 불러오는 중...'
        )
      ) : error ? (
        '네트워크 요청 오류'
      ) : (
        '문제 불러오는 중...'
      )}
    </PageHead>
  )
}

export default TestPage
