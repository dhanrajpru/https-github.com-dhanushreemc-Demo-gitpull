import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AccountcreationpersonalComponent } from './pages/login/accountcreationpersonal/accountcreationpersonal.component';
import { AccountcreationwalletComponent } from './pages/login/accountcreationwallet/accountcreationwallet.component';
import { AccountcreationoverviewComponent } from './pages/login/accountcreationoverview/accountcreationoverview.component';
import { AccountpageComponent } from './pages/login/accountpage/accountpage.component';
import { AccountsettingsComponent } from './pages/login/accountpage/accountsettings/accountsettings.component';
import { OrderdetailsComponent } from './pages/login/accountpage/orderdetails/orderdetails.component';
import { ProductcatalogComponent } from './pages/login/accountpage/productcatalog/productcatalog.component';
import { ProductdescriptionComponent } from './pages/login/accountpage/productcatalog/productdescription/productdescription.component';
import { CartreviewComponent } from './pages/login/accountpage/productcatalog/productdescription/cartreview/cartreview.component';
import { ShippingComponent } from './pages/login/accountpage/productcatalog/productdescription/cartreview/shipping/shipping.component';
import { ShippingwithrestrictionsComponent } from './pages/login/accountpage/productcatalog/productdescription/cartreview/shippingwithrestrictions/shippingwithrestrictions.component';
import { AddressrestrictedComponent } from './pages/login/accountpage/productcatalog/productdescription/cartreview/addressrestricted/addressrestricted.component';
import { OrderconfirmationComponent } from './pages/login/accountpage/productcatalog/productdescription/cartreview/orderconfirmation/orderconfirmation.component';
import { AllPagesComponent } from './pages/all-pages/all-pages.component';
import { MFARequestComponent } from './pages/login/mfarequest/mfarequest.component';
import { MFAChooseMethodComponent } from './pages/login/mfachoose-method/mfachoose-method.component';
import { MFAEnterCodeEmailComponent } from './pages/login/mfaenter-code-email/mfaenter-code-email.component';
import { MFAEnterCodePhoneTextComponent } from './pages/login/mfaenter-code-phone-text/mfaenter-code-phone-text.component';
import { MFAEnterCodePhoneCallComponent } from './pages/login/mfaenter-code-phone-call/mfaenter-code-phone-call.component';
import { CallOrTextMFARequestComponent } from './pages/login/accountcreationpersonal/call-or-text-mfarequest/call-or-text-mfarequest.component';
import { CallOrTextMFARequestTextComponent } from './pages/login/accountcreationpersonal/call-or-text-mfarequest-text/call-or-text-mfarequest-text.component';
import { CallOrTextMFARequestCallComponent } from './pages/login/accountcreationpersonal/call-or-text-mfarequest-call/call-or-text-mfarequest-call.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { HelpComponent } from './pages/login/help/help.component';
import { CallortextmfarequestemailComponent } from './pages/login/accountcreationpersonal/callortextmfarequestemail/callortextmfarequestemail.component';
import { RedumptionhistoryComponent } from './pages/login/accountpage/redumptionhistory/redumptionhistory.component';
import { DialogComponent } from './pages/login/accountcreationoverview/dialog/dialog.component';
import { UserReceivedInvitationLinkComponent } from './pages/user-received-invitation-link/user-received-invitation-link.component';
import { CreateaccountComponent } from './pages/createaccount/createaccount.component';
const routes: Routes = [
  {
    path: 'allPages',
    component: AllPagesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'createaccount',
    component: CreateaccountComponent
  },
  {
    path: '', redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'userreceivedinvitationlink',
    component: UserReceivedInvitationLinkComponent
  },
  {
    path: 'accountcreationpersonal',
    component: AccountcreationpersonalComponent
  },
  {
    path: 'redumptionhistory',
    component: RedumptionhistoryComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'accountcreationwallet',
    component: AccountcreationwalletComponent
  },
  {
    path: 'accountcreationoverview',
    component: AccountcreationoverviewComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'callortextmfarequestemail',
    component: CallortextmfarequestemailComponent
  },
  {
    path: 'accountpage',
    component: AccountpageComponent
  },
  {
    path: 'accountsettings',
    component: AccountsettingsComponent
  },
  {
    path: 'orderdetails',
    component: OrderdetailsComponent
  },
  {
    path: 'productcatalog',
    component: ProductcatalogComponent
  },
  {
    path: 'productdescription',
    component: ProductdescriptionComponent
  },
  {
    path: 'cartreview',
    component: CartreviewComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'shippingwithrestrictions',
    component: ShippingwithrestrictionsComponent
  },
  {
    path: 'addressrestricted',
    component: AddressrestrictedComponent
  },
  {
    path: 'orderconfirmation',
    component: OrderconfirmationComponent
  },
  {
    path: 'mFARequest',
    component: MFARequestComponent
  },
  {
    path: 'mFAChooseMethod',
    component: MFAChooseMethodComponent
  },
  {
    path: 'mFAEnterCodeEmail',
    component: MFAEnterCodeEmailComponent
  },
  {
    path: 'mFAEnterCodePhoneText',
    component: MFAEnterCodePhoneTextComponent
  },
  {
    path: 'mFAEnterCodePhoneCall',
    component: MFAEnterCodePhoneCallComponent
  },
  {
    path: 'callOrTextMFARequest',
    component: CallOrTextMFARequestComponent
  },
  {
    path: 'callOrTextMFARequestText',
    component: CallOrTextMFARequestTextComponent
  },
  {
    path: 'callOrTextMFARequestCall',
    component: CallOrTextMFARequestCallComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
