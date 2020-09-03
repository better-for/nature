export enum ActionStatus {
  Initial = 'init',
  Request = 'request',
  Success = 'success',
  Failure = 'fail'
}

export const LINK_LIST = [
  {
    link: '/blog',
    title: `BLOG`,
    // description: `How about looking for a better life on your eco-friendly blog?`,
    description: `Look around eco-friendly blogs!`
  }
];

export const DEFAULT_IMAGE_1 = `/static/logo.jpg`;
export const DEFAULT_IMAGE_2 = `/static/og_image.png`;
export const sun_image = `/static/sun.png`;
export const moon_image = `/static/moon.png`;
export const favicon = `/static/favicon.ico`;

export const ogHeader = {
  title: `Better for`,
  description: `SAVE THE WORLD, SAVE THE YOURSELF.`,
  image: DEFAULT_IMAGE_2
};

//example
// export const SAMPLE_DATA = [
//   {
//     link: 'https://yeun.github.io/open-color/',
//     h3: `Check color`,
//     p: `We have to find own symbolic color.`
//   },
//   {
//     link: 'https://www.iucn.org/',
//     h3: `Conserves nature`,
//     p: `A just world that values and conserves nature.`
//   },
//   {
//     link: 'https://css-tricks.com/',
//     h3: `Check css-tricks`,
//     p: `We can improve css skill!`
//   }
// ];

