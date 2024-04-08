import {string} from "prop-types";

export function returnEmoji(slug: string) {
    let ret: string = '';
    if (slug === 'salad') {
        ret = `🥗`
    } else if (slug === 'burger') {
        ret = `🍔`
    } else {
        ret = "";
    }
    return ret;
}
