import sqlite3

class Collection_Request:
    def __init__(self):
        conn = sqlite3.connect("Calendario.db");
        self.cur = conn.cursor();

    def read(self):
        return
        