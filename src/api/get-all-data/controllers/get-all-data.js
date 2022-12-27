"use strict";

/**
 * A set of functions called "actions" for `get-all-data`
 */

module.exports = {
  getAllData: async (ctx, next) => {
    try {
      const data = await strapi
        .service("api::get-all-data.get-all-data")
        .getAllData();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  },
};
