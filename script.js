var a = document.querySelectorAll('.strategy ul li ')

for (let i=0;i<a.length;i++){
    a[i].onclick =function(){
        for (let j=0;j<a.length;j++){
         if (j!=i){
    a[j].classList.remove("styleddiv") 
}
        }

        a[i].classList.toggle("styleddiv")    }
    
}