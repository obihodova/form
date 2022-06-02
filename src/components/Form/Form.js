import React from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import { useState } from "react";

import styles from "./Form.module.css";

const DEFAULT_FORM = {
  firstName: "",
  secondName: "",
  date: "",
  phone: "",
  web: "",
  about: "",
  technology: "",
  projectInfo: "",
};

const DEFAULT_STATE = {
  ...DEFAULT_FORM,
  errors: { ...DEFAULT_FORM },
  isFormValid: false,
};

function Form () {
  const [state, setState] = useState({...DEFAULT_STATE});
   

  const handleFormInput = (e) => {
    if (
      e.target.name === "phone" &&
      e.target.value &&
      !/^[0-9-]+$/g.test(e.target.value)
    ) {
      return;
    }

    if (e.target.tagName === "TEXTAREA" && e.target.value.length > 600) {
      setState(state => ({ ...state, errors: {
        [e.target.name]: "Привышен лимит символов", }}));
    } else if (e.target.value.length < 600) {
      setState(state => ({ ...state,
        errors: {
          [e.target.name]: "",
        },
      }));
    }

    setState(state => ({ ...state, [e.target.name]: e.target.value }));
  }

  const handleCancelForm = () => {
    setState({
      ...DEFAULT_STATE,
    });
  }

  const handleSubmitForm = () => {
    let errors = {
      ...DEFAULT_FORM,
      ...state.errors,
    };

    let isOk = true;

    // проверка имени
    if (!/[A-ZА-Я]/.test(state.firstName.trim().charAt(0))) {
      errors.firstName = "Первая буква должна быть заглавной";
      isOk = false;
    }

    if (state.firstName.trim().length === 0) {
      errors.firstName = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка фамилии
    if (!/[A-ZА-Я]/.test(state.secondName.trim().charAt(0))) {
      errors.secondName = "Первая буква должна быть заглавной";
      isOk = false;
    }

    if (state.secondName.trim().length === 0) {
      errors.secondName = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка даты
    if (state.date.trim().length === 0) {
      errors.date = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка телефона
    if (state.phone.trim().length === 0) {
      errors.phone = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    if (!/^\d{1}-?\d{4}-?\d{2}-?\d{2}$/.test(state.phone)) {
      errors.phone =
        "Неправильный формат. Пожалуйста, введите номер в формате 7-7777-77-77";
      isOk = false;
    }

    // проверка сайта
    if (state.web.trim().indexOf("https://") !== 0) {
      errors.web = "Сайт должен начинаться с https://";
      isOk = false;
    }

    if (state.web.trim().length === 0) {
      errors.web = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка поля "О себе"
    if (state.about.trim().length === 0) {
      errors.about = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка поля "Стек технологий"
    if (state.technology.trim().length === 0) {
      errors.technology = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка поля "Последний проект"
    if (state.projectInfo.trim().length === 0) {
      errors.projectInfo = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    setState(state => ({...state,  errors }));

    if (isOk) {
      setState( state => ({...state, isFormValid: true }));
    }
  }

    if (state.isFormValid) {
      return (
        <div className={styles.form}>
          <h1>{`${state.firstName} ${state.secondName}`}</h1>
          <div className={styles.userInfo}>
            <p>{`Дата рождения: ${state.date}`}</p>
            <p>{`Телефон: ${state.phone}`}</p>
            <p>{`Сайт: ${state.web}`}</p>
            <p>{`О себе: ${state.about}`}</p>
            <p>{`Стек технологий: ${state.technology}`}</p>
            <p>{`Сайт: ${state.web}`}</p>
            <p>{`Описание последнего проекта: ${state.projectInfo}`}</p>
          </div>
        </div>
      );
    }
    
    return (
      <div className={styles.form}>
        <h1>Создание анкеты</h1>
        <Input
          type="text"
          title="Имя"
          name="firstName"
          hint="Anna"
          value={state.firstName}
          onChange={handleFormInput}
          error={state.errors.firstName}
        />
        <Input
          type="text"
          title="Фамилия"
          hint="Ivanova"
          name="secondName"
          value={state.secondName}
          onChange={handleFormInput}
          error={state.errors.secondName}
        />
        <Input
          type="date"
          title="Дата рождения"
          name="date"
          value={state.date}
          onChange={handleFormInput}
          error={state.errors.date}
        />
        <Input
          type="tel"
          title="Телефон"
          hint="7-7777-77-77"
          name="phone"
          value={state.phone}
          onChange={handleFormInput}
          maxLength={12}
          error={state.errors.phone}
        />
        <Input
          type="text"
          title="Сайт"
          hint="https://example.ru"
          name="web"
          value={state.web}
          onChange={handleFormInput}
          error={state.errors.web}
        />
        <TextArea
          title="О себе"
          name="about"
          value={state.about}
          onChange={handleFormInput}
          error={state.errors.about}
        />
        <TextArea
          title="Стек технологий"
          name="technology"
          value={state.technology}
          onChange={handleFormInput}
          error={state.errors.technology}
        />
        <TextArea
          title="Описание последнего проекта"
          name="projectInfo"
          value={state.projectInfo}
          onChange={handleFormInput}
          error={state.errors.projectInfo}
        />
        <div className="buttons">
          <Button
            text="Сохранить"
            class="success"
            onClick={handleSubmitForm}
          />
          <Button
            text="Отмена"
            class="cancel"
            onClick={handleCancelForm}
          />
        </div>
      </div>
    );
  
}

export default Form;
