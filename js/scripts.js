let cat = document.querySelectorAll(".cat")
let taskValue = ""
let categorieValue = ""
let taskArray = [];
let t = [
    []
];
let btn = document.querySelector(".form_btn")
for (let i = 0; i < cat.length; i++) {
    cat[i].addEventListener("click", () => {
        console.table(cat[i].classList[0]);
        switch (cat[i].innerText.toLowerCase()) {
            case "urgent":
                console.log('urgent');
                cat[i].classList.toggle("urgent")
                categorieValue = "urgent"
                removeCl(i, cat)

                break;
            case "etude":
                console.log('etude');
                cat[i].classList.toggle("etude")
                categorieValue = "etude"
                removeCl(i, cat)
                break;

            case "autre":
                console.log('Autre');
                cat[i].classList.toggle("autre")
                categorieValue = "autre"
                removeCl(i, cat)

                break;
            case "course":
                console.log('Course');
                cat[i].classList.toggle("course")
                categorieValue = "course"
                removeCl(i, cat)
                break;

        }
    })

}

btn.addEventListener("click", (e) => {
    taskValue = document.getElementById("tacheInput").value
    e.preventDefault();
    if (taskValue.trim() == "" || categorieValue.trim() == "") {
        console.log("Veuillez remplir tout les champs")
        return 0;
    }
    console.log("Ajout de la tache")
    let itemId = Math.floor(Math.random() * 785410);

    localStorage.setItem(itemId, [itemId, taskValue, categorieValue.trim()]);
    let task = `<div class="flexRow"><p>${taskValue}</p> <div class="taskDel" item="NTask_${itemId}" onclick="deleteTask(${itemId})">Delete</div></div>`
    let catTask = document.querySelectorAll("." + categorieValue.trim())[1]


    catTask.innerHTML += task

})




window.setTimeout(() => {



    console.log("test")

    for (let i = 0; i < localStorage.length; i++) {
        t.push(localStorage.getItem(localStorage.key(i)).split(","))

    }



    for (let i = 1; i < t.length; i++) {

        let catTask = document.querySelectorAll("." + t[i][2])[1] ? document.querySelectorAll("." + t[i][2])[1] : document.querySelectorAll("." + t[i][2])
            //console.table(catTask)
        for (let j = 0; j < catTask.length; j++) {
            catTask[j].innerHTML += `<div class="flexRow"><p>${t[i][1]}</p> <div class="taskDel" item="NTask_${t[i][0]}" onclick="deleteTask(${t[i][0]})">Delete</div></div>`
        }
    }


}, 800)