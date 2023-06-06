import { JSDOM } from 'jsdom';
import { sendRequest } from '../public/js/serverCom.js';

function setUpDOM() {
    const html = `
    <body>
        <input id="urlInput" type="text">
        <p id="validatorResponse"></p>
    </body>
    `;

    const { window } = new JSDOM(html);
    global.window = window;
    global.document = window.document;
}

jest.mock('../public/js/serverCom.js', () => ({
    sendRequest: jest.fn(),
}));

describe('validateAndSendRequest', () => {
    let validateAndSendRequest;

    beforeEach(() => {
        setUpDOM();
        validateAndSendRequest = require('../public/js/main.js').validateAndSendRequest;
    });

    test('no input', async () => {
        const input = '';
        await validateAndSendRequest(input);
        expect(document.getElementById('validatorResponse').textContent).toBe('Waiting for input');
    })

    test('Invalid URL', async () => {
        const input = 'invalid_url';
        await validateAndSendRequest(input);
        expect(document.getElementById('validatorResponse').textContent).toBe('Please enter a valid URL!');
    });

    test('Valid URL - File Found', async () => {
        const input = 'http://mock-server/animals/dogs/ninja_chihuahua.jpg';
        sendRequest.mockResolvedValue({ exists: true, isFile: true });

        await validateAndSendRequest(input);
        expect(document.getElementById('validatorResponse').textContent).toBe('File Found');
    });

    test('Valid URL - Folder Found', async () => {
        const input = 'http://mock-server/music/rock/';
        sendRequest.mockResolvedValue({ exists: true, isFile: false });

        await validateAndSendRequest(input);
        expect(document.getElementById('validatorResponse').textContent).toBe('Folder Found');
    });

    test('Valid URL - Not Found', async () => {
        const input = 'http://mock-server/vehicles/cars/delorean.jpg';
        sendRequest.mockResolvedValue({ exists: false });

        await validateAndSendRequest(input);
        expect(document.getElementById('validatorResponse').textContent).toBe('Not Found');
    });
});
