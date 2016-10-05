import {Injectable, ErrorHandler, Injector, ApplicationRef} from '@angular/core'
import {ToastyService, ToastOptions} from 'ng2-toasty';

@Injectable()
export class AppExceptionHandler extends ErrorHandler {
    constructor(private toastyService: ToastyService, private injector:Injector) {
        super(false);
    }

    handleError(exception: any, stackTrace?: any, reason?: string) {
        var toastOptions: ToastOptions = {
            title: "Fehler aufgetreten",
            msg: "Ein unerwarteter Fehler ist aufgetreten: " + reason,
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap'
        };

        this.toastyService.error(toastOptions);
        super.handleError(exception);
        this.injector.get(ApplicationRef).tick();
    }
}