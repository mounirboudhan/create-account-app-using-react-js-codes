/**
 * 
 * @Developer Mounir Boudhan
 * 
 * @Package Codes Create Account App
 * 
 * @Date 11/2022
 * 
 */
import './StepOne.css';
import Mention from '../../../images/mention.svg';

const StepOne = (props) => {
    return (
        <div className="step-one">
            <div className="row">
                <div className=" left col-md-6">
                    <img src={Mention} alt='' />
                </div>
                <div className="right col-md-6">
                    <span>
                        Step one
                    </span>
                    <h1>Create your account</h1>
                    <p>
                        Let's begin by creating your account. You can always change these details if you want.
                    </p>
                </div>
            </div>
            <form className='row g-3'>
                <div className='col-md-6'>
                    <input type='text' placeholder="First name" className='form-control' />
                </div>
                <div className='col-md-6'>
                    <input type='text' placeholder="Last name" className='form-control' />
                </div>
                <div className='col-md-12'>
                    <input type='text' placeholder="Email" className='form-control' />
                </div>
                <div className='col-md-12'>
                    <input type='password' placeholder="Password" className='form-control' />
                </div>
                <div className='col-md-12'>
                    <input type='submit' value='Next Step' className='btn btn-primary' onClick={(event) => {
                        event.preventDefault();
                        props.handleClick(2);
                        document.documentElement.scrollTop=`0`;
                    }} />
                </div>
            </form>
        </div>
    );
}

export default StepOne;