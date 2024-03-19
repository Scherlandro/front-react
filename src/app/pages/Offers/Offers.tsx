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


export const Offers = () => {

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


    function handleInfoDialogOpen() {
    }

    function handleAddToMyApps(app: any) {
    }

    return (
        <div>
            <MenuMain/>
            <Typography
                variant="h5"
                gutterBottom
                style={{color: "black", fontWeight: "400"}}
            >

            </Typography>


            <center  style={{
                borderRadius: "10px",
                background: "greenyellow"
            }} >
               {/* <Cube3d data={ require("../image/clone_old.png")} />*/}
                <Cube3d  />
            </center>

            <Grid container spacing={4}>
                {appsData.map((app: any, index: any) => (
                    <Grid item xs={12} sm={12} md={2} lg={2} key={index}>
                        <Card
                            key={app.name}
                            variant="outlined"
                            style={{
                                marginTop: "12px",
                                borderRadius: "10px",
                                background: "grey"
                            }}
                        >
                            <CardContent>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <Typography variant="body1">
                                        {app.name}
                                    </Typography>
                                    <IconButton
                                        aria-label="delete"
                                        size="small"
                                        sx={{color: "#007bff"}}
                                        onClick={() => handleInfoDialogOpen()}
                                    >
                                    </IconButton>
                                </div>
                                <Typography variant="body2">
                                    {app.description}
                                </Typography>
                                <div>
                                    <img
                                        src={app.imageUrl}
                                        alt={app.name}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <IconButton
                                onClick={() => handleAddToMyApps(app)}
                                aria-label="delete"
                                size="large"
                                sx={{
                                    border: "none",
                                    borderRadius: "4px",
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                    padding: "2px 12px",
                                    borderTop: "none",
                                    backgroundColor: "#fff"
                                }}
                            >
                                <IconButton/>
                            </IconButton>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <IconButton
                disableFocusRipple
                disableRipple
            >
                <ArrowCircleLeft/>
            </IconButton>
            <IconButton
                disableFocusRipple
                disableRipple
            >
                <ArrowCircleRight/>
            </IconButton>


        </div>
    )
}