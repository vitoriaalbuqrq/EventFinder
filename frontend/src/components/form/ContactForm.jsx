import Input from '../form/Input';

const ContactForm = ({ data }) => {
  return (
    <div className="form-control">
      <Input
        type="text"
        text="Nome do organizador ou empresa"
        name="organizerName"
        value={data.organizerName || ""}
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
        type="text"
        text="Telefone de contato"
        name="telephone"
        value={data.imgEvent || ""}
        onChange={(e) => updateFieldHandler("telephone", e.target.value)}
      />

    </div>
  );
};

export default ContactForm;