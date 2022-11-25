/**
 * 
 * @Developer Mounir Boudhan
 * 
 * @Package Codes Create Account App
 * 
 * @Date 11/2022
 * 
 */
import './StepThree.css';
import Account_Created from '../../../images/account-created.svg';

const StepThree = () => {
    return (
        <div className="step-three">
            <div className="row d-flex align-items-center">
                <div className="right col-md-6">
                    <span>
                        Step Three
                    </span>
                    <h1>Done!</h1>
                    <p>
                        We've set up your account and ready to start using it, now let's move on to your dashboard
                    </p>
                </div>
                <div className=" left col-md-6">
                    <img src={Account_Created} alt='' />
                </div>
            </div>
            <div className='go-to-btn'>
                    <input type='submit' value='Go to Dashboard' className='btn btn-primary' onClick={(event) => {
                        event.preventDefault();
                        document.documentElement.scrollTop=`0`;
                    }} />
                </div>
        </div>
    );
}

export default StepThree;