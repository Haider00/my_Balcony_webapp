import React, { useState } from "react";
import styled from "styled-components";
import { CustomHeader } from "../component";
import UserPic from "../assets/svg/Calender";
import Lowerarea from "./SalesStatistics/transaction";
import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import { RadialChart } from "react-vis";
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
const Wrapper = styled.section``;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 40px;
  flex-wrap: wrap;
`;
const Box1 = styled.div`
  flex: 1 0 30%;
  height: 440px;
  margin: 20px 20px 20px 20px;
  padding: 24px 30px 30px 30px;
  box-shadow: 0 5px 25px 0 rgba(82, 87, 93, 0.1);
  background-color: #fff;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    margin: 20px 20px 20px 0;
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
  @media screen and (max-width: 1024px) {
    flex: 0 0 100%;
    margin: 20px 20px 20px 0;
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
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    margin: 20px 20px 20px 0;
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
  padding: 0;
  gap: 20px;
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
left: 36%;
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

  const [selectedOption, setSelectedOption] = useState("all");

  const handleClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <Wrapper>
      <CustomHeader />
      <BoxContainer>
        <Box1>
          <Headingcontainer>
            <Heading>Sales Statistics</Heading>
            <InfoOutlinedIcon style={{ fill: "#b3b8bd" }} />
          </Headingcontainer>
          <List>
            <ListItem selected={selectedOption === "all"}>
              <button onClick={() => handleClick("all")}>All time</button>
            </ListItem>
            <ListItem selected={selectedOption === "year"}>
              <button onClick={() => handleClick("year")}>This year</button>
            </ListItem>
            <ListItem selected={selectedOption === "week"}>
              <button onClick={() => handleClick("week")}>This week</button>
            </ListItem>
            <ListItem selected={selectedOption === "today"}>
              <button onClick={() => handleClick("today")}>Today</button>
            </ListItem>
          </List>
          <Card style={{ boxShadow: "none" }}>
            <CardContent>
              <LineChart width={500} height={240} data={data}>
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
      </BoxContainer>
      <BoxContainer>
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

            <TrafficPercentage>{`${Math.round(progress)}%`}</TrafficPercentage>
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

            <TrafficPercentage>{`${Math.round(progress)}%`}</TrafficPercentage>
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
            <RadialChart
              data={datas}
              width={370}
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
            />
            <SourcePercentage>
              <span>38%</span>
            </SourcePercentage>
            <SourceText>
              <span>Total Money Spend</span>
            </SourceText>
          </SourceContainer>
        </Box>
      </BoxContainer>
      <Lowerarea />
    </Wrapper>
  );
};

export default SalesStatistic;
