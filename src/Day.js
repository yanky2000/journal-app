import React, { Component } from 'react';


class Day extends Component {
  render() {
    return (

        <div className="DayEntry">
            <h2> 9.01.18</h2>
            <h3>TASKS</h3>
            <ol>
                <li>Do 10 push ups</li>
                <li>Do 10 push ups</li>
                <li>Do 10 push ups</li>
            </ol>
            <form> Insights of the Day: 
                <input type='textarea'>

                </input>
            </form>

        </div>
    
  
    );
  }
}

export default Day;

