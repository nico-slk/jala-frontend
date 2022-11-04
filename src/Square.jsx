import React from 'react'

export default function Square({color, letterPosition, numPosition}) {
  return (
    <div className={`${color} border-gold padding-40 ${color === "bg-dark" ? "text-light" : "text-dark"} fw-bolder fs-4`}>
        {String.fromCharCode(letterPosition).toUpperCase()}{numPosition}
    </div>
  )
}
