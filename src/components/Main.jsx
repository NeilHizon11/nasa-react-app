export default function main(props) {
    const {data, isFullHeight} = props   
    const imageStyle = {
      height: isFullHeight ? '100vh' : '100%',
      width: '100%'
    }
    
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt={data.title || 'bg-image'} className="bgImage" style={imageStyle}/>
    </div>
  )
}
