const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

export default async function openDB() {
    return sqlite.open({
        filename: "./banco.db",
        driver: sqlite3.Database
    })
}