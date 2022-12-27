"use strict";

/**
 * get-all-data service
 */

module.exports = {
  getAllData: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany(
        "api::course-director.course-director",
        {
          // fields: ["id", "title", "slug", "createdAt"],
          populate: "*",
        }
      );

      return entries;
    } catch (err) {
      return err;
    }
  },
};
