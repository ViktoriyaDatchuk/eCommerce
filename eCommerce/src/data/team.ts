export interface TeamItem {
  image: string;
  name: string;
  role: string;
  github: string;
  description: string;
}

export const team: TeamItem[] = [
  {
    image: '/team/Anton.jpg',
    name: 'Anton Kuziukou',
    role: "Site's name creator",
    github: 'https://github.com/proboynick',
    description:
      '29 yo, currently PCB designer and scientific researcher. Genius, playboy, philanthropist, still not a billionaire. Form and Slow Loading tamer',
  },
  {
    image: '/team/Vika.jpg',
    name: 'Viktoryia Datchuk',
    role: 'Team Lead',
    github: 'https://github.com/viktoriyadatchuk',
    description:
      '35 yo. In past customs officer and licensing engineer, currently a florist, barista and junior front-end developer. Big Boss. Sweet on the outside, devil on the inside. Team organizer and encourager. API-creator, holder of the beast called Token, commander of  sliders.',
  },
  {
    image: '/team/Zhenia.png',
    name: 'Yauheni Jezhora',
    role: 'Commercetools conflict resolution specialist',
    github: 'https://github.com/jezhora',
    description:
      "Found out if the frontend exists after 39. Used to be a photographer, nowadays works as lead specialist in foreign economic activity. His future will bind with frontend development. Made App design despite of he've ever never touch to figma. If you are reading this message he has not defeated the 409 error. In youth drank with team lead.",
  },
];
