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
    imgURLs: ['img/bg.jpg', 'img/bg.jpg', 'img/bg.jpg', 'img/bg.jpg'],
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
    desc: "We're thrilled to announce that Haxa is in the process of expanding our product offerings and services to better meet the needs of our customers. Soon, we will be introducing new strains, edibles, tinctures, and topicals, all carefully selected for their quality, potency, and flavor. In addition, we will be launching a range of educational resources and community events designed to help people learn more about cannabis and its potential benefits. Our team is working hard to bring you the best possible experience, from our welcoming and knowledgeable staff to our state-of-the-art facilities and cutting-edge technology. So stay tuned for updates, follow us on social media, and get ready to discover a whole new world of cannabis with Haxa!",
    btnPrimaryText: 'VIEW PRODUCTS',
  },
  {
    page: 'about',
    title: (
      <>
        Elevating <span>Cannabis</span> Experience
      </>
    ),
    desc: "At Haxa, we are passionate about the potential of cannabis to enhance people's lives. We believe that cannabis can be a powerful tool for wellness, relaxation, and creativity, and we are dedicated to providing our customers with the highest-quality products and services to help them explore the benefits of this incredible plant.",
  },
]
const aboutContents = [
  {
    title: 'Quality',
    desc: 'We believe in providing our customers with only the highest-quality cannabis products. From our sourcing and cultivation practices to our rigorous testing standards, we are committed to delivering a premium experience that exceeds expectations.',
  },
  {
    title: 'Education',
    desc: 'We are dedicated to educating our customers about cannabis and its potential benefits. We believe that knowledge is power, and we strive to provide accurate, up-to-date information that empowers people to make informed decisions about their cannabis use.',
  },
  {
    title: 'Inclusivity',
    desc: 'We believe that everyone should have access to the benefits of cannabis, regardless of their background or experience. We are committed to creating a welcoming environment where all people feel safe and supported in exploring the potential of this incredible plant.',
  },
]
export { homeContents, headerContents, aboutContents }
