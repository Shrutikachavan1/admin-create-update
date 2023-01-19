import { Component,OnInit,TemplateRef, ViewChild} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { WindowComponent } from '../../modal-overlays/window/window.component';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NbWindowService } from '@nebular/theme';
import { WindowFormComponent } from '../../modal-overlays/window/window-form/window-form.component';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { UserAuthService } from '../../ui-features/service/user-auth.service'
;
import { sortAlphaDown } from 'ngx-bootstrap-icons';
@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent implements OnInit{
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;
  UsersRoleList:any;


 

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private windowService: NbWindowService,private userServ:UserAuthService) {
    const data = this.service.getData();
    this.source.load(data);
  }
  myForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.minLength(2),Validators.maxLength(20)]),
    
  })
 
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Create User',
        // context: {
        //   text: 'some text to pass into template',
        // },
      },
    );
  }

  // openWindowForm() {
  //   this.windowService.open(WindowFormComponent, { title: `Window` });
  // }

  // openWindowWithoutBackdrop() {
  //   this.windowService.open(
  //     this.disabledEscTemplate,
  //     {
  //       title: 'Window without backdrop',
  //       hasBackdrop: false,
  //       closeOnEsc: false,
  //     },
  //   );
  // }

  get fdata(){
    return this.myForm.controls;
  }
  ngOnInit(){
   this.userServ.GetalluserRole().subscribe((res:any)=>{
     this.UsersRoleList=res;
   })
  }
    postData()
    {
      let formdata = this.myForm.getRawValue();
      console.log(formdata)
      this.userServ.postRole(formdata).subscribe((res:any)=>{
        if(res.err==1){
          Swal.fire(`${res.msg}`,'','warning')
        }
        if(res.err==0){
          Swal.fire(`${res.msg}`,'','success')
        }

      })
     
      
    }
  
    update(id:any){
      console.log(id)
    }
}
