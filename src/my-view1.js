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

  static get styles () {
    return [
      css`
    .form{
      width:340px;
      height:440px;
      background:#e6e6e6;
      border-radius:8px;
      box-shadow:0 0 40px -10px #000;
      margin:calc(50vh - 220px) auto;
      padding:20px 30px;
      max-width:calc(100vw - 40px);
      box-sizing:border-box;
      font-family:'Montserrat',sans-serif;
      position:relative
    }
    h2{
      margin:10px 0;
      padding-bottom:10px;
      width:180px;
      color:#78788c;
      border-bottom:3px solid #78788c
    }
    input{
      width:100%;
      padding:10px;
      box-sizing:border-box;
      background:none;
      outline:none;
      resize:none;
      border:0;
      font-family:'Montserrat',sans-serif;
      transition:all .3s;
      border-bottom:2px solid #bebed2
    }
    input:focus{
      border-bottom:2px solid #78788c
    }
    p:before{
      content:attr(type);
      display:block;
      margin:28px 0 0;
      font-size:14px;
      color:#5a5a5a
    }
    button{
      float:right;
      padding:8px 12px;
      margin:8px 0 0;
      font-family:'Montserrat',sans-serif;
      border:2px solid #78788c;
      background:0;color:#5a5a6e!important;
      cursor:pointer;
      transition:all .3s
    }
    button:hover{
      background:#78788c!important;
      color:#fff!important;
    }
    div{
      content:'Hi';
      position:absolute;
      bottom:-15px;
      right:-20px;
      background:#50505a;
      color:#fff;
      width:320px;
      padding:16px 4px 16px 0;
      border-radius:6px;
      font-size:13px;
      box-shadow:10px 10px 40px -14px #000
    }
    span{
      margin:0 5px 0 15px
    }
      `
    ]
  }

  static get properties() {
    return {
      user_name: {type: String},
      user_email: {type: String},
      user_phone_number: {type: String},
      is_loading: {type: Boolean},
    }

  }
  constructor(){
    super();
    this.user_name = ""
    this.user_email = ""
    this.user_phone_number = "",
    this.loading = false
  }

  handleSubmit(e){
    e.preventDefault()
    this.is_loading = true
    setTimeout(() => {
      const {user_name, user_email, user_phone_number} = this
      this.is_loading = false
      console.log(`name: ${user_name}, email: ${user_email}, phone_number: ${user_phone_number}`)
      alert(`name: ${user_name}, email: ${user_email}, phone_number: ${user_phone_number}`)
      // clear the form inputs
      this.user_name = "";
      this.user_email = "";
      this.user_phone_number = "";
     

    }, 3000)
  



  }

  handleChange(e){
    const {name, value} = e.target
    if(name === 'user_name' ){
      this.user_name = value

    }else if(name === 'user_email'){
      this.user_email = value

    }else {
      this.user_phone_number = value

    }
 

  }
 


  render() {
  
    return html`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">  
    <form class="form" @submit="${this.handleSubmit}">
        <h2>User's Info</h2>
        <p type="Name:"><input placeholder="Write your name here.." type="text" name="user_name"  @change="${this.handleChange}" .value="${this.user_name}" required></input></p>
        <p type="Email:"><input placeholder="Write your email here.." type="email"  name="user_email"  @change="${this.handleChange}" .value="${this.user_email}" required></input></p>
        <p type="Phone number:"><input placeholder="Write your phone  number here.." type="tel"  name="user_phone_number"  @change="${this.handleChange}" .value="${this.user_phone_number}" required></input></p>
        <button class="button is-rounded ${this.is_loading ? 'is-loading' : null}" type="submit">Submit</button>
        <div>
        <span></span>001 1023 567
        <span></span> contact@company.com
        </div>
    
    </form>
  
    
    `;
  }

}

customElements.define('my-view1', MyView1);
