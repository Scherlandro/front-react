import {  Grid} from "@mui/material";
import styles from "./Offers.module.css";
import {MenuMain} from "../menu/Menu";
import {Cube3d} from "../../shared/components/cube3d/Cube3d";


export const Offers = () => {


    return (
        <div>
            <MenuMain/>

            <center style={{
                borderRadius: "10px",
                background: "greenyellow"
            }}>
                <Cube3d/>
            </center>

            <Grid container spacing={1}>
                {[1, 2, 3, 4].map(( index: any) => (
                    <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                        <center className={styles.centerTag} >
                              <Cube3d/>
                        </center>

                    </Grid>
                ))}
            </Grid>
        </div>
    )
}