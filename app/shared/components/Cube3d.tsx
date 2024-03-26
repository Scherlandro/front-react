import {SwiperModule} from "swiper/angular";
import React, {useState} from "react";
import {ArrowCircleLeft, ArrowCircleRight, Construction} from "@mui/icons-material";
import styles from "../../pages/projects/Projects.module.css";
import {CardContent} from "@mui/material";
import {Images} from "../../Images";


/*interface Cube3D {
    effect: string,
    grabCursor: boolean,
    cubeEffect: {
        shadow: boolean,
        slideShadows: boolean,
        shadowOffset: number,
        shadowScale: number
    },
    pagination: {
        el: string,
    },
}*/

export const Cube3d =() => {

    const faces = {  0: styles.right
        ,

        1: styles.back
        ,

        2: styles.left
        ,

        3: styles.front

    };
    /*
        const data1 = {
            slides: [
                {
                    src: "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png",
                    alt: "Image 1 for carousel"
                },
                {
                    src: "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png",
                    alt: "Image 2 for carousel"

                },
                {
                    src: "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png",

                    alt: "Image 3 for carousel"
                },
                {
                    src:"https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png",
                    alt: "Image 4 for carousel"
                }
            ]
        };


        const data = {
            slides: [
                {

                    src: require("/front-react/public/image/clone4.png"),
                    alt: "Image 1 for carousel",
                    f: styles.front,
                },
                {
                    src: require("/front-react/public/image/clone4.png"),
                    alt: "Image 2 for carousel",
                    f: styles.left,
                },
                {
                    src: require("/front-react/public/image/clone4.png"),
                    alt: "Image 3 for carousel",
                    f: styles.back,
                },
                {
                    src: require("/front-react/public/image/clone4.png"),
                    alt: "Image 4 for carousel",
                    f: styles.right
                },
            ]
        };

    */


    /*
      const  props =  {
            effect: "cube",
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        };
    */

    const [rotateY, setRotateY] = useState(0);
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setRotateY(rotateY + 90);
        setSlide(slide === 0 ? Images.length - 1 : slide - 1);
    };

    const nextSlide = () => {
        setRotateY(rotateY + 90);
        setSlide(slide === Images.length - 1 ? 0 : slide + 1);
    };



    return (
        <div>
       <ArrowCircleLeft  onClick={prevSlide} className={styles.rotateButton}/>

            <ArrowCircleRight onClick={nextSlide} className={styles.rotateButton}/>
            <CardContent className={styles.side} >

                {Images.map((item:any) => {
                    console.log('FACE ->',item.f,'SRC->', item.src)
                    return (
                        <div className={styles.cube} style={{transform: `rotateY(${rotateY}deg)`}}>
                            <img
                                src={item.src}
                                key={item.id}
                               className={item.id === slide ?   faces[0]  : faces[1]
                                    ? item.id === slide + 1 ? faces[2] : faces[3] : faces[1] }
                             /*  className={item.f}*/
                                style={{borderRadius: 5}}
                                width={200} height={150}
                            />
                        </div>
                    ); })}
            </CardContent>
        </div>)

}
