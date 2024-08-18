import React,{useRef} from 'react';

const Child = ({name,send,update}) => {
    const messageRef = useRef('');
    const nameRef = useRef('');
    function pressButton(){
        const text=messageRef.current.value;
        alert(`Text in Input:${text}`);
    }

    function pressButtonParams(text){
        alert(`Text:${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }
    return (
        <div style={{background:'cyan',padding:'30px'}}>
            <p onMouseOver={()=>console.log(' on muse over')}>Hello,{name}</p>
            <button onClick={()=>console.log('boton 1 pulsado')}>BOTON 1</button>
            <button onClick={pressButton}>BOTON 2</button>
            <button onClick={()=> pressButtonParams('HELLO')}>BOTON 3</button>
            <input 
            placeholder='send a text you father'
            onFocus={()=>console.log('input focused')}
            onChange={(e)=>console.log('Input changed', e.target.value)}
            onCopy={()=>console.log('copied text fron input')}
            
            ref={messageRef}
            />
        <button onClick={()=>send(messageRef.current.value)}>
            Send Message
        </button>
        <div style={{marginTop:'20px'}}>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='New Name'/>
                <button type='submit'>
                    Update Name
                </button>

                
            </form>
        </div>
        </div>
    );
}

export default Child;
