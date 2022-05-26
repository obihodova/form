import React from "react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

import "./Form.css";

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <h1>Создание анкеты</h1>
        <Input type="text" title="Имя" hint="Anna" />
        <Input type="text" title="Фамилия" hint="Ivanova" />
        <Input type="date" title="Дата рождения" />
        <Input type="text" title="Телефон" hint="+7 999 999 99 99" />
        <Input type="text" title="Сайт" hint="address@example.ru" />
        <TextArea title="О себе" />
        <TextArea title="Стек технологий" />
        <TextArea title="Описание последнего проекта" />
        <div className="buttons">
          <Button text="Сохранить" class="success"/>
          <Button text="Отмена" class="cancel"/>
        </div>
      </div>
    );
  }
}

export default Form;
