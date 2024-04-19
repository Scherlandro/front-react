import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import styles from "./Offers.module.css";
import {MenuMain} from "../menu/Menu";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";
import {Cube3d} from "../../shared/components/Cube3d";
import React, {useState} from "react";
import {Images} from "../../Images";


export const Offers = () => {

    
    const appsData = {
        slides: [
            {
                imageUrl: require("../image/clone4.png"),
                alt: "Image 1 for carousel",
                f: styles.front,
            },
            {
                imageUrl: require("../image/boba_fett.png"),
                alt: "Image 2 for carousel",
                f: styles.left,
            },
            {
                imageUrl: require("../image/planeta.png"),
                alt: "Image 3 for carousel",
                f: styles.back,
            },
            {
                imageUrl: require("../image/anakin_starfighter.png"),
                alt: "Image 4 for carousel",
                f: styles.right
            },
        ]
    };


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

    console.log(Images.at(3));

    return (
        <div>
            <MenuMain/>

            <center style={{
                borderRadius: "10px",
                background: "greenyellow"
            }}>

            </center>

            <ArrowCircleLeft onClick={prevSlide} className={styles.rotateButton}/>

            <ArrowCircleRight onClick={nextSlide} className={styles.rotateButton}/>

            <Grid container spacing={1}>
                {[1, 2, 3, 4].map((app: any, index: any) => (
                    <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                        <Card
                            key={app.name}
                            style={{
                                marginTop: "12px",
                                borderRadius: "10px",
                                background: "grey",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <CardContent className={styles.scene}>
                                    <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                                        <div className={styles.front}><img src={require("../image/clone4.png")}/></div>
                                        <div className={styles.back}><img
                                            src={require("../image/anakin_starfighter.png")}/></div>
                                        <div className={styles.right}><img src={require("../image/boba_fett.png")}/>
                                        </div>
                                        <div className={styles.left}><img src={require("../image/xwing.png")}/></div>
                                        <div className={styles.top}><img src={require("../image/r2_d2.png")}/></div>
                                        <div className={styles.bottom}><img src={require("../image/clone4.png")}/></div>
                                    </div>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>


        </div>
    )
}