"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var shippingwithrestrictions_component_1 = require("./shippingwithrestrictions.component");
describe('ShippingwithrestrictionsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [shippingwithrestrictions_component_1.ShippingwithrestrictionsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(shippingwithrestrictions_component_1.ShippingwithrestrictionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=shippingwithrestrictions.component.spec.js.map