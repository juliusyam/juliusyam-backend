'use strict';

/**
 * mock service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mock.mock');
