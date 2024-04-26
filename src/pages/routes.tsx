import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Producao from "./producao";
import Parceiros from "./parceiros";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/Qualiconsig",
    element: <Producao/>
  },
  {
    path: "/Parceiros",
    element: <Parceiros/>
  }

]);