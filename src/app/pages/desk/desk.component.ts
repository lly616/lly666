import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Game } from 'src/app/types';
import { GameService } from 'src/app/service/game.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
  deleteOpen: boolean = false;
  dialogVisible = false;
  appList: any[] = [];
  current: Game = {
    _id: '',
    userId: '',
    name: 'Steam Link',
    category: 'App',
    thumb: '../../../assets/photos.svg',
    imgList: [],
    authorName: '',
    description: ''
  };
  items = [
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      command: this.handleEdit.bind(this)
    },
    {
      label: 'Delete',
      icon: 'pi pi-fw pi-trash',
      command: this.handleDelete.bind(this)
    }
  ]
  dockItems: any[] = [
    {
      _id: '',
      label: 'Finder',
      icon: "assets/finder.svg"
    },
    {
      _id: '',
      label: 'Photos',
      icon: "assets/photos.svg"
    },
    {
      _id: '',
      label: 'Terminal',
      icon: "assets/terminal.svg"
    }
  ];

  uploadUrl = environment.baseUrl + 'upload'

  uploadHeader = new HttpHeaders({
    'authorization': 'Bearer ' + localStorage.getItem('token')
  });

  categories = ['shoot','3d','iosocket','card']

  constructor(
    private gameService: GameService, 
    private message: MessageService,
    private confirmationService: ConfirmationService, private activatedRoute : ActivatedRoute,private router: Router) { }

  test(row: Game) {
    this.current = row
  }

  uploadOne(res: any) {
    this.current.thumb = res.originalEvent.body.data[0];
    this.message.add({ severity: 'success', summary: 'Image upload', detail: 'upload successfully' });
  }

  handleEdit() {
    this.dialogVisible = true;
  }

  handleDelete(id: string) {
    this.deleteOpen = false;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          this.confirmDelete(this.current._id);
      }
  });
  }

  toDetail(id: string) {
    if (!id) {
      return;
    }
    this.router.navigate(['/detail'],{ queryParams: { id:id,username: this.activatedRoute.snapshot.queryParams['username'] }});
  }

  confirmDelete(id: string) {
    this.gameService.deleteGame(id).subscribe(res => {
      if (res.success) {
        this.message.add({ severity: 'success', summary: 'Successful', detail: 'Game Deleted', life: 3000 });
        this.appList = this.appList.filter(item => item._id !== id);
      }
    })
  }

  updateGame() {
    this.gameService.updateGame(this.current).subscribe(res => {
      if (res.success) {
        this.message.add({ severity: 'success', summary: 'Successful', detail: res.message, life: 3000 });
      } else {
        this.message.add({ severity: 'info', summary: 'Successful', detail: res.message, life: 3000 });
      }
      this.dialogVisible = false
    })
  }

  ngOnInit(): void {
    // document.oncontextmenu = function () { return false; };
    this.gameService.initOwnGame().subscribe(res => {
      console.log(res)
        this.appList = res.Documents;
        // (res.data as Array<Game>).forEach(item => {
        //   this.dockItems.push({
        //     _id: item._id,
        //     icon: item.thumb,
        //     label: item.name
        //   })
        // })
      
    })
  }

}
