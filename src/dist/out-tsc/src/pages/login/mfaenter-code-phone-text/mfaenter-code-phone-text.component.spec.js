"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var mfaenter_code_phone_text_component_1 = require("./mfaenter-code-phone-text.component");
describe('MFAEnterCodePhoneTextComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [mfaenter_code_phone_text_component_1.MFAEnterCodePhoneTextComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(mfaenter_code_phone_text_component_1.MFAEnterCodePhoneTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mfaenter-code-phone-text.component.spec.js.map