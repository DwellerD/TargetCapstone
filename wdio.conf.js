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
            args: ['--start-maximized']
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
        timeout: 180000,
        retries: 2
    },

    before: async function () {
        await browser.maximizeWindow();
    },

    afterTest: async () => {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            for (let i = 1; i < handles.length; i++) {
                await browser.switchToWindow(handles[i]);
                await browser.closeWindow();
            }
            await browser.switchToWindow(handles[0]);
        }
    }
}
