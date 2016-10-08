// Raven.config('PUBLIC DSN').install(); // Enable Sentry/Raven.js

import $ from 'jquery';
import hello from './_modules/hello';

$('html').css('background-color', 'red');
hello('World');
