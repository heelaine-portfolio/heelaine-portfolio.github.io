// Media item shape:
// { type: 'video'|'image', src, width, height, alt, linkUrl? }
//
// Cards with multiple images use an array: media: [ {...}, {...} ]
// Cards with a single item use an object:  media: { ... }
// Components should normalise with: const mediaItems = [].concat(media)


export const dataviz = [
  {
    org: 'Bloomberg',
    title: 'How the U.S. Lost the Solar Power Race to China',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-how-us-lost-solar-power-race-to-china',
    desc: "Winning a SOPA Award for Excellence, which cited the “compelling use of data,” this deeply reported feature by David Fickling explored how China came to control 90% of the solar market.",
    media: {
      type: 'video',
      align: '0% 80%',
      sources: {
        mobile: '/assets/videos/bbo-china-solar-520.mp4',
        desktop: '/assets/videos/bbo-china-solar-680.mp4'
      },
      posters: {
        mobile: '/assets/images/bbo-china-solar-poster-520.webp',
        desktop: '/assets/images/bbo-china-solar-poster-680.webp'
      },
      width: '680',
      height: '654',
      alt: 'Video featuring an interactive graphic showing polysilicon cost and production capacity from 2013 to 2017 by Chinese and non-Chinese manufacturers. Polysilicon is a key raw material for producing solar panels and the connected scatterplot demonstrates how Chinese manufacturers increase capacity and reduce cost, significantly out competing other makers.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'Covid Pushed Global Interest Rates Beyond Normal Bounds',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-rate-cuts-covid-inflation-central-banks/',
    desc: "Tracked the world’s perilous journey out of the most far-reaching inflation and rates turmoil in decades.",
    media: {
      type: 'video',
      align: '0% 40%',
      sources: {
        mobile:  '/assets/videos/bbo-central-banks-520.mp4',
        desktop: '/assets/videos/bbo-central-banks-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-central-banks-poster-520.webp',
        desktop: '/assets/images/bbo-central-banks-poster-680.webp'
      },
      width: '680',
      height: '706',
      alt: "Video featuring an interactive graphic showing interest rates by country and how they compare with their prior 10-year norm. Rates are near normal before the Covid pandemic; inflation and Russia’s invasion of Ukraine in 2022 push rates higher; by 2023, rates in emerging markets begin descending, while developed nations keep their rates higher for longer."
    }
  },

  {
    org: 'Bloomberg',
    title: 'Biden Is Giving Red Districts an Inconvenient Gift: Green Jobs',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-biden-ira-sends-green-energy-investment-republican-districts',
    desc: "Visualized the distribution of Biden’s cleantech investments, which mostly went to Republican districts where lawmakers all voted against the funding.",
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-biden-ira-520.mp4',
        desktop: '/assets/videos/bbo-biden-ira-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-biden-ira-poster-520.webp',
        desktop: '/assets/images/bbo-biden-ira-poster-680.webp'
      },
      width: '680',
      height: '672',
      alt: "Video featuring an interactive graphic showing the distribution of Biden’s cleantech investments by state and vote margin. Every Republican lawmaker voted against the policy, but their districts receive the majority of funding."
    }
  },

  {
    org: 'Bloomberg',
    title: "Apple’s Supply Chain Is on a Collision Course With Climate Change",
    url: 'https://www.bloomberg.com/graphics/2023-opinion-apple-supply-chain-climate-change/',
    desc: "Analyzed Apple’s supplier reports and found that its manufacturing facilities are concentrated in regions most vulnerable to climate change.",
    media: {
      type: 'video',
      align: 'top',
      sources: {
        mobile:  '/assets/videos/bbo-apple-climate-520.mp4',
        desktop: '/assets/videos/bbo-apple-climate-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-apple-climate-poster-520.webp',
        desktop: '/assets/images/bbo-apple-climate-poster-680.webp'
      },
      width: '680',
      height: '714',
      alt: "Video featuring a data-driven column on Apple’s vulnerabilities to climate change."
    }
  },

  {
    org: 'Bloomberg',
    title: 'How Abortion Restrictions Wreak Havoc Across 50 States and 42 Weeks of Pregnancy',
    url: 'https://www.bloomberg.com/graphics/2022-opinion-abortion-maps-by-state-and-pregnancy-week',
    desc: 'Illustrated the intersection of biology and policy by connecting pregnancy milestones to abortion access after the overturning of Roe v. Wade.',
    media: {
      type: 'video',
      align: 'top',
      sources: {
        mobile: '/assets/videos/bbo-abortion-520.mp4',
        desktop: '/assets/videos/bbo-abortion-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-abortion-poster-520.webp',
        desktop: '/assets/images/bbo-abortion-poster-680.webp'
      },
      width: '680',
      height: '664',
      alt: 'Video featuring interactive graphic showing pregnancy milestones by week and abortion access by state. Abortion is banned in nearly half U.S. states by 22 weeks (as of 2022), while the earliest possible viability for most fetuses is 24 weeks.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'The Sports Gambling Gold Rush Is Absolutely Off the Charts',
    url: 'https://www.bloomberg.com/graphics/2021-opinion-online-sports-betting-future-of-american-gambling',
    desc: 'Followed the explosion of sports betting by state, platform and partnerships, and showed how activities once seen as vices are taking root everywhere.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-sports-betting-520.mp4',
        desktop: '/assets/videos/bbo-sports-betting-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-sports-betting-poster-520.webp',
        desktop: '/assets/images/bbo-sports-betting-poster-680.webp'
      },
      width: '680',
      height: '620',
      alt: 'Video featuring a data-driven column on sports betting, with charts showing the rise of mobile betting over time and a network diagram of gambling companies and their partnerships with sports teams, media companies and celebrities.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'Can the Southwest Survive With Less Water?',
    url: 'https://www.bloomberg.com/graphics/2021-opinion-us-drought-southwest-arizona-water-crisis/',
    desc: 'Compiled historical satellite images to create an animated graphic showing the depletion of an important water source.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-lake-mead-hero-520.mp4',
        desktop: '/assets/videos/bbo-lake-mead-hero-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-lake-mead-hero-poster-520.webp',
        desktop: '/assets/images/bbo-lake-mead-hero-poster-680.webp'
      },
      width: '680',
      height: '510',
      alt: 'Animation of satellite images of Lake Mead from 1985 to 2020. A white outline traces the extent of Lake Mead in 1985. Over time, the blue waters of the lake shrinks from the outline, leading to a much drier lake by 2020.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'When the Electric Car Is King, Less Energy Is More',
    url: 'https://www.bloomberg.com/graphics/2021-opinion-renewables-will-power-future-of-us-energy',
    desc: "Modeled, simplified and synthesized industry-familiar data from the Lawrence Livermore National Laboratory to illuminate U.S.’s energy future from a fresh angle.",
    media: {
      type: 'image',
      sources: {
        mobile: '/assets/images/bbo-ev-energy-2030-520.webp',
        tablet: '/assets/images/bbo-ev-energy-2030-680.webp',
        desktop: '/assets/images/bbo-ev-energy-2030.webp'
      },
      width: '680',
      height: '1591',
      alt: 'An edited and redesigned Sankey diagram showing increased efficiency if the energy mix was changed to prioritize solar.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'Genetic Clues for Tracing Covid-19 Transmission',
    url: 'https://www.bloomberg.com/graphics/2020-opinion-chan-zuckerberg-biohub-covid-tracing',
    desc: 'For a series of dispatches by Michael Lewis, worked with researchers to translate their scientific data for a lay audience.',
    media: {
      type: 'image',
      align: 'top',
      sources: {
        mobile: '/assets/images/bbo-covid-tracing1-520.webp',
        tablet: '/assets/images/bbo-covid-tracing1-680.webp',
        desktop: '/assets/images/bbo-covid-tracing1.webp'
      },
      width: '680',
      height: '555',
      alt: 'An edited and redesigned cladogram showing Covid transmissions and virus mutations, annotated with descriptions of how viral relationships can offer clues for contact tracing.'
    }
  },

  {
    org: 'Bloomberg',
    title: "The Results of Europe’s Lockdown Experiment Are In",
    url: 'https://www.bloomberg.com/graphics/2020-opinion-coronavirus-europe-lockdown-excess-deaths-recession/',
    desc: 'Analyzed government responses to Covid restrictions and their impact on infection rates and economies.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-europe-lockdown-520.mp4',
        desktop: '/assets/videos/bbo-europe-lockdown-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-europe-lockdown-poster-520.webp',
        desktop: '/assets/images/bbo-europe-lockdown-poster-680.webp'
      },
      width: '680',
      height: '802',
      alt: 'Video featuring a data-driven column on the early responses by European governments to the Covid pandemic, with charts showing case loads, mortality rates and stringency levels, as well as the economic pain from harsher responses.'
    }
  },

  {
    org: 'The Wall Street Journal',
    title: null,
    url: null,
    desc: 'Employed small multiples of drought maps to trace the recovery of the beef market for the front of the Money & Investing section.',
    media: {
      type: 'image',
      align: 'top',
      sources: {
        mobile: '/assets/images/wsj-beef-520.webp',
        tablet: '/assets/images/wsj-beef-680.webp',
        desktop: '/assets/images/wsj-beef.webp'
      },
      width: '680',
      height: '624',
      padding: '0.5rem',
      bg: 'white',
      alt: 'A photo strip of cattle sits atop a graphic. The graphic illustrates intensifying, then abating drought conditions in ranching states from 2010 to 2015 using multiple drought maps.'
    }
  },

  {
    org: 'The New York Times',
    title: 'Tracking the $700 Billion Bailout',
    url: 'https://archive.nytimes.com/www.nytimes.com/packages/html/national/200904_CREDITCRISIS/recipients.html',
    desc: 'With the largest government rescue of the financial sector in U.S. history, built a database tracing where the money was going.',
    media: {
      type: 'image',
      sources: {
        mobile: '/assets/images/nyt-tarp-520.webp',
        tablet: '/assets/images/nyt-tarp-680.webp',
        desktop: '/assets/images/nyt-tarp.webp'
      },
      width: '680',
      height: '443',
      padding: '0.5rem',
      bg: 'white',
      alt: 'Image from an interactive table listing recipients of the TARP bailout and the amounts they received, with a stacked bar chart summarizing total funds committed by sector.'
    }
  },

  {
    org: 'The New York Times',
    title: 'Looking for Swing Votes in the Boardroom',
    url: 'https://www.nytimes.com/2008/08/17/us/politics/17cabinet.html/',
    desc: 'For the front of the Sunday Business section, created graphic with qualitative information revealing the spheres of influence on presidential candidates.',
    media: {
      type: 'image',
      sources: {
        mobile: '/assets/images/nyt-cabinet-520.webp',
        tablet: '/assets/images/nyt-cabinet-680.webp',
        desktop: '/assets/images/nyt-cabinet.webp'
      },
      width: '680',
      height: '377',
      padding: '0.5rem 0',
      bg: 'white',
      alt: 'Photo illustration showing cutouts of Barack Obama and John McCain, along with influential business people who are supporting their campaigns.'
    }
  },

  {
    org: 'The New York Times',
    title: 'A Vanishing Way of Life',
    url: 'https://archive.nytimes.com/www.nytimes.com/imagepages/2008/07/23/arts/hutong-map.html',
    desc: "On the cusp of hosting its first Olympics, this map located and starkly quantified Beijing’s demolition (and renewal) of its traditional residential fabric in a “substantial slum-clearance program.”",
    media: {
      type: 'image',
      sources: {
        mobile: '/assets/images/nyt-hutongs-520.webp',
        tablet: '/assets/images/nyt-hutongs-680.webp',
        desktop: '/assets/images/nyt-hutongs.webp'
      },
      width: '680',
      height: '464',
      padding: '0.5rem',
      bg: 'white',
      alt: 'Map of Beijing with demolished hutongs outlined in red. The red lines cover about 20% to 25% of the map and are concentrated on the eastern and western margins of the city. Two satellite inset images show how a neighborhood has changed from 2000 to 2008.'
    }
  }
];


