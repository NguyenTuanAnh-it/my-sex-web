import { Image } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { Button } from "antd";
import './accept.scss'
const Accept = () => {
    return (
        <div className="accept">
            <div className="accept_logo">
                <Image src="https://static.danhgiaxe.com/data/201525/aston-martin-vanquish_6443.jpg"
                    className="accept_logo-img"
                />
                <p className="accept_logo-title"> セラーセントラル</p>
            </div>

            <div className="accept_form">
                <Form className="accept_form-wrap">
                    <div className="accept_form-header">
                        <p className="accept_form-header-label">Eメールアドレスの確認</p>
                    </div>
                    
                    <div className="accept_form-title">
                    <p className="accept_form-title-content">メールアドレスを確認するために一時パスワードを <br/><a>Eメール@gmail.com</a> に送信しました <a>(宛先を変更する)</a></p>
                    </div>
                    <div className="accept_form-email">
                        <p className="accept_form-email-label">一時パスワードを入力してください</p>
                        <Input className="accept_form-email-input"/>
                    </div>

                    <div className="accept_form-button">
                        <Button className="accept_form-button-submit">アカウントの作成</Button>
                    </div>

                    <div className="accept_form-policy">
                        <p className="accept_form-policy-content">ログインすることにより、 当社の<a>利用規約</a>および <br/> <a>プライバシー規約</a>に同意したとみなされます</p>
                    </div>
                    <p className="accept_form-request"><a>コードを再送</a></p>
                </Form>
            </div>
        </div>
    );
};
export default Accept;