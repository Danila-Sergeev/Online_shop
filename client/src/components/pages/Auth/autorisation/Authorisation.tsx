import React, { FC, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import Style from "./Auth.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signin } from "../../../../services/actions/user";
import { useAppDispatch } from "../../../../utils/hoc";

const Autorisation: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const click = () => {
    dispath(signin(email, password));
    navigate("/");
  };

  const isLogin = false;
  return (
    <Container className={Style.container}>
      <Card className={Style.card}>
        <h2 className={Style.title}>Авторизация</h2>
        <Form className={Style.form}>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите email.."
            className={Style.form}
            value={email}
          />
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль.."
            className={Style.form}
            value={password}
            type="password"
          />
          <Row className={Style.row}>
            <div className={Style.regBox}>
              Нет аккаунта?
              <NavLink className={Style.reg} to="/signIn">
                Зарегистрируйтесь!
              </NavLink>
            </div>

            <Button
              className={Style.button}
              onClick={click}
              variant={"outline-success"}
            >
              Войти
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Autorisation;
