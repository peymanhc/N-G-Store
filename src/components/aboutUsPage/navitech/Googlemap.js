import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";

const MyGooglemap = React.memo(function Map(props) {
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyAAoHnj5BKKPkfyy7TbkQkl-DqWd_i00RI",
    {
      zoom: 9,
      center: props.location,
    }
  );
  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: props.location, map });
  }

  return (
    <div>
      <span>
        <a href="https://developers.google.com/maps/documentation/javascript/adding-a-google-map"></a>
      </span>
      <div ref={ref} style={{ width: "100%", height: props.height }} />
    </div>
  );
});
export default MyGooglemap;
