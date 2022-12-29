import React from "react";


export default function Card(prop) {
  return (
    <div className="card">
      <div className="card__left">
        <div className="img-wrapper"></div>
      </div>
      <div className="card__mid">
        <h2 className="title">{prop.channel_name}</h2>
        <div className="genre">{prop.genre}</div>
        <div className="hd_sd">{prop.hd_or_sd}</div>
      </div>
      <div className="card__right">
        <div className="channel-no">{prop.epg_no}</div>
      </div>
    </div>
  );
}