// export const ECO_FRIENDLY_BLOGS = [
//   {
//     title: 'Earth911',
//     url: 'https://earth911.com/',
//     image:
//       'https://23pxcp3u31lgiybw92v8rma1-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/logo.png',
//     description:
//       'deAt Earth911, We’ve Created A Community That Helps People Find Their Own Shade Of Green, Match Their Values To Their Purchase Behaviors, Adopt Environmentally Sound Practices And Drive Impactful Environmental Changes. We Are Dedicated To Increasing Recycling Rates And Helping You Choose Sustainable Options To Live A Happier, Healthier Lifestyle; One That Protects This Wonderful Planet We Call Earth.scription',
//     id: 0
//   },
//   {
//     title: 'Treehugger',
//     url: 'https://www.treehugger.com/',
//     image: null,
//     description:
//       'Local or organic? Hybrid or electric? Paper or plastic or neither? Nearly all decisions today affect the environment, and figuring out which choices matter most often feels impossible. That’s why we made Treehugger, the only modern sustainability site that offers advice, clarity, and inspiration for both the eco-savvy and the green living novice. With more than 120 million readers each year, Treehugger is the world’s largest information site dedicated to driving sustainability mainstream.',
//     id: 1
//   },
//   {
//     title: 'ecocult',
//     url: 'https://ecocult.com/',
//     image:
//       'https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://ecocult.com/wp-content/themes/AF-Theme-Ecocult/Images/Logo-Header.png',
//     description:
//       'EcoCult is a curious, thoughtful, science-based view into the international sustainable fashion industry.',
//     id: 2
//   },
//   {
//     title: 'eco warrior princess',
//     url: 'https://ecowarriorprincess.net/',
//     image:
//       'https://1yjob743ilegfihp83lnmdm1-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/logo.png',
//     description:
//       'Eco Warrior Princess is a media brand that is redefining what it means to live green. Founded in 2010 by Jennifer Nini a writer, activist and certified organic farm owner, Eco Warrior Princess covers the topics that matter — environmental issues, conservation, sustainable fashion, conscious business, social justice, politics, feminism, eco beauty, wellness, green technology — in an analytical, intelligent and honest way – without any of the BS. Eco Warrior Princess isn’t just a platform. Or even a publication. It’s a media business and a community of clever, stylish, discerning people who want to be part of the solution, not part of the problem. We’re moving beyond the granola-hippie cliche and dismantling ethical elitism, to bring you media that matters. Today, Eco Warrior Princess continues to grow, leveraging a small network of passionate writers and industry experts from around the world to cover the latest in green intelligence.',
//     id: 3
//   },
//   {
//     title: 'eco hustler',
//     url: 'https://ecohustler.com/',
//     image: null,
//     description:
//       'Ecohustler is an independent online magazine with a global reach of millions. Our mission is to bring people unexpected, entertaining, ecological content with a focus on connecting with nature and each other, so that we can all become a part of the solution to environmental breakdown.',
//     id: 4
//   },
//   {
//     title: 'going zero waste',
//     url: 'https://goingzerowaste.com/',
//     image:
//       'https://cdn.statically.io/img/goingzerowaste.com/wp-content/uploads/2020/04/Header2.jpg?w=800&f=auto',
//     description:
//       'We aim to send nothing to a landfill. We reduce what we need, reuse as much as we can, send little to be recycled, and compost what we cannot. The less simple answer: It’s really about redefining the system. We currently live in a linear economy where we take resources from the earth and then dump them in a giant hole in the ground. The goal of zero waste is to move to a circular economy where we write trash out of existence. The circular economy mimics nature in that there is no trash in nature.',
//     id: 5
//   },
//   {
//     title: 'dr.karens lee',
//     url: 'https://www.drkarenslee.com/',
//     image:
//       'https://www.drkarenslee.com/wp-content/uploads/2020/05/DKLmobile_400.png',
//     description:
//       'After much deliberation, I decided to create this site to share my knowledge and build a community of like-minded people who care about prevention and not sickness. Learning what to eat and what to avoid is very challenging in this busy times. But as cliché as it might sound, you are what you eat. And food can be medicine or poison. I can help you find solutions for your food-related conditions and recommend special diets, products, supplements, meal plans and the support to help you. We can solve the mystery together.',
//     id: 6
//   },
//   {
//     title: 'get green be well',
//     url: 'https://www.getgreenbewell.com/',
//     image:
//       'https://www.getgreenbewell.com/wp-content/uploads/2020/04/GGBW-Logo-Web_Test2.jpeg',
//     description:
//       'Get Green Be Well is founded by Kimberly Button, a certified WELL AP, green living expert, professional journalist, author, TV correspondent, speaker, editor and award-winning photographer. Kimberly Button is the author of The Ultimate Home Detox Guide, The Everything Guide to a Healthy Home (Adams Media), green living columnist for Vibrant Life magazine, and creator of the Orlando Green Travel app (Sutro Media).',
//     id: 7
//   },
//   {
//     title: 'bio friendly planet',
//     url: 'https://biofriendlyplanet.com/',
//     image:
//       'https://biofriendlyplanet.com/wp-content/uploads/2017/06/bpm-logo.jpg',
//     description:
//       'There are a lot of magazines, websites and groups that discuss the problems we face because of environmental pollution. While many of the same stories that those groups cover are shared here for reference, this is not another one of those websites. This magazine is a place for people who want simple ways to actively make this planet greener and who are tired of the doom and gloom reporting on the environment.',
//     id: 8
//   },
//   {
//     title: 'eco ideaz',
//     url: 'https://www.ecoideaz.com/',
//     image:
//       'https://www.ecoideaz.com/wp-content/uploads/2015/07/ecoideaz_logo.png',
//     description:
//       'Ecoideaz evolved from the need to fill the gap in spreading awareness about sustainable technologies to become a platform for bringing together people and organisations who are effective catalysts for the much needed change that will ensure the well being of planet earth and all its elements.',
//     id: 9
//   },
//   {
//     title: 'gypsy soul',
//     url: 'https://www.gypsysoul.co.uk/',
//     image:
//       'https://www.gypsysoul.co.uk/wp-content/uploads/2018/12/cropped-Gypsy-soul-blog-header-4.png',
//     description:
//       'Our ultimate aim was to minimize, simplify and just enjoy life more. It has been a hard and long process but we finally feel like we’ve got to where we want to be.',
//     id: 10
//   },
//   {
//     title: 'the zero waste collective',
//     url: 'https://www.thezerowastecollective.com/',
//     image: null,
//     description:
//       'With an engaged and supportive online community, The Zero Waste Collective educates and inspires people worldwide to live more sustainably by reducing their waste. What does The Zero Waste Collective envision for the future? A world without waste. How will we get there? One imperfect step at a time, together, in an encouraging environment.',
//     id: 11
//   }
// ];
