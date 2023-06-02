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

// Mock Fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ data: "mock data" }),
    })
);

// Mock throttle
jest.mock('../public/js/requestThrottling.js', () => ({
    throttle: jest.fn((fn, limit) => fn),
}));

describe('serverCom', () => {
    beforeEach(() => {
        setUpDOM();
        fetch.mockClear();
    });

    test('calls makeRequest and returns data', async () => {
        const data = await makeRequest('http://example.com');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(data).toEqual({ data: "mock data" });
    });

    test('calls sendRequest and returns data', async () => {
        const data = await sendRequest('http://example.com');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(data).toEqual({ data: "mock data" });
    });

    test('returns an error when fetch fails', async () => {
        fetch.mockImplementationOnce(() => Promise.reject('API failure'));

        try {
            await makeRequest('http://example.com');
        } catch (error) {
            expect(error).toBe('API failure');
        }

        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
