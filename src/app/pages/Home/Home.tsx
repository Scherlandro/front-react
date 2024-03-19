import {MenuMain} from "../Menu/Menu";
import styles from "../Home/Home.module.css";
<<<<<<< HEAD
import React, {useState} from "react";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";

export const Home = () => {

=======
import React, {useEffect, useState} from "react";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";


export const Home = () => {
>>>>>>> e0f68eb (new add)

    const [rotateY, setRotateY] = useState(0);
    const [slide, setSlide] = useState(0);

<<<<<<< HEAD
    const faces = {0: styles.right, 1: styles.back, 2: styles.left, 3: styles.front};

    const data = {
        slides: [
            {
                src: require("../image/teacher.jpg"),
                alt: "Image 1 for carousel"
            },
            {
                src: require("../image/planeta.png"),
                alt: "Image 2 for carousel"
            },
            {
                src: require("../image/r2_d2.png"),
                alt: "Image 3 for carousel"
            },
            {
                src: require("../image/obi_wan.png"),
                alt: "Image 4 for carousel"
            }
        ]
    };
=======
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


>>>>>>> e0f68eb (new add)
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
<<<<<<< HEAD
            <div className={styles.container}>         
                {data.slides.map((item, idx) => {
                  return (
=======
            <div className={styles.container}>

                {data.slides.map((item, idx) => {
                    console.log('Lado -> ', item.f, rotateY);
                    return (

>>>>>>> e0f68eb (new add)
                        <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                key={idx}
<<<<<<< HEAD
                                className={idx === slide ? faces[0] : faces[1]
                                    ? idx === slide + 1 ? faces[2] : faces[3] : faces[1]}
=======
                                className={item.f}
>>>>>>> e0f68eb (new add)
                                style={{borderRadius: 5}}
                                width={200} height={150}
                            />
                        </div>
                    );
                })}
<<<<<<< HEAD
                <ArrowCircleRight onClick={nextSlide} className={styles.arrows}/>
            </div>
=======

                <ArrowCircleRight onClick={nextSlide} className={styles.arrows}/>


            </div>


>>>>>>> e0f68eb (new add)
            <div className={styles.bottom_part}>
                <img src={require("../image/planeta.png")}/>
            </div>

        </div>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> e0f68eb (new add)
