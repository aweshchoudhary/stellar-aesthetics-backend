'use strict';

/**
 * course-director service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-director.course-director');
