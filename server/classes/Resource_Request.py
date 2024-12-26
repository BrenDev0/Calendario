import sqlite3

class Resource_Request:
    def __init__(self):
        conn = sqlite3.connect("Calendario.db"); 
        self.cur =  conn.cursor();
    
    def create(self, title, day, month, year, start, end, notes):
        return
    
    def read(self, _id):
        return
    
    def update(self, data):
        return
    
    def delete(self, _id):
        return