import React from 'react';
import { useParams } from 'react-router-dom';
import EventForm from '../components/evento/EventForm';

const EditEvent = () => {
    const { id } = useParams();

    return (
        <EventForm eventId={id} isEditMode={true} />
    );
};

export default EditEvent;
