"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var call_or_text_mfarequest_call_component_1 = require("./call-or-text-mfarequest-call.component");
describe('CallOrTextMFARequestCallComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [call_or_text_mfarequest_call_component_1.CallOrTextMFARequestCallComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(call_or_text_mfarequest_call_component_1.CallOrTextMFARequestCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=call-or-text-mfarequest-call.component.spec.js.map