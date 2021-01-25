
function Verifier()
 { 
          var t1=document.getElementById("d1");      
          var rg= new RegExp('[a-z]$','g');        
          if(t1.value=="")      
          {                 
                 alert("Attention !! veuillez donner un nom ");
                return; 
          }     
         if(rg.test(t1.value)==false)
         {
            alert("Attention !! Le nom est obligatoire ne doit pas contenir de chiffre ou caractères spéciaux")                                                  
                return;                            
         }
 }

function AfficherDiv() 
{
      var input1=document.getElementById("OK");
      var input2=document.getElementById("Non");
      var DivGlobale=document.getElementById("Div");
      if(input1.checked==true) 
   {        
    DivGlobale.style.display="block";
       return ;
   }
   if(input2.checked==true) 
   {        
    DivGlobale.style.display="none";
       return ;
   }

}
