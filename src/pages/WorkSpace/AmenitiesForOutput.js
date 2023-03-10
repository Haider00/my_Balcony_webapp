import React, { useState, useEffect } from "react";
import Commercial from "../../assets/svg/Commercial";
import Residential from "../../assets/svg/Residential";
import LargeTable from "../../assets/svg/LargeTable";
import MediumTable from "../../assets/svg/MediumTable";
import SmallTable from "../../assets/svg/SmallTable";
import Chairs from "../../assets/svg/Chairs";
import Wifi from "../../assets/svg/Wifi";
import NoWifi from "../../assets/svg/NoWifi";
import Ethernet from "../../assets/svg/Ethernet";
import Computer from "../../assets/svg/Computer";
import Mouse from "../../assets/svg/Mouse";
import Keyboard from "../../assets/svg/Keyboard";
import Printer from "../../assets/svg/Printer";
import TV from "../../assets/svg/TV";
import Pen from "../../assets/svg/Pen";
import Paper from "../../assets/svg/Paper";
import MeetingRoom from "../../assets/svg/MeetingRoom";
import HeadphonewMic from "../../assets/svg/HeadphonewMic";
import Headphone from "../../assets/svg/Headphone";
import Coffee from "../../assets/svg/Coffes";
import Couch from "../../assets/svg/Couch";
import OutDoorDeck from "../../assets/svg/OutDoorDeck";
import Penthouse from "../../assets/svg/Penthouse";
import Outlet from "../../assets/svg/Outlet";
import WheelChair from "../../assets/svg/WheelChair";
import NoWheelChair from "../../assets/svg/NoWheelChair";
import Gym from "../../assets/svg/Gym";
import FrontYard from "../../assets/svg/FrontYard";
import Water from "../../assets/svg/Water";
import SwimmingPool from "../../assets/svg/SwimmingPool";
import Billiard from "../../assets/svg/Billiyard";
import PingPong from "../../assets/svg/PingPong";

