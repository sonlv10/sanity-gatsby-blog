export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6092a869ecfe2833ad44bdb3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8cznjqks",
                  apiId: "362f6bf6-9e65-4826-8b16-c1642a705abb",
                },
                {
                  buildHookId: "6092a869e75b2f3212944350",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yur5qvme",
                  apiId: "ff281d82-3c4b-4d4a-8b29-7358631c05a7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sonlv10/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yur5qvme.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
