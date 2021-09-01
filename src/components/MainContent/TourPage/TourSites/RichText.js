import DOMPurify from "dompurify";
export const RichText = (props) => {
    return (
        <div 
            className="RichText"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.text) }}
        />
    );
};