export const Amenities = ({ handleSelectedAmenities = ([]) => {} }) => {
  const [amenitiesTitle, setAmenitiesTitle] = useState([]);
  const amenities = [
    {
      title: "commercial",
      available: "true",
      total: "1",
    },
    {
      title: "resedential",
      available: "true",
      total: "1",
    },
    {
      title: "largeTable",
      available: "true",
      total: "1",
    },
    {
      title: "mediumTable",
      available: "true",
      total: "1",
    },
    {
      title: "smallTable",
      available: "true",
      total: "1",
    },
    {
      title: "chairs",
      available: "true",
      total: "1",
    },
    {
      title: "wifi",
      available: "true",
      total: "1",
    },
    {
      title: "nowifi",
      available: "true",
      total: "1",
    },
    {
      title: "ethernet",
      available: "true",
      total: "1",
    },
    {
      title: "computer",
      available: "true",
      total: "1",
    },
    {
      title: "mouse",
      available: "true",
      total: "1",
    },
    {
      title: "keyboard",
      available: "true",
      total: "1",
    },
    {
      title: "printer",
      available: "true",
      total: "1",
    },
    {
      title: "tv",
      available: "true",
      total: "1",
    },
    {
      title: "pen",
      available: "true",
      total: "1",
    },
    {
      title: "paper",
      available: "true",
      total: "1",
    },
    {
      title: "meetingRoom",
      available: "true",
      total: "1",
    },
    {
      title: "headPhonewMic",
      available: "true",
      total: "1",
    },
    {
      title: "headphone",
      available: "true",
      total: "1",
    },
    {
      title: "coffee",
      available: "true",
      total: "1",
    },
    {
      title: "couch",
      available: "true",
      total: "1",
    },
    {
      title: "outdoordeck",
      available: "true",
      total: "1",
    },
    {
      title: "pentHouse",
      available: "true",
      total: "1",
    },
    {
      title: "outlet",
      available: "true",
      total: "1",
    },
    {
      title: "wheelChair",
      available: "true",
      total: "1",
    },
    {
      title: "noWheelChair",
      available: "true",
      total: "1",
    },
    {
      title: "gym",
      available: "true",
      total: "1",
    },
    {
      title: "frontyard",
      available: "true",
      total: "1",
    },
    {
      title: "water",
      available: "true",
      total: "1",
    },
    {
      title: "swimmingPool",
      available: "true",
      total: "1",
    },
    {
      title: "billiard",
      available: "true",
      total: "1",
    },
    {
      title: "pingPong",
      available: "true",
      total: "1",
    },
  ];

  useEffect(() => {
    const titles = amenities.map((item) => item.title);
    setAmenitiesTitle(titles);
    console.log("titles>>>", titles);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:'center'
      }}
    >
      {amenitiesTitle.includes('commercial') && <div style={{ padding: 5 }}>
        <Commercial fill="#000" />
      </div>}

      {amenitiesTitle.includes('resedential') && <div style={{ padding: 5 }}>
        <Residential fill="#000" />
      </div>}

      {amenitiesTitle.includes('largeTable') && <div style={{ padding: 5 }}>
        <LargeTable fill="#000" />
      </div>}
      {amenitiesTitle.includes('mediumTable') && <div style={{ padding: 5 }}>
        <MediumTable fill="#000" />
      </div>}
      {amenitiesTitle.includes('smallTable') && <div style={{ padding: 5 }}>
        <SmallTable fill="#000" />
      </div>}
      {amenitiesTitle.includes('chairs') && <div style={{ padding: 5 }}>
        <Chairs fill="#000" />
      </div>}
      {amenitiesTitle.includes('wifi') && <div style={{ padding: 5 }}>
        <Wifi fill="#000" />
      </div>}
      {amenitiesTitle.includes('nowifi') && <div style={{ padding: 5 }}>
        <NoWifi fill="#000" />
      </div>}
      {amenitiesTitle.includes('ethernet') && <div style={{ padding: 5 }}>
        <Ethernet fill="#000" />
      </div>}
      {amenitiesTitle.includes('computer') && <div style={{ padding: 5 }}>
        <Computer fill="#000" />
      </div>}
      {amenitiesTitle.includes('mouse') && <div style={{ padding: 5 }}>
        <Mouse fill="#000" />
      </div>}
      {amenitiesTitle.includes('keyboard') && <div style={{ padding: 5 }}>
        <Keyboard fill="#000" />
      </div>}
      {amenitiesTitle.includes('printer') && <div style={{ padding: 5 }}>
        <Printer fill="#000" />
      </div>}
      {amenitiesTitle.includes('tv') && <div style={{ padding: 5 }}>
        <TV fill="#000" />
      </div>}
      {amenitiesTitle.includes('pen') && <div style={{ padding: 5 }}>
        <Pen fill="#000" />
      </div>}
      {amenitiesTitle.includes('paper') && <div style={{ padding: 5 }}>
        <Paper fill="#000" />
      </div>}
      {amenitiesTitle.includes('meetingRoom') && <div style={{ padding: 5 }}>
        <MeetingRoom fill="#000" />
      </div>}
      {amenitiesTitle.includes('headphonewMic') && <div style={{ padding: 5 }}>
        <HeadphonewMic fill="#000" />
      </div>}
      {amenitiesTitle.includes('headphone') && <div style={{ padding: 5 }}>
        <Headphone fill="#000" />
      </div>}
      {amenitiesTitle.includes('coffee') && <div style={{ padding: 5 }}>
        <Coffee fill="#000" />
      </div>}
      {amenitiesTitle.includes('couch') && <div style={{ padding: 5 }}>
        <Couch fill="#000" />
      </div>}
      {amenitiesTitle.includes('outdoorDeck') && <div style={{ padding: 5 }}>
        <OutDoorDeck fill="#000" />
      </div>}
      {amenitiesTitle.includes('pentHouse') && <div style={{ padding: 5 }}>
        <Penthouse fill="#000" />
      </div>}
      {amenitiesTitle.includes('outlet') && <div style={{ padding: 5 }}>
        <Outlet fill="#000" />
      </div>}
      {amenitiesTitle.includes('wheelChair') && <div style={{ padding: 5 }}>
        <WheelChair fill="#000" />
      </div>}
      {amenitiesTitle.includes('noWheelChair') && <div style={{ padding: 5 }}>
        <NoWheelChair fill="#000" />
      </div>}
      {amenitiesTitle.includes('gym') && <div style={{ padding: 5 }}>
        <Gym fill="#000" />
      </div>}
      {amenitiesTitle.includes('frontYard') && <div style={{ padding: 5 }}>
        <FrontYard fill="#000" />
      </div>}
      {amenitiesTitle.includes('water') && <div style={{ padding: 5 }}>
        <Water fill="#000" />
      </div>}
      {amenitiesTitle.includes('swimmingPool') && <div style={{ padding: 5 }}>
        <SwimmingPool fill="#000" />
      </div>}
      {amenitiesTitle.includes('billiard') && <div style={{ padding: 5 }}>
        <Billiard fill="#000" />
      </div>}
      {amenitiesTitle.includes('pingPong') && <div style={{ padding: 5 }}>
        <PingPong fill="#000" />
      </div>}
    </div>
  );
};
export default Amenities;
