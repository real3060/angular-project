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
  servers = ['testServer', 'testServer 2'];


  constructor() {
  }

  ngOnInit() {
  }

  onStatusChange() {
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
