import React, { Component } from 'react'
import ContentList from '../ContentList'

export default class Creative extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selector: 0,
      creatives: [
        { id: 1, title: 'First Creative', description: 'Short Description', clientId: 1, creativeType: 'Digital', coverImage: '/images/stock/1.jpg' },
        { id: 2, title: 'Sushi', description: 'Raw Fish', clientId: 2, creativeType: 'Food', coverImage: '/images/stock/2.jpg' }
      ]
    }
  }
  selectContent(e) {
    console.log('end')
    console.log(e)
    console.log(this)
  }
  render() {
    return (
      <div className="view-wrap">
        <div className="side-nav-wrapper">
            <div className="side-nav">

            </div>
        </div>

        <div className="view-content">
          <div className="view-header">
            <h2>All Creative</h2>
            <em className="note">Add your creative below. Click on Featured to select the 5 pieces you’d like to include in your home page viewer.</em>
            <a href="#add-person" className="addItem">Add +</a>
          </div>

          <ContentList items={this.state.creatives} onSelect={this.selectContent.bind(this)} />

        </div>
      </div>
    )
  }
}
