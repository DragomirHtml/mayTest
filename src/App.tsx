import { createBrowserRouter, RouterProvider } from "react-router";
import { patch } from "@mui/material"
import { Todolist } from "./components/Todolist"
import { Component } from "react"
import Dummy1 from "./Dummy1"
import Dummy3 from "./Dummy3"
import Dummy2 from "./Dummy2"

const router = createBrowserRouter([
  {
    path: '/',
    Component: Dummy1,
    children: [ {
    path: '/dummy2',
    Component: Dummy2,
  },
  {
    
    path: '/activated',
    Component: Dummy3,
  }],
  },
 
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    <Todolist />
    </>
  )
}

export default App
