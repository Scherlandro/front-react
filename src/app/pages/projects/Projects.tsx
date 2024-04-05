import React, {useEffect, useState} from 'react';
import {MenuMain} from "../menu/Menu";
import styles from "./Projects.module.css"
import {Card, CardContent, Grid} from "@mui/material";

import {ArrowCircleLeft, ArrowCircleRight, CardGiftcard, Grid3x3Outlined, GridView} from "@mui/icons-material";


export const Projects = () => {

    const faces = { 0: styles.right, 1: styles.back,2: styles.left,3: styles.front};

    const data = {
        slides: [
            {
                src: require("../image/clone_old.png"),
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
                src: require("../image/darth_vader.png"),
                alt: "Image 4 for carousel"
            }
        ]
    };


    const [rotateY, setRotateY] = useState(0);
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setRotateY(rotateY + 90);
        setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
    };

    const nextSlide = () => {
        setRotateY(rotateY + 90);
         setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
    };

    const nextSlideOverMouse = () => {
        setTimeout(() => (nextSlide()), 500);

    }

    return (
        <div>
            <MenuMain/>

            <Grid container spacing={4}>
                {[1, 0].map((app: any, index: any) => (
                    <Grid className={styles.swiperHorizontal} item xs={12} sm={12} md={2} lg={2} key={index}>

                        <ArrowCircleLeft  onClick={prevSlide} className={styles.rotateButton}/>

                        <ArrowCircleRight onClick={nextSlide} className={styles.rotateButton}/>
                        <CardContent className={styles.side} >

                             {data.slides.map((item, idx) => {
                                        return (
                                            <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    key={idx}
                                                    className={idx === slide ?   faces[0]  : faces[1]
                                                        ? idx === slide + 1 ? faces[2] : faces[3] : faces[1] }
                                                    style={{borderRadius: 5}}
                                                    width={200} height={150}
                                                />
                                            </div>
                                        ); })}
                         </CardContent>

                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

