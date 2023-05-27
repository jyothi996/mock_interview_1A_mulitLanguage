import './index.css'

const LanguagesButtons = props => {
  const {isActive, onClickChangeLanguage, LanguageItemDetails} = props
  const {buttonText, id} = LanguageItemDetails

  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  const activeTabBtnClassName = isActive ? 'highlighted' : 'not-highlighted'

  return (
    <li className="button-container">
      <button
        type="button"
        className={`buttons ${activeTabBtnClassName}`}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default LanguagesButtons
