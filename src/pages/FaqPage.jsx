import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { LangContext } from "../context/LangContext";

const FaqPage = () => {
    const [lang] = useContext(LangContext);
    return (
    <>
      <div className="faqpage">
      <Navigation />
        <div className="top">
          <Container>
            <div className="width">
              <h1 className="">
              {lang === "az" ? "Featured asked questions" : "Seçilmiş suallar"}
              </h1>
              <p className="mb-2">
              {lang === "az" ? "      People will always seek help and advice. They are unwilling to pick up the phone, walk into a store, or wait hours (even minutes) for that information or insight to become accessible." : "İnsanlar həmişə kömək və məsləhət axtaracaqlar. Onlar istəməzlər telefonu götür, mağazaya gir və ya saatlarla gözlə (hətta dəqiqə) həmin məlumat və ya anlayışın əlçatan olması üçün."}
          
              </p>
            </div>
          </Container>
        </div>
        <div className="bottom pt-5">
          <Container>
            <h1>
            {lang === "az" ? "About Shop" : "Mağaza haqqında"}
            </h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item mb-2">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
            {lang === "az" ? "      What brands do you sell in your products?" : "Məhsullarınızda hansı markaları satırsınız?"}
  
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
      {lang === "az" ? "Yes, we have a wide variety of brands on our electronic e-commerce site. Some of the popular brands include world-renowned electronics brands such as Samsung , XFX , Electrobot , HyperX , Lenovo etc." : "Bəli, elektron e-ticarət saytımızda geniş çeşiddə brendlərimiz var. Məşhur brendlərdən bəzilərinə Samsung, XFX, Electrobot, HyperX, Lenovo və s. kimi dünyaca məşhur elektronika brendləri daxildir."}

      
      </div>
    </div>
  </div>

  <div className="accordion-item mb-2">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
            {lang === "az" ? " What is the shipping time and is there a shipping fee?" : "Çatdırılma vaxtı nədir və çatdırılma haqqı varmı?"}

     
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
      {lang === "az" ? " Usually, the shipping time of your orders is 1-2 working days after payment. The shipping fee is usually free, but if a specific fee applies, it will be specified on the payment page of your order." : "Adətən, sifarişlərinizin çatdırılma müddəti ödənişdən sonra 1-2 iş günüdür. Çatdırılma haqqı adətən pulsuzdur, lakin xüsusi rüsum tətbiq olunarsa, bu, sifarişinizin ödəniş səhifəsində göstəriləcəkdir."}
      </div>
    </div>
  </div>

  <div className="accordion-item mb-2">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
        aria-expanded="false"
        aria-controls="flush-collapseThree"
      >
            {lang === "az" ? " What is your return and exchange policy?" : "Qaytarma və mübadilə siyasətiniz necədir?"}

        
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
      {lang === "az" ? "Because customer satisfaction is important to us, if you have any problems with the product you have purchased, you can return or exchange the product within 14 days. Please contact our customer service for the product return/exchange process." : "Müştəri məmnuniyyəti bizim üçün önəmli olduğu üçün aldığınız məhsulla bağlı hər hansı probleminiz olarsa 14 gün ərzində məhsulu qaytara və ya dəyişdirə bilərsiniz. Məhsulun qaytarılması/dəyişdirilməsi prosesi üçün müştəri xidmətlərimizlə əlaqə saxlayın."}

            </div>
    </div>
  </div>

  <div className="accordion-item mb-2">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
        aria-expanded="false"
        aria-controls="flush-collapseFour"
      >
            {lang === "az" ? "How Can I Shop Safely?" : "Mən necə təhlükəsiz alış-veriş edə bilərəm?"}

       
      </button>
    </h2>
    <div
      id="flush-collapseFour"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
      {lang === "az" ? "Your purchases are protected by SSL (Secure Sockets Layer) technology, which means that your personal and financial information is safe. In addition, we use reliable payment gateways to ensure your security in payment transactions. We recommend that you always shop using a secure internet connection." : "Satınalmalarınız SSL (Secure Sockets Layer) texnologiyası ilə qorunur, yəni şəxsi və maliyyə məlumatlarınız təhlükəsizdir. Bundan əlavə, ödəniş əməliyyatlarında təhlükəsizliyinizi təmin etmək üçün etibarlı ödəniş şlüzlərindən istifadə edirik. Biz sizə həmişə təhlükəsiz internet bağlantısından istifadə edərək alış-veriş etməyi tövsiyə edirik."}
      
      </div>
    </div>
  </div>

  <div className="accordion-item mb-2">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFive"
        aria-expanded="false"
        aria-controls="flush-collapseFive"
      >
            {lang === "az" ? "Do you have a support line where I can get technical support and help?" : "Texniki dəstək və yardım ala biləcəyim bir dəstək xəttiniz varmı?`"}

       
      </button>
    </h2>
    <div
      id="flush-collapseFive"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">
      {lang === "az" ? "Yes, we have a customer service team where you can get technical support and assistance. You can contact our customer service by phone, email or live chat to solve your questions or problems. We are here to provide you with the best service!" : "Bəli, texniki dəstək və yardım ala biləcəyiniz müştəri xidməti komandamız var. Suallarınızı və ya problemlərinizi həll etmək üçün telefon, e-poçt və ya canlı söhbət vasitəsilə müştəri xidmətlərimizlə əlaqə saxlaya bilərsiniz. Biz sizə ən yaxşı xidməti göstərmək üçün buradayıq!"}

      
      </div>
    </div>
  </div>
</div>

        
          </Container>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
