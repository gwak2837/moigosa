import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'
import useSwr from 'swr'
import { Response } from 'src/pages/api/tests'
import { fetcher } from 'src/utils/commons'
import ClientSideLink from 'src/components/atoms/ClientSideLink'

const description = '여러 수능 모의고사를 확인할 수 있어요.'

function TestsPage() {
  const { data, error } = useSwr<Response>('/api/tests', fetcher)

  return (
    <PageHead title="수능 모의고사 - 모의고사 목록" description={description}>
      <NavigationLayout>
        {data?.map((test) => (
          <div key={test.id}>
            <ClientSideLink href={`/tests/${test.name.replace(/ /g, '-')}`}>
              {test.name}
            </ClientSideLink>
          </div>
        ))}
      </NavigationLayout>
    </PageHead>
  )
}

export default TestsPage
