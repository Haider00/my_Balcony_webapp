import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
const Wrapper = styled.section``;

const BoxContainer = styled.div`
  display: flex;
  margin: 0 40px;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 0 20px;
  }
  @media screen and (max-width: 499px) {
    justify-content: center;
  }
`;

const Box = styled.div`
  flex:  ${(props) => (props.flex ? "0 0 45%" : "0 0 30%")};
  height:  ${(props) => (props.height ? "556px" : "216px")};
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
  display: block;
`;
const Heading2 = styled.span`
  font-size: 24px;
  border-bottom: 2px solid #ebf2f7;
  font-weight: bold;
  padding-bottom: 15px;
  flex: 1;
`;
const Headingcontainer = styled.div`
  display: flex;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
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

    &:hover {
      background-color: ${(props) => (props.selected ? "#52575d" : "#e6e6e6")};
    }
`;
const Iconcontainer = styled.span`
  width: 50px;
  height: 50px;
  margin: 0 0 3.5px 65px;
  padding: 11.7px 12.3px 12.3px 11.7px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  border-radius: 50%;
`;
const Amountheading = styled.p`
  font-size: 14px;
  color: #b3b8bd;
  margin: 5px 0;
`;
const Amountvalue = styled.p`
  font-size: 38px;
  color: #3d3d3d;
  font-weight: bold;
  margin: 0;
`;
const Transactioncontainer = styled.div`
  display: flex;
  margin-top: 5px;
  gap: 5px;
`;
const Transactionhistory = styled.span`
  font-size: 14px;
  color: #508ff4;
`;

const SalesStatistic = () => {
  const [OrdersPending, setOrdersPending] = useState("all");

  const handleClick1 = (option) => {
    setOrdersPending(option);
  };
  const [OrdersComplete, setOrdersComplete] = useState("all");

  const handleClick2 = (option) => {
    setOrdersComplete(option);
  };
  return (
    <Wrapper>
      <BoxContainer>
        <Box>
          <Heading>Sales (Month)</Heading>
          <Amountheading>Total amount:</Amountheading>
          <Amountvalue>$345353.34</Amountvalue>
          <Transactioncontainer>
            <RestoreOutlinedIcon style={{ fill: "#508ff4" }} />
            <Transactionhistory>Transactions history</Transactionhistory>
          </Transactioncontainer>
        </Box>
        <Box>
          <Heading>Pending Host Payout</Heading>
          <Amountheading>Total amount:</Amountheading>
          <Amountvalue>$123112.21</Amountvalue>
          <Transactioncontainer>
            <RestoreOutlinedIcon style={{ fill: "#508ff4" }} />
            <Transactionhistory>Transactions history</Transactionhistory>
          </Transactioncontainer>
        </Box>
        <Box>
          <Heading>Revenue (after Payout)</Heading>
          <Amountheading>Total amount:</Amountheading>
          <Amountvalue>$1833.35</Amountvalue>
          <Transactioncontainer>
            <RestoreOutlinedIcon style={{ fill: "#508ff4" }} />
            <Transactionhistory>Transactions history</Transactionhistory>
          </Transactioncontainer>
        </Box>

        <Box height flex>
          <Headingcontainer>
            <Heading2>Orders Pending</Heading2>
            <Iconcontainer>
              <SearchIcon style={{ fill: "#d0dbe5" }} />
            </Iconcontainer>
          </Headingcontainer>
          <List>
            <ListItem selected={OrdersPending === "1"}>
              <button onClick={() => handleClick1("1")}>1h</button>
            </ListItem>
            <ListItem selected={OrdersPending === "3"}>
              <button onClick={() => handleClick1("3")}>3h</button>
            </ListItem>
            <ListItem selected={OrdersPending === "6"}>
              <button onClick={() => handleClick1("6")}>6h</button>
            </ListItem>
            <ListItem selected={OrdersPending === "12"}>
              <button onClick={() => handleClick1("12")}>12h</button>
            </ListItem>
            <ListItem selected={OrdersPending === "day"}>
              <button onClick={() => handleClick1("day")}>Day</button>
            </ListItem>
            <ListItem selected={OrdersPending === "week"}>
              <button onClick={() => handleClick1("week")}>Week</button>
            </ListItem>
          </List>
        </Box>
        <Box height flex>
          <Headingcontainer>
            <Heading2>Orders Complete</Heading2>
            <Iconcontainer>
              <SearchIcon style={{ fill: "#d0dbe5" }} />
            </Iconcontainer>
          </Headingcontainer>
          <List>
            <ListItem selected={OrdersComplete === "one"}>
              <button onClick={() => handleClick2("one")}>1h</button>
            </ListItem>
            <ListItem selected={OrdersComplete === "three"}>
              <button onClick={() => handleClick2("three")}>3h</button>
            </ListItem>
            <ListItem selected={OrdersComplete === "six"}>
              <button onClick={() => handleClick2("six")}>6h</button>
            </ListItem>
            <ListItem selected={OrdersComplete === "twelve"}>
              <button onClick={() => handleClick2("twelve")}>12h</button>
            </ListItem>
            <ListItem selected={OrdersComplete === "days"}>
              <button onClick={() => handleClick2("days")}>Day</button>
            </ListItem>
            <ListItem selected={OrdersComplete === "weeks"}>
              <button onClick={() => handleClick2("weeks")}>Week</button>
            </ListItem>
          </List>
        </Box>
      </BoxContainer>
    </Wrapper>
  );
};

export default SalesStatistic;
