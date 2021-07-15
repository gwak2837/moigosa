import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { FlexContainerBetweenCenter } from 'src/components/atoms/Styles'
import PageHead from 'src/components/layouts/PageHead'

const description = ''

function TermsOfServicePage() {
  return (
    <PageHead title="수능 모의고사 - 이용약관" description={description}>
      <FlexContainerBetweenCenter>
        <h2>이용약관</h2>
        <ClientSideLink href="/">
          <div>홈으로 가기</div>
        </ClientSideLink>
      </FlexContainerBetweenCenter>
    </PageHead>
  )
}

export default TermsOfServicePage
