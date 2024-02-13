// const player1El = document.getElementById("player-1");
// const player2El = document.getElementById("player-2");
// const player3El = document.getElementById("player-3");
// const player4El = document.getElementById("player-4");
const player1El = document.getElementById("player1-text");
const player2El = document.getElementById("player2-text");
const player3El = document.getElementById("player3-text");
const player4El = document.getElementById("player-4");
const fishButton = document.getElementById("fish");
const waterButton = document.getElementById("water");
const clapButton = document.getElementById("clap");
const turn = document.getElementById("turn")

let currentRound = 1;
const maxRound = 3;
let clicked = 0;

let machli = 1;
let paani = 1;
let chhapak = 1;

const machliVal = 1;
const paaniVal = 2;
const chhapakVal = 3;

const startRound = async () => {
  await wait(1.5);

  player1();
  // console.log("after player 1", machli, paani, chhapak);
  checkIfRoundCompleted();

  await wait(1.5);

  player2();
  // console.log("after player 2", machli, paani, chhapak);
  checkIfRoundCompleted();

  await wait(1.5);

  player3();
  // console.log("after player 3", machli, paani, chhapak);
  checkIfRoundCompleted();
};

let currentUserInput = "";
let expectedVal;

fishButton.addEventListener("click", () => {
  handleUserChoice(machliVal);
});
waterButton.addEventListener("click", () => {
  handleUserChoice(paaniVal);
});
clapButton.addEventListener("click", () => {
  handleUserChoice(chhapakVal);
});

const handleUserChoice = (val) => {
  // console.log(`${val}, ${expectedVal}`);

  if (val !== expectedVal) {
    console.log("Game Over!");
    gameOver();
  } else {
    // console.log("Correct! Proceeding to the next round.");
    if (val === machliVal) {
      machli--;
      machliSoundPlay();
    }
    if (val === paaniVal) {
      paani--;
      playSound(paaniSound);
    }
    if (val === chhapakVal) {
      chhapak--;
      playSound(chhapakSound);
    }
    // console.log("after you", machli, paani, chhapak);

    startRound();
  }
  turn.style.display = "none"
  player4El.style.display = "none"

};

const gameOver = () => {
  alert("Game Over! You clicked the wrong button.");
  // Reset the game

  reset();
};

// Start the first round

function player1() {
  if (machli !== 0) {
    player1El.innerText = `${currentRound} machli`;
    machli--;
    machliSoundPlay();
  } else {
    if (paani !== 0) {
      player1El.innerText = "paani me gayi";
      paani--;
      playSound(paaniSound2);
    } else {
      if (chhapak !== 0) {
        player1El.innerText = "chhapak";
        chhapak--;
        playSound(chhapakSound);
      }
    }
  }
}

function player2() {
  // await wait(2)

  if (machli !== 0) {
    player2El.innerText = `${currentRound} machli`;
    machli--;
    machliSoundPlay();
  } else {
    if (paani !== 0) {
      player2El.innerText = "paani me gayi";
      paani--;
      playSound(paaniSound2);
    } else {
      if (chhapak !== 0) {
        player2El.innerText = "chhapak";
        chhapak--;
        playSound(chhapakSound2);
      }
    }
  }
}

function player3() {
  // await wait(2)

  if (machli !== 0) {
    player3El.innerText = `${currentRound} machli`;
    machli--;
    machliSoundPlay();
  } else {
    if (paani !== 0) {
      player3El.innerText = "paani me gayi";
      paani--;
      playSound(paaniSound2);
    } else {
      if (chhapak !== 0) {
        player3El.innerText = "chhapak";
        chhapak--;
        playSound(chhapakSound2);
      }
    }
  }

  setExpVal();
  turn.style.display = "block"
  player4El.style.display = "block"
}

function setExpVal() {
  checkIfRoundCompleted();
  if (machli !== 0) {
    expectedVal = 1;
  } else {
    if (paani !== 0) {
      expectedVal = 2;
    } else {
      if (chhapak !== 0) {
        expectedVal = 3;
      }
    }
  }
}

function updateVals() {
  machli = currentRound;
  paani = currentRound;
  chhapak = currentRound;
}

function checkIfRoundCompleted() {
  if (chhapak === 0) {
    currentRound++;
    updateVals();
  }
}

function wait(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

let machli1Sound = new Audio("sounds/1machli.mp3");
let machli2Sound = new Audio("sounds/2machli.mp3");
let machli3Sound = new Audio("sounds/3machli.mp3");
let machli4Sound = new Audio("sounds/4machli.mp3");
let machli5Sound = new Audio("sounds/5machli.mp3");
let paaniSound = new Audio("sounds/paani.mp3");
let paaniSound2 = new Audio("sounds/paani2.mp3");
let chhapakSound = new Audio("sounds/chhapak.mp3");
let chhapakSound2 = new Audio("sounds/chhapak2.mp3");

function playSound(sound) {
  sound.play();
}

let startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  startRound();
  startButton.style.display = "none"
});

function machliSoundPlay() {
  if (currentRound === 1) {
    playSound(machli1Sound);
  } else if (currentRound === 2) {
    playSound(machli2Sound);
  } else if (currentRound === 3) {
    playSound(machli3Sound);
  } else if (currentRound === 4) {
    playSound(machli4Sound);
  } else if (currentRound === 5) {
    playSound(machli5Sound);
  }
}

function reset() {
  machli = 1;
  paani = 1;
  chhapak = 1;
  currentRound = 1;

  player1El.innerText = "player-1"
  player2El.innerText = "player-2"
  player3El.innerText = "player-3"
  startButton.style.display = "block"
}
turn.style.display = "none"
player4El.style.display = "none"
