"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var callortextmfarequestemail_component_1 = require("./callortextmfarequestemail.component");
describe('CallortextmfarequestemailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [callortextmfarequestemail_component_1.CallortextmfarequestemailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(callortextmfarequestemail_component_1.CallortextmfarequestemailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=callortextmfarequestemail.component.spec.js.map