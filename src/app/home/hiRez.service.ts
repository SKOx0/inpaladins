import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import * as md5 from 'md5';
import * as moment from 'moment';

import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';


const routes = {
  // tslint:disable-next-line:max-line-length
  session: (signature: string) => `/createsessionJson/${environment.hiRez.devId}/${signature}/${moment().utc().format('YYYYMMDDHHmmss')}`,
  getPlayer: () => '/getplayerJson/',
  getMatchHistory: () => '/getmatchhistoryJson/'
};

export interface HiRezContext {
  // The quote's category: 'nerdy', 'explicit'...
  d: string;
}

@Injectable()
export class HiRezService {

  sessionId: string;


  constructor(private http: Http,
    private toastr: ToastrService,
    private translation: TranslateService,
    private _jsonp: Jsonp) { }

  createSession(): Observable<any> {
    return this.http.get(routes.session(this.createSignature('createsession')), { cache: false })
      .map((res: Response) => res.json())
      .map(body => {
        this.sessionId = body.session_id;
        return body;
      })
      .catch(() => Observable.of('Error, could not create hi-rez session'));

  }

  getPlayer(playerName: string): Observable<any> {
    return this._jsonp.get(`${routes.getPlayer()}${this.getMethodPath('getplayer')}/${playerName}`, { cache: true })
      .map((res: Response) => { console.log(res); return res.json(); });
  }

  getMatchHistory(playerName: string): Observable<any> {
    return this._jsonp.get(`${routes.getMatchHistory()}${this.getMethodPath('getmatchhistory')}/${playerName}`, { cache: true })
      .map((res: Response) => res.json());
  }

  private getMethodPath(method: string, ...args: string[]): string {
    if (!this.sessionId) {
      this.translation
        .get('GenericError')
        .subscribe(console.log);

      return;
    }
    return `${environment.hiRez.devId}/${this.createSignature(method)}/${this.sessionId}/${moment().utc().format('YYYYMMDDHHmmss')}`;
  }

  private createSignature(method: string): string {
    return md5(`${environment.hiRez.devId}${method}${environment.hiRez.authKey}${moment().utc().format('YYYYMMDDHHmmss')}`);
  }
}
