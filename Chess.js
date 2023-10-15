const arrayOfFiles = document.querySelectorAll(".files");
const fileNameArray = ["a", "b", "c", "d","e","f","g","h"];
const pieceNameArray = ["r", "n", "b", "q", "k", "b", "n", "r"]

let fileNumber=7;
for (const i of arrayOfFiles){
    let counter = 1;
    for (const j of i.children){
        let square = fileNameArray[fileNumber]+counter; 
        j.setAttribute("id", square)

    function pieceName(e){
        for (const m of j.children){
            m.setAttribute("id", pieceNameArray[fileNumber]+e)
    }
}
    if (counter==8||counter==1){
        pieceName(square);
    }
    if (counter==7||counter==2){
    for (const m of j.children){
        m.setAttribute("id", "p"+square)
        console.log(m);}
    }

        counter++
    }
    fileNumber--;
}

//takes input and moves the image

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let userInput = document.getElementById('userInput');
    let userInput2 = document.getElementById('userInput2');
    let userInput_value = document.getElementById('userInput').value;
    let userInput2_value = document.getElementById('userInput2').value;

    var img = document.getElementById(userInput_value)
    var img2 = document.getElementById(userInput2_value)

    img2.append(img);

    console.log(img2)

    

    document.getElementById('userInput').value = '';
    document.getElementById('userInput2').value = '';
  });




