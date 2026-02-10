// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "† indicates equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-sparkles-i-am-joining-amazon-alexa-ai-as-an-applied-scientist-intern-primary-mentors-dr-hann-wang-dr-nikolaos-malandrakis-and-dr-nagesh-panyam-and-managed-by-dr-angeliki-metallinou-can-t-wait",
          title: ':sparkles: I am joining Amazon Alexa AI as an Applied Scientist intern, primary...',
          description: "",
          section: "News",},{id: "news-sparkles-i-am-returning-to-amazon-agi-foundational-models-group-the-group-name-has-changed-as-an-applied-scientist-intern",
          title: ':sparkles: I am returning to Amazon AGI Foundational Models Group (the group name...',
          description: "",
          section: "News",},{id: "news-tada-our-pearl-on-the-review-driven-persona-grounded-conversational-recommentation-is-accepted-to-acl-2024",
          title: ':tada: Our “Pearl” on the Review-driven, Persona-grounded Conversational Recommentation is accepted to ACL...',
          description: "",
          section: "News",},{id: "news-tada-two-papers-about-algorithmic-reasoning-in-llms-and-nl-feedback-on-coding-agents-have-been-accepted-to-emnlp-2024",
          title: ':tada: Two papers about Algorithmic Reasoning in LLMs and NL Feedback on Coding...',
          description: "",
          section: "News",},{id: "news-tada-our-paper-trait-on-llm-personality-evaluation-has-been-accepted-to-naacl-2025",
          title: ':tada: Our paper TRAIT on LLM Personality Evaluation has been accepted to NAACL...',
          description: "",
          section: "News",},{id: "news-tada-three-papers-about-long-cot-scene-graph-generation-and-llm-simulation-of-psychological-patients-have-been-accepted-to-acl-2025",
          title: ':tada: Three papers about Long-CoT, Scene Graph Generation, and LLM Simulation of Psychological...',
          description: "",
          section: "News",},{id: "news-sparkles-i-will-be-joining-microsoft-research-asia-msra-as-an-intern-this-summer-under-supervision-of-dr-liang-wang-dr-nan-yang-dr-xingxing-zhang",
          title: ':sparkles: I will be joining Microsoft Research Asia (MSRA) as an intern this...',
          description: "",
          section: "News",},{id: "news-tada-our-toolhaystack-on-the-long-term-interaction-of-tool-augmented-language-models-is-accepted-to-emnlp-2025-see-you-at-suzhou",
          title: ':tada: Our “ToolHaystack” on the Long-term Interaction of Tool-augmented Language Models is accepted...',
          description: "",
          section: "News",},{id: "news-tada-our-web-sheperd-on-the-process-reward-model-of-web-agent-got-accepted-to-neurips-2025-spotlight",
          title: ':tada: Our “Web-Sheperd” on the Process Reward Model of Web Agent got accepted...',
          description: "",
          section: "News",},{id: "news-tada-our-memento-on-the-personalization-and-memory-of-embodied-agent-got-accepted-to-iclr-2026",
          title: ':tada: Our “Memento” on the Personalization and Memory of Embodied Agent got accepted...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%77%6F%6F.%6B%77%61%6B@%79%6F%6E%73%65%69.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bwookwak", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bwookwak", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=k1OkVykAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
