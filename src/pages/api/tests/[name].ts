import type { NextApiRequest, NextApiResponse } from 'next'
import { tests } from '.'

export type Response = { questionIds: string[] } | { message: string }

function Test(req: NextApiRequest, res: NextApiResponse<Response>) {
  const name = (req.query.name ?? '') as string
  const nameWithSpace = name.replace(/-/g, ' ')
  const test = tests.find((test) => test.name === nameWithSpace)

  if (!test) {
    res.status(400).send({ message: `'${nameWithSpace}' 이름의 테스트는 존재하지 않아요.` })
  } else {
    res.status(200).send({ questionIds: test.questionIds })
  }
}

export default Test
