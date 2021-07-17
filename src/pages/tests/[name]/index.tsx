import { useRouter } from 'next/router'
import { useContext, useRef, useState } from 'react'
import PageHead from 'src/components/layouts/PageHead'
import { fetcher } from 'src/utils/commons'
import Question from 'src/components/Question'
import useSWR, { useSWRInfinite } from 'swr'
import { GlobalContext } from 'src/pages/_app'

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

  const [questionNumber, setQuestionNumber] = useState(1)
  const questionIndex = questionNumber - 1

  function getKey(pageIndex: number) {
    if (!testResponse.data || testResponse.error) return null

    return `/api/questions/${testResponse.data.questionIds[pageIndex]}`
  }

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)

  function goPreviousQuestion() {
    if (questionNumber > 1) {
      setQuestionNumber((prev) => prev - 1)
    }
  }

  function goNextQuestion() {
    if (questionNumber < testResponse.data.questionIds.length) {
      setQuestionNumber((prev) => prev + 1)
      if (questionNumber === size) {
        setSize(size + 1)
      }
    } else if (questionNumber === testResponse.data.questionIds.length) {
      router.push('result')
    }
  }

  function setAnswer(answer: number | null) {
    const newAnswers = [...answers]
    newAnswers[questionIndex].answer = answer
    setAnswers(newAnswers)
  }

  return (
    <PageHead title={title} description={description}>
      {data && data[questionIndex] ? (
        <>
          <button onClick={goPreviousQuestion}>이전</button>
          <button onClick={goNextQuestion}>다음</button>
          <Question
            answer={answers[questionIndex].answer}
            setAnswer={setAnswer}
            number={questionNumber}
            question={data[questionIndex]}
          />
        </>
      ) : (
        'loading...'
      )}
    </PageHead>
  )
}

export default TestPage
