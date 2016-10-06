

export class RootPageModel {
    static get spinner() {
        return element(by.className("ng-busy-default-spinner"));
    }

    static waitUntil(element: any, hidden = false, timeout = 10000) {
        var ec = protractor.ExpectedConditions;
        if (!hidden)
            browser.wait(ec.presenceOf(element), timeout, 'Element taking too long to appear in the DOM');
        else
            browser.wait(ec.not(ec.presenceOf(element)), timeout, 'Element taking too long to hidden from the DOM')
    }

    static waitUntilSpinnerFinished(timeout?: number) {
        RootPageModel.waitUntil(RootPageModel.spinner, false, timeout);
        RootPageModel.waitUntil(RootPageModel.spinner, true, timeout);
    }

}