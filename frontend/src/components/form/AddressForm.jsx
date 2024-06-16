import { useState } from 'react';
import { ContainerFlex } from '../evento/EventForm.style';
import Input from '../form/Input';
import Checkbox from './Checkbox';

const AddressForm = ({ data, updateFieldHandler }) => {
  const [isOnlineEvent, setIsOnlineEvent] = useState(false)

  const handleCheckboxChange = () => {
    setIsOnlineEvent(!isOnlineEvent)
    if (!isOnlineEvent) {
      updateFieldHandler("cep", "")
      updateFieldHandler("address", "")
      updateFieldHandler("city", "")
      updateFieldHandler("state", "")
    }
  }

  return (
    <div className="form-control">
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
            onChange={(e) => updateFieldHandler("cep", e.target.value)}
          />
          <Input
            type="text"
            text="Endereço"
            name="address"
            value={data.address || ""}
            onChange={(e) => updateFieldHandler("address", e.target.value)}
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
        </>
      )}
      <Input
        type="date"
        text="Data de início"
        name="startDate"
        value={data.startDate || ""}
        onChange={(e) => updateFieldHandler("startDate", e.target.value)}
      />
      <ContainerFlex>
        <Input
          type="time"
          text="Hora de início"
          name="startTime"
          value={data.startTime || ""}
          onChange={(e) => updateFieldHandler("startTime", e.target.value)}
        />
        <Input
          type="time"
          text="Hora de término"
          name="endTime"
          value={data.endTime || ""}
          onChange={(e) => updateFieldHandler("endTime", e.target.value)}
        />
      </ContainerFlex>

    </div>
  );
};

export default AddressForm;