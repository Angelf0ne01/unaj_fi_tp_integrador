import mysql.connector
import json


class MysqlRepository:
    def __init__(self):
        self.mydb = mysql.connector.connect(
            host="192.168.0.180", user="root", password="root", database="unaj_football")

    def getAll(self, table):
        self.mycursor = self.mydb.cursor(dictionary=True)
        self.mycursor.execute("SELECT * FROM "+table)
        self.myresult = self.mycursor.fetchall()
        return json.dumps(self.myresult)

    def getById(self, table, id):
        self.mycursor = self.mydb.cursor(dictionary=True)
        self.mycursor.execute("SELECT * FROM "+table+" WHERE id = "+str(id))
        self.myresult = self.mycursor.fetchone()
        return json.dumps(self.myresult)

    def insert(self, table, data):
        columns = ""
        values = ""
        for key in data.keys():
            columns = columns+key+","
            # is string
            if type(data[key]) is str:
                values = values+"'"+data[key]+"',"
            else:
                values = values+""+str(data[key])+","

        sql = "INSERT INTO "+table + \
            " ("+columns[:-1]+") VALUES ("+values[:-1]+")"

        self.mycursor = self.mydb.cursor()
        self.mycursor.execute(sql)
        self.mydb.commit()
        return json.dumps({"message": "Inserted", "data": data})

    def deleteById(self, table, id):
        sql = "DELETE FROM "+table+" WHERE id = "+id
        self.mycursor = self.mydb.cursor()
        self.mycursor.execute(sql)
        self.mydb.commit()
        return json.dumps({"message": "Deleted"})

    def updateById(self, table, data, id):
        columns = ""
        values = ""
        for key in data.keys():
            columns = columns+key+","
            # is string
            if type(data[key]) is str:
                values = values+"'"+data[key]+"',"
            else:
                values = values+""+str(data[key])+","

        sql = "UPDATE "+table + \
            " SET "+columns[:-1]+" = "+values[:-1]+" WHERE id = "+id
        self.mycursor = self.mydb.cursor()
        self.mycursor.execute(sql)
        self.mydb.commit()
        return json.dumps({"message": "Updated"})
