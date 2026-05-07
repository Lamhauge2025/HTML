import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO planets (planet_name, comment) VALUES (?, ?)",
            ('Earth', 'Home planet for humans')
            )

cur.execute("INSERT INTO planets (planet_name, comment) VALUES (?, ?)",
            ('Jupiter', 'Named after the roman equivalent of Zeus')
            )

connection.commit()
connection.close()
