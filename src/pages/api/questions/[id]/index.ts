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
      ' At the 2015 Fortune Most Powerful Women Summit, Ginni Rometty offered this advice: “When did you ever learn the most in your life? What experience? I guarantee you’ll tell me it was a time you felt at risk.” To become a better leader, you have to step out of your comfort zone. You have to challenge the conventional ways of doing things and search for opportunities to innovate. Exercising leadership not only requires you to challenge the organizational status quo but also requires you to challenge your internal status quo. You have to challenge yourself. You have to venture beyond the boundaries of your current experience and explore new territory. Those are the places where there are opportunities to improve, innovate, experiment, and grow. Growth is always at the edges, just outside the boundaries of where you are right now.',
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
  {
    id: '4',
    title: '다음 글의 제목으로 가장 적절한 것은?',
    contents: [
      'Individual authors and photographers have rights to their intellectual property during their lifetimes, and their heirs have rights for 70 years after the creator’s death, so any publication less than 125 years old has to be checked for its copyright status. The duration of copyright protection has increased steadily over the years; the life-plus-70-years standard was set by the Copyright Term Extension Act of 1998, which increased the 50-year limit established by the 1976 Copyright Act. Supporters of such legislation like to defend these increases with tales of starving writers and their impoverished descendants, but in reality the beneficiaries are more likely to be transnational publishing companies. And note that copyright laws serve a dual purpose. In addition to protecting the rights of authors so as to encourage the publication of new creative works, copyright is also supposed to place reasonable time limits on those rights so that outdated works may be incorporated into new creative efforts. Therefore, the extended copyright protection frustrates new creative endeavors such as including poetry and song lyrics on Internet sites.',
      '* heir: 상속인 ** legislation: 법률, 입법',
    ],
    choices: [
      { id: '1', content: 'Does Extended Copyright Truly Enhance Protection and Creation?' },
      { id: '2', content: 'Who Smiles at Copyright Protection, Writers or Publishers?' },
      { id: '3', content: 'More Is Not Enough: No Limits to Copyright Coverage' },
      { id: '4', content: 'Creativity Leaps with Longer Copyright Protection!' },
      { id: '5', content: 'The Untold Origin of Copyright Protection' },
    ],
  },
  {
    id: '5',
    title: '다음 글의 주제로 가장 적절한 것은?',
    contents: [
      'Sensory-specific satiety is defined as a decrease in appetite, or the subjective liking for the food that is consumed, with little change in the hedonics of uneaten food. As a result of sensory-specific satiety, when people consume a variety of foods, they tend to overeat. A greater variety of food leads people to eat more than they would otherwise. So, being full and feeling sated are separate matters. The recovery of appetite or the motivation to eat is apparent to anyone who has consumed a large meal and is quite full, and does not require additional energy or nutrients to meet their daily needs, but decides to consume additional calories after seeing the dessert cart. Small changes in the sensory properties of foods are sufficient to increase food intake. For example, subjects who were presented with different shapes of pasta showed increased hedonic ratings and increased energy consumption relative to subjects eating only a single shape of pasta.',
      '* satiety: 포만(감) ** hedonics: 쾌락 *** sated: 충분히 만족한',
    ],
    choices: [
      { id: '1', content: 'necessity of consuming a varied diet in daily life' },
      { id: '2', content: 'reasons for people’s rejection of unfamiliar foods' },
      { id: '3', content: 'changes in people’s preference for basic food items' },
      { id: '4', content: 'impact of food variety on the amount of food people consume' },
      { id: '5', content: 'importance of maintaining food diversity to prevent overeating' },
    ],
  },
  {
    id: '6',
    title: 'Jim Marshall에 관한 다음 글의 내용과 일치하지 않는 것은?',
    contents: [
      'The late photographer Jim Marshall is regarded as one of the most celebrated photographers of the 20th century. He holds the distinction of being the first and only photographer to be presented with the Grammy Trustees Award. He started as a professional photographer in 1959. He was given unrivaled access to rock’s biggest artists, including the Rolling Stones, Bob Dylan, and Ray Charles. He was the only photographer granted backstage access for the Beatles’ final full concert and also shot the Rolling Stones on their historic 1972 tour. He formed special bonds with the artists he worked with and those relationships helped him capture some of his most vivid and iconic imagery. Over a 50-year career, the photographs he took appeared on more than 500 album covers. He was passionate about his work up until the end. “I have no kids,” he used to say. “My photographs are my children.”',
    ],
    choices: [
      { id: '1', content: 'Grammy Trustees Award가 수여된 최초이자 유일한 사진작가이다.' },
      { id: '2', content: '1959년에 직업 사진작가로 일하기 시작했다.' },
      { id: '3', content: 'Rolling Stones의 역사적인 1972년 투어에서 그들을 촬영했다.' },
      { id: '4', content: '함께 작업한 예술가들과 특별한 유대 관계를 맺지 않았다.' },
      { id: '5', content: '500개가 넘는 앨범 커버에 그가 촬영한 사진들이 실렸다.' },
    ],
  },
  {
    id: '7',
    title: '2018 CVL Volleyball Camp에 관한 다음 안내문의 내용과 일치하지 않는 것은?',
    contents: [
      '2018 CVL Volleyball Camp',
      '  The College Volleyball League (CVL) is hosting a camp',
      '  for high school students from January 23 to 27.',
      'Training Program',
      '  After a brief skills test, participants will be trained',
      'based on their levels.',
      '  ∙Basic Level: serving, tossing, and spiking',
      '  ∙Advanced Level: individual plays and team strategies',
      'Daily Schedule',
      '  ∙9 a.m.－11 a.m.: one-on-one skills training',
      '  ∙1 p.m.－4 p.m.: practice game sessions',
      'Note',
      '  ∙Participation fee is $100.',
      '  ∙Participants will receive a volleyball and a camp T-shirt.',
      '  ∙College volleyball players will visit to offer advice to',
      'participants on the final day of the camp.',
      'For more information, visit our website at www.CVL.org.',
    ],
    choices: [
      { id: '1', content: '고등학생을 대상으로 한다.' },
      { id: '2', content: '참가자들은 수준에 따라 훈련을 받을 것이다.' },
      { id: '3', content: '오전에 연습 경기를 실시한다.' },
      { id: '4', content: '참가자들은 배구공과 캠프 티셔츠를 받을 것이다.' },
      { id: '5', content: '마지막 날에 대학 배구 선수들이 방문할 것이다.' },
    ],
  },
  {
    id: '8',
    title: '다음 글의 요지로 가장 적절한 것은?',
    contents: [
      'One exercise in teamwork I do at a company retreat is to put the group in a circle. At one particular retreat, there were eight people in the circle, and I slowly handed tennis balls to one person to start throwing around the circle. If N equals the number of people in the circle, then the maximum number of balls you can have in motion is N minus 1. Why? Because it’s almost impossible to throw and catch at the same time. The purpose of the exercise is to demonstrate the importance of an individual’s action. People are much more concerned about catching the ball than throwing it. What this demonstrates is that it’s equally important to the success of the exercise that the person you’re throwing to catches the ball as that you are able to catch the ball. If you’re less concerned about how you deliver information than with how you receive it, you’ll ultimately fail at delegation. You have to be equally skilled at both.',
      '* delegation: 위임',
    ],
    choices: [
      { id: '1', content: '협업에서는 정보를 전달하는 방식에도 능숙할 필요가 있다.' },
      { id: '2', content: '여가 활동을 함께하는 것도 협업의 효율성을 증가시킨다.' },
      { id: '3', content: '자유로운 의사소통 문화는 직무 만족도 향상에 기여한다.' },
      { id: '4', content: '정확한 정보 이해는 신속한 업무 수행을 가능하게 한다.' },
      { id: '5', content: '구성원 간의 공통된 목표 의식이 협업의 필수 조건이다.' },
    ],
  },
  {
    id: '9',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'Apocalypse Now, a film produced and directed by Francis Ford Coppola, gained widespread popularity, and for good reason. The film is an adaptation of Joseph Conrad’s novel Heart of Darkness, which is set in the African Congo at the end of the 19th century. Unlike the original novel, Apocalypse Now is set in Vietnam and Cambodia during the Vietnam War. The setting, time period, dialogue and other incidental details are changed but the fundamental narrative and themes of Apocalypse Now are the same as those of Heart of Darkness. Both describe a physical journey, reflecting the central character’s mental and spiritual journey, down a river to confront the deranged Kurtz character, who represents the worst aspects of civilisation. By giving Apocalypse Now a setting that was contemporary at the time of its release, audiences were able to experience and identify with its themes more easily than they would have if the film had been',
      '________________________',
      '* deranged: 제정신이 아닌',
    ],
    choices: [
      { id: '1', content: '음식 기부에 참여하는 방법을 안내하려고' },
      { id: '2', content: '음식 배달 자원봉사 참여에 감사하려고' },
      { id: '3', content: '도서관 이용 시간 변경을 공지하려고' },
      { id: '4', content: '음식물 낭비의 심각성을 알려 주려고' },
      { id: '5', content: '크리스마스 행사 일정을 문의하려고' },
    ],
  },
  {
    id: '10',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'grateful → sorrowful' },
      { id: '2', content: 'upset → calm' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
    ],
  },
  {
    id: '11',
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
    id: '12',
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
    id: '13',
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
  {
    id: '14',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Friends,',
      'Season’s greetings. As some of you already know, we are starting the campus food drive. This is how you participate. You can bring your items for donation to our booths. Our donation booths are located in the lobbies of the campus libraries. Just drop off the items there during usual library hours from December 4 to 23. The donated food should be non-perishable like canned meats and canned fruits. Packaged goods such as jam and peanut butter are also good. We will distribute the food to our neighbors on Christmas Eve. We truly appreciate your help.',
      'Many blessings,',
      'Joanna at Campus Food Bank',
    ],
    choices: [
      { id: '1', content: '음식 기부에 참여하는 방법을 안내하려고' },
      { id: '2', content: '음식 배달 자원봉사 참여에 감사하려고' },
      { id: '3', content: '도서관 이용 시간 변경을 공지하려고' },
      { id: '4', content: '음식물 낭비의 심각성을 알려 주려고' },
      { id: '5', content: '크리스마스 행사 일정을 문의하려고' },
    ],
  },
  {
    id: '15',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'grateful → sorrowful' },
      { id: '2', content: 'upset → calm' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
    ],
  },
  {
    id: '16',
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
    id: '17',
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
    id: '18',
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
  {
    id: '19',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Friends,',
      'Season’s greetings. As some of you already know, we are starting the campus food drive. This is how you participate. You can bring your items for donation to our booths. Our donation booths are located in the lobbies of the campus libraries. Just drop off the items there during usual library hours from December 4 to 23. The donated food should be non-perishable like canned meats and canned fruits. Packaged goods such as jam and peanut butter are also good. We will distribute the food to our neighbors on Christmas Eve. We truly appreciate your help.',
      'Many blessings,',
      'Joanna at Campus Food Bank',
    ],
    choices: [
      { id: '1', content: '음식 기부에 참여하는 방법을 안내하려고' },
      { id: '2', content: '음식 배달 자원봉사 참여에 감사하려고' },
      { id: '3', content: '도서관 이용 시간 변경을 공지하려고' },
      { id: '4', content: '음식물 낭비의 심각성을 알려 주려고' },
      { id: '5', content: '크리스마스 행사 일정을 문의하려고' },
    ],
  },
  {
    id: '20',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'grateful → sorrowful' },
      { id: '2', content: 'upset → calm' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
    ],
  },
  {
    id: '21',
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
    id: '22',
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
    id: '23',
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
  {
    id: '24',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Friends,',
      'Season’s greetings. As some of you already know, we are starting the campus food drive. This is how you participate. You can bring your items for donation to our booths. Our donation booths are located in the lobbies of the campus libraries. Just drop off the items there during usual library hours from December 4 to 23. The donated food should be non-perishable like canned meats and canned fruits. Packaged goods such as jam and peanut butter are also good. We will distribute the food to our neighbors on Christmas Eve. We truly appreciate your help.',
      'Many blessings,',
      'Joanna at Campus Food Bank',
    ],
    choices: [
      { id: '1', content: '음식 기부에 참여하는 방법을 안내하려고' },
      { id: '2', content: '음식 배달 자원봉사 참여에 감사하려고' },
      { id: '3', content: '도서관 이용 시간 변경을 공지하려고' },
      { id: '4', content: '음식물 낭비의 심각성을 알려 주려고' },
      { id: '5', content: '크리스마스 행사 일정을 문의하려고' },
    ],
  },
  {
    id: '25',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'grateful → sorrowful' },
      { id: '2', content: 'upset → calm' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
    ],
  },
  {
    id: '26',
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
    id: '27',
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
    id: '28',
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
  {
    id: '29',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Friends,',
      'Season’s greetings. As some of you already know, we are starting the campus food drive. This is how you participate. You can bring your items for donation to our booths. Our donation booths are located in the lobbies of the campus libraries. Just drop off the items there during usual library hours from December 4 to 23. The donated food should be non-perishable like canned meats and canned fruits. Packaged goods such as jam and peanut butter are also good. We will distribute the food to our neighbors on Christmas Eve. We truly appreciate your help.',
      'Many blessings,',
      'Joanna at Campus Food Bank',
    ],
    choices: [
      { id: '1', content: '음식 기부에 참여하는 방법을 안내하려고' },
      { id: '2', content: '음식 배달 자원봉사 참여에 감사하려고' },
      { id: '3', content: '도서관 이용 시간 변경을 공지하려고' },
      { id: '4', content: '음식물 낭비의 심각성을 알려 주려고' },
      { id: '5', content: '크리스마스 행사 일정을 문의하려고' },
    ],
  },
  {
    id: '30',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'grateful → sorrowful' },
      { id: '2', content: 'upset → calm' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
    ],
  },
  {
    id: '31',
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
    id: '32',
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
    id: '33',
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
  {
    id: '34',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Friends,',
      'Season’s greetings. As some of you already know, we are starting the campus food drive. This is how you participate. You can bring your items for donation to our booths. Our donation booths are located in the lobbies of the campus libraries. Just drop off the items there during usual library hours from December 4 to 23. The donated food should be non-perishable like canned meats and canned fruits. Packaged goods such as jam and peanut butter are also good. We will distribute the food to our neighbors on Christmas Eve. We truly appreciate your help.',
      'Many blessings,',
      'Joanna at Campus Food Bank',
    ],
    choices: [
      { id: '1', content: '음식 기부에 참여하는 방법을 안내하려고' },
      { id: '2', content: '음식 배달 자원봉사 참여에 감사하려고' },
      { id: '3', content: '도서관 이용 시간 변경을 공지하려고' },
      { id: '4', content: '음식물 낭비의 심각성을 알려 주려고' },
      { id: '5', content: '크리스마스 행사 일정을 문의하려고' },
    ],
  },
  {
    id: '35',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'grateful → sorrowful' },
      { id: '2', content: 'upset → calm' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
    ],
  },
  {
    id: '36',
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
    id: '37',
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
    id: '38',
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
  {
    id: '39',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Friends,',
      'Season’s greetings. As some of you already know, we are starting the campus food drive. This is how you participate. You can bring your items for donation to our booths. Our donation booths are located in the lobbies of the campus libraries. Just drop off the items there during usual library hours from December 4 to 23. The donated food should be non-perishable like canned meats and canned fruits. Packaged goods such as jam and peanut butter are also good. We will distribute the food to our neighbors on Christmas Eve. We truly appreciate your help.',
      'Many blessings,',
      'Joanna at Campus Food Bank',
    ],
    choices: [
      { id: '1', content: '음식 기부에 참여하는 방법을 안내하려고' },
      { id: '2', content: '음식 배달 자원봉사 참여에 감사하려고' },
      { id: '3', content: '도서관 이용 시간 변경을 공지하려고' },
      { id: '4', content: '음식물 낭비의 심각성을 알려 주려고' },
      { id: '5', content: '크리스마스 행사 일정을 문의하려고' },
    ],
  },
  {
    id: '40',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'grateful → sorrowful' },
      { id: '2', content: 'upset → calm' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
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
