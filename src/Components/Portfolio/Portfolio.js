import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import WeatherApp from '../../img/WeatherApp.png';
import Rick from '../../img/RickApp.png';
import CrudApp from '../../img/CrudApp.png';
import GameStore from '../../img/GameStore.png';
import Restaurant from '../../img/Restaurant.png';
import Todo from '../../img/todo.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="Portfolio">
            {/* Heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>
                Proyectos recientes
            </span>
            <span>Portafolio</span>

            {/* Slider */}
            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <a href="https://gilded-alpaca-57d25f.netlify.app/">
                        <img src={WeatherApp} alt="" />
                    </a>
                    <br />
                    Una WeatherApp
                    <br />
                    Frontend
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://dashing-snickerdoodle-340eaa.netlify.app/">
                        <img src={Rick} alt="" />
                    </a>
                    <br />
                    Consumiendo la API de Rick and Morty
                    <br />
                    Frontend
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://rococo-pasca-fb22f9.netlify.app/">
                        <img src={CrudApp} alt="" />
                    </a>
                    <br />
                    Un CRUD App
                    <br />
                    Frontend
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Excessive77/Exercise_3_NodeJS">
                        <img src={GameStore} alt="" />
                    </a>
                    <br />
                    API Rest de una Tienda de Juegos
                    <br />
                    Backend
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Excessive77/Project_Meals">
                        <img src={Restaurant} alt="" />
                    </a>
                    <br />
                    API Rest de un Restaurante
                    <br />
                    Backend
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/Excessive77/Exercise_2_NodeJS">
                        <img src={Todo} alt="" />
                    </a>
                    <br />
                    API Rest de una TodoApp
                    <br />
                    Backend
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
