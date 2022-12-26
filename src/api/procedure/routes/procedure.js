'use strict';

/**
 * procedure router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::procedure.procedure');
