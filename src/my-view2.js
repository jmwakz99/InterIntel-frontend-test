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

class MyView2 extends LitElement {
  static get styles () {
    return [
      css` 
       .receipt {
        background-color: #fff;
        width: 22rem;
        position: relative;
        padding: 1rem;
        margin: 2rem auto;
        box-shadow: 0 -0.4rem 1rem -0.4rem rgba(0,0,0,0.2);
      }
      
      .receipt:after {
        background-image: linear-gradient(135deg, #fff 0.5rem, transparent 0), linear-gradient(-135deg, #fff 0.5rem, transparent 0);
        background-position: left-bottom;
        background-repeat: repeat-x;
        background-size: 1rem;
        content: '';
        display: block;
        position: absolute;
        bottom: -1rem;
        left: 0;
        width: 100%;
        height: 1rem;
      }
      
      .receipt__header {
        text-align: center;
      }
      
      .receipt__title {
        color: #FF619B;
        font-size: 1.6rem;
        font-weight: 700;
        margin: 1rem 0 0.5rem;
      }
      
      .receipt__date {
        font-size: 0.8rem;
        color: #666;
        margin: 0.5rem 0 1rem;
      }
      
      .receipt__list {
        margin: 2rem 0 1rem;
        padding: 0 1rem;
      }
      
      .receipt__list-row {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        position: relative;
      }
      
      .receipt__list-row:after {
        content: '';
        display: block;
        border-bottom: 1px dotted rgba(0,0,0,0.15);
        width: 100%;
        height: 100%;
        position: absolute;
        top: -0.25rem;
        z-index: 1
      }
      
      .receipt__item {
        background-color: #fff;
        z-index: 2;
        padding: 0 0.15rem 0 0;
        color: #1f1f1f;
      }
      
      .receipt__cost {
        margin: 0;
        padding: 0 0 0 0.15rem;
        background-color: #fff;
        z-index: 2;
        color: #1f1f1f;
      }
      
      .receipt__list-row--total {
        border-top: 1px solid #FF619B;
        padding: 1.5rem 0 0;
        margin: 1.5rem 0 0;
        font-weight: 700;
      }

      `
    ]
  }
   render(){
     return html`
     <div class="receipt">
     <header class="receipt__header">
       <p class="receipt__title">
         XYZ Shop
       </p>
       <p class="receipt__date">20 January 2021</p>
     </header>
     <dl class="receipt__list">
       <div class="receipt__list-row">
         <dt class="receipt__item">Tomatoes</dt>
         <dd class="receipt__cost">kes200.99</dd>
       </div>
       <div class="receipt__list-row">
         <dt class="receipt__item">Onions</dt>
         <dd class="receipt__cost">kes40.50</dd>
       </div>
       <div class="receipt__list-row">
         <dt class="receipt__item">Avocado</dt>
         <dd class="receipt__cost">kes430.99</dd>
       </div>
       <div class="receipt__list-row">
         <dt class="receipt__item">Crisps</dt>
         <dd class="receipt__cost">kes500.99</dd>
       </div>
       <div class="receipt__list-row">
         <dt class="receipt__item">Sweet Potatoes</dt>
         <dd class="receipt__cost">kes250.59</dd>
       </div>
       <div class="receipt__list-row receipt__list-row--total">
         <dt class="receipt__item">Total</dt>
         <dd class="receipt__cost">kes1423.07</dd>
       </div>
     </dl>
   </div>
     `;
   }
}

customElements.define('my-element', MyView2);
