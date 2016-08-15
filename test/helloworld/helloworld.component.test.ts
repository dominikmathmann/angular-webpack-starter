"use strict"

describe("Home-Page", () => {
    beforeEach(() => {
        browser.get('http://localhost:4300');
    })

    it("layouting", () => {
        expect(PageModel.headerLogo.getCssValue("margin-left")).toBeTruthy()
    })
    
    it("info-visibility", () => {
        expect(PageModel.infoPanel.isPresent()).toBeFalsy();
        PageModel.helloButton.click().then(e => {
            expect(PageModel.infoPanel.isPresent()).toBeTruthy();
            PageModel.helloButton.click().then(e => { 
                expect(PageModel.infoPanel.isPresent()).toBeFalsy();
            })
        })
    })
})

class PageModel {
    static get headerLogo() {
        return element(by.className('header'));
    }

    static get infoPanel() {
        return element(by.className('nfoPanel'));
    }

    static get helloButton() {
        return element(by.tagName('button'));
    }
}