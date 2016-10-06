/// <reference path="../../typings/index.d.ts" />

import {PageModel} from '../pages/home.pagemodel'

describe("Home-Page", () => {
    beforeEach(() => {
        browser.get('http://localhost:4300');
    })

    it("StartButton", () => {
        expect(PageModel.startButton.isPresent()).toBeTruthy();
        expect(PageModel.startButton.getText()).toEqual("Start");
    })

    it("StartNavigation", () => {
        PageModel.startButton.click();
        browser.getCurrentUrl().then(url => expect(url).toMatch("#hello"))
    })
})

