import styled from 'styled-components'
import NavigationLayout from '../components/layouts/NavigationLayout'
import PageHead from '../components/layouts/PageHead'
import { FlexContainerAlignCenter, focusInExpandFwd } from 'src/components/atoms/Styles'
import ClientSideLink from 'src/components/atoms/ClientSideLink'
import { SecondaryButton } from 'src/components/atoms/Button'
import Footer from 'src/components/Footer'
import useGoToPage from 'src/hooks/useGoToPage'
import Image from 'next/image'

const LocationText = styled.h3`
  margin: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`

export const SquareFrame = styled.div`
  padding-top: 100%;
  position: relative;
`

const StartButton = styled(SecondaryButton)`
  animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const FlexContainerColumnCenter = styled(FlexContainerAlignCenter)`
  flex-flow: column nowrap;
  margin: 1rem 0;
`

const StartEffectTag = styled(LocationText)`
  animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  text-align: center;
`

function HomePage() {
  const goToTestsPage = useGoToPage('/tests')

  return (
    <PageHead>
      <NavigationLayout>
        <SquareFrame>
          <ClientSideLink href="/tests">
            <Image src="/moigosa.webp" alt="main-image" layout="fill" objectFit="cover" />
          </ClientSideLink>
        </SquareFrame>
        <FlexContainerColumnCenter>
          <StartButton onClick={goToTestsPage}>모의고사 시작</StartButton>
          <FlexContainerAlignCenter>
            <div>
              <StartEffectTag>
                코로나19로 어려워진 대면 시험.. 수능 성적을 올리고 싶다면?
              </StartEffectTag>
              <LocationText>
                나는 타고난 수능 만점자인 것인가? 당신의 숨겨진 성적을 깨닫고 싶다면?
              </LocationText>
              <LocationText>
                이 말을 가짜라고 생각하고 무시한다면 정말 안 좋은 사고가 꼭 일어납니다.
              </LocationText>
              <LocationText>지금 당장 시작하세요.</LocationText>
            </div>
          </FlexContainerAlignCenter>
        </FlexContainerColumnCenter>
        <Footer />
      </NavigationLayout>
    </PageHead>
  )
}

export default HomePage
