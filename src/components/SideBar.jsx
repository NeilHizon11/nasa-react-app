export default function Sidebar(props) {
    const {handleToggleModal, data, toggleHeight} = props

  return (
    <div className="sidebar">
        <div className="bgOverlay"></div>
        <div onClick={handleToggleModal} className="sidebarContents">
            <h2>{data?.title}</h2>
            <div className="descriptionContainer">
                <p className="descriptionTitle" >{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
      
    </div>
  )
}
