import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Validar } from "../js/validar";
import "../css/styles.css";

function Form() {

  /* eslint-disable react/prop-types */
  const Input = ({ label, id, name, type, register, error }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input id={id} name={name} type={type} className="form-control" placeholder="Digite aqui..." {...register(name)} />
        {error && <div>{error.message}</div>}
      </div>
    )
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(Validar)
  });

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input id="fullname" label="Digite seu Nome Completo:" name="fullname" type="text" register={register} error={errors.fullname} />

        <Input id="username" label="Digite seu Nome de Usuário:" name="username" type="text" register={register} error={errors.username} />

        <Input id="email" label="Digite seu E-mail:" name="email" type="text" register={register} error={errors.email} />

        <Input id="password" label="Digite sua Senha:" name="password" type="password" register={register} error={errors.password} />

        <Input id="confirmPassword" label="Digite novamente sua Senha:" name="confirmPassword" type="password" register={register} error={errors.confirmPassword} />

        <Input id="acceptTerms" label="Eu li e aceito os termos." name="acceptTerms" type="checkbox" register={register} error={errors.acceptTerms} />

        <div className="form-group button-group">
          <button type="submit" className="submit-button">Cadastrar</button>
          <button type="reset" className="reset-button" onClick={() => reset()}>Resetar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;