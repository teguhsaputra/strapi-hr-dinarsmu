'use strict';

/**
 * daily-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-info.daily-info');
