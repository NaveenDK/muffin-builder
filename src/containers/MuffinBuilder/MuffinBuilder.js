import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Muffin from '../../components/Muffin/Muffin';

class MuffinBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state ={

    //     }
    // }
    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }

    }
    render(){
        return(
            <>
              <Muffin ingredients={this.state.ingredients}/>
              <div>Base Controls</div>
            </>
        );
    }
}

export default MuffinBuilder;