import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form"
import {
    Card,
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup, Slider,
    Tooltip,
    Typography
} from "@mui/material";
import {MenuMain} from "../menu/Menu";
import {useTheme} from "@mui/material/styles";
import {DialogConfirmGenerico} from "../../shared/components/dialogGenerico";

interface iRegiao {
    id: number;
    nome: string;
}

interface iEstados {
    id: number;
    sigla: string;
    nome: string;
    regiao: iRegiao;
}

interface Citys {
    nome: string;
    codigo_ibge: string;
}

export const Dashboard = () => {
    const [listCt, setListCt] = useState<Citys[]>([]);
    const [cidades, setCidades] = useState<Citys[]>([]);
    const [estados, setEstados] = useState<iEstados[]>([]);
    const [selectedEstado, setSelectedEstado] = useState("");
    const [sticky, setSticky] = useState(false);
    const {register, handleSubmit, setValue,setFocus} = useForm();

    const [open, setOpen] = useState(false);
    const [openMsg, setOpenMsg] = useState(false);
    const theme = useTheme();

    const onSubmit = (e: any) => {  console.log(e) };
    const [resultadoResposta, setResultadoResposta] = React.useState('');

    const [txt, setTxt] = useState("");
    const [msg, setMsg] = useState("");

    const changeTxt=(event:any)=>{
        setTxt(event.target.value);
    }
    const displayMsg=(event:any)=>{
        setMsg(txt);
        event.preventDefault();
    }



    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const checkAddress = (e: any) => {
        const municipios = e.target.value.replace(/\D/g, '');
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=${municipios}/json/`)
            .then(res => res.json()).then(
            data => {
                for (let i = 0; i < data.length; i++) {
                    setListCt(data);
                }
                console.log(listCt.map((i) => i.nome), listCt.length);
            });
    }

    const checkCEP = (e:any) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        if (cep !== null && cep !== "" && cep !== undefined) {

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => res.json())
                .then((data) => {
                    if (data.status === 500) {
                        console.log(data, 'Something went wrong');
                    } else {
                        setValue('address', data.logradouro);
                        setValue('neighborhood', data.bairro);
                        setValue('city', data.localidade);
                        setValue('uf', data.uf);
                        setFocus('addressNumber');
                    }

                }).catch(error => {
                if (error) {
                    setOpenMsg(true);
                    if (resultadoResposta == 'SIM') {
                        setTimeout('', 5000);
                        setOpenMsg(false);
                        //  displayMsg(resultadoResposta)
                    }
                }
            });
        }
    }

    useEffect(() => {
        fetch("https://brasilapi.com.br/api/ibge/uf/v1")
            .then((res) => res.json())
            .then((data) =>{
                if(data != null)
                setEstados(data)});
    }, []);

    const handleStatesUpdate = (event: any) => {
        setSelectedEstado(event.target.value);
        chekCitys(event.target.value);
    }

    const chekCitys = (e: any) => {
        console.log(e);
        if (!e) return;
        fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${e}`)
            .then((res) => res.json())
            .then((data) => setCidades(data));
    };

    const handleToggle = () => {
        setOpen(!open);
    };
    const handleMsg = () => {
        setOpenMsg(!openMsg);
    };

    return (
        <div>
            <MenuMain/>
            <Grid item xs={6} sm={6} md={6} lg={6} >
                <Card
                    style={{
                        marginTop: "8px",
                        borderRadius: "8px",
                        background: "grey",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>First Name</label>
                        <input {...register("firstName")} />
                        <label>Gender Selection</label>
                        <select {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                        <input type="submit"/>
                    </form>
                </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6} >
                <Card
                    style={{
                        marginTop: "12px",
                        borderRadius: "10px",
                        background: "grey",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid sx={{p: 6}}>
                            <button onClick={checkAddress}>Ver Cidades</button>
                            <label>

                                <select>
                                    {listCt.map((i) => <option>{i.nome}</option>)}
                                </select>
                            </label>
                        </Grid>
                    </form>

                </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6} >
                <Card
                    style={{
                        marginTop: "12px",
                        borderRadius: "10px",
                        background: "grey",
                        display: "flex",
                        alignItems: "center",
                    }}
                >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid sx={{p: 2}}>
                            <label>
                                Lista de Estados
                                <select value={selectedEstado} onChange={handleStatesUpdate}>
                                    {estados.map((i) => (
                                        <option value={i.sigla}>{i.nome}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Lista de Cidades
                                <select>
                                    {cidades.map((i) => <option>{i.nome}</option>)}
                                </select>
                                {cidades.length}
                            </label>
                        </Grid>
                    </form>
                </Card>
            </Grid>


            <Tooltip title="Search for CEP">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    color="primary"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '25%',
                        position: 'fixed',
                        right: 10,
                        zIndex: theme.zIndex.speedDial
                    }}
                >
                    CEP
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                style={{background: 'url("../image/planeta.png")' }}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >

                <form
                    style={{background: 'silver', height:600 }}
                   onSubmit={handleSubmit(onSubmit)}>
                    <Grid  sx={{ p: 6 }} >

                        <label>
                            CEP:
                            <input type="text" {...register("cep")}
                                   onBlur={checkCEP}
                                   onKeyPress={event => {
                                       if (event.key === 'Enter') {
                                           checkCEP(event);
                                       }
                                   }}
                                   onChange={changeTxt}
                            />
                            <DialogConfirmGenerico
                                openDialoGenerico={openMsg}
                                setOpenDialoGenerico={openMsg => setOpenMsg(openMsg)}
                                setResultadoResposta={setResultadoResposta}
                                msgExibicao={"Não encontrou Serviço! "}
                            />
                            <label>{resultadoResposta}</label>
                        </label>
                        <label>
                            Rua:
                            <input type="text" {...register("address")} />
                        </label>
                        <label>
                            Número:
                            <input type="text" {...register("addressNumber")} />
                        </label>
                        <label>
                            Bairro:
                            <input type="text" {...register("neighborhood")}  />
                        </label>
                        <label>
                            Cidade:
                            <input type="text" {...register("city")}  />
                        </label>
                        <label>
                            Estado:
                            <input type="text" {...register("uf")}  />
                        </label>
                        <button type="submit" >Enviar</button>
                    </Grid>
                </form>

            </Drawer>


        </div>
    );


}
