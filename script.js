const picturesButton = document.getElementById('picturesButton');
const container = document.getElementById('container');


//TODO  stule by class

picturesButton.addEventListener('click',()=>{
const pictures = document.createElement('img');
pictures.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zZ-F3BDDAh1423MOtzP1f9YR7_yChau_eA&usqp=CAU";

pictures.classList.add('picturesImg');

container.append(pictures);


setTimeout(()=>{pictures.remove()},5000);

})



//setTimeout(()=>{pictures.style.opacity = "0"},5000);

// Реализовать страницу, на которой будет 1 кнопка. Нажатие на кнопку должно вызывать появление каритинки 
// (возмите любую из интернета) на 5 сек, после чего картинка должна пропадать.