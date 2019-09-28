//import { Http2SecureServer } from "http2";

class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(cb, creds) {
        fetch('http://localhost:3001/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: creds.email,
                password: creds.password
            })
        })
            .then(res => {
                if (res.ok) {
                    this.authenticated = true;
                    cb();
                }
            })
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    register(cb, creds) {
        //push credentials into database
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: creds.email,
                password: creds.password,
                name: creds.name
            })
        })
            .then(res => {
                if (res.ok) {
                    this.authenticated = true;
                    cb();
                }
            })
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();