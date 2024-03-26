import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import styles from "./Offers.module.css";
import {MenuMain} from "../Menu/Menu";
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";
import {Cube3d} from "../../shared/components/Cube3d";
import React, {useState} from "react";
import {Images} from "../../Images";


export const Offers = () => {

    /*

    const appsData = [
        {
            category: "Holdings",
            apps: [
                {
                    name: "App 1",
                    description: "Description of App 1",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png"
                },
                {
                    name: "App 2",
                    description: "Description of App 2",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png"
                }
            ]
        },
        {
            category: "Research",
            apps: [
                {
                    name: "App 3",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png"
                },
                {
                    name: "App 4",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png"
                },
                {
                    name: "App 5",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png"
                },
                {
                    name: "App 6",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png"
                },
                {
                    name: "App 7",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png"
                },
                {
                    name: "App 8",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png"
                }
            ]
        },
        {
            category: "Securities",
            apps: [
                {
                    name: "App 9",
                    description: "Description of App 9",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png"
                },
                {
                    name: "App 10",
                    description: "Description of App 10",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png"
                },
                {
                    name: "App 11",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png"
                },
                {
                    name: "App 12",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png"
                }
            ]
        },
        {
            category: "My Account",
            apps: [
                {
                    name: "App 13",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png"
                },
                {
                    name: "App 14",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png"
                },
                {
                    name: "App 15",
                    description: "Description of App 9",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png"
                },
                {
                    name: "App 16",
                    description: "Description of App 10",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png"
                },
                {
                    name: "App 17",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png"
                },
                {
                    name: "App 18",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png"
                },
                {
                    name: "App 19",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png"
                },
                {
                    name: "App 20",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png"
                },
                {
                    name: "App 21",
                    description: "Description of App 9",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png"
                },
                {
                    name: "App 22",
                    description: "Description of App 10",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png"
                },
                {
                    name: "App 23",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png"
                },
                {
                    name: "App 124",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png"
                },
                {
                    name: "App 25",
                    description: "Description of App 3",
                    disabled: false,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png"
                },
                {
                    name: "App 26",
                    description: "Description of App 4",
                    disabled: true,
                    imageUrl:
                        "https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png"
                }
            ]
        }
    ];

*/

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


    return (
        <div>
            <MenuMain/>

            <center style={{
                borderRadius: "10px",
                background: "greenyellow"
            }}>
                <Cube3d/>
            </center>

            <ArrowCircleLeft onClick={prevSlide} className={styles.rotateButton}/>

            <ArrowCircleRight onClick={nextSlide} className={styles.rotateButton}/>

            <Grid container spacing={1}>
                {appsData.slides.map((app: any, index: any) => (
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
                            <CardContent>
                                <div className={styles.scene}>
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
                                </div>

                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>


        </div>
    )
}