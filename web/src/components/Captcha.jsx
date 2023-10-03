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
                <div className="form-group flex flex-col items-center">

                    <div className="flex flex-row justify-end justify-items-end mt-3 gap-4">
                        <LoadCanvasTemplate />
                        <input className='w-36 h-auto' placeholder="Enter Captcha " id="user_captcha_input" name="user_captcha_input" type="text"></input>
                            <span id='error'></span>
                    </div>

                    <div className="col mt-3">
                        <div>
                            
                        </div>
                    </div>

                    <div className="col mt-3">
                        <div className='flex flex-col justify-center'>
                            <button className="btn btn-primary bg-amber-500 text-white font-bold py-2 px-3 rounded opacity-100 w-36" onClick={() => this.doSubmit()}>Submit Captcha</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>);
    };
}

export default CaptchaTest;