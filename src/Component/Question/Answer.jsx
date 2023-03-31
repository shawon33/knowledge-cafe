import './Answer.css';
import React from 'react';

const Answer = () => {
    return (
        <div className='question-paper'>
           <div>
              <h3 className='question'><span>Question:</span>What are different about props and state ?</h3>
              <p><span className='answer'>Answer:</span> props is a freedom element which read or use only by a parent. <br />
                 state is a parent.
             </p>
           </div>
           <div>
              <h3><span className='question'> Question:</span>How does useState work?</h3>
              <p><span className='answer'>Answer:</span>The useState is hook and hook is a function.<br/> 
                UseState short only singular value from the state and  many states need to have useState calls.
               </p>
           </div>
           <div>
              <h3><span className='question'> Question:</span>What can useEffect do ?</h3>
              <p><span className='answer'>Answer:</span>
                 <ol>
                     <li> Using Hooks</li>
                     <li>Using Classes</li>
                     <li> live filtering</li>
                     <li> trigger animation on new array value</li>
                     <li>validating input field</li>
                 </ol> 
              </p>
           </div>
           <div>
              <h3><span className='question'> Question:</span>what does react work ?</h3>
              <p><span className='answer'>Answer:</span>React is a  flexible JavaScript library for website.<br/>
                React is used to create modular user interfaces.React make to many element with a small pice and  reusable piece of HTML. As a rasult too much easy to operate component (html/css/js) .</p>
           </div>

        </div>
    );
};

export default Answer;