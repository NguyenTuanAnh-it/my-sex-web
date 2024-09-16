import { Image } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { Button } from "antd";
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
                        <p className="accept_form-header-label">アカウントを作成</p>
                        <p className="accept_form-header-content">Eメールアドレス</p>
                    </div>

                    <div className="accept_form-email">
                        <p className="accept_form-email-label">dòng trên ô input</p>
                        <Input className="accept_form-email-input"/>
                    </div>

                    <div className="accept_form-button">
                        <Button className="accept_form-button-submit">chữ trong button</Button>
                    </div>

                    <p className="accept_form-policy">điều khoản</p>
                    <p className="accept_form-request">cái dòng xanh bên dưới</p>
                </Form>
            </div>
        </div>
    );
};
export default Accept;