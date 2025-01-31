import styles from "./SideContent.module.css";
import { useNavigate } from "react-router";
import { useSearchResult } from "../hooks/UseSearchResult";

const SideContent = () => {
  const navigate = useNavigate();
  const result = useSearchResult();
  console.log(result)

  function handleVideoSelected(videoId) {
    navigate(`/video?id=${videoId}`);
  }
  function formatViwes(views) {
    views = parseInt(views)

    const formats = {10e5: 'K', 10e8: 'M', 10e11: 'B'}
    for(const [limit, simbol] of Object.entries(formats)){
      if (views < 10e2){return `${views}`}
      if (views < limit){
        const numberFormated = (views/limit * 1000).toFixed(1)
        return `${numberFormated}${simbol}`
      }
    }
  }
  function formatTimePublished(time){
    const timeParsed = Date.parse(time);
    const dateToday = Date.now();
    const timePostedML = dateToday - timeParsed;

    const formats ={
      year: 3.156e10,
      month: 2628202743.3266106,
      week: 604845995.8932518959,
      day: 86406570.841893151402,
      hour: 3600273.7850788808428,
      minut: 60004.563084648012591,
      second: 1000.0760514108002326
    }
    for(const [period, limit] of Object.entries(formats)){
      if(timePostedML > limit) {
        const value = Math.floor(timePostedML / limit)
        return (value > 1 ? `${value} ${period}s ago` : `${value} ${period} ago`)
      }
    }
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
                <span>{item.views ? formatViwes(item.views) : ''} viwes</span>
                . 
                <span>{formatTimePublished(item.published)}</span>
                <span style={{ display: 'block' }}>
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