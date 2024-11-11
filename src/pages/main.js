import * as React from 'react';

import { Carousel } from 'nuka-carousel';
import image1 from '../img/main/1.jpg';
import image2 from '../img/main/2.jpg';
import image3 from '../img/main/3.jpg';
import image4 from '../img/main/4.jpg';
import image5 from '../img/main/5.jpg';

const App = () => {
  return (
    <Carousel autoplay showDots>
      <div> <img src={image1} height="200" alt="" /></div>
      <div> <img src={image2} height="200" /></div>
      <div> <img src={image3} height="200" /></div>
      <div> <img src={image4} height="200" /></div>
      <div> <img src={image5} height="200" /></div>
    </Carousel>
  );
};

function Main() {
  return (
    <>
      <div className='main-info'>
        <h1>Фамилия Лилия Отчество </h1>
        <span>Направление деятельности: Frontend-разработчик. Высшее техническое образование. Пройденное обучение в 2024г. по направлению "Верстка CSS и программирование на языке JavaScript" </span>
      </div>
      <App />
    </>
  );
}

export default Main;




