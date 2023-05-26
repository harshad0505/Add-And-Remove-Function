import React, { useContext } from "react";
import { Link } from "react-router-dom";
import photoContext from "../Context/context";

export default function () {
  const { photo } = useContext(photoContext);
  return (
    <div>
      <ul className="ui">
        <li className="li">
          <Link className="link" to="/">
            Home
          </Link>
        </li>

        <li className="li">
          <Link className="link">Downlaod</Link>
        </li>
        <li className="li">
          <Link className="link">Counter : {photo ? photo.length : 0}</Link>
        </li>
        <li className="li">
          <Link className="link" to="/About">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
