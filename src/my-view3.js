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
    this.todos = []
  }
  static get properties() {
    return {
      todos: {type: Array}
    

  }
}
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`).then(response => {
      return response.json()

    }).then(data => {
      console.log(data)
      this.todos = [...data]
    }).catch(error => {
      console.log(error)
    })
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
   
       
   
        </div>
 

      </div>
       
 
     `;
   }
}

customElements.define('my-view3', MyView3);
