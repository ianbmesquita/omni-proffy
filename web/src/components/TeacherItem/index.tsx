import React from 'react'

// import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/29241472?s=460&u=1f7adc75ce252f58f35f83f7fabbd9047cdd2a00&v=4" alt="Ian Mesquita"/>
                <div>
                    <strong>Ian Mesquita</strong>
                    <span>Fundamentos de Java</span>
                </div>
            </header>

            <p>
                Instrutor da linguagem java com 8 anos de experiência.
                <br/><br/>
                Entusiasta em ensinar o máximo de programadores possíveis para que esses possam alcançar seus objetivos na carreira.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                
                <button type="button">
                    <img src=""/*{whatsappIcon}*/ alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem