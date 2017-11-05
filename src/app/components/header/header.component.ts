import { Component, OnInit } from '@angular/core';

import { I18nService } from '../../core/i18n.service';

const imageLogo = require('../../../assets/images/logo.png');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageLogo: string;
  menuHidden = true;

  constructor(private i18nService: I18nService) {
    this.imageLogo = imageLogo;
  }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

}
