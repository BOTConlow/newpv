import style from '../styles/vsl.module.css'
import React, { useRef, useEffect, useState } from 'react';

export function Vsl() {

    const meuIframeRef = useRef(null);
    const [iframeHeight, setIframeHeight] = useState(0);

    // Função para ajustar a altura do iframe com base na largura
    const ajustarAltura = () => {
        if (meuIframeRef.current) {
            const width = meuIframeRef.current.clientWidth; // Obter a largura do iframe
            const scaleFactor = .57; // Fator de escala de 10%, você pode ajustar conforme necessário
            const newHeight = `${width * scaleFactor}px`; // Calcula a nova altura em pixels
            setIframeHeight(newHeight); // Define a nova altura para o estado
        }
    };

    // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
    useEffect(() => {
        ajustarAltura();
        const handleResize = () => ajustarAltura();
        window.addEventListener('resize', handleResize);

        // Remover o listener quando o componente for desmontado para evitar memory leaks
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (

        <div className={style.vsl}>

            <iframe
                ref={meuIframeRef}
                id="panda-cd7c7eb9-005c-4e8f-917a-ccc397b83364"
                src="https://player-vz-cb3e51cc-16c.tv.pandavideo.com.br/embed/?v=cd7c7eb9-005c-4e8f-917a-ccc397b83364"
                style={{
                    border: 'none',
                    height: iframeHeight
                }}

                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                fetchpriority="high"
            />

        </div>

    )
}