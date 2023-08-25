import React from "react";
import styled from "styled-components";
import { CustomHeader } from "../component";
import UserPic from "../assets/svg/Calender";
import SalesandOrder from "./Dashboard/transaction";
import Admin from "../components/Admin/admin";
import LinearProgress from "@mui/material/LinearProgress";
import MobileDropdown from "../component/AdminMobileDropDown/index";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent } from "@material-ui/core";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Head from "next/head";
const datas = [
  { angle: 4, label: "Slice 1", subLabel: "20%" },
  { angle: 3, label: "Slice 2", subLabel: "40%" },
  { angle: 2, label: "Slice 3", subLabel: "20%" },
  { angle: 2, label: "Slice 4", subLabel: "20%" },
];
const COLORS = ["#eb4a8a", "#5289c9", "#ff6a81", "#2862ff"];

const data = [
  { name: "", uv: 2000, pv: 8000, amt: 2400 },
  { name: "", uv: 5000, pv: 2000, amt: 2210 },
  { name: "", uv: 2000, pv: 9800, amt: 2290 },
  { name: "", uv: 4000, pv: 2908, amt: 2000 },
  { name: "", uv: 2000, pv: 7800, amt: 2181 },
  { name: "", uv: 6000, pv: 2800, amt: 2500 },
  { name: "", uv: 3490, pv: 9300, amt: 2100 },
];

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 40px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 767px) {
    margin: 0;
    width: 100%;
    padding: 0 20px;
  }
  @media screen and (max-width: 930px) {
    justify-content: center;
  }
`;
const Box1 = styled.div`
  flex: 1 0 30%;
  height: 440px;
  margin: 20px 20px 20px 20px;
  padding: 24px 30px 30px 30px;
  box-shadow: 0 5px 25px 0 rgba(82, 87, 93, 0.1);
  background-color: #fff;
  border-radius: 20px;
  @media screen and (max-width: 930px) {
    flex: 0 0 100%;
    height: 520px;
  }
`;
const Box2 = styled.div`
  flex: 0 0 30%;
  height: 440px;
  margin:  20px 20px 20px 20px;
  padding: 24px 30px 30px 30px;
  box-shadow: 0 5px 25px 0 rgba(82, 87, 93, 0.1);
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  @media screen and (max-width: 499px) {
    flex: 0 0 100%;
  
  }
  @media screen and (min-width : 500px) and (max-width : 1470px)  {
    flex: 0 0 45%;
    }
    @media screen and (min-width: 1471px) and (max-width: 1660px) {
      flex: 0 0 45%;
    }
}
`;
const Box = styled.div`
  flex: 0 0 30%;
  height: 440px;
  margin:  20px 20px 20px 20px;
  padding: 24px 30px 30px 30px;
  box-shadow: 0 5px 25px 0 rgba(82, 87, 93, 0.1);
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  @media screen and (max-width: 499px) {
    flex: 0 0 100%;
  
  }
 
  @media screen and (min-width : 500px) and (max-width : 1470px)  {
    flex: 0 0 45%;
    }
    @media screen and (min-width: 1471px) and (max-width: 1660px) {
      flex: 0 0 45%;
    }
}
`;

const Heading = styled.span`
  font-size: 24px;
  border-bottom: 2px solid #ebf2f7;
  font-weight: bold;
  padding-bottom: 15px;
  flex: 1;
  color: #333;
`;
const Headingcontainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 10px;
`;
const ListItem = styled.li`
  list-style: none;
  button {
    background-color: ${(props) => (props.selected ? "#52575d" : "#ffffff")};
    color: ${(props) => (props.selected ? "#ffffff" : "#000000")};
    border: 0;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    font-size:16px

    &:hover {
      background-color: ${(props) => (props.selected ? "#52575d" : "#e6e6e6")};
    }
`;
const ReferalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const UserData = styled.span``;
const UserImg = styled.img``;
const UserName = styled.span`
  margin-left: 15px;
  font-size: 16px;
  color: #52575d;
`;
const UserrRating = styled.span`
  font-size: 14px;
  color: #b3b8bd;
`;

const SourceContainer = styled.div`
  text-align: center;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SourcePercentage = styled.div`
position: absolute;
top: 50%;
left: 43%;
span{
  font-size: 38px;
  font-weight: bold;
}
}`;
const SourceText = styled.div`
position: absolute;
top: 65%;
left: 0;
right: 0;
span{
  font-size: 14px;
  color: #b3b8bd;
}
}`;
const InvolveContainer = styled.div``;
const InvolveRatio = styled.div`
  span {
    font-size: 38px;
    color: #333333;
    font-weight: bold;
  }
`;
const InvolveDate = styled.div`
  font-size: 14px;
  color: #b3b8bd;
`;
const TrafficContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TrafficData = styled.span``;
const TrafficCount = styled.span`
  font-size: 20px;
  color: #52575d;
`;
const TrafficSource = styled.span`
  margin-left: 15px;
  font-size: 14px;
  color: #b3b8bd;
`;
const TrafficPercentage = styled.span`
  font-size: 16px;
  color: #52575d;
`;
const StatisticContainer = styled.div`
  display: flex;
  margin: 0 50px;
  margin-top: 32px;
  @media screen and (max-width: 900px) {
    display: inline-block;
  }
`;
const Mainarea = styled.div``;
const Sidebar = styled.div`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Headerwrapper = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1300px) {
    display: inline-block;
  }
