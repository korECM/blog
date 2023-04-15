module.exports = {
  title: `korecmblog.com`,
  description: `쿠키의 개발 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://korecmblog.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `korECM/blog`,
    },
  },
  ga: 'G-G8RQW6862C', // Google Analytics Tracking ID
  author: {
    name: `윤종원`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/korECM`,
      linkedIn: `https://www.linkedin.com/in/jongwon-youn-4389a4197`,
      email: `eatingcookieman@gmail.com`,
      resume: `https://korecm.oopy.io`
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   date: '2021.02 ~ 2021.03',
      //   activity: '개인 블로그 디자인 및 개발',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
      // {
      //   date: '2021.03 ~ ',
      //   activity: '우아한 개발자🚀',
      // },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '간단한 테마를 활용하여 개발 블로그를 만들고 운영하다 보니 점점 블로그를 내가 원하는 형태로 만들고 싶게 되었습니다. 입사 전 시기를 활용해서 원하는 기능과 디자인이 있는 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'zoomkoding.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
