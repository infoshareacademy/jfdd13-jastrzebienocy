const buttonInstruction = document.querySelector('a.send');
const overlay = document.querySelector('.game-instruction-overlay');
const InsBox = document.querySelector('.game-instruction-box');

const Instruction = () => {
    overlay.style.display="block";
    InsBox.style.display="block";
}


buttonInstruction.addEventListener('click', Instruction);