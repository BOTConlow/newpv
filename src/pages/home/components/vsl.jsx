import style from '../styles/vsl.module.css'

export function Vsl() {

    return (

        <div className={style.vsl}>

            <iframe
                id="panda-59b8e599-ad7d-464e-877e-c49fe085d203"
                src="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/?v=59b8e599-ad7d-464e-877e-c49fe085d203"
                style={{ border: 'none' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                width="720"
                height="360"
                fetchpriority="high">
            </iframe>

        </div>

    )
}