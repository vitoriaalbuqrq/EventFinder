import React, { useState } from 'react';
import Input from '../form/Input';
import Textarea from '../form/Textarea';
import Uploader from './Uploader';
import Select from './Select';

const InfoForm = ({ data, updateFieldHandler }) => {
    const [categories, setCategories] = useState([]);
    const [file, setFile] = useState(null);

    const handleFileChange = (selectedFile) => {
        setFile(selectedFile);
        updateFieldHandler("imgEvent", selectedFile);
    };

    const handleFileRemove = () => {
        setFile(null);
        updateFieldHandler("imgEvent", null);
    };

    return (
        <div className="form-control">
            <Input
                type="text"
                text="Nome"
                name="name"
                value={data.name || ""}
                required={true}
                placeholder="Insira o nome do evento"
                onChange={(e) => updateFieldHandler("name", e.target.value)}
            />
            <Textarea
                text="Descrição"
                name="description"
                value={data.description || ""}
                required={true}
                placeholder="Insira uma descrição do evento"
                onChange={(e) => updateFieldHandler("description", e.target.value)}
            />
            <Select
                text="Categoria"
                name="category"
                value={data.name || ""}
                required={true}
                options={categories}
                onChange={(e) => updateFieldHandler("category", e.target.value)}

            />
            <Uploader
                name="imgEvent"
                text="Imagem do evento"
                file={file}
                onFileChange={handleFileChange}
                onFileRemove={handleFileRemove}
            />
        </div>
    );
};

export default InfoForm;
