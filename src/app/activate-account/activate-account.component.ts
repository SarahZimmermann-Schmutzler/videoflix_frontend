import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {
  decoded_pk = '';
  encoded_pk='';
  sthWrong = false;

  constructor(private authservice: AuthService, private router: Router, public route:ActivatedRoute) { }


  ngOnInit() {
    this.setUserActive();
  }


  async setUserActive() {
    this.encoded_pk = this.route.snapshot.paramMap.get('encoded_pk');
    this.decoded_pk = atob(this.encoded_pk)
  
    try {
      let resp = await this.authservice.activateAccount(
        this.decoded_pk
      );
      this.goToLogin();
    } catch (e) {
      this.sthWrong = true;
    }
  }


  goToLogin() {
    this.router.navigateByUrl('/login')
  }
}
