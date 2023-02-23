import style from '../styles/vsl.module.css'

export function Vsl() {

    return (

        <div className={style.vsl}>

            <iframe
                id="panda-9434ada7-fb2f-464d-9d11-147e75ba4fd8"
                src="https://player-vz-cc25821f-b96.tv.pandavideo.com.br/embed/?v=9434ada7-fb2f-464d-9d11-147e75ba4fd8"
                style={{border: 'none'}}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                width="100%"
                height="100%"
                fetchpriority="high">
            </iframe>

        </div>

    )
}