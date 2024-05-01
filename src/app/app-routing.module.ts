import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { RegisterComponent } from './register/register.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'resetPassword/:encoded_pk', component:PasswordResetComponent},
  {path: 'helpPassword', component:ForgottenPasswordComponent},
  {path: 'activateAccount/:encoded_pk', component:ActivateAccountComponent},
  {path: 'data', component:DataProtectionComponent},
  {path: 'legal', component:LegalNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
