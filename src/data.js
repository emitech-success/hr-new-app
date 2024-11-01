import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';



export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'Home',

  },
  {
    id: 2,
    href: '#about',
    text: 'about',

  },
  {
    id: 3,
    href: '#services',
    text: 'services',

  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',

  },
]

export const socialLinks =[
  {id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  {id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  {id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
]

export const services= [
  {id: 1, icon: "fas fa-wallet fa-fw", title: "saving money", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
  {id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."},
  {id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."}
]

export const featuredTour=[
  {id:1, img: tour1, date: "august 26th, 2020", title: 'Tibet Adventure', duration: "6 days", amount: "from $2100", location: 'china'},
  {id:2, img: tour2, date: "october 1th, 2020", title: 'best of java', duration: "11 days", amount: "$1400", location: 'hong kong'},
  {id:3, img: tour3, date: "september 15th, 2020", title: 'explore hong kong', duration: "8 days", amount: "from $5000", location: 'kenya'},
]