import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Utils/MyButton';

export default class Discount extends Component {
  
  state = {
      discountStart: 0,
      dicountEnd: 30
  }

  porcentage = () => {
      if(this.state.discountStart < this.state.dicountEnd) {
          this.setState({
              discountStart: this.state.discountStart + 1
          })
      }
  }

  componentDidUpdate() {
      setTimeout(() => {
          this.porcentage()
      }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
            <Fade
              onReveal = {() => this.porcentage()}
            >
                <div className="discount_porcentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
            </Fade>

            <Slide right>
                <div className="discount_description">
                    <h3>Purchase tickets before 25th Febuary</h3>
                    <p>Aspernatur, molestias totam? In veritatis perspiciatis suscipit doloremque eius eos sapiente aliquid odit ullam modi quae numquam odio ratione mollitia nulla labore nobis nesciunt totam consectetur provident est impedit, placeat ipsa commodi? Facilis, obcaecati inventore porro voluptate quaerat, illo, amet quod sit quae dolore repellat mollitia recusandae esse distinctio? Harum sit </p>

                    <MyButton 
                      text="Purchase tickets"
                      bck="#ffa800"
                      color="#ffffff"
                      link="http://google.com"
                    />
                </div>
            </Slide>
        </div>
      </div>
    )
  }
}
