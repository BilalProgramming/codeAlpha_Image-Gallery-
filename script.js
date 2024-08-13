 let center_ImageBox=document.querySelector(".center_ImgBox");
 let center_Img=document.querySelector(".center_Img");
 let close_Btn=document.querySelector("#close_Btn");

 
 let image_Gallery=document.querySelectorAll(".openImg");
 
 //make arrAY OF images
 let arr=Array.from(image_Gallery);
 
 
 arr.forEach(images=>{
 images.addEventListener("click",(evt)=>{
   center_Img.src=images.src;
    center_ImageBox.style.display="flex";


 


 




 })
 })
 close_Btn.addEventListener("click",()=>{

    center_ImageBox.style.display="none";
 })