const homeContents = [
  {
    page: 'clones',
    title: 'Featured Clones',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    swiper: true,
    imgURLs: [
      'img/bg.jpg',
      'img/bg.jpg',
      'img/bg.jpg',
      'img/bg.jpg',
      'img/bg.jpg',
      'img/bg.jpg',
    ],
  },
  {
    page: 'premiums',
    title: 'Trending Now',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    swiper: false,
    imgURLs: [
      'img/bg.jpg',
      'img/bg.jpg',
      'img/bg.jpg',
      'img/bg.jpg',
      'img/bg.jpg',
    ],
  },
  {
    page: 'seeds',
    title: 'Popular Seeds',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    swiper: false,
    imgURLs: ['img/bg.jpg', 'img/bg.jpg', 'img/bg.jpg'],
  },
]

const headerContents = [
  {
    page: 'home',
    title: (
      <>
        Lorem <span>ipsum</span> dolor sit amet.
      </>
    ),
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae a natus accusantium omnis cumque maxime!',
    btnPrimaryText: 'LEARN MORE',
    btnSecondaryText: 'VIEW REAL-TIME INVENTORY',
  },
  {
    page: 'clones',
    title: 'CLONES',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae a natus accusantium omnis cumque maxime, exercitationem explicabo eaque quo odit similique quibusdam! Ratione itaque modi ab id rerum ipsa.',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
  {
    page: 'premiums',
    title: 'PREMIUMS',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae a natus accusantium omnis cumque maxime, exercitationem explicabo eaque quo odit similique quibusdam! Ratione itaque modi ab id rerum ipsa.',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
  {
    page: 'seeds',
    title: 'SEEDS',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae a natus accusantium omnis cumque maxime, exercitationem explicabo eaque quo odit similique quibusdam! Ratione itaque modi ab id rerum ipsa.',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
  {
    page: 'coming',
    title: 'COMING SOON',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae a natus accusantium omnis cumque maxime, exercitationem explicabo eaque quo odit similique quibusdam! Ratione itaque modi ab id rerum ipsa.',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
]

export { homeContents, headerContents }
