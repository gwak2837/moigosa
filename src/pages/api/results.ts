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
    correctAnswer: 2,
  },
  {
    questionId: '4',
    correctAnswer: 1,
  },
  {
    questionId: '5',
    correctAnswer: 4,
  },
  {
    questionId: '6',
    correctAnswer: 4,
  },
  {
    questionId: '7',
    correctAnswer: 3,
  },
  {
    questionId: '8',
    correctAnswer: 1,
  },
  {
    questionId: '9',
    correctAnswer: 5,
  },
  {
    questionId: '10',
    correctAnswer: 2,
  },
  {
    questionId: '11',
    correctAnswer: 1,
  },
  {
    questionId: '12',
    correctAnswer: 1,
  },
  {
    questionId: '13',
    correctAnswer: 1,
  },
  {
    questionId: '14',
    correctAnswer: 2,
  },
  {
    questionId: '15',
    correctAnswer: 2,
  },
  {
    questionId: '16',
    correctAnswer: 5,
  },
  {
    questionId: '17',
    correctAnswer: 4,
  },
  {
    questionId: '18',
    correctAnswer: 1,
  },
  {
    questionId: '19',
    correctAnswer: 5,
  },
  {
    questionId: '20',
    correctAnswer: 4,
  },
  {
    questionId: '21',
    correctAnswer: 3,
  },
  {
    questionId: '22',
    correctAnswer: 1,
  },
  {
    questionId: '23',
    correctAnswer: 1,
  },
  {
    questionId: '24',
    correctAnswer: 1,
  },
  {
    questionId: '25',
    correctAnswer: 5,
  },
  {
    questionId: '26',
    correctAnswer: 1,
  },
  {
    questionId: '27',
    correctAnswer: 2,
  },
  {
    questionId: '28',
    correctAnswer: 5,
  },
  {
    questionId: '29',
    correctAnswer: 2,
  },
  {
    questionId: '30',
    correctAnswer: 5,
  },
  {
    questionId: '31',
    correctAnswer: 1,
  },
  {
    questionId: '32',
    correctAnswer: 2,
  },
  {
    questionId: '33',
    correctAnswer: 2,
  },
  {
    questionId: '34',
    correctAnswer: 1,
  },
  {
    questionId: '35',
    correctAnswer: 3,
  },
  {
    questionId: '36',
    correctAnswer: 5,
  },
  {
    questionId: '37',
    correctAnswer: 5,
  },
  {
    questionId: '38',
    correctAnswer: 2,
  },
  {
    questionId: '39',
    correctAnswer: 5,
  },
  {
    questionId: '40',
    correctAnswer: 2,
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
