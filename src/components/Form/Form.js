import React from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULT_STATE,
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleCancelForm = this.handleCancelForm.bind(this);
  }

  handleFormInput(e) {
    if (
      e.target.name === "phone" &&
      e.target.value &&
      !/^[0-9-]+$/g.test(e.target.value)
    ) {
      return;
    }

    if (e.target.tagName === "TEXTAREA" && e.target.value.length > 600) {
      this.setState({
        errors: {
          [e.target.name]: "Привышен лимит символов",
        },
      });
    } else if (e.target.value.length < 600) {
      this.setState({
        errors: {
          [e.target.name]: "",
        },
      });
    }

    this.setState({ [e.target.name]: e.target.value });
  }

  handleCancelForm() {
    this.setState({
      ...DEFAULT_STATE,
    });
  }

  handleSubmitForm() {
    let errors = {
      ...DEFAULT_FORM,
      ...this.state.errors,
    };

    let isOk = true;

    // проверка имени
    if (!/[A-ZА-Я]/.test(this.state.firstName.trim().charAt(0))) {
      errors.firstName = "Первая буква должна быть заглавной";
      isOk = false;
    }

    if (this.state.firstName.trim().length === 0) {
      errors.firstName = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка фамилии
    if (!/[A-ZА-Я]/.test(this.state.secondName.trim().charAt(0))) {
      errors.secondName = "Первая буква должна быть заглавной";
      isOk = false;
    }

    if (this.state.secondName.trim().length === 0) {
      errors.secondName = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка даты
    if (this.state.date.trim().length === 0) {
      errors.date = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка телефона
    if (this.state.phone.trim().length === 0) {
      errors.phone = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    if (!/^\d{1}-?\d{4}-?\d{2}-?\d{2}$/.test(this.state.phone)) {
      errors.phone =
        "Неправильный формат. Пожалуйста, введите номер в формате 7-7777-77-77";
      isOk = false;
    }

    // проверка сайта
    if (this.state.web.trim().indexOf("https://") !== 0) {
      errors.web = "Сайт должен начинаться с https://";
      isOk = false;
    }

    if (this.state.web.trim().length === 0) {
      errors.web = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка поля "О себе"
    if (this.state.about.trim().length === 0) {
      errors.about = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка поля "Стек технологий"
    if (this.state.technology.trim().length === 0) {
      errors.technology = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    // проверка поля "Последний проект"
    if (this.state.projectInfo.trim().length === 0) {
      errors.projectInfo = "Поле пустое. Заполните пожалуйста";
      isOk = false;
    }

    this.setState({ errors });

    if (isOk) {
      this.setState({ isFormValid: true });
    }
  }

  render() {
    if (this.state.isFormValid) {
      return (
        <div className={styles.form}>
          <h1>{`${this.state.firstName} ${this.state.secondName}`}</h1>
          <div className={styles.userInfo}>
            <p>{`Дата рождения: ${this.state.date}`}</p>
            <p>{`Телефон: ${this.state.phone}`}</p>
            <p>{`Сайт: ${this.state.web}`}</p>
            <p>{`О себе: ${this.state.about}`}</p>
            <p>{`Стек технологий: ${this.state.technology}`}</p>
            <p>{`Сайт: ${this.state.web}`}</p>
            <p>{`Описание последнего проекта: ${this.state.projectInfo}`}</p>
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
          value={this.state.firstName}
          onChange={this.handleFormInput}
          error={this.state.errors.firstName}
        />
        <Input
          type="text"
          title="Фамилия"
          hint="Ivanova"
          name="secondName"
          value={this.state.secondName}
          onChange={this.handleFormInput}
          error={this.state.errors.secondName}
        />
        <Input
          type="date"
          title="Дата рождения"
          name="date"
          value={this.state.date}
          onChange={this.handleFormInput}
          error={this.state.errors.date}
        />
        <Input
          type="tel"
          title="Телефон"
          hint="7-7777-77-77"
          name="phone"
          value={this.state.phone}
          onChange={this.handleFormInput}
          maxLength={12}
          error={this.state.errors.phone}
        />
        <Input
          type="text"
          title="Сайт"
          hint="https://example.ru"
          name="web"
          value={this.state.web}
          onChange={this.handleFormInput}
          error={this.state.errors.web}
        />
        <TextArea
          title="О себе"
          name="about"
          value={this.state.about}
          onChange={this.handleFormInput}
          error={this.state.errors.about}
        />
        <TextArea
          title="Стек технологий"
          name="technology"
          value={this.state.technology}
          onChange={this.handleFormInput}
          error={this.state.errors.technology}
        />
        <TextArea
          title="Описание последнего проекта"
          name="projectInfo"
          value={this.state.projectInfo}
          onChange={this.handleFormInput}
          error={this.state.errors.projectInfo}
        />
        <div className="buttons">
          <Button
            text="Сохранить"
            class="success"
            onClick={this.handleSubmitForm}
          />
          <Button
            text="Отмена"
            class="cancel"
            onClick={this.handleCancelForm}
          />
        </div>
      </div>
    );
  }
}

export default Form;
