'use strict';

/**
 * procedure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::procedure.procedure');
