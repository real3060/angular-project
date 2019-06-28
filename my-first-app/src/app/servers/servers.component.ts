import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverStatus = 'server were not added';
  serverName = '';
  serverCreated = false;


  constructor() {
  }

  ngOnInit() {
  }

  onStatusChange() {
    this.serverStatus = 'server was added ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
