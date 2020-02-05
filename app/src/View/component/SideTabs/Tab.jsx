import React from 'react'

class Tab extends React.Component {
  render() {
    const {isOpen, content} = this.props
    return (
      isOpen && content
    )
  }
}

export default Tab