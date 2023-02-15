var items = []
let inputlist = document.getElementById("NTbutton")
let taskbox = document.querySelector(".list")
var a = 0
let Li = ""
function push() {
    Li = ""
    var arr = []
    Li += `<li id = "lis1">
                <input type = "checkbox" class = "check">
                <p class = "tasks" id = "${a}"> ${inputlist.value} </p>
                <button class = "trash" onclick = "del(${a})" >
                    <img class = "image" src="http://atlas-content-cdn.pixelsquid.com/stock-images/trash-can-dustbin-ENAKKRB-600.jpg" >
                </button>

            </li>`

    arr.push(Li)
    arr.push(a)
    arr.push(false)
    items.push(arr)
    inputlist.value = null
    taskbox.innerHTML += Li
    a++
    // console.log(items)
}

function display() {
    Li = ""
    taskbox.innerHTML = ""
    for (const element of items) {
        Li += `${element[0]}`
    }
    taskbox.innerHTML = Li
}
function del(id) {
    for (var i = 0; i < items.length; i++) {
        if(items[i][1] == id){
            items.splice(i, 1)
            break
        }
    }
    display()
}