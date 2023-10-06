import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public message!: string;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile = (files:any) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.httpclient.post('https://localhost:44372/api/Upload', formData, { reportProgress: true, observe: 'events' }).subscribe(
      event => {
        if(event.type === HttpEventType.Response){
          this.message = 'Upload Success';
          this.onUploadFinished.emit(event.body);
        }
      }
    )
  }

}
