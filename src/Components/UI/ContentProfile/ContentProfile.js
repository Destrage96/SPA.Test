import React, {Component} from 'react';
import classes from './ContentProfile.module.css';



var linksContent= [
    {label: 'frends', isActive: true, liId: 'li-0', divId: 'div-0', divContent: 'text 1'},
    {label: 'photos', isActive: true, liId: 'li-1', divId: 'div-1', divContent: 'text 2'},
    {label: 'documents', isActive: true, liId: 'li-2', divId: 'div-2', divContent: 'text 3'},
    {label: 'music', isActive: true, liId: 'li-3', divId: 'div-3', divContent: 'text 4'}
];
 
class ContentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {activeIndex: 0};
    this.handleLiClick = this.handleLiClick.bind(this);
  } 

  handleLiClick (index){
    let activeIndex = this.state.activeIndex === index ? null : index;
    this.setState({activeIndex});
  }

  renderLinksContent() {
     
    return linksContent.map((link, index) => {

      let cls = [
        classes.ContentProfile
      ]; 
        
      if(link.isActive){
        cls.push(classes.active);
      }

      return (

        <span
          key = {index}
          onClick = {this.handleLiClick.bind(this, index)}
        >
          <li 
            key = {index}
            id = {link.liId}
            className={`${this.state.activeIndex === index && cls.join( ' ' )}`} 
          >
            My {link.label}
          </li>
        </span>
      );
    });
  }

  renderDivsContent() {
    return linksContent.map((link, index) =>{

      let cls = [
        classes.text
      ]; 
      
      if(link.isActive){
        cls.push(classes.ActiveDiv);
      }

      return (
        <div 
          key = {index}
          id = {link.divId}
          className = {`${this.state.activeIndex === index && cls.join( ' ' )}`} 
        >
          {this.state.activeIndex === index ? link.divContent : null }
        </div>
      );
    });
  }

  render() {

    return (
      <div className={classes.ContentProfile}>

        <ul>
          {this.renderLinksContent()}
        </ul>

        <div>
          {this.renderDivsContent()}
        </div>    
      </div>
    );
  }
}

export default ContentProfile;





























































// import React, {Component} from 'react';
// import classes from './ContentProfile.module.css';



// const divContent = [
//     'div1', 'div2', 'div3', 'div4', 'div5'
//   ];

// class ContentProfile extends Component {


//   renderDivs(){
//     return divContent.map((link, index) => {
//       return (
//         <div
//           key = {index}
//         >
//           {link}
//         </div>
//       )
//     });
//   }

//   render() {
//     return (
//       <div className={classes.ContentProfile}>
//         <div className ={classes.Content}>
//           <div> 
//             <div className={classes.Block1}>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor corporis omnis officia. Id, cum. Nihil, perferendis! Quo dolor, dolorem laudantium mollitia optio itaque error sunt nisi. Asperiores est quaerat quos.
//               Maxime saepe reiciendis optio repudiandae nisi, hic, laborum atque quaerat blanditiis aspernatur doloremque numquam dolorem sint, eum natus voluptates dolorum tenetur similique voluptatibus. Totam omnis eius deleniti officia harum consequatur.
//               </p>
//             </div>
//             <div>
//               this.renderDivs(link);
//             </div>
//             <div className={classes.Block2}>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ratione expedita et dignissimos mollitia soluta odio. Similique, mollitia, fuga architecto, assumenda omnis impedit quia quam modi voluptatem repellat aliquam alias.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default ContentProfile;