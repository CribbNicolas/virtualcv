//LeftDrawer begin

export interface PersonalData {
  title: string,
  caption: string,
}

export interface LinkedData extends PersonalData {
  icon: string,
  link: string,
}

//LeftDrawer end
//KnowdledgeView begin

export interface CardComponent {
  name: string,
  desc: string,
  descAnimationTime: number,
  img: string,
  stars: number,
}

export interface KnowviewModel {
  title: {
    label: string,
    size: number,
  },
  cards: CardComponent[],
  color: {
    red: number,
    green: number,
    blue: number,
  }
}

// pdf

export interface PdfModDate {
  year: string,
  month: string,
  day: string,
}