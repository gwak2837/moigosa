import type { NextApiRequest, NextApiResponse } from 'next'

type CorrectAnswer = {
  questionId: string
  correctAnswer: number
}

const correctAnswers: CorrectAnswer[] = [
  {
    questionId: '1',
    correctAnswer: 3,
  },
  {
    questionId: '2',
    correctAnswer: 2,
  },
  {
    questionId: '3',
    correctAnswer: 4,
  },
]

type Answer = {
  questionId: string
  answer: number
}

export type Response = {
  questionId: string
  answer: number
  correctAnswer?: number
  isCorrect: boolean
}[]

function Results(req: NextApiRequest, res: NextApiResponse<Response>) {
  const answers: Answer[] = req.body.answers

  const response = answers.map((answer) => {
    const correctAnswer = correctAnswers.find(
      (correctAnswer) => correctAnswer.questionId === answer.questionId
    )?.correctAnswer

    return { ...answer, correctAnswer, isCorrect: correctAnswer === answer.answer }
  })

  res.status(200).json(response)
}

export default Results
