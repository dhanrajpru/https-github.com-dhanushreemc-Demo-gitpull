"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ngx_store_1 = require("ngx-store");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var http_2 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var accountcreationpersonal_component_1 = require("./pages/login/accountcreationpersonal/accountcreationpersonal.component");
var accountcreationwallet_component_1 = require("./pages/login/accountcreationwallet/accountcreationwallet.component");
var accountcreationoverview_component_1 = require("./pages/login/accountcreationoverview/accountcreationoverview.component");
var accountpage_component_1 = require("./pages/login/accountpage/accountpage.component");
var accountsettings_component_1 = require("./pages/login/accountpage/accountsettings/accountsettings.component");
var orderdetails_component_1 = require("./pages/login/accountpage/orderdetails/orderdetails.component");
var productcatalog_component_1 = require("./pages/login/accountpage/productcatalog/productcatalog.component");
var productdescription_component_1 = require("./pages/login/accountpage/productcatalog/productdescription/productdescription.component");
var cartreview_component_1 = require("./pages/login/accountpage/productcatalog/productdescription/cartreview/cartreview.component");
var shipping_component_1 = require("./pages/login/accountpage/productcatalog/productdescription/cartreview/shipping/shipping.component");
var shippingwithrestrictions_component_1 = require("./pages/login/accountpage/productcatalog/productdescription/cartreview/shippingwithrestrictions/shippingwithrestrictions.component");
var addressrestricted_component_1 = require("./pages/login/accountpage/productcatalog/productdescription/cartreview/addressrestricted/addressrestricted.component");
var orderconfirmation_component_1 = require("./pages/login/accountpage/productcatalog/productdescription/cartreview/orderconfirmation/orderconfirmation.component");
var all_pages_component_1 = require("./pages/all-pages/all-pages.component");
var navigation_bar_component_1 = require("./pages/navigation-bar/navigation-bar.component");
var mfarequest_component_1 = require("./pages/login/mfarequest/mfarequest.component");
var mfachoose_method_component_1 = require("./pages/login/mfachoose-method/mfachoose-method.component");
var mfaenter_code_email_component_1 = require("./pages/login/mfaenter-code-email/mfaenter-code-email.component");
var mfaenter_code_phone_text_component_1 = require("./pages/login/mfaenter-code-phone-text/mfaenter-code-phone-text.component");
var mfaenter_code_phone_call_component_1 = require("./pages/login/mfaenter-code-phone-call/mfaenter-code-phone-call.component");
var call_or_text_mfarequest_component_1 = require("./pages/login/accountcreationpersonal/call-or-text-mfarequest/call-or-text-mfarequest.component");
var call_or_text_mfarequest_text_component_1 = require("./pages/login/accountcreationpersonal/call-or-text-mfarequest-text/call-or-text-mfarequest-text.component");
var call_or_text_mfarequest_call_component_1 = require("./pages/login/accountcreationpersonal/call-or-text-mfarequest-call/call-or-text-mfarequest-call.component");
var form_field_1 = require("@angular/material/form-field");
var app_interceptor_1 = require("./app.interceptor");
var material_1 = require("@angular/material");
var forgot_password_component_1 = require("./pages/login/forgot-password/forgot-password.component");
var help_component_1 = require("./pages/login/help/help.component");
var callortextmfarequestemail_component_1 = require("./pages/login/accountcreationpersonal/callortextmfarequestemail/callortextmfarequestemail.component");
var redumptionhistory_component_1 = require("./pages/login/accountpage/redumptionhistory/redumptionhistory.component");
var dialog_component_1 = require("./pages/login/accountcreationoverview/dialog/dialog.component");
var my_dialog_pop_up_component_1 = require("./pages/my-dialog-pop-up/my-dialog-pop-up.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                accountcreationpersonal_component_1.AccountcreationpersonalComponent,
                accountcreationwallet_component_1.AccountcreationwalletComponent,
                accountcreationoverview_component_1.AccountcreationoverviewComponent,
                accountpage_component_1.AccountpageComponent,
                accountsettings_component_1.AccountsettingsComponent,
                orderdetails_component_1.OrderdetailsComponent,
                productcatalog_component_1.ProductcatalogComponent,
                productdescription_component_1.ProductdescriptionComponent,
                cartreview_component_1.CartreviewComponent,
                shipping_component_1.ShippingComponent,
                shippingwithrestrictions_component_1.ShippingwithrestrictionsComponent,
                addressrestricted_component_1.AddressrestrictedComponent,
                orderconfirmation_component_1.OrderconfirmationComponent,
                all_pages_component_1.AllPagesComponent,
                navigation_bar_component_1.NavigationBarComponent,
                mfarequest_component_1.MFARequestComponent,
                mfachoose_method_component_1.MFAChooseMethodComponent,
                mfaenter_code_email_component_1.MFAEnterCodeEmailComponent,
                mfaenter_code_phone_text_component_1.MFAEnterCodePhoneTextComponent,
                mfaenter_code_phone_call_component_1.MFAEnterCodePhoneCallComponent,
                call_or_text_mfarequest_component_1.CallOrTextMFARequestComponent,
                call_or_text_mfarequest_text_component_1.CallOrTextMFARequestTextComponent,
                call_or_text_mfarequest_call_component_1.CallOrTextMFARequestCallComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                help_component_1.HelpComponent,
                callortextmfarequestemail_component_1.CallortextmfarequestemailComponent,
                redumptionhistory_component_1.RedumptionhistoryComponent,
                dialog_component_1.DialogComponent,
                my_dialog_pop_up_component_1.MyDialogPopUpComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_2.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                ngx_store_1.WebStorageModule,
                material_1.MatListModule,
                material_1.MatAutocompleteModule,
                material_1.MatBadgeModule,
                material_1.MatBottomSheetModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatStepperModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
                material_1.MatTreeModule,
                form_field_1.MatFormFieldModule
            ],
            providers: [{
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: app_interceptor_1.AppInterceptor,
                    multi: true,
                }],
            entryComponents: [
                dialog_component_1.DialogComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map