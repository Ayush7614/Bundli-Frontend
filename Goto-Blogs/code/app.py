from operator import methodcaller
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

# Creating end of Flask app from the Flask() Object.
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///posts.db'
db = SQLAlchemy(app)


class BlogPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(25), nullable=False, default='Anonymous')
    date_posted = db.Column(db.DateTime, nullable=False,
                            default=datetime.utcnow)

    def __repr__(self):
        return 'Blog Post : ' + str(self.id)


# Routing the URL using route-decorator.
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/login')
def logi():
    return render_template('login.html')


@app.route('/signup')
def signup():
    return render_template('signup.html')

# Implementing CRUD operations on the DB
# CREATE: + READ:


@app.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'POST':
        post_title = request.form['title']
        post_content = request.form['content']
        post_author = request.form['author']

        # Creating object.
        new_post = BlogPost(
            title=post_title, content=post_content, author=post_author)

        # Adding data to the data-base.
        db.session.add(new_post)
        db.session.commit()

        return redirect('/posts')

    else:
        # Else we will dispaly all the posts in the DB sorted in the order of date-posted.
        all_posts = BlogPost.query.order_by(BlogPost.date_posted).all()
        return render_template('posts.html', posts=all_posts)


# UPDATE
@app.route('/posts/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    # Getting the specific post by unique-id or 404 if doesn't exist.
    post = BlogPost.query.get_or_404(id)
    if request.method == 'POST':
        post.title = request.form['title']
        post.content = request.form['content']
        post.author = request.form['author']

        db.session.commit()

        return redirect('/posts')
    else:
        return render_template('edit.html', post=post)


# DELETE:
@app.route('/posts/delete/<int:id>')
def delete(id):
    # Getting the specific post by unique-id or 404 if doesn't exist.
    post = BlogPost.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()

    return redirect('/posts')


@app.route('/posts/new', methods=['GET', 'POST'])
def newpost():
    if request.method == 'POST':
        post_title = request.form['title']
        post_content = request.form['content']
        post_author = request.form['author']

        new_post = BlogPost(
            title=post_title, content=post_content, author=post_author)

        # Adding data to the data-base.
        db.session.add(new_post)
        db.session.commit()

        return redirect('/posts')

    else:
        return render_template('newpost.html')


if __name__ == "__main__":
    app.run(debug=True)
