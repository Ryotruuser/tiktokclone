import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooterText">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooterMusic">
          <MusicNoteIcon className="VideoFooterIcon" />
          <div className="VideoFooterMusicDescription">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="VideoFooterRecord"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
