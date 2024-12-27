import sqlite3
from fastapi.responses import JSONResponse

class Resource_Request:
    def __init__(self):
        self.conn = sqlite3.connect("Calendario.db"); 
        self.cur =  self.conn.cursor();
    
    def create(self, date, title, location, start, end, notes):
        sql_insert = ("""INSERT INTO Calendario (date, title, location, start, end, notes) VALUES(?, ?, ?, ?, ?, ?)""")

        try:
            self.cur.execute(sql_insert, (date, title, location, start, end, notes))
            self.conn.commit()

            return JSONResponse(content={"message": "Data Inserted"})
        
        except sqlite3.Error as e:
            return JSONResponse(status_code=500, content={
                "message": f"An error occurred: {str(e)}"
            })

        finally:
            self.conn.close()          
    
    def read(self, _id):
        sql_read = ("""SELECT * FROM Calendario WHERE _id=(?)""")

        try:
            self.cur.execute(sql_read, _id)
            resource = self.cur.fetchone()

            response_data = []
            
            response_data.append({
                "_id": resource[0],
                "date": resource[1],
                "title": resource[2],
                "location": resource[3],
                "start": resource[4],
                "end": resource[5],
                "notes": resource[6]
            })

            return JSONResponse(content={"data": response_data})
            
        except sqlite3.Error as e:
            return JSONResponse(status_code=500, content={
                "message": f"An error occurred: {str(e)}"
            }) 
        
        finally:
            self.conn.close()
    
    
    def update(self, data):
        return
    
    def delete(self, _id):
        return