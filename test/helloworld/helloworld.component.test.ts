/// <reference path="../../typings/index.d.ts" />

import {PageModel} from '../pages/main.pagemodel'

describe("Home-Page", () => {
    beforeEach(() => {
        browser.get('http://localhost:4300');
        element(by.model('yourName'))
    })

    it("layouting", () => {
        expect(PageModel.headerLogo.getCssValue("margin-left")).toBeTruthy()
    })

    it("info-visibility", () => {
        expect(PageModel.infoPanel.isPresent()).toBeFalsy();
        PageModel.helloButton.click().then(e => {
            expect(PageModel.infoPanel.isPresent()).toBeTruthy();
            PageModel.helloButton.click().then(e => {
                browser.driver.sleep(1000)
                expect(PageModel.infoPanel.isPresent()).toBeFalsy();
            })
        })
    })
})

