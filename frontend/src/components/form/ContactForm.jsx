import Input from '../form/Input';

const ContactForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="form-control">
      <Input
        type="text"
        text="Nome do organizador ou empresa"
        name="organizerName"
        value={data.organizerName || ""}
        required={true}
        onChange={(e) => updateFieldHandler("organizerName", e.target.value)}
      />
      <Input
        type="email"
        text="Email de contato"
        name="contactEmail"
        value={data.contactEmail || ""}
        onChange={(e) => updateFieldHandler("contactEmail", e.target.value)}
      />
      <Input
        type="tel"
        text="Telefone de contato"
        name="telephone"
        value={data.telephone || ""}
        onChange={(e) => updateFieldHandler("telephone", e.target.value)}
      />

    </div>
  );
};

export default ContactForm;