module.exports = {
  routes: [
    {
      method: "GET",
      path: "/get-all-data",
      handler: "get-all-data.getAllData",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
