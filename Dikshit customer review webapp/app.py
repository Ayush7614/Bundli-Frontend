from flask import Flask, render_template, request
import csv

app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'

posts = []


@app.route('/', methods=["GET", "POST"])
@app.route('/index', methods=["GET", "POST"])
def home():
    # DATABASE INITIALIZE
    database_read = open("../week1/database/reviews.csv", "r", newline='')
    database_write = open("../week1/database/reviews.csv", "a", newline='')
    reader_obj = csv.reader(database_read)
    writer_obj = csv.writer(database_write)
    # DATABASE INITIALIZED

    if request.method == "POST":
        print(request.form)
        writer_obj.writerow(
            (
                request.form.get('name'),
                request.form.get('product'),
                request.form.get('review')
            )
        )
        database_write.close()
        for row in reader_obj:
            print(row)
            if row not in posts:
                posts.insert(0, row)
    return render_template('index.jinja2', reviews=posts)


if __name__ == "__main__":
    app.run(debug=True)
