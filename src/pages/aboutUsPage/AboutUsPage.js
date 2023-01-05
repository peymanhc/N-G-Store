import React, { useEffect } from "react";
import HeadBanner from "components/aboutUsPage/navitech/HeadBanner";
import Boxes from "components/aboutUsPage/navitech/Boxes";
import Main from "components/aboutUsPage/navitech/Main";
import Photos from "components/aboutUsPage/navitech/Photos";
import News from "components/aboutUsPage/navitech/News";
import MediaPartners from "components/aboutUsPage/navitech/MediaPartners";
import MyGooglemap from "components/aboutUsPage/navitech/Googlemap";

function AboutUs() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <HeadBanner />
      <Boxes />
      <Main />
      <Photos />
      <News />
      <MediaPartners />
      <MyGooglemap height="500px" />
    </div>
  );
}

export default AboutUs;
