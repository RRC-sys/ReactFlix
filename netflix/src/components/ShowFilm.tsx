import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./ShowFilm.module.css";

import { Movies } from "../interfaces/Movies";

type CustomSlider = {
    slickPrev: () => void;
    slickNext: () => void;
  }

type Props = {
    movies: Movies[],
    loading: boolean,
    titleSection: string
}

const ShowFilm = ({movies, loading, titleSection} : Props) => {
    const sliderRef = useRef<CustomSlider | null>(null);

    const [firstImage, setFirstImage] = useState<boolean>(true);

    const settings = {
        className: 'custom-slider',
        infinite: true,
        slidesToShow: 6.7,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        draggable: false,   // Desabilitar a rolagem do carrossel com o mouse
        speed: 700, // 1000 milissegundos (1 segundo)
    };

    const handleLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleRight = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            let btnLeft = document.querySelector("#btnLeft") as HTMLElement;
            btnLeft.style.display = "flex";

            setFirstImage(false);
        }
    };

    return (
        <div className={styles.showFilm}>
            <h3>{titleSection}</h3>
            <div className={styles.ContainerShowFilm}>
                <Slider {...settings} ref={sliderRef}>
                    {movies && movies.map((movie: Movies, key: number) => (
                        <div><img style={{display: firstImage && key===0 ? "none" : "block"}} key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} /></div>
                    ))}
                </Slider>
            </div>
            <div onClick={handleLeft} className={styles.btnLeft} id="btnLeft">
                <i className="bi bi-arrow-left-short"></i>
            </div>
            <div onClick={handleRight} className={styles.btnRight}>
                <i className="bi bi-arrow-right-short"></i>
            </div>
        </div>
    )
}

export default ShowFilm;
