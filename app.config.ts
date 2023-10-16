export default defineAppConfig({
  docus: {
    title: 'Explorex Documentation',

    description: 'ExploreX — Explore. Beyond Bounds.',

    url: 'https://example.com',

    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png',

    socials: {},

    layout: 'default',

    header: {
      title: '',
      logo: false,
      showLinkIcon: true,
      fluid: false,
      exclude: []
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    footer: {
      credits: {
        icon: '▝▟',
        text: '‎ ‎ ‎ ‎ Developed by PIXL Corporation',
        href: 'https://example.com'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },

    github: {
      dir: undefined,
      branch: undefined,
      repo: undefined,
      owner: undefined,
      edit: false
    },
  }
})
