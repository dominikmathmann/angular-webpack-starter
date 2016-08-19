export class PageModel {
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