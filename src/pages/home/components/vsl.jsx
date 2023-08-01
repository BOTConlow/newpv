import style from '../styles/vsl.module.css'

export function Vsl() {

    return (

        <div className={style.vsl}>

            <iframe
                id="panda-cd7c7eb9-005c-4e8f-917a-ccc397b83364"
                src="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/?v=cd7c7eb9-005c-4e8f-917a-ccc397b83364"
                style={{
                    border: 'none'
                }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                width={869}
                height={489}
                fetchpriority="high"
            />

        </div>

    )
}