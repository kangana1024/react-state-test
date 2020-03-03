/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, createRef } from "react";
import videojs from "video.js";

const Videolayout = props => {
  let player = createRef();
  let playerState = createRef();

  useEffect(() => {
    player = videojs(
      playerState.current,
      {
        fluid: true,
        fill: true,
        controls: true,
        autoplay: true,
        aspectRatio: "16:9"
      },
      () => {
        // player init

        player.on("timeupdate", timeupdateHandler);
      }
    );

    return () => {
      if (player) {
        player.off("timeupdate", timeupdateHandler);
        player.dispose();
      }
    };
  }, []);

  // handle Event
  const timeupdateHandler = e => {
    let mytime = player.currentTime(); // current time
    let endTime = player.duration(); // end Time

    console.log("Time Change : ", mytime, endTime);
  };
  return (
    <div data-vjs-player>
      <video
        ref={playerState}
        className="video-js vjs-default-skin vjs-16-9"
        playsInline
      >
        <source
          src="https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Videolayout;
