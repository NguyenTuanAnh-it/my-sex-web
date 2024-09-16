import { Image } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import './SignUp.scss'
const SignUp = () => {
    return (
        <div className="signup">
            <div className="signup_logo">
                <Image
                    src="https://static.danhgiaxe.com/data/201525/aston-martin-vanquish_6443.jpg"
                    className="signup_logo-img"
                />
                <p className="signup_logo-title">セラーセントラル</p>
            </div>

            <div className="signup_form">
                <Form className="signup_form-wrap">
                    <div className="signup_form-header">
                        <p className="signup_form-header-content">アカウントを作成</p>
                    </div>
 
                    <div className="signup_form-email">
                        <p className="signup_form-label">Eメールアドレス</p>
                        <Input className="signup_form-input"
                        />
                    </div>

                    <div className="signup_form-button">
                        <Button className="signup_form-button-submit">登録する</Button>
                    </div>

                    <p className="signup_form-content"> ●●●の<a>利用規約</a>と<a>プライバシー規約</a>に同意いただける場合はログインしてください。</p> 
                    <p className="signup_form-policy"> すでにアカウントをお持ちですか? <a><u>次へ</u></a></p> 

                </Form>

            </div>

        </div>
    );
};
export default SignUp;