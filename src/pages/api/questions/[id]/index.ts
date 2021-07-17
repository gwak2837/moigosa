import type { NextApiRequest, NextApiResponse } from 'next'

export type Question = {
  id: string
  title: string
  contents: string[]
  choices: {
    id: string
    content: string
  }[]
}

const questions: Question[] = [
  {
    id: '1',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Ms. Diane Edwards,',
      'I am a teacher working at East End High School. I have read from your notice that the East End Seaport Museum is now offering a special program, the 2017 Bug Lighthouse Experience. The program would be a great opportunity for our students to have fun and experience something new. I estimate that 50 students and teachers from our school would like to participate in it. Would you please let me know if it is possible to make a group reservation for the program for Saturday, November 18? We don’t want to miss this great opportunity. I look forward to hearing from you soon.',
      'Best regards',
      'Joseph Loach',
    ],
    choices: [
      { id: '1', content: '단체 관람 시 유의 사항을 안내하려고' },
      { id: '2', content: '교내 행사에 초청할 강사 추천을 부탁하려고' },
      { id: '3', content: '프로그램 단체 예약이 가능한지를 문의하려고' },
      { id: '4', content: '새로운 체험 학습 프로그램을 소개하려고' },
      { id: '5', content: '견학 예정 인원수의 변경을 요청하려고' },
    ],
  },
  {
    id: '2',
    title: '다음 글에 드러난 I의 심경 변화로 가장 적절한 것은?',
    contents: [
      'The start of the boat tour was far from what I had expected. None of the wildlife I saw was exotic. I could only see dull gray rocks. It was also so hot and humid that I could not enjoy the tour fully. However, as the boat slid into the Bay Park Canal, all of a sudden my mother shouted, “Look at the mangroves!” A whole new world came into sight. The mangrove forest alongside the canal thrilled me as we entered its cool shade. I was fascinated by the beautiful leaves and flowers of the mangroves. But best of all, I was charmed by the native birds, monkeys, and lizards moving among the branches. “What a wonderful adventure!” I exclaimed.',
      '* mangrove : ( 맹그로브 강가나 늪지에서 자라는 열대 나무)',
    ],
    choices: [
      { id: '1', content: 'ashamed -> relaxed' },
      { id: '2', content: 'disappointed -> excited' },
      { id: '3', content: 'delighted -> confused' },
      { id: '4', content: 'pleased -> lonely' },
      { id: '5', content: 'scared -> relieved' },
    ],
  },
  {
    id: '3',
    title: '다음 글에서 필자가 주장하는 바로 가장 적절한 것은?',
    contents: [
      'At the 2015 Fortune Most Powerful Women Summit, Ginni Rometty offered this advice: “When did you ever learn the most in your life? What experience? I guarantee you’ll tell me it was a time you felt at risk.” To become a better leader, you have to step out of your comfort zone. You have to challenge the conventional ways of doing things and search for opportunities to innovate. Exercising leadership not only requires you to challenge the organizational status quo but also requires you to challenge your internal status quo. You have to challenge yourself. You have to venture beyond the boundaries of your current experience and explore new territory. Those are the places where there are opportunities to improve, innovate, experiment, and grow. Growth is always at the edges, just outside the boundaries of where you are right now.',
      '* status quo: 현재 상태',
    ],
    choices: [
      { id: '1', content: '지도자는 실현 가능한 목표를 설정해야 한다.' },
      { id: '2', content: '지도자는 새로운 제도를 적극적으로 도입해야 한다.' },
      { id: '3', content: '지도자는 조직의 현재 상태를 철저히 분석해야 한다.' },
      { id: '4', content: '지도자는 현재의 자신을 넘어서는 도전을 해야 한다' },
      { id: '5', content: '지도자는 기존의 방식과 새로운 방식을 조화시켜야 한다.' },
    ],
  },
]

export type Response = Question | { message: string }

function TestQuestions(req: NextApiRequest, res: NextApiResponse<Response>) {
  const questionId = (req.query.id ?? '') as string
  const question = questions.find((question) => question.id === questionId)

  if (!question) {
    res.status(400).send({ message: `id=${questionId} 문제는 존재하지 않아요.` })
  } else {
    res.status(200).json(question)
  }
}

export default TestQuestions
