import { isValidURL } from './validation.js';
import { sendRequest } from './serverCom.js';
import { RATE_LIMIT_SETTING } from './config.js';

let timeoutId = null;

export async function validateAndSendRequest(input) {
    const validatorResponse = document.getElementById('validatorResponse');

    if (!isValidURL(input)) {
        validatorResponse.textContent = (input === '') ? 'Waiting for input' : 'Please enter a valid URL!'
    } else {
        validatorResponse.textContent = 'Waiting for response';
        clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => {
            const currentInput = input;
            const response = await sendRequest(input);
            if (currentInput !== urlInput.value) {
                return;
            }
            if (response) {
                if (response?.exists) {
                    validatorResponse.textContent = response.isFile ? 'File Found' : 'Folder Found';
                } else {
                    validatorResponse.textContent = 'Not Found';
                }
            }
        }, RATE_LIMIT_SETTING);
    }
}

const urlInput = document.getElementById('urlInput');
urlInput.addEventListener('input', (event) => {
    validateAndSendRequest(event.target.value).catch(err => console.log(err));
});
