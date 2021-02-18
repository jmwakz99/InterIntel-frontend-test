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


class MyView1 extends LitElement {

 
  static get properties() {
    return {
      userName: {type: String},
      userEmail: {type: String},
      userPhoneNumber: {type: Number},
      isLoading: {type: Boolean},
    }

  }
  constructor(){
    super();
    this.userName = ""
    this.userEmail = ""
    this.userPhoneNumber = "",
    this.isLoading = false
  }

  handleSubmit(e){
    e.preventDefault()
    this.isLoading = true
    setTimeout(() => {
      const {userName, userEmail, userPhoneNumber} = this
      this.isLoading = false
      console.log(`name: ${userName}, email: ${userEmail}, phoneNumber: ${userPhoneNumber}`)
      alert(`name: ${userName}, email: ${userEmail}, phoneNumber: ${userPhoneNumber}`)
      // clear the form inputs
      this.userName = "";
      this.userEmail = "";
      this.userPhoneNumber = "";
     

    }, 3000)
  



  }

  handleChange(e){
    const {name, value} = e.target
    if(name === 'userName' ){
      this.userName = value

    }else if(name === 'userEmail'){
      this.userEmail = value

    }else {
      this.userPhoneNumber = value

    }
 

  }
 


  render() {
  
    return html`
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"> 
      <form class="box" style="width: 20rem; margin: 2rem auto;" @submit="${this.handleSubmit}">
        <div class="field">
        <label class="label">Name</label>
        <div class="control">
        <input class="input" placeholder="Write your name here.." type="text" name="userName"  @change="${this.handleChange}" .value="${this.userName}" required />
        </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
          <input class="input" placeholder="Write your email here.." type="email"  name="userEmail"  @change="${this.handleChange}" .value="${this.userEmail}" required />
          </div>
        </div>
        <div class="field">
        <label class="label">Phone number</label>
        <div class="control">
        <input class="input" placeholder="Write your phone  number here.." type="number"  name="userPhoneNumber"  @change="${this.handleChange}" .value="${this.userPhoneNumber}" required />
        </div>
        </div>
        <button type="submit" class="button  is-small  ${this.isLoading ? 'is-loading' : null}" style="background-color: grey; color: white; outline: none; border: 0;">Submit</button>
      
    </form> 

  
    
    `;
  }

}

customElements.define('my-view1', MyView1);
