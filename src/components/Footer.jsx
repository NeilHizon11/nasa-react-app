export default function Footer(props) {
    const {showModal, handleToggleModal, data, toggleHeight} = props
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h1>APOD Project</h1>
            <h2>{data?.title}</h2>
        </div>
        <div className="buttonContainer">
            <button onClick={toggleHeight}>
                <i className="fa-solid fa-up-right-and-down-left-from-center"></i><span className="tiptext1">Resize</span>
            </button>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i><span className="tiptext">Show Info</span>
            </button>
        </div>
        
    </footer>
  )
}
