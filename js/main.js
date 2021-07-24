window.addEventListener('load', function () {
    let exchange = document.getElementById('exchange');
    let positionObj1 = exchange.getBoundingClientRect().top;
    console.log(positionObj1);
    let sizeFromScreen = window.innerHeight/3;

    exchange.style.animation = 'mover 0.9s ease-out'

    let logo = document.getElementById('logo');
    logo.style.animation = 'mover 1s linear'
})