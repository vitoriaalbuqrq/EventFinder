import React, { useEffect, useState } from 'react';
import eventFetch from '../axios/config';
import CardEvent from './CardEvent';
import Container, { Title, Wrapper } from './Container';
import { useNavigate } from 'react-router-dom';

const EventFilter = ({ searchTerm, selectedLocation }) => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await eventFetch.get("/events");
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let filtered = events;

        if (searchTerm && typeof searchTerm === 'string') {
            filtered = filtered.filter(event =>
                event.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedLocation && selectedLocation.value) {
            filtered = filtered.filter(event => event.state === selectedLocation.value);
        }

        if (searchTerm || (selectedLocation && selectedLocation.value)) {
            setFilteredEvents(filtered);
        } else {
            setFilteredEvents([]);
        }
    }, [searchTerm, selectedLocation, events]);

    const handleCardClick = (event) => {
        navigate(`/event/${event._id}`, { state: { event } });
    };

    return (
        <Wrapper>
            {filteredEvents.length > 0 && (
                <>
                    <Title>Resultados da busca</Title>
                    <Container>
                        {filteredEvents.map((event, index) => (
                            <div key={index}>
                                <CardEvent event={event} onClick={() => handleCardClick(event)} />
                            </div>
                        ))}
                    </Container>
                </>
            )}
        </Wrapper>
    );
};

export default EventFilter;
