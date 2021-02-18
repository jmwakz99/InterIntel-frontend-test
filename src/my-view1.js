/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html} from 'lit-element';
import './shared-styles.js';

class MyView1 extends LitElement {
  render() {
    return html`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <style>

      body{background:#59ABE3;margin:0}
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
        font-family:'Montserrat',sans-serif;position:relative
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
      button.button{
        float:right;
        padding:8px 12px;
        margin:8px 0 0;
        font-family:'Montserrat',sans-serif;
        border:2px solid #78788c;
        background:0;
        color:#5a5a6e;
        cursor:pointer;
        transition:all .3s
      }
      button:hover{
        background:#78788c;
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


    </style>
    
    <form class="form">
      <h2>User's Info</h2>
      <p type="Name:"><input placeholder="Write your name here.."type="text" required></input></p>
      <p type="Email:"><input placeholder="Write your email here.." type="email" required></input></p>
      <p type="Phone number:"><input placeholder="Write your phone number here.." type="tel"></input></p>
      <button class="button is-rounded" type="submit default">Submit</button>
      <div>
        <span></span>+254123456
        <span></span> info@interintel.co.ke
      </div>
    </form>
    
    `;
  }
}

customElements.define('my-view1', MyView1);