export const motion = [
  {
    org: 'Bloomberg',
    title: "Central Banks Started a Rates Descent They Can’t Finish",
    url: 'https://www.bloomberg.com/opinion/features/2024-12-19/fed-cuts-2025-central-banks-began-a-descent-they-can-t-finish',
    desc: 'Photo illustration for column examining how central banks seem to be navigating a mesa with high interest rates and occasional plateaus punctuated by cliffs.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-fed-rates-hero-520.mp4',
        desktop: '/assets/videos/bbo-fed-rates-hero-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-fed-rates-hero-poster-520.webp',
        desktop: '/assets/images/bbo-fed-rates-hero-poster-680.webp'
      },
      width: '681',
      height: '454',
      alt: 'Black and white photograph of a desert landscape specked with trees, brush and mesas against an expansive sky. Three percentage symbols in blue animate from the left side of the frame to the right. They roll over the top of the central mesa like tumbleweeds.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'What Have Biden and Harris Accomplished? Look at These 10 Metrics',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-biden-harris-accomplishment-data/',
    desc: 'During the heat of the 2024 presidential race, photo illustration for an analysis of how the Biden administration — and by extension, Harris — have performed on measures such as job creation, health care and crime.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-biden-harris-hero-320mp4',
        desktop: '/assets/videos/bbo-biden-harris-hero-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-biden-harris-hero-poster-520.webp',
        desktop: '/assets/images/bbo-biden-harris-hero-poster-680.webp'
      },
      width: '680',
      height: '454',
      alt: "Photo animation showing a cutout of Kamala Harris standing next to Joe Biden. The image is in tritones of blue, black and white. Their hands are in mid wave. In the background, a tritone image of Donald Trump’s head in red, black and white appears from the bottom of the screen. He is smiling. It grows larger than the frame and stops when only his neck, collar and tie knot are visible."
    }
  },

  {
    org: 'Bloomberg',
    title: 'An Opinionated Guide to Big, Fat, Green Weddings',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-how-to-plan-green-wedding-carbon-footprint-calculator/',
    desc: 'Edited and animated illustrations by Lara Williams for a feature on planning planet-friendly weddings.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-green-weddings-hero-520.mp4',
        desktop: '/assets/videos/bbo-green-weddings-hero-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-green-weddings-hero-poster-520.webp',
        desktop: '/assets/images/bbo-green-weddings-hero-poster-680.webp'
      },
      width: '680',
      height: '544',
      alt: 'Animated illustration showing two entwined hearts constructed from green leaves in the background. A cake iced in cream and pink ribbons appear and stack until there are three tiers. Blue, cream and pink confetti appears and fall from the top of the frame to the base of the cake.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'Biden Is Giving Red Districts an Inconvenient Gift: Green Jobs',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-biden-ira-sends-green-energy-investment-republican-districts/',
    desc: 'Animated graphic tallying the distribution of $200 billion in cleantech investments by congressional district and political party.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-biden-ira-hero-520.mp4',
        desktop: '/assets/videos/bbo-biden-ira-hero-680.mp4'
      },
      posters: {
        mobile: '/assets/images/bbo-biden-ira-hero-poster-520.webp',
        deskto: '/assets/images/bbo-biden-ira-hero-poster-680.webp'
      },
      width: '680',
      height: '680',
      alt: 'Animated chart showing bubbles filling a circle. Each bubble represents one congressional district. It is colored by political party and sized by the amount of cleantech funds invested. There is a tally at the top showing total funds received by Democratic and Republican districts.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'What Has Biden Accomplished? Look at These 10 Metrics, Not the Polls',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-biden-accomplishment-data/',
    desc: "Photo illustration for a data-led column taking stock of Biden’s performance amid an electoral challenge by Trump.",
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-biden-hero-520.mp4',
        desktop: '/assets/videos/bbo-biden-hero-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-biden-hero-poster-520.webp',
        deskotp: '/assets/images/bbo-biden-hero-poster-680.webp'
      },
      width: '681',
      height: '454',
      alt: "Animation showing a photo of Joe Biden in tritones of blue, black and white. He is smiling and looking into the distance. Dozens and dozens of cutouts of Donald Trump’s head in tritones of red, black and white fill the entire frame, covering Biden. Some of the heads move to reveal the smiling Joe Biden again and eventually disperse completely."
    }
  },

  {
    org: 'Bloomberg',
    title: "Confused About Masking? It’s Time to Get Tactical",
    url: 'https://www.bloomberg.com/graphics/2021-opinion-how-to-wear-face-mask-tactically-best-covid-protection/',
    desc: 'Produced video collage (edited by Ale Lampietti) for a column on research-based best masking practices.',
    media: {
      type: 'video',
      align: 'bottom',
      sources: {
        mobile:  '/assets/videos/bbo-masking-hero-520.mp4',
        desktop: '/assets/videos/bbo-masking-hero-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-masking-hero-poster-520.webp',
        desktop: '/assets/images/bbo-masking-hero-poster-680.webp'
      },
      width: '680',
      height: '776',
      alt: 'Video in three side-by-side panels showing the same woman putting on three kinds of masks.'
    }
  }
];


