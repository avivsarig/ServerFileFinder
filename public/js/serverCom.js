import { throttle } from './requestThrottling.js';
import { RATE_LIMIT_SETTING } from './config.js';

const fileTree = [
    "/",
    "/animals/",
    "/animals/dogs/",
    "/animals/dogs/sausage_dog.jpg",
    "/animals/dogs/supermodel_pup.jpg",
    "/animals/dogs/ninja_chihuahua.jpg",
    "/animals/cats/",
    "/animals/cats/fancy_feline.jpg",
    "/animals/cats/sassy_siamese.jpg",
    "/animals/cats/lazy_lion.jpg",
    "/food/",
    "/food/fruits/",
    "/food/fruits/magical_mango.txt",
    "/food/fruits/banana_bandit.txt",
    "/food/fruits/orange_overlord.txt",
    "/food/vegetables/",
    "/food/vegetables/carrot_conqueror.txt",
    "/food/vegetables/tomato_terminator.txt",
    "/food/vegetables/potato_paladin.txt",
    "/music/",
    "/music/rock/",
    "/music/rock/air_guitar_anthem.mp3",
    "/music/rock/headbanging_hero.mp3",
    "/music/rock/queen_of_riffs.mp3",
    "/music/pop/",
    "/music/pop/dancing_diva.mp3",
    "/music/pop/melody_maverick.mp3",
    "/music/pop/bieber_fever.mp3"
];

function makeRequest(url) {
    const route = 'http://mock-server'
    if (!url.startsWith(route)) {
        const response = { exists: false };
        return response;
    }

    const query = url.split(route)[1];
    if (!fileTree.includes(query)) {
        const response = { exists: false };
        return response;
    } else {
        const isFile = !query.endsWith('/')
        const response = { exists: true, isFile: isFile };
        return response;
    }
}

export const sendRequest = throttle(makeRequest, RATE_LIMIT_SETTING);