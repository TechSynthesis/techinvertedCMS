import React, { useState } from 'react'
import { LeafButton } from 'payload/components/rich-text'

const AnimationLeaf = ({ attributes, leaf, children }) => {
  const [animation, setAnimation] = useState(leaf.animation || '')

  // Apply the selected animation style to the text
  const style = {
    animation: animation ? `${animation} 1s infinite` : 'none',
  }

  const handleAnimationChange = event => {
    setAnimation(event.target.value)
  }

  return (
    <>
      <span {...attributes} style={style}>
        {children}
      </span>
      <select value={animation} onChange={handleAnimationChange}>
        <option value="">None</option>
        <option value="bounce">Bounce</option>
        <option value="fade">Fade</option>
        <option value="rotate">Rotate</option>
      </select>
    </>
  )
}

const AnimationButton = () => <LeafButton format="animation">Animation</LeafButton>

export default {
  name: 'animation',
  Button: AnimationButton,
  Leaf: AnimationLeaf,
}
