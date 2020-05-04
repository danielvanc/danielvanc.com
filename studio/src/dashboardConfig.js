export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "document-list",
      options: {
        title: "Recent Notes",
        order: "_createdAt desc",
        types: ["Note"],
      },
      layout: { width: "medium" },
    },
    {
      name: "gatsby",
      options: {
        sites: [
          {
            siteUrl: "https://danielvanc-com-2663414577.gtsb.io/",
          },
        ],
      },
    },
    {
      name: "project-users",
    },
    {
      name: "sanity-tutorials",
    },
  ],
};
