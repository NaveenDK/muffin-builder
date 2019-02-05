import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Muffin from '../../components/Muffin/Muffin';

class MuffinBuilder extends Component{
    render(){
        return(
            <>
              <Muffin/>
              <div>Base Controls</div>
            </>
        );
    }
}

export default MuffinBuilder;