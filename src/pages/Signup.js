import { Form } from "react-router-dom";

const Signup = (props) => {
    return <div>
        <h3>Hoimie signup</h3>
        <Form action="/signup" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Signup" />
        </Form>
    </div>
}

export default Signup;