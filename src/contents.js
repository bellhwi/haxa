const homeContents = [
  {
    page: 'clones',
    title: 'Featured Clones',
    desc: "Explore our flagship genetics with breeder's choice.",
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
    desc: 'Experience our most compelling premiums in the industry.',
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
    desc: 'See our fine seeds that we are proudly recommend for you.',
    swiper: false,
    imgURLs: ['img/bg.jpg', 'img/bg.jpg', 'img/bg.jpg'],
  },
]

const headerContents = [
  {
    page: 'home',
    title: (
      <>
        Meet our <span>Authentic</span> Strains
      </>
    ),
    desc: 'We are committed to provide high-quality genetics. Our mission is to offer genuine representations of smell and flavor with the best cannabis.',
    btnSecondaryText: 'VIEW REAL-TIME INVENTORY',
  },
  {
    page: 'clones',
    title: 'CLONES',
    desc: 'Cannabis clones are cuttings from a live cannabis plant, which growers call the clone’s mother plant. Cannabis clones share the exact same genetics as their mother plant, hence the name “clones.” When planted and carefully tended, a clone can be grown into a fully mature marijuana plant that is genetically the same as its mother plant..',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
  {
    page: 'premiums',
    title: 'PREMIUMS',
    desc: 'While other flower tiers can provide a budget-friendly strain for cannabis cooking or first-time users, premium-grade flower tiers often feature award-winning strains, sealed packaging to preserve freshness, vibrant colors, dense nugs covered in trichomes, and a sticky and spongy consistency.',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
  {
    page: 'seeds',
    title: 'SEEDS',
    desc: 'Cannabis seeds are just what they sound like: seeds from a cannabis plant. Like other flowering plants, female cannabis plants can produce seeds that feature a variation of their own genetics. These ovular, peppercorn-sized seeds can be planted and grown into fully mature marijuana plants.',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
  {
    page: 'coming',
    title: 'COMING SOON',
    desc: 'We are currently preparing new genetics for the next generation.',
    btnPrimaryText: 'VIEW PRODUCTS',
  },
]

export { homeContents, headerContents }
