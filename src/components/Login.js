import React from 'react';
import './Login.css';

const Login = () => {
  return (
        <div className="form-box">
            <div className="form-value">
                <form action="">
                    <h2>Bejelentkezés</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required/>
                        <label>E-mail cím</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" required/>
                        <label>Jelszó</label>
                    </div>
                    <div className="forget">
                        <label><input type="checkbox" />Emlékezz rám | <a href="/">Elfelejtettem a jelszavam</a></label>
                    </div>
                    <button>Bejelentkezés</button>
                    <div className="register">
                        <p>Még nincs felhasználói fiókod? <a href="/">Regisztráció</a></p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login;