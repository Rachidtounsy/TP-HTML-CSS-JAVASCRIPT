 

 function Verifier()
 {
          var t1=document.getElementById("t1");
          var d1=document.getElementById("d1");
          var rg= new RegExp('^(067|068|069)[0-9]{7,}$','g');
          if(rg.test(t1.value))              
          {
             d1.innerHTML= " voutr Numero de Télephone  est    :+ "+t1.value ;
             var a=new Audio("message3.wav");
             a.play();
                 return;                            
          }
          if(t1.value=="")      
          {
                  d1.innerHTML= " Attention !! veuillez donner un Numero de Télephone ";  
                  d1.className+= " c2";
                  var a=new Audio("message1.wav");
                  a.play();
                return; 
          }     
         if(rg.test(t1.value)==false)
         {
                           
                              d1.innerHTML= " Attention !!  vous devez entrer 10 nombres pures"; 
                              d1.className+="   c3";
                              var a=new Audio("message2.wav");
                  a.play();                    
                return;                            
         }
 }
 function AfficherDiv()
 {
       var input1=document.getElementById("OK");
       var DivGlobale=document.getElementById("idDivGlobale");
       if(input1.checked==true) 
    {        
        DivGlobale.className+= " divGlobale2 ";
    }
    else
    {
        DivGlobale.className="divGlobale1"
    }
       

 }