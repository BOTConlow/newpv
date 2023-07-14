import style from '../styles/vsl.module.css'

export function Vsl() {

    return (

        <div className={style.vsl}>

            <iframe
                id="panda-20943242-edc0-41cb-a0f3-177d882537a8"
                src="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/?v=20943242-edc0-41cb-a0f3-177d882537a8&playOpensFullscreenNative=true"
                style={{ border: 'none' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowfullscreen="true"
                width="720"
                height="360"
                fetchpriority="high">
            </iframe>

        </div>

    )
}