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
    title: '밑줄 친 refining ignorance가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    contents: [
      'Although not the explicit goal, the best science can really be seen as refining ignorance. Scientists, especially young ones, can get too obsessed with results. Society helps them along in this mad chase. Big discoveries are covered in the press, show up on the university’s home page, help get grants, and make the case for promotions. But it’s wrong. Great scientists, the pioneers that we admire, are not concerned with results but with the next questions. The highly respected physicist Enrico Fermi told his students that an experiment that successfully proves a hypothesis is a measurement; one that doesn’t is a discovery. A discovery, an uncovering ― of new ignorance. The Nobel Prize, the pinnacle of scientific accomplishment, is awarded, not for a lifetime of scientific achievement, but for a single discovery, a result. Even the Nobel committee realizes in some way that this is not really in the scientific spirit, and their award citations commonly honor the discovery for having “opened a field up,” “transformed a field,” or “taken a field in new and unexpected directions.”',
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
