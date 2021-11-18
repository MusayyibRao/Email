import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  
data={

to:"",
subject:"",
message:""
}
  login: any;
  constructor(private email:EmailService,private snack:MatSnackBar, ) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {


    if(this.data.to=='',Validators.email || this.data.subject=='' || this.data.message=='')
    {
 this.snack.open("field can't be empty","OK");
return;

    }  



    console.log("email send successfully.......");
    alert("email send successfull....");

 
    //console.log("Data",this.data);  

    this.email.sendEmail(this.data).subscribe(
     
      response=>
      {
         console.log(response)
      },

      error=>{
      console.log(error)

      }


    )
  
  }
}




