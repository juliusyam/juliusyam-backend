'use strict';

/**
 * web service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web.web');
