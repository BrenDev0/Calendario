import sqlite3
from fastapi.responses import JSONResponse

class Collection_Request:
    def __init__(self):
        self.conn = sqlite3.connect("Calendario.db")
        self.cur = self.conn.cursor()

    def read(self):
        sql_read = ("""SELECT * FROM Calendario""")

        try:
            self.cur.execute(sql_read)
            collection = self.cur.fetchall()
            response_data = []
            for row in collection:
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
