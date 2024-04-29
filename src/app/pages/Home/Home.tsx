import {MenuMain} from "../menu/Menu";
import styles from ".//Home.module.css";
import React, {useState} from "react";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";
import {Images} from "../../Images";
import {Cube3d} from "../../shared/components/cube3d/Cube3d";
import {Grid} from "@mui/material";


export const Home = () => {

    const [rotateY, setRotateY] = useState(0);
    const [slide, setSlide] = useState(0);

    const faces = [styles.front, styles.right, styles.back, styles.left];


    const nextSlide = () => {
        setRotateY(rotateY + 90);
        setSlide(slide === Images.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setRotateY(rotateY - 90);
        setSlide(slide === Images.length - 1 ? 0 : slide + 1);
    };


    return (
        <div>
            <MenuMain/>
            <h4>
                <a target="_blank" href="https://www.youtube.com/@scherlandroaraujo8273">Scherlandro</a>
            </h4>
            <center className={styles.cTop3d} >
                <Cube3d/>
            </center>

            <Grid container spacing={-1}>
                {[1, 2, 3, 4].map((index: any) => (
                    <Grid item xs={6} sm={6} md={6} lg={6} key={index}  className={styles.centerTag}>

                                {Images.map((idx, n) => {
                                    console.log('Faces', faces.length, idx.length);
                                    return (
                                        <div className={styles.container}>
                                            <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                                                <div className={styles.top}/>
                                                <img src={idx.length ? idx : ''}
                                                     className={faces.length === 4 ? faces.at(n) : ''}/>
                                                {/*<div className={styles.bottom}></div>*/}
                                            </div>
                                            <br/> <br/>
                                            <div className={styles.arrows}>
                                                <ArrowCircleRight onClick={nextSlide} className={styles.arrow}/>
                                                <br/> <br/>
                                                <ArrowCircleLeft onClick={prevSlide} className={styles.arrow}/>
                                            </div>
                                        </div>
                                    );
                                })}
                    </Grid>
                ))}
            </Grid>

           <div className={styles.logo}>
               <img src={Images.at(5)}/>
            </div>

        </div>
    )
}