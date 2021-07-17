import { Radio, Space, RadioChangeEvent } from 'antd'
import { Fragment } from 'react'
import { Question as TQuestion } from 'src/pages/api/questions/[id]'
import styled from 'styled-components'

const MarginOl = styled.ol`
  padding: 1rem 0;
`

type Props = {
  answer: number | null
  setAnswer: (answer: number | null) => void
  number: number
  question: TQuestion
}

function Question({ answer, number, question, setAnswer }: Props) {
  function handleChange(e: RadioChangeEvent) {
    setAnswer(+e.target.value)
  }

  return (
    <div>
      <h4>
        {number}. {question.title}
      </h4>
      {question.contents.map((content, i) => (
        <Fragment key={i}>
          <>{content}</>
          <br />
        </Fragment>
      ))}

      <MarginOl>
        <Radio.Group onChange={handleChange} value={answer}>
          <Space direction="vertical">
            {question.choices.map((choice) => (
              <Radio key={choice.id} value={+choice.id}>
                {choice.id}. {choice.content}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </MarginOl>
    </div>
  )
}

export default Question
