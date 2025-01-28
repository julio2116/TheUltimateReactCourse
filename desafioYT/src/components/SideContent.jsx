import styles from "./SideContent.module.css";
import { useNavigate } from "react-router";
import { useTeste } from "../hooks/UseTeste";

const SideContent = () => {
  const navigate = useNavigate();
  const result = useTeste();
  console.log(result)

  function handleVideoSelected(videoId) {
    console.log(videoId)
    navigate(`/video?id=${videoId}`);
  }
  return (
    <>
      <div className={styles.teste}>
        <ul className={styles.lista}>
          {result.map((item) => (
            <li key={item.videoId} className={styles.video}>
              <div>
                <img
                  src={item.thumb}
                  alt=""
                  onClick={() => handleVideoSelected(item.videoId)}
                />
              </div>
              <span className={styles.videoInfo}>
                <h4 onClick={() => handleVideoSelected(item.videoId)}>
                  {item.titleVideo}
                </h4>
                <p>{item.views}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SideContent;


//é necessário cruzar as IDS do canal, com as de views e canais, e separar o tipo de informação que deve 
// ser renderizado de acordo com o tipo do resultado da busca, canal ou video
//renderizar imagem, nome do canal, se tem ou não legendas, máxima resolução, arredondar quantidade
//de views, há quanto tempo foi postado

// titulo
// viwes, tempo em que foi lançado
// foto do canal, nome do canal
// descrição