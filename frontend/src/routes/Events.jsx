import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import eventFetch from "../axios/config";
import CardEvent from '../components/CardEvent';
import styled from 'styled-components';
import theme from '../theme';

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

const categoryMap = {
    'shows e festivais': 'shows',
    'workshops': 'workshops',
    'online': 'online',
    'educação': 'educacao',
    'social': 'social',
    'outros': 'outros'
};

const Events = () => {
    const { category } = useParams();
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

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

    useEffect(() => {
        if (events.length > 0 && category) {
            const normalizedCategory = decodeURIComponent(category).toLowerCase().trim();
            const mappedCategory = categoryMap[normalizedCategory] || normalizedCategory;
            
            // Verifica se a categoria do evento corresponde à categoria mapeada
            const filtered = events.filter(event =>
                event.category.toLowerCase() === mappedCategory
            );
            setFilteredEvents(filtered);
        } else {
            setFilteredEvents(events);
        }
    }, [events, category]);

    const handleCardClick = (event) => {
        navigate(`/event/${event._id}`, { state: { event } });
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Wrapper>
            <h1>{decodeURIComponent(category)}</h1>
            <Container>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <CardEvent key={event._id} event={event} onClick={() => handleCardClick(event)} />
                    ))
                ) : (
                    <p>Nenhum evento encontrado para esta categoria.</p>
                )}
            </Container>
        </Wrapper>
    );
};

export default Events;
