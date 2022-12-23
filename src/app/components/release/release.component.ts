import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/types';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { AppService } from 'src/app/service/app.service';
import { GameService } from 'src/app/service/game.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})

export class ReleaseComponent implements OnInit {
  game: any = {
    name: '',
    username: '',
    des: ''
  }
  infomraitonnamefile:any
  uploadedFiles: any[] = [];
  fileinformation:any;

  app = this.appService

  uploadUrl = environment.baseUrl + 'upload'

  uploadHeader = new HttpHeaders({
    'authorization': 'Bearer ' + localStorage.getItem('token')
  });

  categories = ['shoot','3d','iosocket','card']

  constructor(private appService: AppService,
    private gameService: GameService,
    private message: MessageService) { }



  createGame() {
    var submitData = new FormData();
    submitData.append('file', this.fileinformation)
    submitData.append('name',this.game.name)
    submitData.append('username',this.game.username)
    submitData.append('des',this.game.des)
    console.log(this.infomraitonnamefile)
    this.gameService.createGame(submitData).subscribe(res => {
      if (res != null) {
        this.message.add({ severity: 'success', summary: 'Game', detail: res.message });
        this.app.close();
      } else {
        this.message.add({ severity: 'info', summary: 'Game', detail: res.message });
      }
    })
  }
  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        console.log(file)
        this.fileinformation.push(file);
    }
    this.message.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  myUploader(event:any) {
    console.log(event.files[0])
    this.fileinformation = event.files[0]
  
   this.infomraitonnamefile =event.files[0].name.slice(-4,event.files[0].name.length)

  
  }
  ngOnInit(): void {
  }

}
