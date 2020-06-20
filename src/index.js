import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todos from './Todos';
// import Parent from './ParentChild';
// import Todos from './Todos';
// import PromiseExample from './PromiseExample';
import { HeaderComponent, FooterComponent } from './component';
//jo index ki file hogi wohi utha kar layega

// import abc, { sum } from './utility';
// let resultOfSum = sum(2, 4);
// let resultOfMultiply = abc.multiply(2, 4);
// console.log('sum', resultOfSum)
// console.log('mul', resultOfMultiply)
// console.log('grreting ', abc.greeting('Foo'));


ReactDOM.render(
  <React.StrictMode>
    <Fragment>   {/* <> */}
      <HeaderComponent />
      {/* <App /> */}
       <Todos /> 
      <FooterComponent />
    </Fragment> {/* </> */}
  </React.StrictMode>,
  document.getElementById('root')
);

