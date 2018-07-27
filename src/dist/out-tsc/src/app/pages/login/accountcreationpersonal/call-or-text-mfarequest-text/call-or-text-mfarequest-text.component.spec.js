"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var call_or_text_mfarequest_text_component_1 = require("./call-or-text-mfarequest-text.component");
describe('CallOrTextMFARequestTextComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [call_or_text_mfarequest_text_component_1.CallOrTextMFARequestTextComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(call_or_text_mfarequest_text_component_1.CallOrTextMFARequestTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=call-or-text-mfarequest-text.component.spec.js.map