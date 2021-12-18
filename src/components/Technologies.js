import React from 'react';
import {  DiReact, DiMysql, DiPython } from 'react-icons/di';


const Technologies = () =>  (
    <ul>
        <li>
            <DiMysql size='3rem' />
            <div>DataBase</div>
        </li>
        <li>
            <DiReact size='3rem' />
            <div>Front-End</div>
        </li>
        <li>
            <DiPython size='3rem' />
            <div>Back-End</div>
        </li>

    </ul>
          
);
  
  export default Technologies;
  
