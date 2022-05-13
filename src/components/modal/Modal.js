import './Modal.css'

const Modal = ( { id = "box_modal", onClose = () => {}, children} ) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <div id={id} className="box_modal" onClick={handleOutsideClick}>
            <div className="content">

                <button className="close" onClick={onClose}>x</button>

                {children}
            </div> 
        </div>
    )
}

export default Modal;