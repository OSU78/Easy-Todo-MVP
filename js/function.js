let label=document.querySelector(".input_label")
let input=document.querySelector(".input-custom")


function hideLable(){
    if(input.value!=""){
        label.style.top="5px";   
    }
    else if (input.value==""){
        label.style.top="40%";
        label.style.background="none";
    }
    console.log("hideLble1")
}
function hideLable2(){
        label.style.top="5px";
        label.style.background="linear-gradient(0deg, rgba(205, 205, 205, 0) 0%, rgba(249, 251, 254, 1) 41%)";
        console.log("hideLable2")
}



function removeCl(n,tabCat){
    for(let i=0;i<tabCat.length;i++){
        if(i!=n){
            cat[i].className="cat"
        }
    }
    
}

function deleteTask(id){
    console.log(id)
    document.querySelector(`[item="NTask_${id}"]`).parentNode.classList.toggle("delTaskAnimation")
    localStorage.removeItem(`${id}`)
   window.setTimeout(()=>{document.querySelector(`[item="NTask_${id}"]`).parentNode.remove()},220) 
}




