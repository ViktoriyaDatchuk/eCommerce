export interface TeamItem {
  image: string;
  name: string;
  role: string;
  github: string;
  bio: string;
  description: string;
}

export const team: TeamItem[] = [
  {
    image: '/team/Anton.jpg',
    name: 'Anton Kuziukou',
    role: "Site's name creator",
    github: 'https://github.com/proboynick',
    bio: 'Bla-bla-bla',
    description: 'Genius, playboy, philanthropist, still not a billionaire. Form and Slow Loading tamer',
  },
  {
    image: '/team/Vika.jpg',
    name: 'Viktoryia Datchuk',
    role: 'Team Lead',
    github: 'https://github.com/viktoriyadatchuk',
    bio: '35 years old. In past customs officer and licensing engineer. Currently a florist, barista and junior front-end developer.',
    description:
      'Big Boss. Sweet on the outside, devil on the inside. Team organizer and encourager. API-creator, holder of the beast called Token, commander of  sliders.',
  },
  {
    image: '/team/Zhenia.jpg',
    name: 'Yauheni Jezhora',
    role: 'Commercetools conflict resolution specialist',
    github: 'https://github.com/jezhora',
    bio: 'Bla-bla-bla',
    description: 'Bla-bla-bla',
  },
];
