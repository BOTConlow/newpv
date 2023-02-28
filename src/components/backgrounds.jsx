import Background1 from '../assets/background1.webp'


const backgroundImgs = {
    background1: `url(${Background1})`,
    background2: 'linear-gradient(90deg, #fafafa, #ddd)',
    background3: 'linear-gradient(90deg, var(--red-200), var(--red-400))',
    background4: '#f3f3f3',
    width: '100vw',
    height: '100vh',
}

export function Background(props) {

    const { bgImage } = props

    return (

        <div
            style={{
                background: `${backgroundImgs[bgImage]}` 
            }}
        >
            {props.children}
        </div>

    )

}