interface LoginService {
    login(login: string, password: string) : Promise<string>;
}

export default LoginService;