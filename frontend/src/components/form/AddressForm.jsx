import Input from '../form/Input';

const AddressForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="form-control">
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
    </div>
  );
};

export default AddressForm;