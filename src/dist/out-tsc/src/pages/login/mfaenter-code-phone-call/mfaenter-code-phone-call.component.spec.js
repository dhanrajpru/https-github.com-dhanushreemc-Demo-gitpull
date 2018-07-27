"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var mfaenter_code_phone_call_component_1 = require("./mfaenter-code-phone-call.component");
describe('MFAEnterCodePhoneCallComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mfaenter_code_phone_call_component_1.MFAEnterCodePhoneCallComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mfaenter_code_phone_call_component_1.MFAEnterCodePhoneCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mfaenter-code-phone-call.component.spec.js.map