import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./stylesContac.css";

const Formulario = () => {
  const [formEnviado, camabiarFormEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          telefono: "",
          send: "",
        }}
        validate={(valores) => {
          let errores = {};
          //Validacion de nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingrese Nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacio";
          }

          //Validacion de corro
          if (!valores.email) {
            errores.email = "Por favor ingrese Nombre";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "ERROR: ejemplo@email.com";
          }

          //Validacion de telelfono
          if (!valores.telefono) {
            errores.telefono = "Por favor ingrese su numero de celular";
          } else if (!/^[9|6|7][0-9]{1,8}$/.test(valores.telefono)) {
            errores.telefono = "Solo se permite numeros";
          }

          //Validacion de caja de texto
          if (!valores.send) {
            errores.send = "Por favor ingrese texto";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario Envido");
          camabiarFormEnviado(true);
          setTimeout(() => camabiarFormEnviado(false), 3000);
        }}
      >
        {({ errors }) => (
          <>
            <h1 className="titulo">Puedes Contactarnos</h1>

            <div className="container-formulario">
              <Form className="formulario">
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ejemplo"
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <span className="error"> {errors.nombre} </span>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="email">E-mail</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ejemplo@email.com"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <span className="error"> {errors.email} </span>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="telefono">Numero de Telefono</label>
                  <Field
                    type="number"
                    id="telefono"
                    name="telefono"
                    placeholder="123456789"
                  />
                  <ErrorMessage
                    name="telefono"
                    component={() => (
                      <span className="error"> {errors.telefono} </span>
                    )}
                  />
                </div>
                <div>
                  <label htmlFor="send">Numero de Telefono</label>
                  <Field
                    as="textarea"
                    name="mensaje_de"
                    id="send"
                    placeholder="Escriba un mensaje..."
                  ></Field>
                  <ErrorMessage
                    name="send"
                    component={() => (
                      <span className="error"> {errors.send} </span>
                    )}
                  />
                </div>
                <button type="submit">Enviar</button>
                {formEnviado && (
                  <p className="exito">Formulario enviado con exito!</p>
                )}
              </Form>

              <div className="text-formulario">
                <p className="text-desciption">
                  Para ponerse en contacto con nosotros, utilice el formulario
                  de contacto visible
                  <br />
                  <br />
                  Al enviar archivos, utilice el siguiente correo electrónico
                  <br />
                  <br />
                  <strong>Fibra Optica Amazonas</strong>
                  <br />
                  <br />
                  e-mail: <strong>contact@fibraoamazonas.com</strong>
                </p>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
