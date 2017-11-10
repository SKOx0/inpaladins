import { Component, OnInit } from '@angular/core';

import { HiRezService } from '../../home/hiRez.service';

import { I18nService } from '../../core/i18n.service';

import { environment } from '../../../environments/environment';

const imageLogo = require('../../../assets/images/logo.png');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageLogo: string;
  menuHidden = true;
  platform: string;
  playerName: string;

  constructor(private i18nService: I18nService, private hiRezService: HiRezService) {
    this.imageLogo = imageLogo;
    this.platform = this.platform || 'PC';
  }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  onSearchPlayer() {
    this.hiRezService
      .getPlayer(this.playerName)
      .subscribe(console.log, console.log);
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

  setPlatform(platform: string) {
    this.platform = platform;
  }
  get platforms(): string[] {
    return environment.supportedPlatforms;
  }

}
