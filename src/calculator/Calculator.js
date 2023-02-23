import React from 'react';
//import { ReactDOM } from 'react';
import Button from './Button';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
import './Calculator.css'

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {question:'', answer:''};
        /* Now we have to bind handleClick() mehtod with 'this' keyword   */
        this.handleClick = this.handleClick.bind(this);
    }




    //our method to handle all click events from our buttons
        handleClick(event){
        //get the value from the target element(button)
        const value = event.target.value;
        

        switch(value){
            case '=': {
                /* If it's an equal sign, use the eval() method to evaluate the question, 
                convert the answer(in number) to string */
                if(this.state.question !== ''){
                    var ans = '';
                    try{
                        ans = eval(this.state.question);
                    }
                    catch(err){
                        this.setState({answer:"Math Error"});
                    }
                    if(ans === undefined){
                        this.setState({answer: " Math Error"});
                        }
                        else
                            this.setState({answer:ans, question:''})

                      
                } 
                break;
                
            }
            case 'clear': {
                //Just clean our question and answer in the state
                this.setState( {question: '', answer: ''} );
                break;
            }
            case 'delete': {
               //Deletes the last entered number
                var str=this.state.question;
                str = str.substring(0, str.length-1);
                this.setState({question: str});
                break;
            }
             default: {
                //for every other command, update the answer in the state
                this.setState({question: this.state.question + value});
                break;
             } 
        }
    } 
    
      

    render(){
        return <>
              <div className="frame">
                <CalculatorTitle value="Calculator"/>
                  <div className="mainCalc">
                  <OutputScreen answer={this.state.answer} question={this.state.question} />
                    <div className="button-row">
                      <Button label={'clear'} handleClick={this.handleClick} />
                      <Button label={'delete'} handleClick={this.handleClick} />
                      <Button label={'.'} handleClick={this.handleClick} />
                      <Button label={'/'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                      <Button label={'7'} handleClick={this.handleClick} />
                      <Button label={'8'} handleClick={this.handleClick} />
                      <Button label={'9'} handleClick={this.handleClick} />
                      <Button label={'*'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                      <Button label={'4'} handleClick={this.handleClick} /> 
                      <Button label={'5'} handleClick={this.handleClick} />
                      <Button label={'6'} handleClick={this.handleClick} />
                      <Button label={'-'} handleClick={this.handleClick} />
                    </div>
                    <div className="button-row">
                      <Button label={'1'} handleClick={this.handleClick} />  
                      <Button label={'2'} handleClick={this.handleClick} />
                      <Button label={'3'} handleClick={this.handleClick} />
                      <Button label={'+'} handleClick={this.handleClick} />
                    </div>
                    <div>
                      <Button label={' '} />  
                      <Button label={'0'} handleClick={this.handleClick} />
                      <Button label={'='} handleClick={this.handleClick} />
                      <Button label={' '} />
                    </div>
                  </div>
              </div>
        </>
    }
}
export default Calculator;