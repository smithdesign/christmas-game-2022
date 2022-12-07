import { icons } from './icons';
import mehSanta from '../images/AdobeStock_117746822.9f592cea.webp';
import shitSanta from '../images/AdobeStock_171751670.b2c62b3b.webp';
import moneySanta from '../images/AdobeStock_117747251.5c2ba78a.webp';
import ballerSanta from '../images/AdobeStock_171751374.4c3c5a07.webp';

const AMOUNTS: number[] = [
    50, 50, 20, 20, 20, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    -5, -5, -5, -5, -5,
];

export const NEXT_BUTTON_BLURBS = [
    'Moving On...',
    'Let\'s Go!',
    'Is it My Turn Yet?',
    'Thanks Santa!',
];

export const MODAL_HEADER_BLURBS = {
    bad: [
        'Merry Christmas! Shitters Full...',
        'Still Better than Drunk Relatives',
        'Keep the Change Ya Filthy Animal',
        'Let\'s Put the "Ass" Back in Christmas!',
        'Thanks Joe!',
    ],
    meh: [
        'You Found a Moderatley Meh Prize',
        'Don\'t Spend It All in One Place',
        'Oh Look! Some Pocket Change',
        'It\'s So Little... That\'s Cute...',
    ],
    good: [
        'Hey... Something Decent',
        'Slightly Larger Than the Average Prize',
        'Dolla Dolla Bills Y\'All!',
        'Are You Winning Yet?',
    ],
    great: [
        'Oh Shit! You Found some Big Ass Cash!',
        'You Rich! Now You Can Pay the Rent',
        'That\'s Like 5 Meals at McDanks!',
        'So Cash... Much Wow',
        'Show Me the Money!'
    ],
};

export const getRandomAmounts = () => {
    const randomNums: number[] = [];
    let i = AMOUNTS.length;
    let j: number;

    // eslint-disable-next-line no-plusplus
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        randomNums.push(AMOUNTS[j]);
        AMOUNTS.splice(j, 1);
    }

    return randomNums;
};

export const getTextBlurb = (target: string, type?: keyof ModalHeaderBlurbs) => {
    let items: string[] = [];

    if (target === 'header' && type) {
        items = MODAL_HEADER_BLURBS[type];
    } else if (target === 'button') {
        items = NEXT_BUTTON_BLURBS;
    } else {
        return '';
    }

    return items[Math.floor(Math.random() * items.length)];
};

export const getRandomNextButtonText = () => {
    return NEXT_BUTTON_BLURBS[Math.floor(Math.random() * NEXT_BUTTON_BLURBS.length)];
};

export const numberFormat = (value: number) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(value);

export const getModalTitle = (amount: number) => {
    switch (amount) {
    case -5:
        return getTextBlurb('header', 'bad');
    case 5:
    case 20:
        return getTextBlurb('header', 'good');
    case 50:
        return getTextBlurb('header', 'great');
    default:
        return getTextBlurb('header', 'meh');
    }
};

export const getModalImage = (amount: number) => {
    switch (amount) {
    case -5:
        return <img src={shitSanta} width="500" alt="Keep the Change... Bitch" />;
    case 5:
        return <img src={moneySanta} width="500" alt="Money Santa" />;
    case 20:
        return <img src={moneySanta} width="500" alt="Money Santa" />;
    case 50:
        return <img src={ballerSanta} width="500" alt="Oh Shit! Santa" />;
    default:
        return <img src={mehSanta} width="500" alt="Meh Santa" />;
    }
};

export const randomIcon = () => {
    return icons[Math.floor(Math.random() * icons.length)];
}
