import React, { useEffect, useState } from "react";
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
  const [amenitiesArr, setAmenitiesArr] = useState([]);
  const [totalLargeTable, setTotalLargeTable] = useState(0);
  const [totalMediumTable, setTotalMediumTable] = useState(0);
  const [totalSmallTable, setTotalSmallTable] = useState(0);
  const [totalChair, setTotalChair] = useState(0);

  const handleAmenities = (item) => {
    console.log('handleAmenities', item)
    let arr = amenitiesArr;
    const titleArr = handleAmenitiesTitleArr();
    if (titleArr.includes(item)) {
      const index = titleArr.indexOf(item);
      if (index > -1) {
        arr.splice(index, 1); // 2nd parameter means remove one item only
      }
      setAmenitiesArr([...arr]);
    } else {
      arr.push({ title: item, available: true, total: 1 });
      setAmenitiesArr([...arr]);
    }
    console.log('amenitiesArr',amenitiesArr );
    handleSelectedAmenities(arr);
  };
  const handleAmenitesColor = (item) => {
    const titleArr = handleAmenitiesTitleArr();
    if (titleArr.includes(item)) {
      return "#ffff00";
    } else {
      return null;
    }
  };

  const handleAmenitiesTitleArr = () => {
    let titleArr = [];
    for (let i = 0; i < amenitiesArr.length; i++) {
      const element = amenitiesArr[i];
      titleArr.push(element.title);
    }
    return titleArr;
  };
  const handleLargeTabelColor = (type) => {
    if (totalLargeTable > 0) {
      return type === "color" ? "#ffff00" : true;
    }
  };
  const handleSmallTabelColor = (type) => {
    if (totalSmallTable > 0) {
      return type === "color" ? "#ffff00" : true;
    }
  };
  const handleMediumTabelColor = (type) => {
    if (totalMediumTable > 0) {
      return type === "color" ? "#ffff00" : true;
    }
  };
  const handleChairColor = (type) => {
    if (totalChair > 0) {
      return type === "color" ? "#ffff00" : true;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div
        onClick={() => {
          handleAmenities("commercial");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Commercial fill="#000" fillBox={handleAmenitesColor("commercial")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("residential");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Residential fill="#000" fillBox={handleAmenitesColor("residential")} />
      </div>

      <div
        onClick={() => {
          handleAmenities("largeTable");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <LargeTable
          fill="#000"
          fillBox={handleLargeTabelColor("color")}
          onIncrement={() => {
            setTotalLargeTable(totalLargeTable + 1);
            handleAmenities("largeTable", totalLargeTable + 1);
          }}
          onDecrement={() => {
            if (totalLargeTable > 0) {
              setTotalLargeTable(totalLargeTable - 1);
            }
          }}
          total={totalLargeTable}
        />
      </div>
      <div style={{ padding: 5, cursor: "pointer" }}>
        <MediumTable
          fill="#000"
          fillBox={handleMediumTabelColor("color")}
          onIncrement={() => {
            setTotalMediumTable(totalMediumTable + 1);
          }}
          onDecrement={() => {
            if (totalMediumTable > 0) {
              setTotalMediumTable(totalMediumTable - 1);
            }
          }}
          total={totalMediumTable}
        />
      </div>
      <div style={{ padding: 5, cursor: "pointer" }}>
        <SmallTable
          fill="#000"
          fillBox={handleSmallTabelColor("color")}
          onIncrement={() => {
            setTotalSmallTable(totalSmallTable + 1);
          }}
          onDecrement={() => {
            if (totalSmallTable > 0) {
              setTotalSmallTable(totalSmallTable - 1);
            }
          }}
          total={totalSmallTable}
        />
      </div>
      <div style={{ padding: 5, cursor: "pointer" }}>
        <Chairs
          fill="#000"
          fillBox={handleChairColor("color")}
          onIncrement={() => {
            setTotalChair(totalChair + 1);
          }}
          onDecrement={() => {
            if (totalChair > 0) {
              setTotalChair(totalChair - 1);
            }
          }}
          total={totalChair}
        />
      </div>
      <div
        onClick={() => {
          handleAmenities("Wifi");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Wifi fill="#000" fillBox={handleAmenitesColor("Wifi")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("NoWifi");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <NoWifi fill="#000" fillBox={handleAmenitesColor("NoWifi")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Ethernet");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Ethernet fill="#000" fillBox={handleAmenitesColor("Ethernet")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Computer");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Computer fill="#000" fillBox={handleAmenitesColor("Computer")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Mouse");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Mouse fill="#000" fillBox={handleAmenitesColor("Mouse")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Keyboard");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Keyboard fill="#000" fillBox={handleAmenitesColor("Keyboard")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Printer");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Printer fill="#000" fillBox={handleAmenitesColor("Printer")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("TV");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <TV fill="#000" fillBox={handleAmenitesColor("TV")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Pen");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Pen fill="#000" fillBox={handleAmenitesColor("Pen")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Paper");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Paper fill="#000" fillBox={handleAmenitesColor("Paper")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("MeetingRoom");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <MeetingRoom fill="#000" fillBox={handleAmenitesColor("MeetingRoom")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("HeadphonewMic");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <HeadphonewMic
          fill="#000"
          fillBox={handleAmenitesColor("HeadphonewMic")}
        />
      </div>
      <div
        onClick={() => {
          handleAmenities("Headphone");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Headphone fill="#000" fillBox={handleAmenitesColor("Headphone")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Coffee");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Coffee fill="#000" fillBox={handleAmenitesColor("Coffee")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Couch");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Couch fill="#000" fillBox={handleAmenitesColor("Couch")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("OutDoorDeck");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <OutDoorDeck fill="#000" fillBox={handleAmenitesColor("OutDoorDeck")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Penthouse");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Penthouse fill="#000" fillBox={handleAmenitesColor("Penthouse")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Outlet");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Outlet fill="#000" fillBox={handleAmenitesColor("Outlet")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("WheelChair");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <WheelChair fill="#000" fillBox={handleAmenitesColor("WheelChair")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("NoWheelChair");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <NoWheelChair
          fill="#000"
          fillBox={handleAmenitesColor("NoWheelChair")}
        />
      </div>
      <div
        onClick={() => {
          handleAmenities("Gym");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Gym fill="#000" fillBox={handleAmenitesColor("Gym")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("FrontYard");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <FrontYard fill="#000" fillBox={handleAmenitesColor("FrontYard")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("Water");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Water fill="#000" fillBox={handleAmenitesColor("Water")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("SwimmingPool");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <SwimmingPool
          fill="#000"
          fillBox={handleAmenitesColor("SwimmingPool")}
        />
      </div>
      <div
        onClick={() => {
          handleAmenities("Billiard");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <Billiard fill="#000" fillBox={handleAmenitesColor("Billiard")} />
      </div>
      <div
        onClick={() => {
          handleAmenities("PingPong");
        }}
        style={{ padding: 5, cursor: "pointer" }}
      >
        <PingPong fill="#000" fillBox={handleAmenitesColor("PingPong")} />
      </div>
    </div>
  );
};
export default Amenities;
