// import dependencies
import SignUpForm from "../../components/SignUpForm/SignUpForm.jsx"
import LoginForm from "../../components/LoginForm/LoginForm.jsx"

export default function AuthPage({ setUser }) {

    return (
        <main>
        <h1>AuthPage</h1>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </main>
    )
}