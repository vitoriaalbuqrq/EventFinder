// Hooks
import { useState } from "react";
import { useForm } from "../hooks/useForm";

// Components
import InfoForm from "../form/InfoForm";
import AddressForm from "../form/AddressForm";
import ContactForm from "../form/ContactForm";
import Steps from "../form/Steps";

// Styled components
import {
    AppContainer,
    Header,
    HeaderTitle,
    HeaderDescription,
    FormContainer,
    Form,
    InputsContainer,
    Actions,
    ActionButton
} from "./EventForm.style";


const formTemplate = {
    name: "",
    description: "",
    imgEvent: null,
    platform: "",
    cep: "",
    address: "",
    city: "",
    state: "",
    organizerName: "",
    contactEmail: "",
    telephone: "",
    startDate: "",
    startTime: "",
    endTime: "",
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
        <ContactForm data={data} updateFieldHandler={updateFieldHandler} />,
    ];

    const { currentStep, currentComponent, changeStep, isLastStep } =
        useForm(formComponents);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLastStep) {
            // Implementar a lógica de envio de dados aqui
            console.log("Dados do formulário:", data);
        } else {
            changeStep(currentStep + 1);
        }
    };

    return (
        <AppContainer>
            <Header>
                <HeaderTitle>Criar Novo Evento</HeaderTitle>
                <HeaderDescription>
                    Forneça as informações necessárias sobre o seu evento no formulário abaixo para que possamos começar a promovê-lo imediatamente
                </HeaderDescription>
            </Header>
            <FormContainer>
                <Steps currentStep={currentStep} />
                <Form onSubmit={handleSubmit}>
                    <InputsContainer>{currentComponent}</InputsContainer>
                    <Actions>
                        {currentStep > 0 && (
                            <ActionButton type="button" onClick={() => changeStep(currentStep - 1)}>
                                <span>Voltar</span>
                            </ActionButton>
                        )}
                        {!isLastStep ? (
                            <ActionButton type="submit" primary>
                                <span>Avançar</span>
                            </ActionButton>
                        ) : (
                            <ActionButton type="button" primary onClick={handleSubmit}>
                                <span>Enviar</span>
                            </ActionButton>
                        )}
                    </Actions>
                </Form>
            </FormContainer>
        </AppContainer>
    );
}

export default EventForm;
