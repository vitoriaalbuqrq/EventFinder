import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { StepsContainer, Step } from "./Steps.style";

const Steps = ({ currentStep }) => {
    return (
        <StepsContainer>
            <Step className="active">
                <FaCheckCircle />
                <p>Informações</p>
            </Step>
            <Step className={currentStep >= 1 ? "active" : ""}>
                <FaCheckCircle />
                <p>Localização</p>
            </Step>
            <Step className={currentStep >= 2 ? "active" : ""}>
                <FaCheckCircle />
                <p>Contato</p>
            </Step>
        </StepsContainer>
    );
}

export default Steps;