import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eventFetch from "../axios/config";
import CardEventActions from '../components/CardEventActions';
import styled from 'styled-components';
import theme from '../theme';
import Modal from '../components/Modal';
import useToast from "../hooks/useToast";

const Wrapper = styled.div`
    text-align: center;
    padding: 3rem 5rem;

    h1 {
        margin-bottom: 3rem;
        color: ${theme.colors.secondary};
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

const MyEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await eventFetch.get("/events");
                if (response.data && Array.isArray(response.data)) {
                    // Ordenar eventos por data 
                    const sortedEvents = response.data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
                    setEvents(sortedEvents);
                } else {
                    setError("Invalid data structure received from the server");
                }
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleCardClick = (event) => {
        navigate(`/event/${event._id}`, { state: { event } });
    };

    const handleEditClick = (event) => {
        navigate(`/event/edit/${event._id}`);
    };

    const handleDeleteClick = (event) => {
        setSelectedEvent(event);
        setOpenModal(true);
    };

    const confirmDelete = async () => {
        try {
            const response = await eventFetch.delete(`/event/${selectedEvent._id}`);
            setEvents(events.filter(event => event._id !== selectedEvent._id));
            setOpenModal(false);
            useToast(response.data.msg); 
        } catch (error) {
            console.error("Error deleting event:", error);
            useToast("Erro ao excluir evento!");
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Wrapper>
            <h1>Eventos Criados</h1>
            <Container>
                {events.length > 0 ? (
                    events.map(event => (
                        <CardEventActions 
                            key={event._id} 
                            event={event} 
                            onClick={() => handleCardClick(event)} 
                            onEdit={() => handleEditClick(event)}
                            onDelete={() => handleDeleteClick(event)}
                        />
                    ))
                ) : (
                    <p>Nenhum evento criado</p>
                )}
            </Container>
            <Modal isOpen={openModal} 
                OnConfirm={confirmDelete}
                OnCancel={() => setOpenModal(false)}
            >
            </Modal>
        </Wrapper>
    );
};

export default MyEvents;
