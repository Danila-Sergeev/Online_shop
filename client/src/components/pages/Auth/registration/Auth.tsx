import React, { FC, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import Style from "./Auth.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../utils/hoc";
import { signup } from "../../../../services/actions/user";

const Auth: FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const click = () => {
    dispath(signup(name, email, password));
    navigate("/");
  };

  const isLogin = false;
  return (
    <Container className={Style.container}>
      <Card className={Style.card}>
        <h2 className={Style.title}>Регистрация</h2>
        <Form className={Style.form}>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите Имя"
            className={Style.form}
            value={name}
          />
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
              Есть аккаунт?
              <NavLink className={Style.reg} to="/signUp">
                Войдите!
              </NavLink>
            </div>

            <Button
              className={Style.button}
              onClick={click}
              variant={"outline-success"}
            >
              Регистрация
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
