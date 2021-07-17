import NavigationLayout from 'src/components/layouts/NavigationLayout'
import PageHead from 'src/components/layouts/PageHead'

const description = ''

function TermsOfServicePage() {
  return (
    <PageHead title="수능 모의고사 - 이용약관" description={description}>
      <NavigationLayout>
        <h2>이용약관</h2>
      </NavigationLayout>
    </PageHead>
  )
}

export default TermsOfServicePage
