import { useState } from 'react';
import { ContainerFlex } from '../evento/EventForm.style';
import Input from '../form/Input';
import Checkbox from './Checkbox';

const AddressForm = ({ data, updateFieldHandler }) => {
  const [isOnlineEvent, setIsOnlineEvent] = useState(data.isOnlineEvent || false);

  const handleCheckboxChange = () => {
    setIsOnlineEvent(!isOnlineEvent);
    updateFieldHandler("isOnlineEvent", !isOnlineEvent);
    if (!isOnlineEvent) {
      updateFieldHandler("cep", "");
      updateFieldHandler("street", "");
      updateFieldHandler("neighborhood", "");
      updateFieldHandler("city", "");
      updateFieldHandler("state", "");
      updateFieldHandler("number", "");
    }
  };

  const onBlurCep = (e) => {
    const { value } = e.target;
    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      console.log('CEP inválido');
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          alert("CEP inválido");
          return;
        }
        updateFieldHandler('street', data.logradouro);
        updateFieldHandler('neighborhood', data.bairro);
        updateFieldHandler('city', data.localidade);
        updateFieldHandler('state', data.uf);
      })
      .catch((error) => {
        console.error("Erro ao buscar o CEP: ", error);
      });
  };

  return (
    <div>
      <Checkbox
        text="Evento online"
        name="isOnlineEvent"
        checked={isOnlineEvent}
        onChange={handleCheckboxChange}
      />
      {isOnlineEvent ? (
        <Input
          type="text"
          text="Plataforma"
          placeholder="Informe a plataforma que acontecerá o evento"
          name="platform"
          value={data.platform || ""}
          onChange={(e) => updateFieldHandler("platform", e.target.value)}
        />
      ) : (
        <>
          <Input
            type="text"
            text="CEP"
            name="cep"
            value={data.cep || ""}
            required={true}
            onChange={(e) => updateFieldHandler("cep", e.target.value)}
            customOnBlur={onBlurCep} 
          />
          <Input
            type="text"
            text="Logradouro"
            name="street"
            value={data.street || ""}
            required={true}
            onChange={(e) => updateFieldHandler("street", e.target.value)}
          />
          <Input
            type="text"
            text="Bairro"
            name="neighborhood"
            required={true}
            value={data.neighborhood || ""}
            onChange={(e) => updateFieldHandler("neighborhood", e.target.value)}
          />
          <Input
            type="text"
            text="Cidade"
            name="city"
            value={data.city || ""}
            onChange={(e) => updateFieldHandler("city", e.target.value)}
          />
          <Input
            type="text"
            text="Estado"
            name="state"
            value={data.state || ""}
            onChange={(e) => updateFieldHandler("state", e.target.value)}
          />
          <Input
            type="text"
            text="Número"
            name="number"
            value={data.number || ""}
            required={true}
            onChange={(e) => updateFieldHandler("number", e.target.value)}
          />
        </>
      )}
      <Input
        type="date"
        text="Data de início"
        name="startDate"
        value={data.startDate || ""}
        required={true}
        onChange={(e) => updateFieldHandler("startDate", e.target.value)}
      />
      <ContainerFlex>
        <Input
          type="time"
          text="Hora de início"
          name="startTime"
          value={data.startTime || ""}
          required={true}
          onChange={(e) => updateFieldHandler("startTime", e.target.value)}
        />
        <Input
          type="time"
          text="Hora de término"
          name="endTime"
          value={data.endTime || ""}
          required={true}
          onChange={(e) => updateFieldHandler("endTime", e.target.value)}
        />
      </ContainerFlex>
    </div>
  );
};

export default AddressForm;
