import { ActionLink } from '../../components/action/Action';

const Root = () =>
    <>
        <h1 className='title'>Welcome!</h1>
        <p className='description'>
            This is a simple web app to gather some input from the user and help them select their favourite Pokémon - 
            it will work on computers and phones, saving the user's preferences to their local device.
        </p>
        <ActionLink to={'user/details'} text="Let's Get Started"></ActionLink>
    </>

export default Root;