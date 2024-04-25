import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El E-Mail ingresado es incorrecto")
      .required("El E-Mail es obligatorio"),
    password: Yup.string().required("La Contraseña es Obligatoria"),
    repeatPassword: Yup.string()
      .required("La Contraseña es Obligatoria")
      .oneOf([Yup.ref("password")], "Las Contraseñas no son iguales"),
  });
}
