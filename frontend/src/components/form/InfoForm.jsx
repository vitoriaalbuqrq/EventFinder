import { useState } from 'react';
import Input from '../form/Input';
import Textarea from '../form/Textarea';
import Uploader from './Uploader';

const InfoForm = ({ data, updateFieldHandler }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileRemove = () => {
    setFile(null);
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
        type="text"
        text="Descrição"
        name="description"
        value={data.description || ""}
        placeholder="Insira uma descrição do evento"
        onChange={(e) => updateFieldHandler("description", e.target.value)}
      />
      <Uploader file={file} onFileChange={handleFileChange} onFileRemove={handleFileRemove} />

    </div>
  );
};

export default InfoForm;