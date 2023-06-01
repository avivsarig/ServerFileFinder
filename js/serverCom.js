import { throttle } from './requestThrottling.js';
import { rateLimitSetting } from './config.js';

export async function makeRequest(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export const sendRequest = throttle(makeRequest, rateLimitSetting);