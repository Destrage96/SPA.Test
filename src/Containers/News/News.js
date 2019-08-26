import React, {Component} from 'react';
import classes from './News.module.css';
import PostNews from '../../Components/News Post/Post/PostNews';
import PostList from '../../Components/News Post/PostList/fixtures';

class News extends Component {

  render() {

    return (

      <div className={classes.News}>

        <h1>News Posts</h1>

        <div>
          <PostNews PostList ={PostList} />
        </div>
      </div>
    );
  }
}

export default News;