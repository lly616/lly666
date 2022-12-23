import { Component, OnInit } from '@angular/core';
import { Game,Comment } from 'src/app/types';
import { GameService } from 'src/app/service/game.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CommentService } from 'src/app/service/comment.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  modalVisible = false;
  defaultList = ['../../../assets/hero.png','../../../assets/detail.png']
  game: any = {
    _id: '',
    userId: '',
    name: '',
    category: 'App',
    thumb: '../../../assets/photos.svg',
    imgList: [
      '../../../assets/hero.png',
      '../../../assets/detail.png',
      '../../../assets/hero.png'
    ],
    des: ''
  }
  userfomr:any={
    name:''
  }
  comment: any = {
    id: '',
    username:'',
    comment:''
  }
  likeli:any={
    username:'',
    friendsname:'',
    name:''
  }
  comments: Comment[] = [];
  commenti:any


  likes:any
  constructor(private route: ActivatedRoute,
    private gameService: GameService,
    private message: MessageService,
    private commentService: CommentService,private activatedRoute : ActivatedRoute) { }

  handleComment() {
    this.modalVisible = true;
  }

  initComment(id: any) {
    this.commentService.initComment(id).subscribe(res => {
      console.log(res)
        this.comments = res.data as any;

    })
  }


  releaseComment() {

      this.comment.name =  this.activatedRoute.snapshot.queryParams['id']

    console.log(this.comment)
    this.commentService.createComment(this.comment).subscribe(res => {
        this.message.add({ severity: 'success', summary: 'Comment', detail: 'successs' });
        window.location.reload()
    })
  }

  getAvatarLabel(str: string) {
    return str.substring(0,1)
  }

  ngOnInit(): void {

      this.comment.gameId = this.activatedRoute.snapshot.queryParams['id'] ;
      this.userfomr.name = this.activatedRoute.snapshot.queryParams['id']
      console.log(this.userfomr.name)
      this.gameService.getGameInfo(this.userfomr).subscribe(res => {
        console.log(res)
        this.game = res[0] as any

      })

      this.commentService.initComment(this.userfomr).subscribe(res => {
         console.log(res)
         this.commenti = res
         console.log(res)
        })
      this.showlike()
    }

delete(data:any){
  this.gameService.delete(data).subscribe(res => {
    console.log(res)
    this.message.add({ severity: 'success', summary: 'success', detail: 'success' });

    window.location.href = '/#/'

  })
}
deletecomment(data:any){
  this.commentService.delete(data).subscribe(res => {
    this.message.add({ severity: 'success', summary: 'success', detail: 'success' });
    window.location.reload()
    console.log(res)
   })

}
like(data:any){

  this.likeli.username=data;
  console.log(data)
  this.likeli.friendsname= this.activatedRoute.snapshot.queryParams['username'];
  this.likeli.name= this.activatedRoute.snapshot.queryParams['id'];
  this.commentService.like(this.likeli).subscribe(res => {
    this.message.add({ severity: 'success', summary: 'success', detail: 'success' });
    console.log(res)
   })
}

showlike(){
  this.likeli.name= this.activatedRoute.snapshot.queryParams['id'];
  this.commentService.showlike(  this.likeli).subscribe(res => {
    console.log(res)
    this.likes =res
    console.log(this.likes)
   })
}
}
