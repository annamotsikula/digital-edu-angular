import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TOKEN_KEY } from '../core/constants';
import { LocalStorageService } from '../core/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }
  onLogOut() {
    this._auth.logOut();
    this._router.navigate(['/'])
  
    
    

  }

}
