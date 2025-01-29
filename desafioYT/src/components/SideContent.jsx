import styles from "./SideContent.module.css";
import { useNavigate } from "react-router";
import { useSearchResult } from "../hooks/UseSearchResult";

const SideContent = () => {
  const navigate = useNavigate();
  const result = useSearchResult();
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
                <span>{item.views}</span>
                .
                <span>{item.published}</span>
                <span style={{display: 'block'}}>
                  <img src={item.icon} style={{ width: '35px', height: '35px', borderRadius: '50%' }} alt="" />
                  <span>{item.channelTitle}</span>
                </span>
                <span>{item.description}</span>
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
// ser renderizado de acordo com o tipo do resultado da busca, canal, playlist ou video
//renderizar imagem, nome do canal, se tem ou não legendas, máxima resolução, arredondar quantidade
//de views, há quanto tempo foi postado

// titulo
// viwes, tempo em que foi lançado
// foto do canal, nome do canal
// descrição
// novo? renderizar tag apenas se o video tiver sido postado a 6 dias ou menos
// 4k? renderizar tag apenas se houver 4k disponivel
// canal verificado?