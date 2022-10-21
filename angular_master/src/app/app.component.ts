import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  serverElements = [{type: 'server', name: 'Somethinc', content: 'Skincare'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Pepsodent!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
