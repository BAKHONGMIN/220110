import React,{Component} from "react";
class Gnb extends Component{
    
    constructor(prop){  
        super(prop);
        this.state={};
    }
    // getDerivedStateFromProp(){

    // }

    render(){
        return(
            <ul id='gnb' className='gnb'> <li>메뉴삽입</li></ul>
        );
    }
}

export default Gnb;