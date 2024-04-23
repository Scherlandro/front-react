import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";

import {Login} from "../pages/login/Login";
import {Dashboard} from "../pages/dashboard/Dashboard";
import {Offers} from "../pages/offers/Offers";
import {Home} from "../pages/home/Home";

export const Routes = () => {
  return (
    <BrowserRouter >

      <Switch>
        <Route path="/home" element={<Home/>} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/entrar" element={<Login />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
}
