import React from "react";
import "./Intro.css";
import PortfolioItem from "./PortfolioItem";
import egebil from "./assets/ege-bil.jpg";
import ege2 from "./assets/ege2.jpg";
import linkedin from "./assets/linwhite.png";
import ppphoto from "./assets/photo.jpg";

const name = "Reyhan Onbaşı.";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      darkmode: window.matchMedia("(prefers-color-scheme: dark)").matches,
    };
  }

  componentDidMount() {
    console.log("remount");
    this.typingInterval = setInterval(() => {
      this.setState({}, () => {
        console.log("click interval");
        if (this.state.index < name.length) {
          this.setState({ index: this.state.index + 1 });
        } else {
          clearInterval(this.typingInterval);
          this.typingInterval = undefined;
          this.setState({});
        }
      });
    }, 200);
  }

  componentWillUnmount() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  handleSubmit() {
    alert("test");
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="main" id="intro">
          <div style={{ flex: 1 }}>
            <h1>Merhaba Ben</h1>
            <h1>
              <h1>
                {name.substring(0, this.state.index) +
                  (this.typingInterval ? "|" : "")}
              </h1>
            </h1>
          </div>
          <div className="photo-container">
            <img className="photo" src={ppphoto}></img>
            <div className="contact-link">
              <a target="_blank" href="https://github.com/ReyhanOnbasi">
                <img src="https://github.com/favicon.ico"></img>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/reyhan-onba%C5%9F%C4%B1-195831331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ">
                <img src={linkedin}></img>
              </a>
              <a target="_blank" href="https://instagram.com/reyhanonbasi_">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"></img>
              </a>
              <a href="mailto:reyhanonbasi.2002@gmail.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"></img>
              </a>
            </div>
          </div>
        </div>
        <div
          className="submain"
          style={
            this.state.darkmode
              ? { backgroundColor: "#0e2148", color: "white" }
              : { color: "black" }
          }
        >
          <div className="submain-inner">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <input
                type="checkbox"
                checked={this.state.dark}
                onClick={() => {
                  this.setState({ darkmode: !this.state.darkmode });
                }}
                className="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox" className="checkbox-label">
                <span className="ball"></span>
              </label>
            </div>

            <h1 id="whoami">Ben Kimim?</h1>
            <p>
              Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisiyim.
              Teknolojiye olan ilgim doğrultusunda üniversite hayatım boyunca
              teknik yetkinliklerimi geliştirmenin yanı sıra farklı
              topluluklarda aktif görevler alarak sosyal becerilerimi de
              pekiştirdim. Daha önce BAUN Bilgisayar Mühendisliği EBST
              topluluğunda yönetim kurulu başkanlığı yaptım. Bu süreçte ekip
              çalışması, liderlik ve organizasyon konularında değerli deneyimler
              kazandım. Kendimi sürekli geliştirmeye açık, öğrenmeye hevesli ve
              çözüm odaklı bir mühendis adayıyım. Gelecekte teknoloji alanında
              yenilikçi projelere katkı sağlamayı ve bu alanda iz bırakmayı
              hedefliyorum.
            </p>
            <h1 id="whatcanido">Ne Yapabilirim?</h1>
            <ul style={{ listStyleType: "none" }}>
              <li>💻 Yazılım Geliştirme</li>
              <li>🧠 Yapay Zeka</li>
              <li>📈 Veri Bilimi</li>
            </ul>
            <h1 id="portfolio">Portfolyo</h1>
            <div className="portfolio-items">
              <PortfolioItem
                darkmode={this.state.darkmode}
                title="TUBİTAK 2209-A"
              >
                Skolyoz Hastaları için Özgün Bir Veri Seti ve Yapay Zeka
                Uygulamaları : YOLO ve CNN Modellerinin Karşılaştırılması
              </PortfolioItem>
              <PortfolioItem
                darkmode={this.state.darkmode}
                title="Yapay Zeka Asistanı"
                imageUrl="https://portfolyo-iota-ebon.vercel.app/astra_resim.png"
                href="https://github.com/bytescreator/ai-frontend"
              >
                bytescreator/ai-frontend projesi, yapay zeka tabanlı bir asistan
                için modern ve kullanıcı dostu bir web arayüzü sunmayı amaçlayan
                açık kaynaklı bir projedir. Svelte, Tailwind CSS ve Vite gibi
                güncel teknolojilerle geliştirilmiş bu yapı, Electron desteğiyle
                masaüstü uygulaması olarak da çalışabilir. Geliştiricilere
                özelleştirilebilir, esnek ve sade bir başlangıç noktası sağlar.
              </PortfolioItem>
              <PortfolioItem
                darkmode={this.state.darkmode}
                title="Kasa Uygulaması"
                href="https://github.com/ReyhanOnbasi/kasa_app"
              >
                Bu uygulama, bir kafenin satış, muhasebe ve stok işlemlerini
                yönetmek için geliştirilmiş masaüstü bir yazılımdır. PyQt6 ve
                SQLite kullanılarak oluşturulmuş, kullanıcı girişinden ürün
                satışına, stok güncellemeden muhasebeleştirmeye kadar tüm iş
                akışlarını tek bir arayüzde sunar. Yetkilendirme, işlem kaydı ve
                atomik veri yönetimi özellikleri içerir.
              </PortfolioItem>
              <PortfolioItem
                darkmode={this.state.darkmode}
                title="Benzinlik Otomasyonu"
                href="https://github.com/ReyhanOnbasi/benzinlik"
              >
                Üniversite projesi, girilen metinler arasında benzerlik oranını
                hesaplayarak karşılaştırma yapmayı amaçlar. Özellikle ödev ya da
                rapor gibi içeriklerde benzerlik kontrolü için kullanılır. Temel
                string karşılaştırma algoritmalarıyla çalışır ve kullanıcıya
                benzerlik yüzdesi şeklinde çıktı verir. Öğrenciler için pratik
                ve anlaşılır bir araçtır.
              </PortfolioItem>
              <PortfolioItem
                darkmode={this.state.darkmode}
                title="Soru Bankası"
                href="https://github.com/ReyhanOnbasi/sorubank"
              >
                Soru Bankası, farklı ders ve konulara göre kategorize edilmiş
                soruların eklenip yönetilebildiği, kullanıcıların test
                hazırlayabildiği bir uygulamadır. Öğretmen ve öğrenci odaklı
                kullanım için uygundur. Sorular metin veya görsel içerikli
                olabilir, sistem aynı zamanda cevap kontrolü ve test geçmişi
                özellikleri de sunar.
              </PortfolioItem>
            </div>
            <h1 id="portfolio">Sertifikalar</h1>
            <div className="certificates-div">
              <img src={egebil}></img>
              <img src={ege2}></img>
            </div>
            <h1 id="contact">İletisim</h1>
            <form
              onSubmit={this.handleSubmit}
              action="/"
              method="post"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <label htmlFor="name">İsim Soyisim</label>
              <input type="text" name="name" id="name" required></input>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required></input>
              <label htmlFor="content">Mesaj</label>
              <textarea
                name="content"
                id="content"
                required
                style={{ minWidth: "100%", maxWidth: "100%" }}
              ></textarea>
              <input type="submit" value="Gönder"></input>
            </form>
          </div>
        </div>
        <div className="submain-fill"></div>
      </div>
    );
  }
}

export default Intro;
