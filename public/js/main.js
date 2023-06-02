import { isValidURL } from './validation.js';
import { sendRequest } from './serverCom.js';

export async function validateAndSendRequest(input) {
    const validatorResponse = document.getElementById('validatorResponse');

    if (!isValidURL(input)) {
        validatorResponse.textContent = (input === '') ? 'Waiting for input' : 'Please enter a valid URL!'
    }

    else {
        validatorResponse.textContent = 'Waiting for response';
        const response = await sendRequest(input);

        if (response.exists) {
            validatorResponse.textContent = response.isFile ? 'File Found' : 'Folder Found';
        } else {
            validatorResponse.textContent = 'Not Found';
        }
    }
}

const urlInput = document.getElementById('urlInput');

urlInput.addEventListener('input', (event) => {
    validateAndSendRequest(event.target.value);
});