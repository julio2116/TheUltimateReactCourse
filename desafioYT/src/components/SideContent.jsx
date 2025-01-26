import styles from "./SideContent.module.css";
import { useNavigate } from "react-router";
import { useTeste } from "../hooks/UseTeste";

const SideContent = () => {
  const navigate = useNavigate();
  const [searchResult, views, channels] = useTeste();
  console.log(searchResult)
  console.log(views)
  console.log(channels)

  function handleVideoSelected(videoId) {
    console.log(videoId)
    navigate(`/video?id=${videoId}`);
  }
  return (
    <>
      <div className={styles.teste}>
        <ul className={styles.lista}>
          {searchResult?.items?.map((item, index) => (
            <li key={item.id.videoId} className={styles.video}>
              <div>
                <img
                  src={item.snippet.thumbnails.high.url}
                  alt=""
                  onClick={() => handleVideoSelected(item.id.videoId)}
                />
              </div>
              <span className={styles.videoInfo}>
                <h4 onClick={() => handleVideoSelected(item.id.videoId)}>
                  {item.snippet.title}
                </h4>
                <p>{views?.items[index]?.statistics?.viewCount}</p>
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