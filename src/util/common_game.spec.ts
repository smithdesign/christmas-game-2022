import { 
    MODAL_HEADER_BLURBS,
    NEXT_BUTTON_BLURBS,
    getRandomAmounts, 
    getTextBlurb, 
    getRandomNextButtonText,
    getModalTitle,
    randomIcon
} from "./common_game";

describe('Common Game Functions', () => {
    describe('getRandomAmounts()', () => {
        it('Ensures we get random amounts', () => {
            const a = JSON.stringify(getRandomAmounts());
            const b = JSON.stringify(getRandomAmounts());
            expect(a).not.toEqual(b);
        });
    });

    describe('getTextBlurb()', () => {
        it('Returns a random text blurb for a header', () => {
            const target = 'header';
            const type = 'meh';
            const test = getTextBlurb(target, type);
            expect(MODAL_HEADER_BLURBS.meh).toContain(test);
        });
        
        it('Returns a random text blurb for a button', () => {
            const target = 'button';
            const test = getTextBlurb(target);
            
            expect(NEXT_BUTTON_BLURBS).toContain(test);
        });

        it('Fails gracefully when bad input is passed', () => {
            expect(getTextBlurb('shit')).toBe('');
        });
    });

    describe('getRandomNextButtonText()', () => {
        it('Gets random next button text', () => {
            const test = getRandomNextButtonText();
            
            expect(NEXT_BUTTON_BLURBS).toContain(test);
        });
    });

    describe('getModalTitle()', () => {
        it('Gets a correct random modal title', () => {
            const a = getModalTitle(-5);
            const b = getModalTitle(5);
            const c = getModalTitle(20);
            const d = getModalTitle(50);
            const e = getModalTitle(1);
            
            expect(MODAL_HEADER_BLURBS.bad).toContain(a);
            expect(MODAL_HEADER_BLURBS.good).toContain(b);
            expect(MODAL_HEADER_BLURBS.good).toContain(c);
            expect(MODAL_HEADER_BLURBS.great).toContain(d);
            expect(MODAL_HEADER_BLURBS.meh).toContain(e);
        });
    });

    describe('randomIcon()', () => {
        it('Gets a random icon', () => {
            expect(randomIcon()).toEqual(expect.stringContaining('icon'));
        });
    });
});
