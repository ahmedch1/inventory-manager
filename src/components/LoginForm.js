import React, {useState} from "react";
import axios from 'axios';
import './style.css'
import {Link} from "react-router-dom";
function LoginForm({Login, error}) {
    const [details, setDetails] = useState({ email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
     axios.post('http://localhost:5000/login/login', details);
    }
    return (
        <div className="container-fluid row">
            <div className="col-sm-6">
                <div className="form-box">
                    <form onSubmit={submitHandler}>
                        <div className="form-inner">
                            <h2>Connexion</h2>
                            {(error !=="") ? (<div className="error">{error}</div>) : ""}
                            {/*<div className="form-group">*/}
                            {/*    <label htmlFor="name">Name:</label>*/}
                            {/*    <input type="text" name="name" id="name"*/}
                            {/*           onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" placeholder="Email" type="email" name="email" id="email"
                                       onChange={e => setDetails({...details, email: e.target.value})}
                                       value={details.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe</label>
                                <input className="form-control" placeholder="Mot de passe" type="password" name="password"
                                       id="password"
                                       onChange={e => setDetails({...details, password: e.target.value})}
                                       value={details.password}/>
                            </div>
                            <input type="submit" value="Se Connecter" className="btn btn-block"/>
                            <div className="btn btn-block"> <Link to="/inscription" className="nav-link">Inscription</Link></div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-sm-6 col right">

            </div>

        </div>
    )
}

export default LoginForm;
