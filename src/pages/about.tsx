import PageHead from 'src/components/layouts/PageHead'
import styled from 'styled-components'
import NavigationLayout from '../components/layouts/NavigationLayout'

const H2 = styled.h2`
  text-align: center;
  margin: 1rem;
`

const Table = styled.table`
  width: 100%;
`

const PaddingCenterTd = styled.td`
  text-align: center;
  padding: 0.5rem;
`

const description = ''

function AboutPage() {
  return (
    <PageHead title="심리테스트 - 팀 소개" description={description}>
      <NavigationLayout>
        <H2>팀 소개</H2>

        <Table>
          <thead>
            <tr>
              <PaddingCenterTd>이름</PaddingCenterTd>
              <PaddingCenterTd>이메일</PaddingCenterTd>
              <PaddingCenterTd>GitHub</PaddingCenterTd>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PaddingCenterTd>곽태욱(팀장)</PaddingCenterTd>
              <PaddingCenterTd>gwak2837@kakao.com</PaddingCenterTd>
              <PaddingCenterTd>
                <a href="https://github.com/rmfpdlxmtidl" target="_blank" rel="noreferrer">
                  @rmfpdlxmtidl
                </a>
              </PaddingCenterTd>
            </tr>
            <tr>
              <PaddingCenterTd>박기민</PaddingCenterTd>
              <PaddingCenterTd>@gmail.com</PaddingCenterTd>
              <PaddingCenterTd>
                <a href="https://github.com/kimin-park" target="_blank" rel="noreferrer">
                  @kimin-park
                </a>
              </PaddingCenterTd>
            </tr>
            <tr>
              <PaddingCenterTd>이건국</PaddingCenterTd>
              <PaddingCenterTd>@gmail.com</PaddingCenterTd>
              <PaddingCenterTd>
                <a href="https://github.com/GKLee22" target="_blank" rel="noreferrer">
                  @GKLee22
                </a>
              </PaddingCenterTd>
            </tr>
            <tr>
              <PaddingCenterTd>이준영</PaddingCenterTd>
              <PaddingCenterTd>@naver.com</PaddingCenterTd>
              <PaddingCenterTd>
                <a href="https://github.com/2henry" target="_blank" rel="noreferrer">
                  @2henry
                </a>
              </PaddingCenterTd>
            </tr>
          </tbody>
        </Table>
      </NavigationLayout>
    </PageHead>
  )
}

export default AboutPage
