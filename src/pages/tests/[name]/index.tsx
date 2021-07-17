import { useRouter } from 'next/router'
import { useState } from 'react'
import PageHead from 'src/components/layouts/PageHead'
import { fetcher } from 'src/utils/commons'
import Question from 'src/components/Question'
import useSWR, { useSWRInfinite } from 'swr'

function getKey(pageIndex: number) {
  return `/api/questions/${pageIndex + 1}`
}

function dontRequest() {
  return null
}

const description = ''

function TestPage() {
  const router = useRouter()
  const name = (router.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')
  const title = `수능 모의고사 - ${nameWithSpace}`

  const [wasTestFetched, setWasTestFetched] = useState(false)

  const testResponse = useSWR(`/api/tests/${name}`, fetcher, {})

  function getKey(pageIndex: number) {
    if (!testResponse.data || testResponse.error) return null

    return `/api/questions/${testResponse.data.questionIds[pageIndex]}`
  }

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)

  console.log(data, size)

  return (
    <PageHead title={title} description={description}>
      <button onClick={() => setSize(size - 1)}>-1</button>
      <button onClick={() => setSize(size + 1)}>+1</button>

      {data ? (
        data[size - 1] ? (
          <Question number={size} question={data[size - 1]} />
        ) : (
          'loading...'
        )
      ) : (
        'loading...'
      )}
    </PageHead>
  )
}

export default TestPage
