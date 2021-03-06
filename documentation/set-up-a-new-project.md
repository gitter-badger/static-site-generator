1. [Set up a new project](#set-up-a-new-project)
    1. [Install dependencies](#install-dependencies)
    2. [Enable Sentry/Raven.js](#enable-sentryravenjs)
    3. [Continuous integration and deployment](#continuous-integration-and-deployment)
    4. [Enable greenkeeper](#enable-greenkeeper)


# Set up a new project


## External dependencies
1. Make sure to have the [Node Version Manager](https://github.com/creationix/nvm) installed
2. Run `nvm install && nvm use` to install and use the Node version defined in [.nvmrc](../.nvmrc)
3. Run `npm install -g yarn`
4. (Optional) Run `npm install -g jspm`


## Install dependencies and set the production URL
1. Set the production URL in the [config.js](../_gulpfile/config.js#L15) for automated sitemap generation
2. Set the production URL in the [robots.txt](../source/robots.txt#L1)
3. Set the production URL in the [.htaccess](../source/.htaccess#L42) for an 404 error redirect
4. Add deployment targets to the [config.js](../_gulpfile/config.js#L17)
5. Run `yarn` to install all dependencies.
6. Run `npm start` to build the site.


## Enable Sentry/Raven.js
1. Create a new project on Sentry and add your public DSN to [scripts.js](../source/assets/scripts/scripts.js#L1)
2. Uncomment Raven.js on [base.pug](../source/_partials/base.pug#L63)


## Continuous integration and deployment
If you are interested in continuous integration and deployment checkout [continuous-integration.md](./continuous-integration.md)


## Enable Greenkeeper (https://greenkeeper.io/)
1. Make sure to have Greenkeeper globally installed (`npm install -g greenkeeper && greenkeeper login`)
2. Enable Greenkeeper for your repository by running `greenkeeper enable`
