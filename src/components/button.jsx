import style from '../styles/button.module.css'

export function Button(props) {

    const { title, desc } = props

    return (

        <div>
                <div style={{ color: '#fff' }}>
                    {
                        title &&
                        <div
                            style={{ flexDirection: 'column', gap: '1.5rem' }}
                            className={style.clique}
                        >
                            <a href='https://pay.kiwify.com.br/UqOrZy4'>
                                <button>
                                    {title}
                                </button>
                            </a>


                            {
                                desc && <h3>{desc}</h3>
                            }

                        </div>
                    }
                </div>
        </div>
    )
}