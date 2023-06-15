type Project = {
    id: number, 
    name: string, 
    link: string,
    github: string,
    description: string,
    techStack: string,
    note?: string
  }

    let featured: Project = {
      id: 1,
      name: "Sentiment Analysis Bot",
      link: "https://github.com/ojassingh/sentyblog",
      github: "https://github.com/ojassingh/sentyblog",
      description: "An app that recognises text sentiment, powered by Tensorflow.js ",
      techStack: "Typescript, Next.js, AWS Amplify, GraphQL, TensorFlow.js"
    }

    let project_list: Project[] = [
      {
        id: 6, 
        name: "Go Real-Time Chat App",  
        link: '#',
        github: "https://github.com/ojassingh/go-chat-app",
        description: 'A seamless real-time chat web application made with webhooks',
        techStack: 'Typescript, React, Pusher, Go, Gin'    
      },
      {
        id: 5, 
        name: "Simple Polling App",  
        link: '#',
        github: "https://github.com/ojassingh/polling-app",
        description: 'A polling/voting app inspired by rallly.co',
        techStack: 'Typescript, Next.js, Nest.js, PostgreSQL, CockroachDB'    
      },
      {
        id: 2, 
        name: "CRBN: RBC Innovation Challenge",  
        link: '#',
        github: "https://github.com/ojassingh/crbn",
        description: 'An e-commerce store built to make online shopping more sustainable',
        techStack: 'Typescript, Next.js, PostgreSQL, Prisma, GraphQL, Jira'    
      },
      {
        id: 3, 
        name: "Cloud Journal",  
        link:"#",
        github: "https://github.com/ojassingh/cloudblog",
        description: 'A personal journal on the cloud, built with AWS Amplify',
        techStack: 'Typescript, Next.js, GraphQL, DynamoDB, AWS'          
      },
      {
        id: 4, 
        name: "Astro News",  
        link: 'https://myastra.vercel.app/',
        github: "https://github.com/ojassingh/astronews",
        description: 'A space-launch info and space-news integrated web-application ',
        techStack: 'Typescript, Next.js, Tailwind, Docker, Vercel, NewsAPI.org'     
      },
    ];


    export {featured, project_list};
    