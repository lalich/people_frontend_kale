import { Form } from "react-router-dom";

const Login = (props) => {
    return <div>
        <h3>Login de-Gen</h3>
        <Form action="/login" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
        </Form>
    </div>
}

export default Login;