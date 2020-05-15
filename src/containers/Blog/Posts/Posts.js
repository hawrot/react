import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Matt'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            }).catch(err => {
            console.log(err);
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}/>;
        });


        return (

            <section className="Posts">
                {posts}
            </section>
        )
            ;

    }
}

    export
    default
    Posts;
