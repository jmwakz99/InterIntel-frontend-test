/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css } from 'lit-element';
import './shared-styles.js';

class MyView3 extends LitElement {
  constructor(){
    super()
    this.todos = [],
    this.dictionary = {
      '34': 'thirty-four', 
      '90': 'ninety',
      '91': 'ninety-one',
      '21': 'twenty-one',
      '61': 'sixty-one', 
      '9': 'nine',
      '2': 'two', 
      '6': 'six', 
      '3': 'three',
      '8': 'eight', 
      '80': 'eighty', 
      '81': 'eighty-one',
      'Ninety-Nine': '99', 
      'nine-hundred': '900'
}
  }
  static get properties() {
    return {
      todos: {type: Array},
      dictionary: {type: Object}
      
    

  }
}
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    // todos api call
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`).then(response => {
      return response.json()

    }).then(data => {
      console.log(data)
      this.todos = [...data]
    }).catch(error => {
      console.log(error)
    })

    // sorting the dictionary
    const unsortedDictionary = {...this.dictionary}

    let sortedDictionary = {}
    // loop over the dictionary, automatically the dictionary will be sorted in ascending order 
    Object.entries(unsortedDictionary).forEach(([key, value]) =>{
      // if the current property key is a string interchange
      if(isNaN(key) === true){
        sortedDictionary[value]= key
      }else {
        sortedDictionary[key] = value
      }

    } )
    this.dictionary = sortedDictionary
    console.log(this.dictionary)
  
    

    }
   render() {
     return html`
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"> 
     <div class="container mt-5 ml-4">
     <div class="columns is-mobile is-multiline">
        ${this.todos.map(todo => html`
        <div class="column">
        <div class="card" style="width: 14rem;">
        <header class="card-header">
          <p class="card-header-title">
            ${todo.title}
          </p>
        
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
           
          </div>
        </div>
        <footer class="card-footer is-flex-direction-row is-justify-content-space-between p-3">
        <span class="tag is-white">Complete</span>
        <span class="tag pl-2 ${todo.completed ? 'is-success' : 'is-light'}">${todo.completed}</span>
        
        </footer>
        </div>
    
         </div>
        
        ` )}
        <div class="column">
        <h1 style="width"><span class="tag">Sorted Dictionary</span></h1>
        <table class="table  is-bordered">
  <thead>
    <tr>
      <th>KEY</th>
      <th>VALUE</th>
   
    </tr>
  </thead>

  <tbody>
    ${Object.entries(this.dictionary).map(([key, value]) => html`
    <tr>
    <td>${key}</td>
    <td>${value}</td>
    </tr>
    
    `)}
    </tbody>
    </table>
    </div>
    </div>
  </div>
       
 
     `;
   }
}

customElements.define('my-view3', MyView3);
