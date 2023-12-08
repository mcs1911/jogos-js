const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
 mario.classList.add('jump');

 setTimeout(() => {
    mario.classList.remove('jump');
 }, 500);

}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') /* O sinal de mais foi adicionado em frente ao window para converter o valor string em number - poderia ter-se colocado Number tb, mas o + facilita o trabalho - precisamos de um número para poder calcular a position*/ 

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition <80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.bottom = `${marioPosition}px`;

       mario.src = './images/game-over.png';
       mario.style.width = '75px';
       mario.style.marginLeft = '50px';

       clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', jump);