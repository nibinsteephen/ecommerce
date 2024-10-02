import React, { useState } from "react";
import styled from "styled-components";

const ToggleButton = () => {

  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsToggled(!isToggled);
  };
    return (
        <ToggleButtonContainer onClick={handleToggle} $isToggled={isToggled}>
            <div className="tgl-btn">
                <span className="circle"></span>
            </div>
        </ToggleButtonContainer>
    );
};

export default ToggleButton;

const ToggleButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    @media all and (max-width: 768px) {
        /* display: none; */
    }

    .tgl-btn {
        width: 40px;
        height: 19.5px;
        background-color: #418EFD;
        border-radius: 25px;
        position: relative;
        cursor: pointer;

        @media all and (max-width: 768px) {
            width: 45px;
            height: 24px;
        }
        @media all and (max-width: 768px) {
            width: 35px;
            height: 20px;
        }

        .circle {
            width: 17px;
            height: 17px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            left: ${({ $isToggled }) => ($isToggled === false ? "2px" : "auto")};
            top: 50%;
            transform: translateX(
                    ${({ $isToggled }) => (!$isToggled ? "0" : "22px")}
                )
                translateY(-50%);
            transition: all 0.1s linear;

            @media all and (max-width: 768px) {
                width: 14px;
                height: 14px;

                left: ${({ $isToggled }) =>
                    $isToggled === false ? "2px" : "auto"};
                top: 50%;
                transform: translateX(
                        ${({ $isToggled }) => (!$isToggled ? "0" : "18px")}
                    )
                    translateY(-50%);
            }
            @media all and (max-width: 420px) {
                width: 10px;
                height: 10px;

                left: ${({ $isToggled }) =>
                    $isToggled === false ? "4px" : "auto"};
                top: 50%;
                transform: translateX(
                        ${({ $isToggled }) => (!$isToggled ? "0" : "20px")}
                    )
                    translateY(-50%);
            }
        }
    }
`;
