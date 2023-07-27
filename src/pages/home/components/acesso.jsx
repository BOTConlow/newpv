import style from '../styles/acesso.module.css'
import Image from '../../../assets/celular2.webp'
import { Button } from '../../../components/button'

const text = [{
    text: 'Tudo de forma fácil e organizada para você simplesmente começar e já ter resultados.'
}, {
    text: 'Dezenas de produtos perigosos para a pele estão sendo consumidos em todo o país. Produtos que contém ácidos que provocam descamação e que provocam o tão conhecido Efeito Rebote. Eles clareiam a pele enquanto estão sendo usados, mas quando param de ser usados, as manchas voltam com mais força que antes. Isso acontece porque a pele não está preparada para receber ácidos agressivos, laser e até microagulhamento.'
}, {
    text: <b>Com o protocolo, você restaura a sua pele de forma natural e permanente!</b>
}]

export function Acesso() {
    return (
        <div className={style.content}>
            <img
                src={Image}
            />

            <div>
                <h1>
                    VOCÊ VAI TER ACESSO AO PROTOCOLO DE ELIMINAR ACNE NA PALMA DA SUA MÃO!
                </h1>

                {text.map((item, index) => (
                    <div key={item.text}>
                        <p>{item.text}</p>
                    </div>
                ))}
                <div className={style.button}>
                    
                    <Button
                        title='Quero restaurar minha pele de forma natural!'
                    />
                </div>
            </div>
        </div>
    )

}