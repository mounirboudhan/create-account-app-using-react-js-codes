/**
 * 
 * @Developer Mounir Boudhan
 * 
 * @Package Codes Create Account App
 * 
 * @Date 11/2022
 * 
 */
import ImageTellus from '../../../images/tell us.svg';
import './StepTwo.css';

const StepTwo = (props) => {
    return (
        <div className="step-two">
            <div className="row d-flex align-items-center">
                <div className="right col-md-6">
                    <span>
                        Step two
                    </span>
                    <h1>Tell us about you</h1>
                    <p>
                        Add some detail to your profile and let other know who you are.
                    </p>
                </div>
                <div className=" left col-md-6">
                    <img src={ImageTellus} alt='' />
                </div>
            </div>
            <div className='col'>
                <div className="bio-area mb-3">
                    <textarea className="form-control" id="validationTextarea" placeholder="About you..." required></textarea>
                </div>
                <div className="form-check form-switch mb-3 d-flex gap-3 align-items-center">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mt-1" htmlFor="flexSwitchCheckDefault">Make Profile public</label>
                </div>
                <div className='submit-btn'>
                    <input type='submit' value='Next Step' className='btn btn-primary' onClick={(event) => {
                        event.preventDefault();
                        props.handleClick(3)
                        document.documentElement.scrollTop=`0`;
                    }} />
                </div>
            </div>
        </div>
    );
}

export default StepTwo;