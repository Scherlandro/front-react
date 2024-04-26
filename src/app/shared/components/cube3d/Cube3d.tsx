import React, {useState} from "react";
import {ArrowCircleLeft, ArrowCircleRight, Construction} from "@mui/icons-material";
import styles from "./Cube.module.css";
import {CardContent} from "@mui/material";
import {Images} from "../../../Images";


export const Cube3d = () => {

    const [rotateY, setRotateY] = useState(0);
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setRotateY(rotateY + 90);
        setSlide(slide === Images.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setRotateY(rotateY - 90);
        setSlide(slide === Images.length - 1 ? 0 : slide + 1);
    };

    return (
        <div style={{alignItems: "center"}}>
            <CardContent className={styles.scene}>
                <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                    <div className={styles.front}><img src={Images.at(slide + 0)}/></div>
                    <div className={styles.back}><img src={Images.at(slide + 1)}/></div>
                    <div className={styles.right}><img src={Images.at(2)}/></div>
                    <div className={styles.left}><img src={Images.at(3)}/></div>
                    <div className={styles.top}><img src={Images.at(4)}/></div>
                    <div className={styles.bottom}><img src={Images.at(5)}/></div>
                </div>
            </CardContent>
            <ArrowCircleLeft onClick={prevSlide} className={styles.rotateButton}/>

            <ArrowCircleRight onClick={nextSlide} className={styles.rotateButton}/>

        </div>)

}
