const { join } = require('path');

process.env.IS_TEST = true;

const config = {
    runner: 'local',
    reporters: ['spec','json'],
    specs: [ './tests/e2e/desktop/*.spec.js' ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    services: [
        [
            'electron',
            {
                appPath: join(__dirname, 'dist-desktop'),
                appName: 'Threat-Dragon-ng',
                chromedriver: {
                    port: 9519,
                    logFileName: 'wdio-chromedriver.log',
                },
            },
        ],
    ],
    capabilities: [{
        browserName: 'chrome',
        'wdio:chromedriverOptions': {
          binary: '/usr/bin/chromedriver'
        },
        'goog:chromeOptions': {
            // run chrome headless
            args: ['--headless', '--disable-gpu']
        },
        'wdio:electronServiceOptions': {
            // custom application args
            appArgs: []
        }
    }],
    logLevel: 'debug',
    bail: 0,
    hostname: 'localhost',
    port: 9519,
    waitforTimeout: 30000,
    connectionRetryCount: 3,
    connectionRetryTimeout: 30000,
    // to redirect logs to files instead of console:
    outputDir: 'wdio-logs',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000,
    }
};

module.exports = { config };
