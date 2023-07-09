import React from "react";
import styled from "styled-components";

const Section = styled.div`
  section {
    display: flex;
    justify-content: space-around;
  }

  .control-container {
    position: relative;
    width: 150px;
    height: 50px;
  }

  .states-control input {
    display: none;
  }

  .states-control input:checked ~ .display {
    background-color: white;
  }

  .states-control .display {
    box-sizing: border-box;
    position: absolute;
    width: 60px;
    height: 20px;
    border-radius: 12px;
  }

  .states-control .display:after {
    position: relative;
    display: block;
    content: "";
    height: 100%;
    left: 0;
    border-radius: 12px;
    background-color: #fff;
    transition: all 0.2s ease;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.6);
  }

  .states-control .display label {
    height: 100%;
    float: left;
    cursor: pointer;
  }

  .states-control .radiobuttons input.option1:checked ~ .display:after {
    left: 0;
  }

  .states-control.three-states input.option2:checked ~ .display:after {
    left: calc(100% / 3);
    background-color: yellow;
  }

  .states-control.three-states input.option3:checked ~ .display:after {
    left: calc(100% / 3 * 2);
  }

  .states-control.three-states .display:after {
    width: calc(100% / 3);
  }

  .states-control.three-states label {
    width: calc(100% / 3);
  }

  .states-control.three-states input.option1:checked ~ .display {
    background-color: green;
  }
  .states-control.three-states input.option2:checked ~ .display {
    background-color: black;
  }
  .states-control.three-states input.option3:checked ~ .display {
    background-color: red;
  }
`;

const MyComponent = () => {
  return (
    <Section>
      <section>
        <article>
          <div className="control-container">
            <div className="states-control three-states radiobuttons">
              <input
                type="radio"
                id={`three-option1-${index}`}
                className="option1"
                name={`three-options-${index}`}
                value="option1"
                defaultChecked={true}
              />
              <input
                type="radio"
                id={`three-option2-${index}`}
                className="option2"
                name={`three-options-${index}`}
                value="option2"
              />
              <input
                type="radio"
                id={`three-option3-${index}`}
                className="option3"
                name={`three-options-${index}`}
                value="option3"
              />

              <div className="display">
                <label
                  className="option1"
                  htmlFor={`three-option1-${index}`}
                ></label>
                <label
                  className="option2"
                  htmlFor={`three-option2-${index}`}
                ></label>
                <label
                  className="option3"
                  htmlFor={`three-option3-${index}`}
                ></label>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Section>
  );
};

export default MyComponent;
