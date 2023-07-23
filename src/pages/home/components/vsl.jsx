import style from '../styles/vsl.module.css'

export function Vsl() {

    return (

        <div className={style.vsl}>

            <iframe
                id="panda-05963ef3-30c1-49f0-8f7b-1ddc780404a9"
                src="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/?v=05963ef3-30c1-49f0-8f7b-1ddc780404a9"
                style={{ border: 'none' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                width="720"
                height="360"
                fetchpriority="high">
            </iframe>

        </div>

    )
}