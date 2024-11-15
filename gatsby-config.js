module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://claytsay.github.io/`,
    // Your Name
    name: 'Clay Tsay',
    // Main Site Title
    title: `Clay Tsay | Software Engineer`,
    // Description that goes under your name in main bio
    description: `A software engineer with training in both computer science and chemical engineering.`,
    // Optional: Twitter account handle
    author: `@claytsay`,
    // Optional: Github account URL
    github: `https://github.com/claytsay`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/claytsay/`,
    // Content of the About Me section
    about: `I am interested in the application of computer science to solving problems in more traditional engineering fields, namely chemical engineering. My university studies focused on machine learning, artificial intelligence, and computational methods in chemical engineering. Currently, I work on LLMOps and backend development within Amazon's Alexa Music division.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ssds',
        description:
          'A pair of Python and Deno libraries that implement high-performance data structures',
        link: 'https://github.com/claytsay/ssds-python',
      },
      {
        name: 'person_simulator',
        description:
          'A full-stack chatbot web app built with Node.js, React, and Python',
        link: 'https://github.com/claytsay/person_simulator',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon',
        description: 'SDE II (L5), July 2024 - Present',
        link: 'https://www.amazon.jobs/en/job_categories/software-development',
      },
      {
        name: 'Amazon',
        description: 'SDE I (L4), July 2022 - July 2024',
        link: 'https://www.amazon.jobs/en/job_categories/software-development',
      },
      {
        name: 'Amazon',
        description: 'SDE Intern (L4), May 2021 - August 2021',
        link: 'https://www.amazon.jobs/en/job_categories/software-development',
      },
      {
        name: 'Cognition and Action Lab',
        description: 'Research Assistant, September 2019 - December 2019',
        link: 'http://ivrylab.berkeley.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'C, HTML/CSS, Java, JavaScript, MATLAB, Python, Rust, TypeScript, Wolfram Language',
      },
      {
        name: 'Libraries & Frameworks',
        description:
          'AWS CDK, Docker, Elasticsearch, Flink, Guice, Matplotlib, Node.js, NumPy, Pandas, PySpark, PyTorch, SciPy, Seaborn, Spring, React',
      },
      {
        name: 'Services',
        description:
          'AWS ECS, AWS SageMaker, Cloudflare',
      },
      {
        name: 'Databases',
        description:
          'AWS DynamoDB, AWS RDS, SQLite',
      },
      {
        name: 'Other',
        description:
          'Chinese (Mandarin), Linux, Microsoft Office, Prompt Engineering',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-F29F4GE30X`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
