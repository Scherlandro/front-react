import {MenuMain} from "../Menu/Menu";
import styles from "../Home/Home.module.css";
import React, {useEffect, useState} from "react";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";


export const Home = () => {

    const [rotateY, setRotateY] = useState(0);
    const [slide, setSlide] = useState(0);

    const data = {
        slides: [
            {
                src: require("../image/darth_maul2.png"),
                alt: "Image 1 for carousel",
                f: styles.front,
            },
            {
                src: require("../image/anakin_starfighter.png"),
                alt: "Image 2 for carousel",
                f: styles.left,
            },
            {
                src: require("../image/clone4.png"),
                alt: "Image 3 for carousel",
                f: styles.back,
            },
            {
                src: require("../image/boba_fett.png"),
                alt: "Image 4 for carousel",
                f: styles.right
            }
        ]
    };


    const nextSlide = () => {
        setRotateY(rotateY + 90);
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setRotateY(rotateY + 90);
        setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
    };


    return (
        <div>
            <MenuMain/>
            <h4>
                <a target="_blank" href="https://www.youtube.com/@scherlandroaraujo8273">Scherlandro</a>
            </h4>
            <div className={styles.container}>

                {data.slides.map((item, idx) => {
                    console.log('Lado -> ', item.f, rotateY);
                    return (

                        <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                key={idx}
                                className={item.f}
                                style={{borderRadius: 5}}
                                width={200} height={150}
                            />
                        </div>
                    );
                })}

                <ArrowCircleRight onClick={nextSlide} className={styles.arrows}/>


            </div>


            <div className={styles.bottom_part}>
                <img src={require("../image/planeta.png")}/>
            </div>

        </div>
    )
}