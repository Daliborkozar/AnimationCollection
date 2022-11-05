import React, { useRef, useEffect } from 'react'



const Canvas = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(10,10,250,250);
        //ctx.fillRect(0,0,400,400);
        ctx.stroke();

        ctx.beginPath()
        ctx.arc(135,135,30,0, Math.PI * 2)
        ctx.stroke()
        
      }, [])

  return (
    <canvas width="300" height="300" ref={canvasRef} />
  )
}

export default Canvas