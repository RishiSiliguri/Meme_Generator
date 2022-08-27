const Template = ({ templates, setMeme }) => {
    return( 
    
    <div className = "templates">
      {templates.map((template) => (
        <div 
          key={template.id} 
          className="template" 
          onClick={() =>{
            setMeme(template);
        }}
        >
          {/* {{template.name}} */}
          <div style={{backgroundImage: `url(${template.url})`}} className="image"></div>
        </div>
      ))}
    </div>
    );
};

export default Template;