import React, { useState } from "react";
import jobs from "../../data/jobs";
import { useEffect } from "react";
import { Button } from "antd";

export default function SearchForm(props) {
  return (
    <form
      className="mb-3 d-flex justify-content-between align-items-center searchFormBox"
    >
      <div className="searchInputBox d-flex">
        <input
          onChange={(e) => props.searchJob(e.target.value)}
          className="searchInput"
          type="text"
          placeholder="Katalogdan kasbni qidiring"
        />

      </div>
      <div className="centered">
        <button type={"button"} onClick={props.searchData} className="searchButton">Izlash</button>
      </div>
    </form>
  );
}
