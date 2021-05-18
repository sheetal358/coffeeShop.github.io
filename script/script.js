
EventListener();
function EventListener(){
//preloader
const ui=new UI();


//nav bar
const btn=document.querySelector(".navbar-btn");
btn.addEventListener('click',function(){
  ui.shownav();
})
 //control video
 const switch1 = document.querySelector('.video-switch');
 switch1.addEventListener('click',function(){
     ui.VideoControls();
 });

//drinks
const submit1=document.querySelector('.drink-form');
submit1.addEventListener('submit',function(event){
   
    event.preventDefault();
    const firstname=document.querySelector('.firstname').value;
    const lastname=document.querySelector('.lastname').value;
    const email=document.querySelector('.email').value;

    let value=ui.checkempty(firstname,lastname,email);
    if(value){
        let customer1 = new customer(firstname,lastname,email);
        console.log(customer1);
        ui.addcustomer(customer1);
        
        ui.showfeedback('thnx for the details','success');
        ui.clearfields();

    }
    else{
        ui.showfeedback('some form values empty','error');
    }

})

//display model
const links = document.querySelectorAll('.work-item-icon');
links.forEach(function(item){
    item.addEventListener('click',function(event){
        event.preventDefault();
        ui.zoomin(event);
    })
})
//for close
   document.querySelector('.work-modal-close').addEventListener('click',function(){
        ui.close();
    })


//booking a table
const book=document.querySelector(".submit1");
book.addEventListener("click",function(event){
    event.preventDefault();
    ui.book();
})



}


//-----------------------------------------------------------------------------------//
function UI(){

}

//shownav
UI.prototype.shownav=function(){
    const nav= document.querySelector('.nav');
   nav.classList.toggle('show');
}
//play/pause the vdeo
UI.prototype.VideoControls=function(){
    let btn = document.querySelector('.video-switch-btn');
    if(!btn.classList.contains('btnslide')){
        btn.classList.add('btnslide')
        document.querySelector('.video-item').pause();

       }
    else {
        btn.classList.remove('btnslide')
        document.querySelector('.video-item').play();
    }
}
//check for empty value
UI.prototype.checkempty=function(firstname,lastname,email){
    let result;
    if(firstname===''|| lastname===''|| email===''){
      
    result=false;
    }
    else{
        result=true;
    }
    return result;
}
UI.prototype.showfeedback=function(text,type){
    if(type==='success'){
        let feedback = document.querySelector('.drink-form-feedback');
        feedback.classList.add('success');
        feedback.textContent=text;
        
          setTimeout(function(){
              document.querySelector('.drink-form-feedback').classList.remove('success');

          },3000) 
        }
         else if(type==='error'){
        let feedback = document.querySelector('.drink-form-feedback');
        feedback.classList.add('error');
        feedback.innerText=text;
       
         setTimeout(function(){
              document.querySelector('.drink-form-feedback').classList.remove('error');

          },3000) 
        }
    }

    //add customer
UI.prototype.addcustomer=function(customer1){
    const images1 = [1,2,3];
    let random =Math.floor(Math.random()*images1.length);
    //console.log(random);
   const div=document.createElement('div');
   div.classList.add('person');
   div.innerHTML=`<img src="img/person${random}.jpg" alt="image" class="img-person" height="100px" width="100px">
   <h4 class="name-person">${customer1.firstname}</h4>
   <h4 class="lastname-person">${customer1.lastname}</h4>
   </div>`
   document.querySelector('.drink-card-list').appendChild(div);
    

}

//clear fields
UI.prototype.clearfields=function(){
    document.querySelector('.firstname').value='';
   document.querySelector('.lastname').value='';
   document.querySelector('.email').value='';

}

//show modal
UI.prototype.zoomin=function(event){
  //  console.log(event.target.parentElement); // it shows where i m clicking
    if(event.target.parentElement.classList.contains('work-item-icon')){
        let id=event.target.parentElement.dataset.id
           // console.log(id);

           const modal=document.querySelector('.work-modal');
           const  modalitem=document.querySelector('.work-modal-item');
           modal.classList.add('work-modal-show');
           modalitem.style.backgroundImage=`url(img/img${id}.jpg)`;
            
    }
    }
    //hide modal

    UI.prototype.close=function(){
        document.querySelector('.work-modal').classList.remove('work-modal-show');

    }
    
    UI.prototype.book=function(){
        let person=document.querySelector("#person");
        let date=document.querySelector("#date");
        let time=document.querySelector("#time");
        let value1=person.value;
        let value2=date.value;
        let value3=time.value;
        console.log(value1);
        console.log(value2);
        console.log(value3);

        let div=document.createElement("div");
        div.classList.add("book");
        div.innerHTML=`  
        <h5> person:${value1}</h5>
        <h5>date: ${value2}</h5>
        <h5>time: ${value3}</h5>`
        document.querySelector(".booking-info").appendChild(div);
    }


    function customer(firstname,lastname,email){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
    }

   WebChat.default.init({
	selector:"#webchat",
	customData:{"language":"en"},
	socketUrl:"https://localhost:5005",
	socketpath:"/socket.io",
	title:"Sheetal chatbot",
	subtitle:"first bot",
})
   











