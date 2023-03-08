import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albumdetail',
  templateUrl: './albumdetail.component.html',
  styleUrls: ['./albumdetail.component.css']
})
export class AlbumdetailComponent implements OnInit {
  newTitle:string
  albums: Album[];
  album : Album
  
  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums
    })
  }
  constructor(
    private route: ActivatedRoute,
    private albumService : AlbumService
  ) {
    this.newTitle = "",
    this.albums = [],
    this.album = {} as Album
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'))
      this.albumService.getAlbum(id).subscribe((album)=>{
        this.album = album
      })
    })
  }

  returnback(){
    window.history.back()
  }

  updateAlbum(id:any,userId:any){
    if(this.newTitle!=""){
      const updatedAlbum:Album = {
      userId : userId,
      id : id,
      title : this.newTitle
    }
    this.albumService.updateAlbum(updatedAlbum).subscribe((updatedAlbum) => {
      this.album.title = this.newTitle
      this.newTitle = ""
    })
    }else return
    
    
  }
}
