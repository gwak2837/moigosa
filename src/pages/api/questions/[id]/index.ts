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
      { id: '1', content: 'a critical interpretation of contemporary civilisation' },
      { id: '2', content: 'a vivid dramatisation of a psychological journey' },
      { id: '3', content: 'a faithful depiction of the Vietnam War' },
      { id: '4', content: 'a source of inspiration for the novel' },
      { id: '5', content: 'a literal adaptation of the novel' },
    ],
  },
  {
    id: '10',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'How many of the lunches that you ate over the last week can you recall? Do you remember what you ate today? I hope so. Yesterday? I bet it takes a moment’s effort. And what about the day before yesterday? What about a week ago? It’s not so much that your memory of last week’s lunch has disappeared; if provided with the right cue, like where you ate it, or whom you ate it with, you would likely recall what had been on your plate. Rather, it’s difficult to remember last week’s lunch because your brain has filed it away with all the other lunches you’ve ever eaten as just another lunch. When we try to recall something from a category that includes as many instances as “lunch” or “wine,” many memories compete for our attention. The memory of last Wednesday’s lunch isn’t necessarily gone; it’s that you lack ',
      '__________________. But a wine that talks: That’s unique. It’s a memory without rivals.',
    ],
    choices: [
      { id: '1', content: 'the channel to let it flow into the pool of ordinary memories' },
      { id: '2', content: 'the right hook to pull it out of a sea of lunchtime memories' },
      { id: '3', content: 'the glue to attach it to just another lunch memory' },
      { id: '4', content: 'the memory capacity to keep a box of sleeping memories' },
      { id: '5', content: 'the sufficient number of competitors in a battle for attention' },
    ],
  },
  {
    id: '11',
    title: '다음 글에 드러난 Dave의 심경 변화로 가장 적절한 것은?',
    contents: [
      'The waves were perfect for surfing. Dave, however, just could not stay on his board. He had tried more than ten times to stand up but never managed it. He felt that he would never succeed. He was about to give up when he looked at the sea one last time. The swelling waves seemed to say, “Come on, Dave. One more try!” Taking a deep breath, he picked up his board and ran into the water. He waited for the right wave. Finally, it came. He jumped up onto the board just like he had practiced. And this time, standing upright, he battled the wave all the way back to shore. Walking out of the water joyfully, he cheered, “Wow, I did it!”',
    ],
    choices: [
      { id: '1', content: 'frustrated → delighted' },
      { id: '2', content: 'bored → comforted' },
      { id: '3', content: 'calm → annoyed' },
      { id: '4', content: 'relieved → frightened' },
      { id: '5', content: '⑤ pleased → upset' },
    ],
  },
  {
    id: '12',
    title: '다음 글에서 필자가 주장하는 바로 가장 적절한 것은?',
    contents: [
      'War is inconceivable without some image, or concept, of the enemy. It is the presence of the enemy that gives meaning and justification to war. ‘War follows from feelings of hatred’, wrote Carl Schmitt. ‘War has its own strategic, tactical, and other rules and points of view, but they all presuppose that the political decision has already been made as to who the enemy is’. The concept of the enemy is fundamental to the moral assessment of war: ‘The basic aim of a nation at war in establishing an image of the enemy is to distinguish as sharply as possible the act of killing from the act of murder’. However, we need to be cautious about thinking of war and the image of the enemy that informs it in an abstract and uniform way. Rather, both must be seen for the cultural and contingent phenomena that they are.',
      '* contingent: 불확정적인',
    ],
    choices: [
      { id: '1', content: '전쟁과 적을 추상적이고 획일적으로 개념화하는 것을 경계해야 한다.' },
      { id: '2', content: '적에 따라 다양한 전략과 전술을 수립하고 적용해야 한다.' },
      { id: '3', content: '보편적 윤리관에 기초하여 적의 개념을 정의해야 한다.' },
      { id: '4', content: '전쟁 예방에 도움이 되는 정치적 결정을 해야 한다.' },
      { id: '5', content: '어떠한 경우에도 전쟁을 정당화하지 말아야 한다.' },
    ],
  },
  {
    id: '13',
    title: '괄호 안 refining ignorance가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    contents: [
      'Although not the explicit goal, the best science can really be seen as',
      '( refining ignorance ). Scientists, especially young ones, can get too obsessed with results. Society helps them along in this mad chase. Big discoveries are covered in the press, show up on the university’s home page, help get grants, and make the case for promotions. But it’s wrong. Great scientists, the pioneers that we admire, are not concerned with results but with the next questions. The highly respected physicist Enrico Fermi told his students that an experiment that successfully proves a hypothesis is a measurement; one that doesn’t is a discovery. A discovery, an uncovering ― of new ignorance. The Nobel Prize, the pinnacle of scientific accomplishment, is awarded, not for a lifetime of scientific achievement, but for a single discovery, a result. Even the Nobel committee realizes in some way that this is not really in the scientific spirit, and their award citations commonly honor the discovery for having “opened a field up,” “transformed a field,” or “taken a field in new and unexpected directions.”',
      '* pinnacle: 정점',
    ],
    choices: [
      { id: '1', content: 'looking beyond what is known towards what is left unknown' },
      { id: '2', content: 'offering an ultimate account of what has been discovered' },
      { id: '3', content: 'analyzing existing knowledge with an objective mindset' },
      { id: '4', content: 'inspiring scientists to publicize significant discoveries' },
      { id: '5', content: 'informing students of a new field of science' },
    ],
  },
  {
    id: '14',
    title: '다음 글의 요지로 가장 적절한 것은?',
    contents: [
      'With the industrial society evolving into an information-based society, the concept of information as a product, a commodity with its own value, has emerged. As a consequence, those people, organizations, and countries that possess the highest-quality information are likely to prosper economically, socially, and politically. Investigations into the economics of information encompass a variety of categories including the costs of information and information services; the effects of information on decision making; the savings from effective information acquisition; the effects of information on productivity; and the effects of specific agencies (such as corporate, technical, or medical libraries) on the productivity of organizations. Obviously many of these areas overlap, but it is clear that information has taken on a life of its own outside the medium in which it is contained. Information has become a recognized entity to be measured, evaluated, and priced.',
      '* entity: 실재(물)',
    ],
    choices: [
      { id: '1', content: '정보 기반 사회에서는 정보를 전달하는 방식이 중요하다.' },
      { id: '2', content: '정보 기반 사회에서 정보는 독자적 상품 가치를 지닌다.' },
      { id: '3', content: '정보 처리의 단순화는 신속한 의사 결정에 도움이 된다.' },
      { id: '4', content: '정보의 효율적 교환은 조직의 생산성을 향상시킨다.' },
      { id: '5', content: '정보화된 사회일수록 개인 정보 보호가 필요하다.' },
    ],
  },
  {
    id: '15',
    title: '다음 글의 주제로 가장 적절한 것은?',
    contents: [
      'We argue that the ethical principles of justice provide an essential foundation for policies to protect unborn generations and the poorest countries from climate change. Related issues arise in connection with current and persistently inadequate aid for these nations, in the face of growing threats to agriculture and water supply, and the rules of international trade that mainly benefit rich countries. Increasing aid for the world’s poorest peoples can be an essential part of effective mitigation. With 20 percent of carbon emissions from (mostly tropical) deforestation, carbon credits for forest preservation would combine aid to poorer countries with one of the most cost-effective forms of abatement. Perhaps the most cost-effective but politically complicated policy reform would be the removal of several hundred billions of dollars of direct annual subsidies from the two biggest recipients in the OECD ― destructive industrial agriculture and fossil fuels. Even a small amount of this money would accelerate the already rapid rate of technical progress and investment in renewable energy in many areas, as well as encourage the essential switch to conservation agriculture.',
      '* mitigation: 완화 ** abatement: 감소 *** subsidy: 보조금',
    ],
    choices: [
      { id: '1', content: 'reforming diplomatic policies in poor countries' },
      { id: '2', content: 'coping with climate change by reforming aid and policies' },
      { id: '3', content: 'reasons for restoring economic equality in poor countries' },
      { id: '4', content: 'increasing global awareness of the environmental crisis' },
      { id: '5', content: 'roles of the OECD in solving international conflicts' },
    ],
  },
  {
    id: '16',
    title: '다음 글의 제목으로 가장 적절한 것은?',
    contents: [
      'A defining element of catastrophes is the magnitude of their harmful consequences. To help societies prevent or reduce damage from catastrophes, a huge amount of effort and technological sophistication are often employed to assess and communicate the size and scope of potential or actual losses. This effort assumes that people can understand the resulting numbers and act on them appropriately. However, recent behavioral research casts doubt on this fundamental assumption. Many people do not understand large numbers. Indeed, large numbers have been found to lack meaning and to be underestimated in decisions unless they convey affect (feeling). This creates a paradox that rational models of decision making fail to represent. On the one hand, we respond strongly to aid a single individual in need. On the other hand, we often fail to prevent mass tragedies or take appropriate measures to reduce potential losses from natural disasters.',
      '* catastrophe: 큰 재해',
    ],
    choices: [
      { id: '1', content: 'Be Careful, Numbers Magnify Feelings!' },
      { id: '2', content: 'Preventing Potential Losses Through Technology' },
      { id: '3', content: 'How to Reach Out a Hand to People in Desperate Need' },
      { id: '4', content: 'Power of Numbers: A Way of Classifying Natural Disasters' },
      { id: '5', content: 'Insensitivity to Mass Tragedy: We Are Lost in Large Numbers' },
    ],
  },
  {
    id: '17',
    title: 'Marjorie Kinnan Rawlings에 관한 다음 글의 내용과 일치 하지 않는 것은?',
    contents: [
      'Marjorie Kinnan Rawlings, an American author born in Washington, D.C. in 1896, wrote novels with rural themes and settings. While she was young, one of her stories appeared in The Washington Post. After graduating from university, Rawlings worked as a journalist while simultaneously trying to establish herself as a fiction writer. In 1928, she purchased an orange grove in Cross Creek, Florida. This became the source of inspiration for some of her writings which included The Yearling and her autobiographical book, Cross Creek. In 1939, The Yearling, which was about a boy and an orphaned baby deer, won the Pulitzer Prize for Fiction. Later, in 1946, The Yearling was made into a film of the same name. Rawlings passed away in 1953, and the land she owned at Cross Creek has become a Florida State Park honoring her achievements.',
      '* grove: 과수원',
    ],
    choices: [
      { id: '1', content: 'Washington, D.C.에서 태어난 미국 작가이다.' },
      { id: '2', content: '그녀의 이야기 중 하나가 The Washington Post에 실렸다.' },
      { id: '3', content: '대학교를 졸업한 후 저널리스트로 일했다.' },
      { id: '4', content: 'The Yearling이라는 소설은 다른 제목으로 영화화되었다.' },
      { id: '5', content: 'Cross Creek에 소유했던 땅은 Florida 주립 공원이 되었다.' },
    ],
  },
  {
    id: '18',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'Finkenauer and Rimé investigated the memory of the unexpected death of Belgium’s King Baudouin in 1993 in a large sample of Belgian citizens. The data revealed that the news of the king’s death had been widely socially shared. By talking about the event, people gradually constructed a social narrative and a collective memory of the emotional event. At the same time, they consolidated their own memory of the personal circumstances in which the event took place, an effect known as “flashbulb memory.” The more an event is socially shared, the more it will be fixed in people’s minds. Social sharing may in this way help to counteract some natural tendency people may have. Naturally, people should be driven to “forget” undesirable events. Thus, someone who just heard a piece of bad news often tends initially to deny what happened. The _________ social sharing of the bad news contributes to realism.',
      '* consolidate: 공고히 하다',
    ],
    choices: [
      { id: '1', content: 'repetitive' },
      { id: '2', content: 'illegal' },
      { id: '3', content: 'biased' },
      { id: '4', content: 'temporary' },
      { id: '5', content: 'rational' },
    ],
  },
  {
    id: '19',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'Minorities tend not to have much power or status and may even be dismissed as troublemakers, extremists or simply ‘weirdos’. How, then, do they ever have any influence over the majority? The social psychologist Serge Moscovici claims that the answer lies in their behavioural style, i.e. the way __________________. The crucial factor in the success of the suffragette movement was that its supporters were consistent in their views, and this created a considerable degree of social influence. Minorities that are active and organised, who support and defend their position consistently, can create social conflict, doubt and uncertainty among members of the majority, and ultimately this may lead to social change. Such change has often occurred because a minority has converted others to its point of view. Without the influence of minorities, we would have no innovation, no social change. Many of what we now regard as ‘major’ social movements (e.g. Christianity, trade unionism or feminism) were originally due to the influence of an outspoken minority.',
      '* dismiss: 일축하다 ** weirdo: 별난 사람',
      '*** suffragette: 여성 참정권론자',
    ],
    choices: [
      { id: '1', content: 'the minority cooperates with the majority' },
      { id: '2', content: 'the majority brings about social change' },
      { id: '3', content: 'the majority cultivates the minority' },
      { id: '4', content: 'the minority tones down its voice' },
      { id: '5', content: 'the minority gets its point across' },
    ],
  },
  {
    id: '20',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'Heritage is concerned with the ways in which very selective material artefacts, mythologies, memories and traditions become resources for the present. The contents, interpretations and representations of the resource are selected according to the demands of the present; an imagined past provides resources for a heritage that is to be passed onto an imagined future. It follows too that the meanings and functions of memory and tradition are defined in the present. Further, heritage is more concerned with meanings than material artefacts. It is the former that give value, either cultural or financial, to the latter and explain why they have been selected from the near infinity of the past. In turn, they may later be discarded as the demands of present societies change, or even, as is presently occurring in the former Eastern Europe, when pasts have to be reinvented to reflect new presents. Thus heritage is',
      '___________________.',
    ],
    choices: [
      { id: '1', content: 'about preserving universal cultural values' },
      { id: '2', content: 'a mirror reflecting the artefacts of the past' },
      { id: '3', content: 'neither concerned with the present nor the future' },
      { id: '4', content: 'as much about forgetting as remembering the past' },
      { id: '5', content: 'a collection of memories and traditions of a society' },
    ],
  },
  {
    id: '21',
    title: '다음 글의 목적으로 가장 적절한 것은?',
    contents: [
      'Dear Mr. Kayne,',
      'I am a resident of Cansinghill Apartments, located right next to the newly opened Vuenna Dog Park. As I live with three dogs, I am very happy to let my dogs run around and safely play with other dogs from the neighborhood. However, the noise of barking and yelling from the park at night is so loud and disturbing that I cannot relax in my apartment. Many of my apartment neighbors also seriously complain about this noise. I want immediate action to solve this urgent problem. Since you are the manager of Vuenna Dog Park, I ask you to take measures to prevent the noise at night. I hope to hear from you soon.',
      'Sincerely,',
      'Monty Kim',
    ],
    choices: [
      { id: '1', content: '애완견 예방 접종 일정을 확인하려고' },
      { id: '2', content: '애완견 공원의 야간 이용 시간을 문의하려고' },
      { id: '3', content: '애완견 공원의 야간 소음 방지 대책을 촉구하려고' },
      { id: '4', content: '아파트 인근에 개장한 애완견 공원을 홍보하려고' },
      { id: '5', content: '아파트 내 애완견 출입 금지 구역을 안내하려고' },
    ],
  },
  {
    id: '22',
    title: '다음 글에 드러난 Jonas의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Looking out the bus window, Jonas could not stay calm. He had been looking forward to this field trip. It was the first field trip for his history course. His history professor had recommended it to the class, and Jonas had signed up enthusiastically. He was the first to board the bus in the morning. The landscape looked fascinating as the bus headed to Alsace. Finally arriving in Alsace after three hours on the road, however, Jonas saw nothing but endless agricultural fields. The fields were vast, but hardly appealed to him. He had expected to see some old castles and historical monuments, but now he saw nothing like that awaiting him. “What can I learn from these boring fields?” Jonas said to himself with a sigh.',
    ],
    choices: [
      { id: '1', content: 'excited → disappointed' },
      { id: '2', content: 'indifferent → thrilled' },
      { id: '3', content: 'amazed → horrified' },
      { id: '4', content: 'surprised → relieved' },
      { id: '5', content: 'worried → confident' },
    ],
  },
  {
    id: '23',
    title: '다음 글에서 필자가 주장하는 바로 가장 적절한 것은?',
    contents: [
      'Probably the biggest roadblock to play for adults is the worry that they will look silly, improper, or dumb if they allow themselves to truly play. Or they think that it is irresponsible, immature, and childish to give themselves regularly over to play. Nonsense and silliness come naturally to kids, but they get pounded out by norms that look down on “frivolity.” This is particularly true for people who have been valued for performance standards set by parents or the educational system, or measured by other cultural norms that are internalized and no longer questioned. If someone has spent his adult life worried about always appearing respectable, competent, and knowledgeable, it can be hard to let go sometimes and become physically and emotionally free. The thing is this: You have to give yourself permission to improvise, to mimic, to take on a long-hidden identity.',
      '* frivolity: 경박함 ** improvise: 즉흥적으로 하다',
    ],
    choices: [
      { id: '1', content: '어른도 규범에 얽매이지 말고 자유롭게 놀이를 즐겨야 한다.' },
      { id: '2', content: '아동에게 사회 규범을 내면화할 수 있는 놀이를 제공해야 한다.' },
      { id: '3', content: '개인의 창의성을 극대화할 수 있는 놀이 문화를 조성해야 한다.' },
      { id: '4', content: '타인의 시선을 의식하지 않고 자신의 목표 달성에 매진해야 한다.' },
      { id: '5', content: '어른을 위한 잠재력 계발 프로그램에서 놀이의 비중을 늘려야 한다.' },
    ],
  },
  {
    id: '24',
    title: '괄호 안 playing intellectual air guitar가 다음 글에서 의미 하는 바로 가장 적절한 것은?',
    contents: [
      'Any learning environment that deals with only the database instincts or only the improvisatory instincts ignores one half of our ability. It is bound to fail. It makes me think of jazz guitarists: They’re not going to make it if they know a lot about music theory but don’t know how to jam in a live concert. Some schools and workplaces emphasize a stable, rote-learned database. They ignore the improvisatory instincts drilled into us for millions of years. Creativity suffers. Others emphasize creative usage of a database, without installing a fund of knowledge in the first place. They ignore our need to obtain a deep understanding of a subject, which includes memorizing and storing a richly structured database. You get people who are great improvisers but don’t have depth of knowledge. You may know someone like this where you work. They may look like jazz musicians and have the appearance of jamming, but in the end they know nothing. They’re ( playing intellectual air guitar ).',
      '* rote-learned: 기계적으로 암기한',
    ],
    choices: [
      { id: '1', content: 'displaying seemingly creative ability not rooted in firm knowledge' },
      { id: '2', content: 'posing as experts by demonstrating their in-depth knowledge' },
      { id: '3', content: 'exhibiting artistic talent coupled with solid knowledge of music' },
      { id: '4', content: 'performing musical pieces to attract a highly educated audience' },
      { id: '5', content: 'acquiring necessary experience to enhance their creativity' },
    ],
  },
  {
    id: '25',
    title: '다음 글의 요지로 가장 적절한 것은?',
    contents: [
      'In retrospect, it might seem surprising that something as mundane as the desire to count sheep was the driving force for an advance as fundamental as written language. But the desire for written records has always accompanied economic activity, since transactions are meaningless unless you can clearly keep track of who owns what. As such, early human writing is dominated by wheeling and dealing: a collection of bets, bills, and contracts. Long before we had the writings of the prophets, we had the writings of the profits. In fact, many civilizations never got to the stage of recording and leaving behind the kinds of great literary works that we often associate with the history of culture. What survives these ancient societies is, for the most part, a pile of receipts. If it weren’t for the commercial enterprises that produced those records, we would know far, far less about the cultures that they came from.',
      '* mundane: 세속의 ** prophet: 예언자',
    ],
    choices: [
      { id: '1', content: '모든 문명이 위대한 작가를 배출한 것은 아니다.' },
      { id: '2', content: '종교의 역사는 상업의 역사보다 먼저 시작되었다.' },
      { id: '3', content: '경제 발전의 정도가 문명의 발달 수준을 결정한다.' },
      { id: '4', content: '고전 문학을 통해 당대의 경제 활동을 파악할 수 있다.' },
      { id: '5', content: '고대 사회에서 경제 활동은 문자 기록의 원동력이었다.' },
    ],
  },
  {
    id: '26',
    title: '다음 글의 주제로 가장 적절한 것은?',
    contents: [
      'Human beings do not enter the world as competent moral agents. Nor does everyone leave the world in that state. But somewhere in between, most people acquire a bit of decency that qualifies them for membership in the community of moral agents. Genes, development, and learning all contribute to the process of becoming a decent human being. The interaction between nature and nurture is, however, highly complex, and developmental biologists are only just beginning to grasp just how complex it is. Without the context provided by cells, organisms, social groups, and culture, DNA is inert. Anyone who says that people are “genetically programmed” to be moral has an oversimplified view of how genes work. Genes and environment interact in ways that make it nonsensical to think that the process of moral development in children, or any other developmental process, can be discussed in terms of nature versus nurture. Developmental biologists now know that it is really both, or nature through nurture. A complete scientific explanation of moral evolution and development in the human species is a very long way off.',
      '* decency: 예의 ** inert: 비활성의',
    ],
    choices: [
      { id: '1', content: 'complicated gene-environment interplay in moral development' },
      { id: '2', content: 'nature versus nurture controversies in developmental biology' },
      { id: '3', content: 'increasing necessity of educating children as moral agents' },
      { id: '4', content: 'difficulties in studying the evolutionary process of genes' },
      { id: '5', content: 'evolution of human morality from a cultural perspective' },
    ],
  },
  {
    id: '27',
    title: '다음 글의 제목으로 가장 적절한 것은?',
    contents: [
      'Invasions of natural communities by non-indigenous species are currently rated as one of the most important global-scale environmental problems. The loss of biodiversity has generated concern over the consequences for ecosystem functioning and thus understanding the relationship between both has become a major focus in ecological research during the last two decades. The “biodiversity-invasibility hypothesis” by Elton suggests that high diversity increases the competitive environment of communities and makes them more difficult to invade. Numerous biodiversity experiments have been conducted since Elton’s time and several mechanisms have been proposed to explain the often observed negative relationship between diversity and invasibility. Beside the decreased chance of empty ecological niches but the increased probability of competitors that prevent invasion success, diverse communities are assumed to use resources more completely and, therefore, limit the ability of invaders to establish. Further, more diverse communities are believed to be more stable because they use a broader range of niches than species-poor communities.',
      '* indigenous: 토착의 ** niche: 생태적 지위',
    ],
    choices: [
      { id: '1', content: 'Carve Out More Empty Ecological Spaces!' },
      { id: '2', content: 'Guardian of Ecology: Diversity Resists Invasion' },
      { id: '3', content: 'Grasp All, Lose All: Necessity of Species-poor Ecology' },
      { id: '4', content: 'Challenges in Testing Biodiversity-Invasibility Hypothesis' },
      { id: '5', content: 'Diversity Dilemma: The More Competitive, the Less Secure' },
    ],
  },
  {
    id: '28',
    title: 'The Nuer에 관한 다음 글의 내용과 일치하지 않는 것은?',
    contents: [
      'The Nuer are one of the largest ethnic groups in South Sudan, primarily residing in the Nile River Valley. The Nuer are a cattle-raising people, whose everyday lives revolve around their cattle. They have various terms related to cattle, so they can distinguish between hundreds of types of cows, based on color, markings, and shape of horns. They prefer to be called by the names of the cattle they raise. The commonest daily foods for the Nuer are dairy products, especially milk for the young and soured milk, like yogurt, for adults. And wild fruits and nuts are favorite snacks for the Nuer. The Nuer also have a culture of counting only older members of the family. They believe that counting the number of children one has could result in misfortune and prefer to report fewer children than they have.',
    ],
    choices: [
      { id: '1', content: '주로 Nile River Valley에 거주한다.' },
      { id: '2', content: '소와 관련된 다양한 용어를 가지고 있다.' },
      { id: '3', content: '자신들이 기르는 소의 이름으로 불리는 것을 선호한다.' },
      { id: '4', content: '가장 일반적인 일상 음식은 유제품이다.' },
      { id: '5', content: '어린 자녀의 수를 세는 것이 행운을 가져온다고 믿는다.' },
    ],
  },
  {
    id: '29',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'The role of science can sometimes be overstated, with its advocates slipping into scientism. Scientism is the view that the scientific description of reality is the only truth there is. With the advance of science, there has been a tendency to slip into scientism, and assume that any factual claim can be authenticated if and only if the term ‘scientific’ can correctly be ascribed to it. The consequence is that non-scientific approaches to reality ― and that can include all the arts, religion, and personal, emotional and value-laden ways of encountering the world ― may become labelled as merely subjective, and therefore of little ___________ in terms of describing the way the world is. The philosophy of science seeks to avoid crude scientism and get a balanced view on what the scientific method can and cannot achieve.',
      '* ascribe: 속하는 것으로 생각하다 ** crude: 투박한',
    ],
    choices: [
      { id: '1', content: 'question' },
      { id: '2', content: 'account' },
      { id: '3', content: 'controversy' },
      { id: '4', content: 'variation' },
      { id: '5', content: 'bias' },
    ],
  },
  {
    id: '30',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'The future of our high-tech goods may lie not in the limitations of our minds, but in_____________________ In previous eras, such as the Iron Age and the Bronze Age, the discovery of new elements brought forth seemingly unending numbers of new inventions. Now the combinations may truly be unending. We are now witnessing a fundamental shift in our resource demands. At no point in human history have we used more elements, in more combinations, and in increasingly refined amounts. Our ingenuity will soon outpace our material supplies. This situation comes at a defining moment when the world is struggling to reduce its reliance on fossil fuels. Fortunately, rare metals are key ingredients in green technologies such as electric cars, wind turbines, and solar panels. They help to convert free natural resources like the sun and wind into the power that fuels our lives. But without increasing today’s limited supplies, we have no chance of developing the alternative green technologies we need to slow climate change.',
      '* ingenuity: 창의력',
    ],
    choices: [
      { id: '1', content: 'the constant update and improvement of their functions' },
      { id: '2', content: 'our effort to make them as eco-friendly as possible' },
      { id: '3', content: 'the wider distribution of innovative technologies' },
      { id: '4', content: 'governmental policies not to limit resource supplies' },
      { id: '5', content: 'our ability to secure the ingredients to produce them' },
    ],
  },
  {
    id: '31',
    title: '다음 글에 드러난 ‘I’의 심경 변화로 가장 적절한 것은?',
    contents: [
      'Once again, I had lost the piano contest to my friend. When I learned that Linda had won, I was deeply troubled and unhappy. My body was shaking with uneasiness. My heart beat quickly and my face became reddish. I had to run out of the concert hall to settle down. Sitting on the stairs alone, I recalled what my teacher had said. “Life is about winning, not necessarily about winning against others but winning at being you. And the way to win is to figure out who you are and do your best.” He was absolutely right. I had no reason to oppose my friend. Instead, I should focus on myself and my own improvement. I breathed out slowly. My hands were steady now. At last, my mind was at peace.',
    ],
    choices: [
      { id: '1', content: 'upset → calm' },
      { id: '2', content: 'grateful → sorrowful' },
      { id: '3', content: 'envious → doubtful' },
      { id: '4', content: 'surprised → disappointed' },
      { id: '5', content: 'bored → relieved' },
    ],
  },
  {
    id: '32',
    title: '다음 글에서 필자가 주장하는 바로 가장 적절한 것은?',
    contents: [
      'Developing expertise carries costs of its own. We can become experts in some areas, like speaking a language or knowing our favorite foods, simply by living our lives, but in many other domains expertise requires considerable training and effort. What’s more, expertise is domain specific. The expertise that we work hard to acquire in one domain will carry over only imperfectly to related ones, and not at all to unrelated ones. In the end, as much as we may want to become experts on everything in our lives, there simply isn’t enough time to do so. Even in areas where we could, it won’t necessarily be worth the effort. It’s clear that we should concentrate our own expertise on those domains of choice that are most common and/or important to our lives, and those we actively enjoy learning about and choosing from.',
    ],
    choices: [
      { id: '1', content: '전문성 함양에는 타고난 재능보다 노력과 훈련이 중요하다.' },
      { id: '2', content: '자신에게 의미 있는 영역을 정해서 전문성을 키워야 한다.' },
      { id: '3', content: '전문성을 기르기 위해서는 구체적인 계획과 실천이 필수적이다.' },
      { id: '4', content: '전문가는 일의 우선순위를 결정해서 업무를 수행해야 한다.' },
      { id: '5', content: '전문가가 되기 위해서는 다양한 분야에 관심을 가져야 한다.' },
    ],
  },
  {
    id: '33',
    title: '다음 글의 주제로 가장 적절한 것은?',
    contents: [
      'Difficulties arise when we do not think of people and machines as collaborative systems, but assign whatever tasks can be automated to the machines and leave the rest to people. This ends up requiring people to behave in machine-like fashion, in ways that differ from human capabilities. We expect people to monitor machines, which means keeping alert for long periods, something we are bad at. We require people to do repeated operations with the extreme precision and accuracy required by machines, again something we are not good at. When we divide up the machine and human components of a task in this way, we fail to take advantage of human strengths and capabilities but instead rely upon areas where we are genetically, biologically unsuited. Yet, when people fail, they are blamed.',
    ],
    choices: [
      { id: '1', content: 'difficulties of overcoming human weaknesses to avoid failure' },
      { id: '2', content: 'issues of allocating unfit tasks to humans in automated systems' },
      { id: '3', content: 'benefits of allowing machines and humans to work together' },
      { id: '4', content: 'reasons why humans continue to pursue machine automation' },
      { id: '5', content: 'influences of human actions on a machine’s performance' },
    ],
  },
  {
    id: '34',
    title: '다음 글의 요지로 가장 적절한 것은?',
    contents: [
      'Prior to file-sharing services, music albums landed exclusively in the hands of music critics before their release. These critics would listen to them well before the general public could and preview them for the rest of the world in their reviews. Once the internet made music easily accessible and allowed even advanced releases to spread through online social networks, availability of new music became democratized, which meant critics no longer had unique access. That is, critics and laypeople alike could obtain new music simultaneously. Social media services also enabled people to publicize their views on new songs, list their new favorite bands in their social media bios, and argue over new music endlessly on message boards. The result was that critics now could access the opinions of the masses on a particular album before writing their reviews. Thus, instead of music reviews guiding popular opinion toward art (as they did in preinternet times), music reviews began to reflect― consciously or subconsciously ―public opinion.',
      '* laypeople: 비전문가',
    ],
    choices: [
      { id: '1', content: '미디어 환경의 변화로 음악 비평이 대중의 영향을 받게 되었다.' },
      { id: '2', content: '인터넷의 발달로 다양한 장르의 음악을 접하는 것이 가능해졌다.' },
      { id: '3', content: '비평가의 음악 비평은 자신의 주관적인 경험을 기반으로 한다.' },
      { id: '4', content: '오늘날 새로운 음악은 대중의 기호를 확인한 후에 공개된다' },
      { id: '5', content: '온라인 환경의 대두로 음악 비평의 질이 전반적으로 상승하였다.' },
    ],
  },
  {
    id: '35',
    title: '다음 글의 제목으로 가장 적절한 것은?',
    contents: [
      'People don’t usually think of touch as a temporal phenomenon, but it is every bit as time-based as it is spatial. You can carry out an experiment to see for yourself. Ask a friend to cup his hand, palm face up, and close his eyes. Place a small ordinary object in his palm ― a ring, an eraser, anything will do ― and ask him to identify it without moving any part of his hand. He won’t have a clue other than weight and maybe overall size. Then tell him to keep his eyes closed and move his fingers over the object. He’ll most likely identify it at once. By allowing the fingers to move, you’ve added time to the sensory perception of touch. There’s a direct analogy between the fovea at the center of your retina and your fingertips, both of which have high acuity. Your ability to make complex use of touch, such as buttoning your shirt or unlocking your front door in the dark, depends on continuous time-varying patterns of touch sensation.',
      '* analogy: 유사 ** fovea: (망막의) 중심와(窩) *** retina: 망막',
    ],
    choices: [
      { id: '1', content: 'Touch and Movement: Two Major Elements of Humanity' },
      { id: '2', content: 'The Role of Touch in Forming the Concept of Time' },
      { id: '3', content: 'Time Does Matter: A Hidden Essence of Touch' },
      { id: '4', content: 'How to Use the Five Senses in a Timely Manner' },
      { id: '5', content: 'The Surprising Function of Touch as a Booster of Knowledge' },
    ],
  },
  {
    id: '36',
    title: 'Frank Hyneman Knight에 관한 다음 글의 내용과 일치하지 않는 것은?',
    contents: [
      'Frank Hyneman Knight was one of the most influential economists of the twentieth century. After obtaining his Ph.D. in 1916 at Cornell University, Knight taught at Cornell, the University of Iowa, and the University of Chicago. Knight spent most of his career at the University of Chicago. Some of his students at Chicago later received the Nobel Prize. Knight is known as the author of the book Risk, Uncertainty and Profit, a study of the role of the entrepreneur in economic life. He also wrote a brief introduction to economics entitled The Economic Organization, which became a classic of microeconomic theory. But Knight was much more than an economist; he was also a social philosopher. Later in his career, Knight developed his theories of freedom, democracy, and ethics. After retiring in 1952, Knight remained active in teaching and writing.',
      '* entrepreneur: 기업가',
    ],
    choices: [
      { id: '1', content: '20세기의 가장 영향력 있는 경제학자들 중 한 명이었다.' },
      { id: '2', content: '경력의 대부분을 University of Chicago에서 보냈다.' },
      { id: '3', content: '그의 학생들 중 몇 명은 나중에 노벨상을 받았다.' },
      { id: '4', content: 'Risk, Uncertainty and Profit의 저자로 알려져 있다.' },
      { id: '5', content: '은퇴 후에는 가르치는 일은 하지 않고 글 쓰는 일에 전념했다.' },
    ],
  },
  {
    id: '37',
    title: '다음 글의 괄호 부분 중, 어법상 틀린 것은? ',
    contents: [
      'Regulations covering scientific experiments on human subjects are strict. Subjects must give their informed, written consent, and experimenters must submit their proposed experiments to thorough examination by overseeing bodies. Scientists who experiment on themselves can, functionally if not legally, avoid the restrictions ① ( associated ) with experimenting on other people. They can also sidestep most of the ethical issues involved: nobody, presumably, is more aware of an experiment’s potential hazards than the scientist who devised ② ( it ). Nonetheless, experimenting on oneself remains ③ ( deeply ) problematic. One obvious drawback is the danger involved; knowing that it exists ④ ( does ) nothing to reduce it. A less obvious drawback is the limited range of data that the experiment can generate. Human anatomy and physiology vary, in small but significant ways, according to gender, age, lifestyle, and other factors. Experimental results derived from a single subject are, therefore, of limited value; there is no way to know ⑤ ( what ) the subject’s responses are typical or atypical of the response of humans as a group.',
      '* consent: 동의 ** anatomy: (해부학적) 구조',
      '*** physiology: 생리적 현상',
    ],
    choices: [
      { id: '1', content: 'associated' },
      { id: '2', content: 'it' },
      { id: '3', content: 'deeply' },
      { id: '4', content: 'does' },
      { id: '5', content: 'what' },
    ],
  },
  {
    id: '38',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'In the classic model of the Sumerian economy, the temple functioned as an administrative authority governing commodity production, collection, and redistribution. The discovery of administrative tablets from the temple complexes at Uruk suggests that token use and consequently writing evolved as a tool of centralized economic governance. Given the lack of archaeological evidence from Uruk-period domestic sites, it is not clear whether individuals also used the system for  ________________. For that matter, it is not clear how widespread literacy was at its beginnings. The use of identifiable symbols and pictograms on the early tablets is consistent with administrators needing a lexicon that was mutually intelligible by literate and nonliterate parties. As cuneiform script became more abstract, literacy must have become increasingly important to ensure one understood what he or she had agreed to.',
      '* archaeological: 고고학적인 ** lexicon: 어휘 목록',
      '*** cuneiform script: 쐐기 문자',
    ],
    choices: [
      { id: '1', content: 'religious events' },
      { id: '2', content: 'personal agreements' },
      { id: '3', content: 'communal responsibilities' },
      { id: '4', content: 'historical records' },
      { id: '5', content: 'power shifts' },
    ],
  },
  {
    id: '39',
    title: '다음 글의 괄호 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
    contents: [
      'How the bandwagon effect occurs is demonstrated by the history of measurements of the speed of light. Because this speed is the basis of the theory of relativity, it’s one of the most frequently and carefully measured ① ( quantities ) in science. As far as we know, the speed hasn’t changed over time. However, from 1870 to 1900, all the experiments found speeds that were too high. Then, from 1900 to 1950, the ② ( opposite ) happened ― all the experiments found speeds that were too low! This kind of error, where results are always on one side of the real value, is called “bias.” It probably happened because over time, experimenters subconsciously adjusted their results to ③ ( match ) what they expected to find. If a result fit what they expected, they kept it. If a result didn’t fit, they threw it out. They weren’t being intentionally dishonest, just ④ ( influenced ) by the conventional wisdom. The pattern only changed when someone ⑤ ( lacked ) the courage to report what was actually measured instead of what was expected.',
      '* bandwagon effect: 편승 효과',
    ],
    choices: [
      { id: '1', content: 'quantities' },
      { id: '2', content: 'opposite' },
      { id: '3', content: 'match' },
      { id: '4', content: 'influenced' },
      { id: '5', content: 'lacked' },
    ],
  },
  {
    id: '40',
    title: '다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.',
    contents: [
      'Thanks to newly developed neuroimaging technology, we now have access to the specific brain changes that occur during learning. Even though all of our brains contain the same basic structures, our neural networks are as unique as our fingerprints. The latest developmental neuroscience research has shown that the brain is much more malleable throughout life than previously assumed; it develops in response to its own processes, to its immediate and distant “environments,” and to its past and current situations. The brain seeks to create meaning through establishing or refining existing neural networks. When we learn a new fact or skill, our neurons communicate to form networks of connected information. Using this knowledge or skill results in structural changes to allow similar future impulses to travel more quickly and efficiently than others. High-activity synaptic connections are stabilized and strengthened, while connections with relatively low use are weakened and eventually pruned. In this way, our brains are ______________________________________.',
      '* malleable: 순응성이 있는 ** prune: 잘라 내다',
    ],
    choices: [
      { id: '1', content: 'designed to maintain their initial structures' },
      { id: '2', content: 'sculpted by our own history of experiences' },
      { id: '3', content: 'geared toward strengthening recent memories' },
      { id: '4', content: 'twinned with the development of other organs' },
      { id: '5', content: 'portrayed as the seat of logical and creative thinking' },
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
