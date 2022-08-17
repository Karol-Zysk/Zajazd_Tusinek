import React, { useMemo } from "react";
import styles from "./Map.module.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Circle from "../Circle/Circle";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDqRcN_cWjTfqXSD2pke_QaCwg5PJmKQPA",
  });
  console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#01c686" top="-35vh" left="-35vh" />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <b style={{color: "green"}}>Jesteśmy</b> Tutaj
        </h1>
        <MapComponent />
      </div>
      <div className={styles.iframe_wrapper}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1660773963784!6m8!1m7!1sCAoSLEFGMVFpcE9jd0pxSUlrXzl5R2pUVy1CUmU2Nnl6R0c4MDhwWUhOa1NwRjNf!2m2!1d53.471598!2d21.3676609!3f152.64!4f-2.7900000000000063!5f1.2099795838956164"
            loading="lazy" 
            className={styles.iframe}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;

function MapComponent() {
  const center = useMemo(() => ({ lat: 53.47155, lng: 21.3675 }), []);

  return (
    <GoogleMap zoom={7} center={center} mapContainerClassName="map-container">
      <Marker
        icon={"https://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        position={center}
      />
    </GoogleMap>
  );
}
