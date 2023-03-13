const yourText = document.querySelector("#yourText");
        const robotText = document.querySelector("#robotText");
        const resultText = document.querySelector("#resultText");
        const choiceBtns = document.querySelectorAll(".choiceBtn");
        let your;
        let robot;
        let result;
        
        choiceBtns.forEach(button => button.addEventListener("click", () => {
        
            your = button.textContent;
            computerTurn();
            yourText.textContent = `Your choice: ${your}`;
            robotText.textContent = `Robot choice: ${robot}`;
            resultText.textContent = checkWinner();
        }));
        
        
        function computerTurn(){
        
            const randNum = Math.floor(Math.random() * 3) + 1;
        
            switch(randNum){
              case 1:
                robot = "ROCK";
                break;
              case 2:
                robot = "PAPER";
                break;
              case 3:
                robot = "SCISSORS";
                break;
            }
        }
        function checkWinner(){
            if(your == robot){
              return "Draw!";
            }
            else if(robot == "ROCK"){
              return (your == "PAPER") ? "Congrats! You Win!" : "You Lose! Try Again!"
            }
            else if(robot == "PAPER"){
              return (your == "SCISSORS") ? "Congrats! You Win!" : "You Lose! Try Again!"
            }
            else if(robot == "SCISSORS"){
              return (your == "ROCK") ? "Congrats! You Win!" : "You Lose! Try Again!"
            }
        }