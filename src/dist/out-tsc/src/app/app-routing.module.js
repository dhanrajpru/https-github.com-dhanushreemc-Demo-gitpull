"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
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
var mfarequest_component_1 = require("./pages/login/mfarequest/mfarequest.component");
var mfachoose_method_component_1 = require("./pages/login/mfachoose-method/mfachoose-method.component");
var mfaenter_code_email_component_1 = require("./pages/login/mfaenter-code-email/mfaenter-code-email.component");
var mfaenter_code_phone_text_component_1 = require("./pages/login/mfaenter-code-phone-text/mfaenter-code-phone-text.component");
var mfaenter_code_phone_call_component_1 = require("./pages/login/mfaenter-code-phone-call/mfaenter-code-phone-call.component");
var call_or_text_mfarequest_component_1 = require("./pages/login/accountcreationpersonal/call-or-text-mfarequest/call-or-text-mfarequest.component");
var call_or_text_mfarequest_text_component_1 = require("./pages/login/accountcreationpersonal/call-or-text-mfarequest-text/call-or-text-mfarequest-text.component");
var call_or_text_mfarequest_call_component_1 = require("./pages/login/accountcreationpersonal/call-or-text-mfarequest-call/call-or-text-mfarequest-call.component");
var forgot_password_component_1 = require("./pages/login/forgot-password/forgot-password.component");
var help_component_1 = require("./pages/login/help/help.component");
var callortextmfarequestemail_component_1 = require("./pages/login/accountcreationpersonal/callortextmfarequestemail/callortextmfarequestemail.component");
var redumptionhistory_component_1 = require("./pages/login/accountpage/redumptionhistory/redumptionhistory.component");
var dialog_component_1 = require("./pages/login/accountcreationoverview/dialog/dialog.component");
var routes = [
    {
        path: 'allPages',
        component: all_pages_component_1.AllPagesComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '', redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'accountcreationpersonal',
        component: accountcreationpersonal_component_1.AccountcreationpersonalComponent
    },
    {
        path: 'redumptionhistory',
        component: redumptionhistory_component_1.RedumptionhistoryComponent
    },
    {
        path: 'help',
        component: help_component_1.HelpComponent
    },
    {
        path: 'accountcreationwallet',
        component: accountcreationwallet_component_1.AccountcreationwalletComponent
    },
    {
        path: 'accountcreationoverview',
        component: accountcreationoverview_component_1.AccountcreationoverviewComponent
    },
    {
        path: 'dialog',
        component: dialog_component_1.DialogComponent
    },
    {
        path: 'callortextmfarequestemail',
        component: callortextmfarequestemail_component_1.CallortextmfarequestemailComponent
    },
    {
        path: 'accountpage',
        component: accountpage_component_1.AccountpageComponent
    },
    {
        path: 'accountsettings',
        component: accountsettings_component_1.AccountsettingsComponent
    },
    {
        path: 'orderdetails',
        component: orderdetails_component_1.OrderdetailsComponent
    },
    {
        path: 'productcatalog',
        component: productcatalog_component_1.ProductcatalogComponent
    },
    {
        path: 'productdescription',
        component: productdescription_component_1.ProductdescriptionComponent
    },
    {
        path: 'cartreview',
        component: cartreview_component_1.CartreviewComponent
    },
    {
        path: 'shipping',
        component: shipping_component_1.ShippingComponent
    },
    {
        path: 'shippingwithrestrictions',
        component: shippingwithrestrictions_component_1.ShippingwithrestrictionsComponent
    },
    {
        path: 'addressrestricted',
        component: addressrestricted_component_1.AddressrestrictedComponent
    },
    {
        path: 'orderconfirmation',
        component: orderconfirmation_component_1.OrderconfirmationComponent
    },
    {
        path: 'mFARequest',
        component: mfarequest_component_1.MFARequestComponent
    },
    {
        path: 'mFAChooseMethod',
        component: mfachoose_method_component_1.MFAChooseMethodComponent
    },
    {
        path: 'mFAEnterCodeEmail',
        component: mfaenter_code_email_component_1.MFAEnterCodeEmailComponent
    },
    {
        path: 'mFAEnterCodePhoneText',
        component: mfaenter_code_phone_text_component_1.MFAEnterCodePhoneTextComponent
    },
    {
        path: 'mFAEnterCodePhoneCall',
        component: mfaenter_code_phone_call_component_1.MFAEnterCodePhoneCallComponent
    },
    {
        path: 'callOrTextMFARequest',
        component: call_or_text_mfarequest_component_1.CallOrTextMFARequestComponent
    },
    {
        path: 'callOrTextMFARequestText',
        component: call_or_text_mfarequest_text_component_1.CallOrTextMFARequestTextComponent
    },
    {
        path: 'callOrTextMFARequestCall',
        component: call_or_text_mfarequest_call_component_1.CallOrTextMFARequestCallComponent
    },
    {
        path: 'forgotPassword',
        component: forgot_password_component_1.ForgotPasswordComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map