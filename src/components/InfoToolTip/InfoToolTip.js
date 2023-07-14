const InfoTooltip = ({ onClose, isOpen, infoTitle, infoImage }) => {
  return (
    <div className={isOpen ? `popup popup_opened` : `popup`} onClick={onClose}>
      <form
        className="popup__container-infoTooltip"
        onClick={(e) => e.stopPropagation()}>
        <button type="button" className="popup__close" onClick={onClose} />
        <img src={infoImage} alt={infoTitle} className="popup__infoimage" />
        <h2 className="popup__title popup__title_infoTooltip">{infoTitle}</h2>
      </form>
    </div>
  );
};

export default InfoTooltip;
