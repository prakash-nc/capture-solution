export default [
  {
    label: "Blog",
    name: "blog",
    folder: "src/pages/blog",
    create: true,
    fields: [
      { label: "Title", name: "title", widget: "string" },
      { label: "Publish Date", name: "date", widget: "datetime" },
      { label: "Profile Image", name: "thumbnail", widget: "image" },
      { label: "Body", name: "body", widget: "markdown" },
    ],
  },
];
