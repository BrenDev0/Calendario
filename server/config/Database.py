import sqlite3

class DataBase:
    def __init__(self):
        conn = sqlite3.connect("Calendario.db");
        conn.execute("PRAGMA foreign_keys = ON");
        self.cur =  conn.cursor();
        self.create_table()
        conn.close()

    def create_table(self):
        self.cur.execute("""CREATE TABLE IF NOT EXISTS Calendario ( _id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, title TEXT, location TEXT, start TEXT, end TEXT, notes TEXT)""");
        return

