class Login {
    constructor(
        private _login: string
    )
    {}

    public get login() {
        return this._login;
    }
}

export default Login;