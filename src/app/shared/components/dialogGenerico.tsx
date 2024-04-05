import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {DialogActions} from '@mui/material';



export interface ConfirmGenerico {
    openDialoGenerico: boolean;
    setButtonDuble?: true;
    setOpenDialoGenerico: (b: boolean) => any;
    setResultadoResposta: (b: any) => any;
    msgExibicao: string;
}

export const DialogConfirmGenerico = (props: ConfirmGenerico)=> {

    const confirmaRespostaSim = () => {
        props.setResultadoResposta('SIM');
        props.setOpenDialoGenerico(false);
    };

    const confirmaRespostaNao = () => {
        props.setResultadoResposta('NÃO');
        props.setOpenDialoGenerico(false);
    };

/*    const useStyles = makeStyles((Theme:any) => ({
        dialogContainer: {
            "& .MuiDialog-paperWidthSm": {
                maxWidth: "500px",
            },
            "& .MuiTypography-h6": {
                fontSize: "16px",
            },
            "& .MuiTypography-colorTextSecondary": {
                color: "rgba(0, 0, 0, 0.87)",
            },
            "& .MuiButton-root": {
                fontSize: "0.700rem",
                lineHeight: "1.0",
            },
        },
    }));*/

   // const classes = useStyles();
    return (
        <Dialog id="idDialogGenerico"
                open={props.openDialoGenerico}
                style={{ background: "rgba(149,215,207,0.62)" }} >

            <DialogTitle id="alertGenerico">
                {props.msgExibicao}
            </DialogTitle>
            <DialogActions >
                <Button
                    id="btnAlertSimGenerico"
                    variant={"contained"}
                    onClick={confirmaRespostaSim}
                    color="primary"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                    Sim
                </Button>
                <Button
                    id="btnAlertNaoGenerico"
                    variant={"contained"}
                    onClick={confirmaRespostaNao}
                    color="primary"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    autoFocus
                >
                    Não
                </Button>
            </DialogActions>
        </Dialog>
    );
}

/*
export const SimpleDialogDemo=() =>{
    const [open, setOpen] = React.useState(false);
    const [resultadoResposta, setResultadoResposta] = React.useState('');



    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Typography variant="subtitle1">Resposta: {resultadoResposta}</Typography>
            <br />
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <DialogConfirmGenerico
                openDialoGenerico={open}
                setOpenDialoGenerico={open => setOpen(open)}
                setResultadoResposta={setResultadoResposta}
                msgExibicao={"Deseja realmente excluir?"}
            />
        </div>
    );
}
*/
