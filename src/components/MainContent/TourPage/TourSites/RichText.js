export const RichText = (props) => {
    return (
        <div 
            className="RichText"
            dangerouslySetInnerHTML={{ __html: props.text }}
        />
    );
};