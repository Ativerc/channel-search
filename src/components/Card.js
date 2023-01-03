import React from "react";


export default function Card(prop) {
  return (
    <div className="mx-auto w-full md:max-w-2xl hover:bg-zinc-200 rounded-lg flex p-2 my-2">
      <div className="card__left flex flex-col justify-center">
        <img src="https://via.placeholder.com/80"></img>
      </div>
      <div className="w-full flex justify-between ml-2">
        <div className="">
          <div className="text-xs">{prop.genre}</div>
          <h2 className="text-xl">{prop.channel_name}</h2>
          <div className="hd_sd">{prop.hd_or_sd}</div>
        </div>
        <div className="flex flex-col justify-center font-bold">
          <div className="channel-no">{prop.epg_no}</div>
        </div>
      </div>
    </div>
  );
}