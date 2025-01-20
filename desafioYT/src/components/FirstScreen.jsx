import styles from './FirstScreen.module.css'

const FirstScreen = () => {
    return (
        <>
            <div className={styles.mainBox}>
                <div className={styles.box}>
                    <h2>Que tal uma pesquisa para começar?</h2>
                    <span>Assista vídeos para nos ajudar a criar um feed de conteúdo que combine com você.</span>
                </div>
            </div>
        </>
    )
}
export default FirstScreen