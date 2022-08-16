import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function CompsLoadingButton({ handleClick, text }) {
  const [isLoading, setLoading] = useState(false)

  const customHandleClick = () => {
    setLoading(true)
    handleClick()
  }

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={customHandleClick}
    >
      {isLoading ? 'Loading...' : text}
    </Button>
  )
}
