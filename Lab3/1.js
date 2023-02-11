var items = []
let inputlist = document.getElementById("NTbutton")
let taskbox = document.querySelector(".list")
function push() {
    let Li = ""
    Li += `<li id = "lis1">
                <input type = "checkbox" class = "check">
                <p class = "tasks"> ${inputlist.value}</p>
                <button class = "trash">
                    <img class = "image" src="http://atlas-content-cdn.pixelsquid.com/stock-images/trash-can-dustbin-ENAKKRB-600.jpg" >
                </button>
                <hr id = "hr">
            </li>`
    inputlist.value = null
    taskbox.innerHTML += Li
}
