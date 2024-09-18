import {useCallback, useMemo, useRef, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"

import {ButtonLogin} from "../../shared/components/ButtonLogin";
import {InputLogin} from "../../shared/components/InputLogin";
import {MenuMain} from "../menu/Menu";
import styles from "./Login.module.css";
import {useUsuarioLogado} from "../../shared/hooks/UseUsuarioLogado";

type Inputs = {
    example: string
    exampleRequired: string
}

export const Login = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    console.log(watch("example"));
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const {nomeDoUsuario} = useUsuarioLogado();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const emailLength = useMemo(() => {
        return email.length * 1;
    }, [email.length]);


    const confirmando = useCallback(() => {
        if (window.confirm('  Email:   ' + email + '   Senha: ' + password)) {
            window.alert('Beleza')
        } else {
            window.alert('Então digite outro !')
        }
    }, [email, password])

    return (
        <div>
            <MenuMain/>
            <form className={styles.componentGradient}
                   onSubmit={handleSubmit(onSubmit)}        >

                <p >{nomeDoUsuario}</p>
                <div className={styles.containerLogin}>
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label"> {emailLength} caracteres </label>
                        <div className="col-sm-10">
                            <InputLogin
                                value={email}
                                placeholder={"email@example.com"}
                                onChange={newValue => setEmail(newValue)}
                                onPressEnter={() => inputPasswordRef.current?.focus()}
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <InputLogin
                                type="password"
                                value={password}
                                ref={inputPasswordRef}
                                onChange={newValue => setPassword(newValue)}
                            />
                        </div>
                    </div>
                    <div>
                        <ButtonLogin type="button" onClick={confirmando}>
                            CONFIRMAR
                        </ButtonLogin>
                    </div>

                </div>


            </form>


        </div>
    );
}
