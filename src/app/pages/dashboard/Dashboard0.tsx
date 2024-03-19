

import React, {useState, useEffect, useRef} from 'react';
import { useForm } from "react-hook-form"
import { useTheme } from '@mui/material/styles';
import {
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Slider,
    Tooltip,
    Typography
} from '@mui/material';
import {MenuMain} from "../Menu/Menu";


const Dashboard0 = () => {
    const {register, handleSubmit, setValue,setFocus} = useForm();

    const onSubmit = (e:any)=>{ console.log(e)};

    const checkCEP = (e:any) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(
        data => {  console.log(data);
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');

        });
    }

    const checkAddress = (e:any) => {
        const municipios = e.target.value.replace(/\D/g, '');
       // console.log(municipios);
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=${municipios}/json/`)
            .then(res => res.json()).then(
        data => {  console.log(data);
            setValue('municipio', data.municipio);
         /*   setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');*/

        });
    }

    const [customization, setCustomization] = useState('');
    const theme = useTheme();
    //const dispatch = useState();
    const dispatch = useTheme();
// const customization = useSelector((state:React.MouseEvent<HTMLElement>) => state.customization);

    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    // state - border radius
   const [borderRadius, setBorderRadius] = useState(customization);
    const handleBorderRadius = (event:  React.MouseEvent<HTMLElement>, newValue: any) => {
        setBorderRadius(newValue.currentTarget);
    };



    useEffect(() => {
      //  dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    }, [dispatch, borderRadius]);


    let initialFont;
    switch (customization) {
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto', sans-serif`:
        default:
            initialFont = 'Roboto';
            break;
    }


    // state - font family
    const [fontFamily, setFontFamily] = useState(initialFont);
    useEffect(() => {
        let newFont;
        switch (fontFamily) {
            case 'Inter':
                newFont = `'Inter', sans-serif`;
                break;
            case 'Poppins':
                newFont = `'Poppins', sans-serif`;
                break;
            case 'Roboto':
            default:
                newFont = `'Roboto', sans-serif`;
                break;
        }
   //     dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
    }, );

    return (
        <> <MenuMain />
            {/* toggle button */}
            <Tooltip title="Live Customize">

                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    color="secondary"
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
      {/*        <AnimateButton type="rotate">
                        <IconButton color="inherit" size="large" disableRipple>
                            <IconSettings />
                        </IconButton>
                    </AnimateButton>*/}
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >
              <div>
                    <Grid  sx={{ p: 3 }}>
                        <Grid item xs={12}>
                             font family
                            <sub title="Font Family">
                                <FormControl>
                                    <RadioGroup
                                        aria-label="font-family"
                                        onChange={(e) => setFontFamily(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="Roboto"
                                            control={<Radio />}
                                            label="Roboto"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Poppins"
                                            control={<Radio />}
                                            label="Poppins"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Inter"
                                            control={<Radio />}
                                            label="Inter"
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 28 },
                                                '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </sub>
                        </Grid>
                        <Grid item xs={12}>
                             border radius
                            <sub title="Border Radius">
                                <Grid item xs={12} container spacing={2} alignItems="center" sx={{ mt: 2.5 }}>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            4px
                                        </Typography>
                                    </Grid>
                                    <Grid item xs>
                                        <Slider
                                        size="small"
                                        valueLabelDisplay="on"
                                        aria-labelledby="discrete-slider-small-steps"
                                        marks
                                        step={2}
                                        min={4}
                                        max={24}
                                        color="secondary"
                                        sx={{
                                            '& .MuiSlider-valueLabel': {
                                                color: 'secondary.light'
                                            }
                                        }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" color="secondary">
                                            24px
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </sub>
                        </Grid>
                    </Grid>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid  sx={{ p: 6 }}>
                    <label>
                       {/* <input type="text" {...register("address")} onBlur={checkAddress} />*/}
                        <button onClick={checkAddress}></button>
                        <select {...register("municipio")}></select>
                    </label>
                    <label>
                        CEP:
                        <input type="text" {...register("cep")} onBlur={checkCEP} />
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
        </>
    );
};

export default Dashboard0;