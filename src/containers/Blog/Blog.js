import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';


import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from "./NewPost/NewPost";


class Blog extends Component {


    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <Posts/>}/>
                <Route path="/" exact render={()=> <FullPost/>}/>
                <Route path="/new-post" exact render={()=> <NewPost/>}/>*/}

                <Switch>

                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/"  component={Posts}/>
                </Switch>

            </div>
        );
    }
}

export default Blog;

