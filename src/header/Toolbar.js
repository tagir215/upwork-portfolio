import en from '.././locales/en.json';
import './Toolbar.css';


export default function ToolBar({lang}){

    
    return(
        <>
        <div className='place-holder' />
        <div className='toolbar-background'>
        <div className="toolbar-bar">


                <div className="toolbar-right">
                    <span className="toolbar-title">{lang.title}</span>
                </div>

                <div className="toolbar-right">
                    <a className="toolbar-tab"  href='mailto:tagir.tirkkonen@gmail.com'>{lang.contact}</a>
                </div>
                
            </div>
        </div>
        </>
    )
}