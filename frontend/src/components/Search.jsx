import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaAngleDown } from "react-icons/fa";
import eventFetch from '../axios/config';
import {
    SearchContainer,
    CustomInput,
    CustomSelect,
    CustomSelectWrapper,
    OptionsList,
    OptionItem,
    Icon
} from './Header.style';

const Search = ({ searchTerm, setSearchTerm, selectedLocation, setSelectedLocation }) => {
    const [options, setOptions] = useState([{ value: '', label: 'Localização' }]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await eventFetch.get("/events");
                const events = response.data;
                // Extract unique states
                const states = [...new Set(events.map(event => event.state))];
                // Add the default option and set options
                setOptions([{ value: '', label: 'Localização' }, ...states.map(state => ({ value: state, label: state }))]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const handleSelectOption = (option) => {
        setSelectedLocation(option);
        setDropdownOpen(false);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    return (
        <SearchContainer>
            <CustomInput>
                <Icon><FaSearch /></Icon>
                <input
                    type="text"
                    placeholder="Pesquise por um evento..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </CustomInput>

            <CustomSelectWrapper>
                <CustomSelect onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <Icon><FaMapMarkerAlt /></Icon>
                    {selectedLocation.label}
                    <Icon>
                        <FaAngleDown />
                    </Icon>
                </CustomSelect>
                <OptionsList open={dropdownOpen}>
                    {options.map((option, index) => (
                        <OptionItem
                            key={index}
                            onClick={() => handleSelectOption(option)}
                        >
                            {option.label}
                        </OptionItem>
                    ))}
                </OptionsList>
            </CustomSelectWrapper>
        </SearchContainer>
    );
};

export default Search;
