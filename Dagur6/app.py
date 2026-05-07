import sqlite3
from flask import Flask, render_template, request, url_for, redirect, flash

app = Flask(__name__)


def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/')
def index():
    conn = get_db_connection()
    planets = conn.execute('SELECT * FROM planets').fetchall()
    conn.close()
    return render_template('index.html', planets=planets)


@app.route('/create', methods=('POST', 'GET'))
def create():
    if request.method == 'POST':
        conn = get_db_connection()
        planet_name = request.form['planet_name']
        comment = request.form['comment']
        conn.execute('Insert into planets(planet_name,comment) Values(?,?)',
                     (planet_name, comment))
        conn.commit()
        conn.close()
        return redirect(url_for('index'))
    return render_template('create.html')
