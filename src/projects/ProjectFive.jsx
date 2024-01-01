import Markdown from 'react-markdown';
import styled from '@emotion/styled';

const data = `

# 은평구 엠비언스 사운드를 이용한 음악 작곡

김아인, 남정우, 배서영, 성현채, 송수빈, 유시현, 이선우, 이서진, 이은재

[참고영상](https://youtu.be/MzJuc91K5kQ)

## 1.제작과정 및 결과물 설명

기본 코드를 구성하고, 멜로디를 얹고, 악기별로 파트를 나누어 총보를 제작하였습니다. 틈틈이 연서시장, 진관사 등 은평구 이곳저곳에서 노래에 사용할 사운드를 녹음하였고, 뮤직비디오에 사용할 영상을 촬영하였습니다.

곡을 만들 때에는 여러 악기와 앰비언스 사운드가 사용되어야 한다는 점에 유의하여 단조롭게 반복되는 코드로 구성하였습니다. 코드는 비슷하지만, 악기가 바뀌면서 곡의 분위기도 함께 바뀌도록 구성하여 지루하지 않도록 하기 위해 노력하였습니다. 악기가 바뀌는 부분에서는 각각의 파트가 자연스럽게 연결되도록 시장 소리 등을 적극적으로 활용하였습니다.



첫번째 클래식 파트는 먼저 메인 코드를 짠뒤, 메인 멜로디와 피아노 반주를 짰고, 다양한 악기를 종합하여 화음을 넣어가며 곡을 구성했습니다. 후에 은평구의 새소리, 물소리와 같은 자연물의 소리를 엠비언트 사운드로 담고자 했습니다.



두번째 재즈 파트는 기존의 코드에 피아노 베이스를 작곡한 뒤, 순서대로 베이스와 보컬을 얹었습니다. 엠비언트 사운드로는 자연물보다는 사람과 자동차 경적소리와 같이 인공적인 소리들로 채우고자 했습니다.



앨범커버는 곡 전체의 두 가지 파트를 담아 처음에는 추락하는 것처럼 보이는 새로 비유된 여성이 사실은 비상하고 있다는 의미를 담고 있습니다. 두가지 종류의 앨범 커버 중 첫번째는 새의 모습, 두번째는 여자의 모습이 그려져 있는데 두 가지 다 곡의 앞부분을 의미하는 자연 배경, 그리고 뒷부분을 의미하는 도시 배경이 표현되어 있습니다. 사람이 그려진 버전은 물에 비친 모습을 통해, 새가 그려진 앨범커버는 뒤집는 것을 통해 추락하는 것처럼 보이는 앨범 커버가 비상하는 것처럼 보일 수도 있게 디자인했습니다.



은평구의 지역 설화인 “여기소 설화”를 바탕으로 가사를 작성하게 되었습니다. 기생의 죽음에 대한 이야기를 표현하기 위한 구슬픈 멜로디에 더해 설화를 다른 시각으로 바라본 현대적인 가사를 썼습니다.



## 2. 소감
서로 생각이 다른 친구들의 의견을 하나로 모은 완성품을 만드는 것은 생각했던 것만큼 쉬운 일이 아니었습니다. 그러나, 힘들었던 만큼 완성했을 때의 뿌듯함은 다른 활동들보다 훨씬 컸습니다. 은평구의 소리를 담은 저희만의 음악과 영상이 나온 것 같아 즐겁습니다.


처음에 막막하기만 했던 프로젝트였지만, 서로서로 작곡을 도와주고 악기를 연주하며 곡이 완성이 되었습니다. 추가적으로, 녹음 부분에서 하나고등학교 권상운선생님께서 도와주셨기에 곡을 완성할 수 있었음에 감사드립니다.
`

export default function ProjectFive() {
  return (
    <Container>
      <Markdown>
        {data}
      </Markdown>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 10px 5px;

  & > h1 {
    margin: 0 auto;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
