class HashedPassword {
    constructor(
        private _hashedPassword: string
    )
    {}

    public get hashedPassword() {
        return this._hashedPassword;
    }
}

export default HashedPassword;