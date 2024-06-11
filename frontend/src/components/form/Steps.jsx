import { FaCheckCircle } from "react-icons/fa";

import "./Steps.css"

const Steps = ({ currentStep }) => {
    return (
        <div className='steps'>
            <div className="step active">
                <FaCheckCircle />
                <p>Informações</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <FaCheckCircle />
                <p>Endereço</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <FaCheckCircle />
                <p>Contato</p>
            </div>
        </div>
    )
}

export default Steps