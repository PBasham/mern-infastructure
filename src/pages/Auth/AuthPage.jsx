// import dependencies
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx"

export default function AuthPage(props) {

    return (
        <main>
        <h1>AuthPage</h1>
        <SignUpForm setUser={props.setUser}/>
        </main>
    )
}