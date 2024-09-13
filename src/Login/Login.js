import { Image } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import { Checkbox } from "antd";
import React from "react";
import './login.scss';
const options = [
  {
    label: "ログインしたままにする",
    value: 0,
  },
];

const Login = () => {
  return (
    <div className="login">
      <div className="login_logo">
        <Image
          src="https://static.danhgiaxe.com/data/201525/aston-martin-vanquish_6443.jpg"
          className="login_logo-img"
        />
        <p className="login_logo-title">セラーセントラル</p>
      </div>
      <div className="login_form">
        <Form className="login_form-wrap">
          {/* Label */}
          <div className="login_form-header">
            <p className="login_form-header-content">ログイン</p>
          </div>
          {/* InputEmail */}
          <div className="login_form-email">
            <p className="login_form-label">Eメールまたは携帯電話番号</p>
            <Input
              className="login_form-input"
              placeholder="Eメールまたは携帯電話番号"
            />
          </div>
          {/* InputPassword */}
          <div className="login_form-password">
            <div className="login_form-password-label">
              <p className="login_form-label">パスワード</p>
              <a className="login_form-password-label-link" href="/">パスワードを忘れた場合</a>
            </div>
            <Input
              className="login_form-input"
              placeholder="パスワード"
            />
          </div>
          <div className="login_form-button">
            <Button className="login_form-button-submit">ログイン</Button>
          </div>
          <p className="login_form-submit-content">
            ●●●の<a href="/">利用規約</a>と<a href="/">プライバシー規約</a>
            に同意いただける場合はログインしてください。
          </p>
          <div className="login_form-checkbox">
            <Checkbox.Group
              className="login_form-checkbox-submit"
              options={options}
            />
          </div>
          <div className="login_form-button">
            <Button className="login_form-button-signIn">今すぐ、ご登録ください。</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;