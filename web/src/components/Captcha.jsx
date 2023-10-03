import  { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

class CaptchaTest extends Component {
    renderResponse(value) {
        if (value) return
        else return
    }

    componentDidMount() {
        loadCaptchaEnginge(6);
    };

    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;
        const responseSpan = document.getElementById('error')

        if (validateCaptcha(user_captcha) === true) {
            this.props.setcaptchaIsOK(true)
            document.getElementById('user_captcha_input').value = "";
        }

        else {
            this.props.setcaptchaIsOK(false)
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
            responseSpan.innerText = 'Captcha is not correct';
        }
    };

    render() {

        return (
        <div>
            <div className="container">
                <div className="form-group">

                    <div className="col mt-3">
                        <LoadCanvasTemplate />
                    </div>

                    <div className="col mt-3">
                        <div>
                            <input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input>
                            <span id='error'></span>
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div><button className="btn btn-primary bg-amber-500 text-white font-bold py-2 px-4 rounded opacity-100" onClick={() => this.doSubmit()}>Submit Captcha</button></div>
                    </div>

                </div>

            </div>
        </div>);
    };
}

export default CaptchaTest;