import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Home from "@/pages/Home";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default Router;