`;

const SalesStatistic = (props) => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 60 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [SalesStatistics, setSalesStatistics] = React.useState("all");

  const handleClick = (selected) => {
    setSalesStatistics(selected);
  };

  const [chartWidth, setChartWidth] = React.useState(800); // initial width value

  // React.useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth >= 992) {
  //       setChartWidth(800);
  //     } else if (window.innerWidth >= 768) {
  //       setChartWidth(500);
  //     } else if (window.innerWidth >= 560) {
  //       setChartWidth(380);
  //     } else if (window.innerWidth >= 400) {
  //       setChartWidth(250);
  //     } else {
  //       setChartWidth(200);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize); // add event listener

  //   return () => {
  //     window.removeEventListener("resize", handleResize); // remove event listener
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Wrapper>
        <Headerwrapper>
          <CustomHeader />
          <MobileDropdown />
        </Headerwrapper>

        <StatisticContainer>
          <Sidebar>
            <Admin selectedTab={1} />
          </Sidebar>
          <Mainarea>
            <BoxContainer>
              <Box1>
                <Headingcontainer>
                  <Heading>Sales Statistics</Heading>
                  <InfoOutlinedIcon style={{ fill: "#b3b8bd" }} />
                </Headingcontainer>
                <List>
                  <ListItem selected={SalesStatistics === "all"}>
                    <button onClick={() => handleClick("all")}>All time</button>
                  </ListItem>
                  <ListItem selected={SalesStatistics === "year"}>
                    <button onClick={() => handleClick("year")}>
                      This year
                    </button>
                  </ListItem>
                  <ListItem selected={SalesStatistics === "week"}>
                    <button onClick={() => handleClick("week")}>
                      This week
                    </button>
                  </ListItem>
                  <ListItem selected={SalesStatistics === "today"}>
                    <button onClick={() => handleClick("today")}>Today</button>
                  </ListItem>
                </List>
                <Card style={{ boxShadow: "none" }}>
                  <CardContent>
                    <LineChart width={chartWidth} height={240} data={data}>
                      <CartesianGrid strokearray="3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} />
                      <YAxis axisLine={false} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#508ff4"
                        activeDot={{ r: 8 }}
                        strokeWidth={3}
                      />
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#006460"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </CardContent>
                </Card>
              </Box1>
              <Box2>
                <Headingcontainer>
                  <Heading>Referrals </Heading>
                  <InfoOutlinedIcon style={{ fill: "#b3b8bd" }} />
                </Headingcontainer>
                <ReferalContainer>
                  <UserData>
                    {/* <UserImg src={UserPic} /> */}
                    <PersonOutlineOutlinedIcon
                      style={{ position: "relative", top: 5 }}
                    />
                    <UserName>Fransesca Mets</UserName>
                  </UserData>

                  <UserrRating>21.1k</UserrRating>
                </ReferalContainer>
                <ReferalContainer>
                  <UserData>
                    {/* <UserImg src={UserPic} /> */}
                    <PersonOutlineOutlinedIcon
                      style={{ position: "relative", top: 5 }}
                    />
                    <UserName>Malcolm Quaday</UserName>
                  </UserData>

                  <UserrRating>17.6k</UserrRating>
                </ReferalContainer>
              </Box2>

              <Box>
                <Headingcontainer>
                  <Heading>Traffic</Heading>
                  <InfoOutlinedIcon style={{ fill: "#b3b8bd" }} />
                </Headingcontainer>
                <TrafficContainer>
                  <TrafficData>
                    <TrafficCount>813</TrafficCount>
                    <TrafficSource>LinkedIn</TrafficSource>
                  </TrafficData>

                  <TrafficPercentage>{`${Math.round(
                    progress
                  )}%`}</TrafficPercentage>
                </TrafficContainer>
                <LinearProgress
                  sx={{
                    borderRadius: 10,
                    height: 8,
                    color: "#5289c9",
                    marginTop: 2,
                    marginBottom: 2,
                  }}
                  variant="determinate"
                  value={progress}
                  color="inherit"
                  {...props}
                />
                <TrafficContainer>
                  <TrafficData>
                    <TrafficCount>323</TrafficCount>
                    <TrafficSource>Behance</TrafficSource>
                  </TrafficData>

                  <TrafficPercentage>{`${Math.round(
                    progress
                  )}%`}</TrafficPercentage>
                </TrafficContainer>

                <LinearProgress
                  sx={{
                    borderRadius: 10,
                    height: 8,
                    color: "#ff6a81",
                    marginTop: 2,
                    marginBottom: 2,
                  }}
                  variant="determinate"
                  value={progress}
                  color="inherit"
                  {...props}
                />
              </Box>
              <Box>
                <Headingcontainer>
                  <Heading>Involvement</Heading>
                  <InfoOutlinedIcon style={{ fill: "#b3b8bd" }} />
                </Headingcontainer>
                <InvolveContainer>
                  <InvolveRatio>
                    <span>2.2628</span>
                  </InvolveRatio>
                  <InvolveDate>
                    <span>25 April 2019</span>
                  </InvolveDate>
                </InvolveContainer>
              </Box>
              <Box>
                <Headingcontainer>
                  <Heading>Traffic sources</Heading>
                  <InfoOutlinedIcon style={{ fill: "#b3b8bd" }} />
                </Headingcontainer>
                <SourceContainer>
                  {/* <RadialChart
                    data={datas}
                    width={250}
                    height={230}
                    labelsAboveChildren
                    colorType="category"
                    innerRadius={90}
                    colorDomain={[0, COLORS.length - 1]}
                    colorRange={COLORS}
                    radius={100}
                    style={{
                      background: "#fff",
                      fontSize: "12px",
                    }}
                  /> */}
                  <SourcePercentage>
                    <span>38%</span>
                  </SourcePercentage>
                  <SourceText>
                    <span>Total Money Spend</span>
                  </SourceText>
                </SourceContainer>
              </Box>
            </BoxContainer>
            <SalesandOrder />
          </Mainarea>
        </StatisticContainer>
      </Wrapper>
    </>
  );
};

export default SalesStatistic;
