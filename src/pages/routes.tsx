import { createBrowserRouter } from "react-router-dom";
import App from '../App'

import Parceiros from "./parceiros";
import SuporteDigital from "./suporteDigital";
import Global from "./global";
import Qualiconsig from "./qualiconsig";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/Qualiconsig",
    element: <Qualiconsig/>
  },
  {
    path: "/Parceiros",
    element: <Parceiros/>
  },
  {
    path: "/Digital",
    element: <SuporteDigital/>
  },
  {
    path: "/Treinamento",
    element: <Global/>
  }

]);