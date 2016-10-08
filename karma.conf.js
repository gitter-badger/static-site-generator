module.exports = function(config) {
    config.set({
        basePath: 'source/assets/scripts',
        frameworks: ['jasmine'],
        preprocessors: {
            '**/*.ts': ['typescript'],
        },
        typescriptPreprocessor: {
            options: {
                module: 'none',
                noImplicitAny: true,
                sourceMap: false,
                target: 'ES5',
            },
            transformPath: path => {
                return path.replace(/\.ts$/, '.js');
            },
        },
        files: ['**/*.ts'],
        autoWatch: false,
        browsers: ['PhantomJS', 'Chrome', 'Firefox'],
        singleRun: true,
    });
};
