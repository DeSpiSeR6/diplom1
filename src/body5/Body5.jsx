import './Body5.css';

function Body5() {
    return (
    <div id='Body5Main'>
<div id='logo5'>
</div>
<div id='downAbout'>
      <a href="">Главная</a>
      <a href="">О нас</a>
      <a href="">Меню</a>
      <a href="">Галерея</a>
      <a href="">Контакты</a>
      </div>
<hr />
<div id='aboutUs'>
<h1 id='lilSize'>О нас</h1>
<p id='bigSize'>Краткое описание вашей компании, ее деятельности или истории.</p>
<ul id='downUl'>
    <li id='li1'>+1 (234) 567 89 99</li>
    <li id='li2'>г. Москва, ул. Тверская, дом. 1</li>
    <li id='li3'>ukitcom</li>
    <li id='li4'>support@ukit.com</li>
</ul>
</div>
<h1 id='glr'>Галерея</h1>
<div id='gallery'>
<a href="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2020/02/Halal-Curry.jpg"><div id='img1'></div></a>
<a href="https://mobimg.b-cdn.net/v3/fetch/f1/f1ce8b0879371bcc7f9d76e816c7443d.jpeg"><div id='img2'></div></a>
<a href="https://www.cateringcorner.in/wp-content/uploads/2019/11/Sapthagiri-Catering.jpg"><div id='img3'></div></a>
<a href="https://i.pinimg.com/originals/3d/9b/54/3d9b54f67b437e09b32ae6ba8936956b.jpg"><div id='img4'></div></a>
<a href="https://kartinkin.net/uploads/posts/2021-07/1626181471_4-kartinkin-com-p-yeda-na-uzhin-yeda-krasivo-foto-6.jpg"><div id='img5'></div></a>
<a href="https://pic.rutubelist.ru/video/2f/cf/2fcf1e4458367cc55cb5b0ff1eb7157d.jpg"><div id='img6'></div></a>
</div>
<h1 id='cnt'>Напишите нам</h1>
<div id='contactUs'>
<input type="text" placeholder='Имя' id='nameInput'/>
<input type="email" name="" placeholder='E-mail' id='mailInput'/>
<input type="text"  placeholder='Большое поле' id='textInput'/>
<input type="submit" value="Отправить" id='buttonInput'/>
</div>
    </div>
  )
}

export default Body5;
