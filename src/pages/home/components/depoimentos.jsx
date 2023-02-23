import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../styles/depoimentos.module.css'
import Depoimento1 from '../../../assets/dep1.webp'
import Depoimento2 from '../../../assets/dep2.webp'
import Depoimento3 from '../../../assets/dep3.webp'
import Depoimento4 from '../../../assets/dep4.webp'
import Depoimento5 from '../../../assets/dep5.webp'
import Depoimento6 from '../../../assets/dep6.webp'
import Depoimento8 from '../../../assets/dep8.webp'
import Depoimento9 from '../../../assets/dep9.webp'
import Depoimento10 from '../../../assets/dep10.webp'
import Slider from "react-slick";

const images = [{
    image: Depoimento1,
    alt:'depoimento1'
}, {
    image: Depoimento2,
    alt:'depoimento2'    
}, {
    image: Depoimento3,
    alt:'depoimento3', 
}, {
    image: Depoimento4,
    alt:'depoimento4', 
}, {
    image: Depoimento5,
    alt:'depoimento5', 
}, {
    image: Depoimento6,
    alt:'depoimento6', 
}, {
    image: Depoimento8,
    alt:'depoimento8', 
}, {
    image: Depoimento9,
    alt:'depoimento9', 
}, {
    image: Depoimento10,
    alt:'depoimento10', 
}]

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "10px" }}
            onClick={onClick}
        />
    );
}

export function Depoimentos(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />
    };

    return (

        <div className={style.depoimentos}>

            <div className={style.title}>

                <h1>
                    <span style={{ color: 'var(--red-400)' }}>Não acredite</span> apenas nas nossas palavras
                </h1>

                <p>
                    <span style={{ color: 'var(--red-400)' }}><b>Veja você mesmo</b></span> as <b>transformações incríveis</b> que o Protocolo Pele Perfeita tem proporcionado a vida de todos que optaram em testar nosso método. <b>Experimente ainda hoje</b>, pois com nossa garantia de 100% de satisfação, <b>você não tem nada a perder</b>, só uma <b>pele clara e saudável a ganhar</b>.
                </p>

            </div>

            <div className={style.images}>

                <Slider {...settings}>

                    {images.map((item, index) => (
                        <div key={item.alt}>
                            <div>
                                <img 
                                alt={item.alt}
                                src={item.image}
                                />
                            </div>
                        </div>
                    ))}

                </Slider>
                
            </div>

        </div>

    )
}