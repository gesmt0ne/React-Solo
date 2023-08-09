import './App.css'

export function App (){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                 className='tw-followCard-avatar'
                 alt="Random Guy" 
                 src="https://unavatar.io/dribbble/omidnikrah"></img>
                <div className='tw-followCard-info'>
                    <strong>Randon Unkow Guy</strong>
                    <span
                    className='tw-followCard-infoUserName'
                    >@randomguy
                    </span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
    )
}