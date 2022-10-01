'use strict';

/**
 * web controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::web.web');
