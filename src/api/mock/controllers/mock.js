'use strict';

/**
 * mock controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mock.mock');
