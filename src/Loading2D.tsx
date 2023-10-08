
export const Loading2D = () => {

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
      }}
    >
      <img 
        src={"/loading.gif"}
        width={150}
        height={150}
      />
    </div>
  )
}