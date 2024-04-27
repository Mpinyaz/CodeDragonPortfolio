import "./Cursor.css";
import { animateCursor } from "./animation";
import { useEffect } from "react";
export function Cursor() {
  useEffect(() => {
    animateCursor();
  }, []);
  return (
    <>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
      <div className="cursor-follow"></div>
    </>
  );
}
