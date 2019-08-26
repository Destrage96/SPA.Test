import React, {Component} from 'react';
import classes from './Home.module.css';


class Home extends Component {
  render() {
    return (

      <div className={classes.Home}>

        <div className ={classes.Content}>

          <h1>Home</h1>

          <div> 

            <div className={classes.Block1}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor corporis omnis officia. Id, cum. Nihil, perferendis! Quo dolor, dolorem laudantium mollitia optio itaque error sunt nisi. Asperiores est quaerat quos.
              Maxime saepe reiciendis optio repudiandae nisi, hic, laborum atque quaerat blanditiis aspernatur doloremque numquam dolorem sint, eum natus voluptates dolorum tenetur similique voluptatibus. Totam omnis eius deleniti officia harum consequatur.
              </p>
            </div>

            <div className={classes.Block2}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ratione expedita et dignissimos mollitia soluta odio. Similique, mollitia, fuga architecto, assumenda omnis impedit quia quam modi voluptatem repellat aliquam alias.</p>
            </div>

            <div className={classes.Block3}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto soluta ratione eaque exercitationem aut aliquam veritatis, ea fugiat modi optio? Quasi, repellat a dolorem quibusdam aspernatur tempore non, doloribus ullam ipsum impedit sunt eos quae, quidem excepturi! Molestiae doloremque odio magnam et accusantium velit numquam ipsum enim officia, quis at amet sequi adipisci optio maxime nihil exercitationem deleniti non!</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;