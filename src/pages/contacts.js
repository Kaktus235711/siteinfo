import imageTel from '../img/tel.jpg';
import imageSkype from '../img/s.jpg';
import imageEmail from '../img/mail.jpg';
import imageSite from '../img/site.jpg';


function Contacts() {
  return (

    <div className='contacts'>
      <h1> Фамилия Лилия Отчество</h1>
      <a href="tel:+71233456789"> <img className='icon' src={imageTel} alt="tel" /> +7 123 345 67 89  </a>
      <a href="skype:id_user"> <img className='icon' src={imageSkype} alt="Skype" /> Skype  </a>
      <a href="mailto: user@mail.ru"> <img className='icon' src={imageEmail} alt="E-mail" /> user@mail.ru </a>
      <a href="https://..."> <img className='icon' src={imageSite} alt="site" /> site.com </a>
    </div>
  );
}

export default Contacts;