from flask import Flask, render_template, request, make_response, redirect, url_for

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("frontpage.html")


if __name__ == "__main__":
    app.run(debug=True)
