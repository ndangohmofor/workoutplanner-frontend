import FormInput from './FormInput';

const Register = () => {
    return (
        <div className='register'>
            <form>
            <FormInput placeholder="Username" />
            <FormInput placeholder="Email" />
            <FormInput placeholder="Password" />
            <FormInput placeholder="Confirm Password" />
            </form>
        </div>
    )
}
export default Register;