/// <reference path="../../typings/index.d.ts" />

import {PageModel} from '../pages/hello.pagemodel'
import {RootPageModel} from '../pages/root.pagemodel'

describe("Home-Page", () => {
    beforeEach(() => {
        browser.get('http://localhost:4300/#hello');
    })

    it("MessageButton", () => {
        RootPageModel.waitUntilSpinnerFinished();
        expect(PageModel.nfoPanel.isPresent()).toBeFalsy();
        expect(PageModel.messageButton.isPresent()).toBeTruthy();
        expect(PageModel.messageButton.getText()).toEqual("Hello from Angular-InMemoryApi");
        
        PageModel.messageButton.click();
        expect(PageModel.nfoPanel.isPresent()).toBeTruthy();
    })

    it("ErrorButton", () => {
        RootPageModel.waitUntilSpinnerFinished();
        expect(PageModel.errorButton.isPresent()).toBeTruthy();
        PageModel.errorButton.click()
        expect(PageModel.error.isPresent()).toBeTruthy();
    })
})

