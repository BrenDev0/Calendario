import sqlite3

class DataBase:
    def __init__(self):
        conn = sqlite3.connect("Calendario.db");
        conn.execute("PRAGMA foreign_keys = ON");
        self.cur =  conn.cursor();
        self.create_table()

    def create_table(self):
        self.cur.execute("""CREATE TABLE IF NOT EXISTS Calendario ( _id INTEGER PRIMARY KEY AUTOINCREMENT, day INT, month INT, year INT, name TEXT, start TIME, end TIME, notes TEXT)""");

