import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import useSwr from 'swr'
import { Response } from 'src/pages/api/tests'
import { fetcher } from 'src/utils/commons'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import styled from 'styled-components'

const Li = styled.li`
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
`

const description = '여러 수능 모의고사를 확인할 수 있어요.'

function TestsPage() {
  const { data, error } = useSwr<Response>('/api/tests', fetcher)

  return (
    <PageHead title="수능 모의고사 - 모의고사 목록" description={description}>
      <NavigationLayout>
        {data ? (
          <ul>
            {data.map((test) => (
              <Li key={test.id}>
                <ClientSideLink href={`/tests/${test.name.replace(/ /g, '-')}`}>
                  {test.name}
                </ClientSideLink>
              </Li>
            ))}
          </ul>
        ) : error ? (
          '네트워크 요청 오류'
        ) : (
          '모의고사 목록 불러오는 중...'
        )}
      </NavigationLayout>
    </PageHead>
  )
}

export default TestsPage
