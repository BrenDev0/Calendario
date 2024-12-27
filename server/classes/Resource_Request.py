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
            rescource = self.cur.fetchone()

            response_data = []

            for row in rescource:
                response_data.append({
                    "_id": row[0],
                    "date": row[1],
                    "title": row[2],
                    "location": row[3],
                    "start": row[4],
                    "end": row[5],
                    "notes": row[6]
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