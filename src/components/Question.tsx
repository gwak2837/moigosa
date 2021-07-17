import { Fragment } from 'react'
import { Question as TQuestion } from 'src/pages/api/questions/[id]'

type Props = {
  number: number
  question: TQuestion
}

function Question({ number, question }: Props) {
  return (
    <div>
      <h4>
        {number} {question.title}
      </h4>
      {question.contents.map((content, i) => (
        <Fragment key={i}>
          <>{content}</>
          <br />
        </Fragment>
      ))}
      {question.choices.map((choice) => (
        <div key={choice.id}>
          {choice.id} {choice.content}
        </div>
      ))}
    </div>
  )
}

export default Question
