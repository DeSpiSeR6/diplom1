import './UpperHeader.css';
import logo from '../img/png-transparent-my-new-restaurant-logo-bistro-cafe-ermita-conrad-manila-restaurant-restaurant-logo-food-text-logo.png'
function UpperHeader() {
    return (
    <div id='headerMain'>
      <div id='imgLogo'>
        <img src="logo" alt="" />
      </div>
      <div id='headerAbout'>
      <a href="">Главная</a>
      <a href="">О нас</a>
      <a href="">Меню</a>
      <a href="">Галерея</a>
      <a href="">Контакты</a>
      </div>
    </div>
  )
}

export default UpperHeader;
