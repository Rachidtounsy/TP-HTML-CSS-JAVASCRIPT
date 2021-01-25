/* Vos données  */
var x;
var y;

      function alea()
      {
               x=Math.floor(Math.random()*100);  
               x1=Math.floor(Math.random()*(-100));
               var inp1=document.getElementById("inp1"); 
               var inp2=document.getElementById("inp2");  
              inp1.value=x+x1;
              y=Math.floor(Math.random()*100);  
              y1=Math.floor(Math.random()*(-100));     
              inp2.value=y+y1;    

       }
/* Votre solution:  */ 
 


function Viréfier()
{                            
                              var inp1=document.getElementById("inptable1");
                              var inp2=document.getElementById("inptable2");
                              var inp3=document.getElementById("inptable3");
                              var inp4=document.getElementById("inptable4");            
 
                              if(inp1.value=="" || inp2.value==""|| inp3.value=="" || inp4.value=="")
                              { 
                                         alert(" Attention !! veuillez remplir tous les champs")  ;
                                         return;                                        
                               }
 var t1=document.getElementById("inp1");
var t2=document.getElementById("inp2");    
var n1=  parseFloat(t1.value) ;  
var n2=  parseFloat(t2.value);   


var z=somme(n1,n2) ;
var t=Lasoustraction(n1,n2) ;
var m=Multiplication(n1,n2) ;
var di=division(n1,n2) ;
 
if (parseFloat(inp1.value)==z   && parseFloat(inp2.value)==t  && parseFloat(inp3.value)==m  && parseFloat(inp4.value)==di     )
 {
    alert(" Bravo, toutes les opérations sont correctes. ")  ;    

 }
 else  
 {
     alert(" Attention !! Bien focalisé il y a une erreur dans les opérations. ")  ;                          
 }

  
}


       /* La correction :  */
       function somme(a,b)    
       {
              var s=a+b;
               return s;                        
          }     
          function Lasoustraction(a,b)    
       {
              var k=a-b;
               return k;                        
          }  
          function Multiplication(a,b)    
       {
              var M=a*b;
               return M;                        
          } 
          function division(a,b)     
       {
              var d=a/b;
               return d;                        
          } 
       
    function Solution()
    {    
var t1=document.getElementById("inp1");
var t2=document.getElementById("inp2");         
      
var inp1C=document.getElementById("inp1C");  
var inp2C=document.getElementById("inp2C");  
var inp3C=document.getElementById("inp3C");  
var inp4C=document.getElementById("inp4C");  
var n1=  parseFloat(t1.value) ;  
var n2=  parseFloat(t2.value);   
var z=somme(n1,n2) ;
inp1C.value=z;
inp1C.style+="classinp1"
var t=Lasoustraction(n1,n2) ;
inp2C.value=t;
inp2C.style+="classinp1";

var t=Multiplication(n1,n2) ;
inp3C.value=t;
inp3C.style+="classinp1"
var di=division(n1,n2) ;
inp4C.value=di;
inp4C.style+="classinp1";

    }
