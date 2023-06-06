import { JSDOM } from 'jsdom';
import { sendRequest, makeRequest } from '../public/js/serverCom.js'

function setUpDOM() {
    const html = `
    <body>
      <p id="validatorResponse"></p>
    </body>
    `;

    const { window } = new JSDOM(html);
    global.window = window;
    global.document = window.document;
}

// Mock throttle
jest.mock('../public/js/requestThrottling.js', () => ({
    throttle: jest.fn((fn, limit) => fn),
}));

describe('serverCom', () => {
    beforeEach(() => {
        setUpDOM();
    });

    test('calls makeRequest with valid URL and returns data', async () => {
        const data = await makeRequest('http://mock-server/animals/dogs/');
        expect(data).toEqual({ exists: true, isFile: false });
    });

    test('calls makeRequest with invalid URL and returns not found', async () => {
        const data = await makeRequest('http://invalid-url');
        expect(data).toEqual({ exists: false });
    });

    test('calls sendRequest with valid URL and returns data', async () => {
        const data = await sendRequest('http://mock-server/animals/dogs/');
        expect(data).toEqual({ exists: true, isFile: false });
    });

    test('calls sendRequest with invalid URL and returns not found', async () => {
        const data = await sendRequest('http://invalid-url');
        expect(data).toEqual({ exists: false });
    });
});
