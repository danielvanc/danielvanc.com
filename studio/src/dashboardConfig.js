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
      name: "project-users",
    },
    {
      name: "sanity-tutorials",
    },
  ],
};
