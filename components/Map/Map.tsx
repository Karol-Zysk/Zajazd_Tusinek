import React from "react";
import styles from "./Map.module.css";
import Circle from "../Circle/Circle";
import HoverVideoPlayer from "react-hover-video-player";

const Map = () => {
  return (
    <>
      <div className={styles.container} id="map">
        <Circle backgroundColor="#01c686" top="-35vh" left="-35vh" />
        <div className={styles.content_container}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              Jesteśmy <b style={{ color: "darkgreen" }}>Tutaj</b>
            </h1>
            <MapComponent />
          </div>
          <div className={styles.iframe_wrapper}>
            <h1 className={styles.video_title}>Widok z lotu ptaka</h1>
            <HoverVideoPlayer
              videoStyle={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "25px",
                boxShadow: "10px 10px 7px rgba(0, 0, 0, 0.8)",
                cursor: "pointer",
              }}
              videoSrc={`/video/place.mp4`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;

function MapComponent() {
  return (
    <div className={styles.mapouter}>
      <div className={styles.gmap_canvas}>
        <iframe
          title="mapa tusinek"
          className={styles.map_frame}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=tusinek&t=k&z=7&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
      </div>
    </div>
  );
}
