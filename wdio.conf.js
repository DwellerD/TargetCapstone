exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--start-maximized'] // Ensures the browser starts in full screen
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 60000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 180000 // 3 minutes per test
    },

    // Hook to maximize window if not already done via Chrome args
    before: async function () {
        await browser.maximizeWindow();
    }
}
