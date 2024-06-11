import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

// Hooks
import { useState } from "react";
import { useForm } from "../hooks/useForm";

// CSS
import "./App.css";
import InfoForm from "../form/InfoForm";
import AddressForm from "../form/AddressForm";
import ContactForm from "../form/ContactForm";
import Steps from "../form/Steps";

const formTemplate = {
    name: "",
    description: "",
    imgEvent: "",
    cep: "",
    address: "",
    city: "",
    state: "",
};

const EventForm = () => {
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const formComponents = [
        <InfoForm data={data} updateFieldHandler={updateFieldHandler} />,
        <AddressForm data={data} updateFieldHandler={updateFieldHandler} />,
        <ContactForm data={data} />,
    ];

    const { currentStep, currentComponent, changeStep, isLastStep } =
        useForm(formComponents);

    return (
        <div className="app">
            <div className="header">
                <h2>Criar Novo Evento</h2>
                <p>Forneça as informações necessárias sobre o seu evento no formulário abaixo para que possamos começar a promovê-lo imediatamente</p>
            </div>
            <div className="form-container">
                <Steps currentStep={currentStep} />
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div className="inputs-container">{currentComponent}</div>
                    <div className="actions">
                        <button type="button" onClick={() => changeStep(currentStep - 1)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>

                        {!isLastStep ? (
                            <button type="submit">
                                <span>Avançar</span>
                                <GrFormNext />
                            </button>
                        ) : (
                            <button type="button">
                                <span>Enviar</span>
                                <FiSend />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );

}

export default EventForm