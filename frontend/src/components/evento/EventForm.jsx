import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import eventFetch from "../../axios/config";
import { useNavigate } from 'react-router-dom'
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
    category: "",
    platform: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    number: "",
    organizerName: "",
    contactEmail: "",
    telephone: "",
    startDate: "",
    startTime: "",
    endTime: "",
};

const EventForm = ({ eventId, isEditMode }) => {
    const [data, setData] = useState(formTemplate);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isEditMode && eventId) {
            const fetchEvent = async () => {
                try {
                    const response = await eventFetch.get(`/event/${eventId}`);
                    if (response.data) {
                        setData(response.data);
                    }
                } catch (error) {
                    console.error("Erro ao carregar dados do evento:", error);
                    setError("Erro ao carregar dados do evento");
                }
            };
            fetchEvent();
        }
    }, [isEditMode, eventId]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLastStep) {
            try {
                setLoading(true);
                const formData = new FormData();
                for (let key in data) {
                    formData.append(key, data[key]);
                }

                let response;
                if (isEditMode) {
                    response = await eventFetch.put(`/event/${eventId}`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                } else {
                    response = await eventFetch.post("/events", formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                }

                console.log("Resposta do servidor:", response.data);

                if (response.status === 200 && response.data.event) {
                    console.log("Evento atualizado com sucesso:", response.data.msg);
                    navigate(`/my-events`);
                } else {
                    console.error("Erro: Resposta inválida do servidor");
                }
            } catch (error) {
                console.error("Erro ao enviar dados:", error);
            } finally {
                setLoading(false);
            }
        } else {
            changeStep(currentStep + 1);
        }
    };


    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <AppContainer>
            <Header>
                <HeaderTitle>{isEditMode ? "Editar Evento" : "Criar Novo Evento"}</HeaderTitle>
                <HeaderDescription>
                    {isEditMode
                        ? "Modifique as informações necessárias sobre o seu evento no formulário abaixo."
                        : "Forneça as informações necessárias sobre o seu evento no formulário abaixo para que possamos começar a promovê-lo imediatamente."
                    }
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
                                <span>{isEditMode ? "Salvar Alterações" : "Enviar"}</span>
                            </ActionButton>
                        )}
                    </Actions>
                </Form>
            </FormContainer>
        </AppContainer>
    );
}

export default EventForm;
