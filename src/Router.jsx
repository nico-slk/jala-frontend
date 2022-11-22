import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Error from './Error';
import Home from './Home';
import OperationsClass from './OperationsClass';
import OperationsFunctional from './OperationsFunctional';
import ToDoList from './ToDoList';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chess" element={<App />} />
                <Route path="/operationsclass" element={<OperationsClass />} />
                <Route path="/operationsfunctional" element={<OperationsFunctional />} />
                <Route path="/toDoList" element={<ToDoList />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
