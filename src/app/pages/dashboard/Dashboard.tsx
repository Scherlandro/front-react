import React, { useEffect, useState } from 'react';
import { useForm} from "react-hook-form"
import {IProduto} from "../../shared/interfaces/product";
import {    Grid } from "@mui/material";
import {MenuMain} from "../Menu/Menu";

interface iRegiao {
    id:number;
    nome: string;
}
interface iEstados {
    id:number;
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
    const {register, handleSubmit, setFocus} = useForm();
    const onSubmit = (e:any)=>{ console.log(e)};

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const checkAddress = (e:any) => {
        const municipios = e.target.value.replace(/\D/g, '');
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=${municipios}/json/`)
            .then(res => res.json()).then(
            data => {
                for (let i = 0; i < data.length ; i++) {
                        setListCt(data);
                }
                console.log(listCt.map((i)=>i.nome), listCt.length);
            });
    }

    useEffect(()=>{
        fetch( "https://brasilapi.com.br/api/ibge/uf/v1")
            .then((res)=>res.json())
            .then((data)=>setEstados(data));
    }, []);

    const handleStatesUpdate = (event:any)=>{
        setSelectedEstado(event.target.value);
        chekCitys(event.target.value);
    }

   const chekCitys = (e:any)=>{
        console.log(e);
       if(!e) return;
        fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${e}`)
            .then((res)=>res.json())
            .then((data)=>setCidades(data));
    };

    return (
        <div>
     <MenuMain />

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register("firstName")} />
                <label>Gender Selection</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid  sx={{ p: 6 }}>
                    <button onClick={checkAddress}>Ver Cidades</button>
                    <label>

                        <select>
                            {listCt.map((i)=><option>{i.nome}</option>)}
                        </select>
                    </label>
                </Grid>
            </form>


            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid  sx={{p:2 }}>
                    <label >
                        Lista de Estados
                        <select value={selectedEstado} onChange={handleStatesUpdate} >
                               {estados.map((i)=>(
                                   <option value={i.sigla} >{i.nome}</option>
                               ))}
                        </select>
                    </label>
                    <label >
                        Lista de Cidades
                        <select>
                               {cidades.map((i)=><option  >{i.nome}</option>)}
                        </select>
                        {cidades.length}
                    </label>
                </Grid>
            </form>
        </div>
    );


}
