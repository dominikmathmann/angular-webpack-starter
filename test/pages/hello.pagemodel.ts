export class PageModel {
    static get messageButton() {
        return element.all(by.className('btn-primary')).first();
    }
    
    static get errorButton() {
        return element.all(by.className('btn-primary')).get(1);
    }
    
    static get nfoPanel(){
        return element(by.className('nfoPanel'));
    }
    
    static get error(){
        return element(by.id("toasty"));
    }
}