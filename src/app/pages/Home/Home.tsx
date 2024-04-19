import {MenuMain} from "../menu/Menu";
import styles from ".//Home.module.css";
import React, {useEffect, useState} from "react";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";


export const Home = () => {

    const [rotateY, setRotateY] = useState(0);
    const [slide, setSlide] = useState(0);

    const data = {
        slides: [
            {
                src: require("../image/catao_plantinum.png"),
                srci: require("../image/clone4.png"),
                alt: "Image 1 for carousel",
                f: styles.front,
            },
            {
                src: require("../image/catao_black.png"),
                srci: require("../image/boba_fett.png"),
                alt: "Image 2 for carousel",
                f: styles.left,
            },
            {
                src: require("../image/cartao_bnb.jpg"),
                srci: require("../image/planeta.png"),
                alt: "Image 3 for carousel",
                f: styles.back,
            },
            {
                src: require("../image/catao_ouro.png"),
                srci: require("../image/anakin_starfighter.png"),
                alt: "Image 4 for carousel",
                f: styles.right
            },
        ]
    };

    const nextSlide = () => {
   setRotateY(rotateY + 90);
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
    };
    const prevSlide = () => {
        setRotateY(rotateY - 90);
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
    };


    return (
        <div>
            <MenuMain/>
            <h4>
                <a target="_blank" href="https://www.youtube.com/@scherlandroaraujo8273">Scherlandro</a>
            </h4>
      {/*      https://gist.github.com/rctorr/eef3de5bbcdf1b918ccf4390dbf54b09
            https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms
            https://blog.matheuscastiglioni.com.br/criando-animacoes-com-css3/#:~:text=Para%20girar%20uma%20elemento%20com,ir%C3%A1%20dar%20um%20giro%20completo.

         */}   <div className={styles.container}>

                {data.slides.map((item, idx) => {
                    console.log('Lado -> ', item.f, rotateY, item.alt, idx* rotateY);
                    return (

                        <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                            <div className={styles.top} />
                            <img
                                src={rotateY < 181 ? item.src : item.srci
                                    ? rotateY > 360 ? setRotateY(0) : item.srci : '' }
                                /*src={item.src}*/
                                alt={item.alt}
                                key={idx}
                                className={item.f}
                                style={{borderRadius: 5}}
                                width={100} height={80}
                            />
                            <div className={styles.base}></div>
                        </div>
                    );
                })}
            <div className={styles.arrows}>
                <ArrowCircleRight onClick={nextSlide} className={styles.arrow}/>
                    <br/>  <br/>
                <ArrowCircleLeft onClick={prevSlide} className={styles.arrow}/>
            </div>
            </div>


           <div className={styles.logo}>
                    <img src={require("../image/xwing.png")}/>
            </div>

        </div>
    )
}