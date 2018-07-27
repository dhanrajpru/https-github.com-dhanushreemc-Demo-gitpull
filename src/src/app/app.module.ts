import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { WebStorageModule } from 'ngx-store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';
import { MFARequestComponent } from './pages/login/mfarequest/mfarequest.component';
import { MFAChooseMethodComponent } from './pages/login/mfachoose-method/mfachoose-method.component';
import { MFAEnterCodeEmailComponent } from './pages/login/mfaenter-code-email/mfaenter-code-email.component';
import { MFAEnterCodePhoneTextComponent } from './pages/login/mfaenter-code-phone-text/mfaenter-code-phone-text.component';
import { MFAEnterCodePhoneCallComponent } from './pages/login/mfaenter-code-phone-call/mfaenter-code-phone-call.component';
import { CallOrTextMFARequestComponent } from './pages/login/accountcreationpersonal/call-or-text-mfarequest/call-or-text-mfarequest.component';
import { CallOrTextMFARequestTextComponent } from './pages/login/accountcreationpersonal/call-or-text-mfarequest-text/call-or-text-mfarequest-text.component';
import { CallOrTextMFARequestCallComponent } from './pages/login/accountcreationpersonal/call-or-text-mfarequest-call/call-or-text-mfarequest-call.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppInterceptor } from './app.interceptor';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDialogConfig,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { HelpComponent } from './pages/login/help/help.component';
import { CallortextmfarequestemailComponent } from './pages/login/accountcreationpersonal/callortextmfarequestemail/callortextmfarequestemail.component';
import { RedumptionhistoryComponent } from './pages/login/accountpage/redumptionhistory/redumptionhistory.component';
import { DialogComponent } from './pages/login/accountcreationoverview/dialog/dialog.component';
import { MyDialogPopUpComponent } from './pages/my-dialog-pop-up/my-dialog-pop-up.component';
import { UserReceivedInvitationLinkComponent } from './pages/user-received-invitation-link/user-received-invitation-link.component';
import { CreateaccountComponent } from './pages/createaccount/createaccount.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountcreationpersonalComponent,
    AccountcreationwalletComponent,
    AccountcreationoverviewComponent,
    AccountpageComponent,
    AccountsettingsComponent,
    OrderdetailsComponent,
    ProductcatalogComponent,
    ProductdescriptionComponent,
    CartreviewComponent,
    ShippingComponent,
    ShippingwithrestrictionsComponent,
    AddressrestrictedComponent,
    OrderconfirmationComponent,
    AllPagesComponent,
    NavigationBarComponent,
    MFARequestComponent,
    MFAChooseMethodComponent,
    MFAEnterCodeEmailComponent,
    MFAEnterCodePhoneTextComponent,
    MFAEnterCodePhoneCallComponent,
    CallOrTextMFARequestComponent,
    CallOrTextMFARequestTextComponent,
    CallOrTextMFARequestCallComponent,
    ForgotPasswordComponent,
    HelpComponent,
    CallortextmfarequestemailComponent,
    RedumptionhistoryComponent,
    DialogComponent,
    MyDialogPopUpComponent,
    UserReceivedInvitationLinkComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    WebStorageModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    NgxMyDatePickerModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true,
  }],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }