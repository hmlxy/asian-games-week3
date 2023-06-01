$(function() {
    let ul = document.querySelector('ul');
    ul.innerHTML += ul.innerHTML;
    let li = document.querySelectorAll('li');
    // let btn = document.querySelectorAll('.btn');
    ul.style.width = li[0].offsetWidth * li.length + 'px';
    let speed = -2;
    let move = () => {
        if (ul.offsetLeft < -ul.offsetWidth / 2) {
            ul.style.left = '0';
        }
        if (ul.offsetLeft > 0) {
            ul.style.left = -ul.offsetWidth / 2 + 'px';
        }
        ul.style.left = ul.offsetLeft + speed + 'px';
    }
    let timer = setInterval(move, 30);
    ul.addEventListener('mouseover', function() {
        clearInterval(timer);
    });
    ul.addEventListener('mouseout', function() {
        timer = setInterval(move, 30);
    });
    // btn[0].onclick = function() {
    //     speed = -2;
    // }
    // btn[1].onclick = function() {
    //     speed = 2;
    // }
})