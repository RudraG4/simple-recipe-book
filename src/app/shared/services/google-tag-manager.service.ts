import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GoogleTagManagerService {
  loadGTM(gtmId: string) {
    this.loadGTMScripts(gtmId);
  }

  private loadGTMScripts(gtmId: string) {
    const gtmScript = `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window, document,'script','dataLayer','${gtmId}');</script>`;
    const gtmIframeScript = ` <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;
    const headScript = document
      .createRange()
      .createContextualFragment(gtmScript);
    const bodyScript = document
      .createRange()
      .createContextualFragment(gtmIframeScript);
    document.head.insertBefore(headScript, document.head.firstChild);
    document.body.insertBefore(bodyScript, document.body.firstChild);
  }
}
