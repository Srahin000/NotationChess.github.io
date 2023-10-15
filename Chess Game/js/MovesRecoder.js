document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = document.getElementById('userInput').value;

    if (userInput == "pa1"){
        console.log(userInput)
    }

    document.getElementById('userInput').value = '';
  });
  