export const production = [
  {
    org: 'Bloomberg',
    title: 'An Opinionated Guide to Big, Fat, Green Weddings',
    url: 'https://www.bloomberg.com/graphics/2024-opinion-how-to-plan-green-wedding-carbon-footprint-calculator/',
    desc: 'Feature examining the trade-offs for throwing a planet-friendly nuptial celebration, with videos and a quiz elaborating on carbon footprint scenarios.',
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-green-weddings-520.mp4',
        desktop: '/assets/videos/bbo-green-weddings-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-green-weddings-poster-520.webp',
        desktop: '/assets/images/bbo-green-weddings-poster-680.webp'
      },
      width: '680',
      height: '492',
      alt: 'Video featuring a column on the carbon footprints of weddings. An interactive quiz with questions embedded throughout the piece explore the trade-offs of various options, from venues and menus to flowers and attire.'
    }
  },

  {
    org: 'Bloomberg',
    title: "Google Can’t Catch All the AI Images. Can You?",
    url: 'https://www.bloomberg.com/graphics/2023-opinion-google-ai-images-quiz/',
    desc: 'Designed quiz for readers to test their AI savvy when it comes to spotting fakes.',
    media: {
      type: 'image',
      sources: {
        mobile: '/assets/images/bbo-ai-quiz-520.webp',
        tablet: '/assets/images/bbo-ai-quiz-680.webp',
        desktop:'/assets/images/bbo-ai-quiz-860.webp'
      },
      width: '680',
      height: '353',
      alt: 'Column on telling AI generated images apart from photographs, including a quiz that asks readers to guess which images of famous people and artworks are AI and which ones are real.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'Magnetic North',
    url: 'https://www.bloomberg.com/graphics/2023-opinion-arctic-geopolitics-resources/army-training.html',
    desc: "Series on how climate change and geopolitics are reshaping the Arctic’s strategic landscape, for which Liam Denning won a SABEW award for commentary.",
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-arctic-army-520.mp4',
        desktop: '/assets/videos/bbo-arctic-army-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-arctic-army-poster-520.webp',
        desktop: '/assets/images/bbo-arctic-army-poster-680.webp'
      },
      width: '680',
      height: '462',
      alt: "Video featuring a column on the U.S.’s military preparedness in the Arctic, illustrated with photos, maps and graphics."
    }
  },

  {
    org: 'Bloomberg',
    title: '50 States, 50 Startups',
    url: 'https://www.bloomberg.com/features/2022-opinion-50-states-50-startups/',
    desc: 'Vignettes spotlighting the entrepreneurial spirit of small business owners from across the U.S.',
    media: {
      type: 'video',
      align: 'top',
      sources: {
        mobile: '/assets/videos/bbo-small-business-520.mp4',
        desktop: '/assets/videos/bbo-small-business-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-small-business-poster-520.webp',
        desktop: '/assets/images/bbo-small-business-poster-680.webp'
      },
      width: '680',
      height: '572',
      alt: 'Video featuring a column profiling small businesses. The main image is a cartogram of the U.S. with a description of the enterprise in each rectangular shape.'
    }
  },

  {
    org: 'Bloomberg',
    title: 'Americans, Can You Answer These Questions?',
    url: 'https://www.bloomberg.com/graphics/2021-opinion-american-history-1940s-citizenship-interactive-quiz/',
    desc: "Illustrated David Shipley’s personal essay on the meaning of citizenship with edited photos of the notes his grandfather used to study for his exam in the 1940s.",
    media: {
      type: 'image',
      sources: {
        mobile: '/assets/images/bbo-citizenship-520.webp',
        tablet: '/assets/images/bbo-citizenship-680.webp',
        desktop: '/assets/images/bbo-citizenship.webp'
      },
      width: '680',
      height: '453',
      alt: 'Strips of paper, like ticker tape, from a yellowing document with questions about the functions and institutions of the U.S. government are arranged crisscross against a white background.'
    }
  },

  {
    org: 'Bloomberg',
    title: "Why I’m Losing Hope in India",
    url: 'https://www.bloomberg.com/graphics/2020-opinion-india-and-modi-are-losing-china-battle/',
    desc: "Lament by Andy Mukherjee for the opportunities slipping from India’s vast potential, with archival photos to contextualize the personal narrative.",
    media: {
      type: 'video',
      sources: {
        mobile: '/assets/videos/bbo-india-hope-520.mp4',
        desktop: '/assets/videos/bbo-india-hope-680.mp4'
      },
      posters: {
        mobile:  '/assets/images/bbo-india-hope-poster-520.webp',
        desktop: '/assets/images/bbo-india-hope-poster-680.webp'
      },
      width: '680',
      height: '516',
      alt: "Video featuring a column reflecting on India’s economic potential."
    }
  }
];