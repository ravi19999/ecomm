const fs = require('fs');
class UsersRepository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Creating a repository requires a filename');
        }

        this.filename = filename;
        try {
            fs.accessSync(this.flename);
        } catch (err) {
            fs.writeFileSync(this.filename);
        }
    }
}

const repo = new UsersRepository('users.json');