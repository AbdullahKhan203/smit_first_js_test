//  submit



// function loginUser(){
//  let userName=document.getElementById('user_name').value;
//  if(userName=""){
//     // Toastify({

//     //     text: "This is a toast",
        
//     //     duration: 3000
        
//     //     }).showToast();
//     console.log("enter your name");
//  }else {
//     greeting = "Good evening";
//   };
 



 
// }

function userName(){

    let userName = document.getElementById('user_name').value;
    if(userName==""){
        // console.log("plz enter name");
        Toastify({

            text: "Plz enter your full name",
            
            duration: 3000
            
            }).showToast();




    }else{
        console.log(userName);
    }
}
    



// use Email
function userEmail(){

    let user_email=document.getElementById("user_email").value;
    if(user_email==""){
        Toastify({

            text: "Plz enter your Email",
            
            duration: 3000
            
            }).showToast();

    }else{
        console.log(user_email);
    }
}




function userPassword(){

    let user_password=document.getElementById("user_password").value;
    if(user_password==""){
        Toastify({

            text: "Plz enter your Password",
            
            duration: 3000
            
            }).showToast();

    }else{
        console.log(user_password);
    }
}










function loginUser(){

//   let name=  userName();

//   let email= userEmail();


//   let password=userPassword();
 let name=document.getElementById('user_name').value;
 let email=document.getElementById('user_email').value;
 let password=document.getElementById('user_password').value;

//    if( name=="" && (!email=="abc@gmail.com" && !password ==123456)){
//      Toastify({
 
//          text: "Plz enter your complete information",
         
//          duration: 3000
         
//          }).showToast();
     
 
//    }else{
//      Toastify({
 
//          text: "Congratulaion,you are login",
         
//          duration: 3000
         
//          }).showToast();
 
 
//    }



if(name==""){
    Toastify({
        text: "Plz enter your complete information",
         
          duration: 3000
         
          }).showToast();



}
else if(!name==""){

   if(email=="admin@user.com" && password==123456){

       
    //    Toastify({
    //               text: "Congratulation,you are login",
                   
    //                 duration: 3000
                   
    //                 }).showToast();
                    
                    
                    
                    
                    // window.location.href("homepage.html");
                    window.location.assign("homepage.html");
          
                   
                   
                   



     

   } else{
       Toastify({
           text: "Plz enter your complete information",
            
             duration: 3000
            
             }).showToast();

   }

}


}








 
   
 
 
 
 
 



