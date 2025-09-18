import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import Whitepaper from "./pages/Whitepaper";
function App() {
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/donations", element: _jsx(Donations, {}) }), _jsx(Route, { path: "/whitepaper", element: _jsx(Whitepaper, {}) })] }) }));
}
export default App;
