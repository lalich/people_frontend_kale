import {Outlet, Link} from 'react-router-dom';

function Main(props){
    return <div>
        <h1>Welcome to the PlCE OF People </h1>
        <h3>Do you want to signup?</h3>
        <Link to="/signup"><button>Signup here homie!</button></Link>
        <h3>Do you want to login?</h3>
        <Link to="/login"><button>Degen Login</button></Link>

        <Outlet />
    </div>
}

export default Main;