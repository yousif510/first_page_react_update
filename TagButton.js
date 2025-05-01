import './TagButtonStyle.css'; 
export default function TagButton({buttonName,children}){
    return(
        <button className="tagButton">
            {buttonName}
            {children}
        
        </button>
    )
}