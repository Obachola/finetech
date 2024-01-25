import React from 'react';
import Button from './Button'; // Import the Button component
import Done from '../images/done.png';
import Illustration from '../images/illustration.png';
import Dashboard from '../images/dashboard.png';
import Networks from '../images/networks.png';
import FeatureCard from './FeatureCard';

const MainContent = () => {
  return (
    <div>
      <section className='herosection'>
        <div className="container d-flex flex-row"> {/* Changed 'class' to 'className' */}
          <div className="usp col-md-5 d-flex flex-column justify-content-center gap-2">
            <h1 className="display-1 text-yellow">
              Simplifiez vos Paiements, Élevez votre Expérience.
            </h1>
            <p className="lead text-gray">
              La Solution de Paiement en ligne en Afrique et au Bénin qui simplifie vos transactions et stimule vos ventes
            </p>

            <div className="d-flex gap-2">
              <Button variant='secondary'>Se connecter</Button>
              <Button variant='primary'>Créer mon compte</Button>
            </div>
          </div>
          <div className='col-md-6 heroimage'></div>
        </div>
      </section>

    
      <section className='py-5 features'>
        <div className='container'>
            <div
                class="row "
            >
                <div class="col mb-4">
                    <h2 className='fw-bolder text-center'>
                        Vos encaissements en mieux
                    </h2>
                </div>
               
            </div>

            <div className="row row-cols-3 gy-4 ">
                <div className="col">
                    <FeatureCard />
                </div>
                <div className="col">
                    <FeatureCard />
                </div>
                <div className="col">
                    <FeatureCard />
                </div>
                <div className="col">
                    <FeatureCard />
                </div>
                <div className="col">
                    <FeatureCard />
                </div>
                <div className="col">
                    <FeatureCard />
                </div>
            </div>
        
            
        </div>
      </section>

      <section className='py-5 section-3'>
        <div className='section__container container '>
              <div className=' '>
                <img src={Illustration} alt="" width={834} />
              </div>

              <div className='section__content'>
                <h2 className='heading-style-h2'>Bulk <br /> Payment</h2>
                <div className='list__group'>
                  <div className="list__item">
                    <img src={Done} alt="" />
                    <p className="list__content">
                    Un reporting consolidé de vos transactions
                    </p>
                  </div>
                  <div className="list__item">
                    <img src={Done} alt="" />
                    <p className="list__content">
                    Suivi en temps réel des transactions
                    </p>
                  </div>
                  <div className="list__item">
                    <img src={Done} alt="" />
                    <p className="list__content">
                    Veille et gestion de fraude pour sécuriser vos transactions
                    </p>
                  </div>
                  <div className="list__item">
                    <img src={Done} alt="" />
                    <p className="list__content">
                    Une réconciliation quotidienne de toutes vos transactions
                    </p>
                  </div>
                  <div className="list__item">
                    <img src={Done} alt="" />
                    <p className="list__content">
                    Paiement vers plusieurs bénéficiaires wallets et autres comptes en un clic
                    </p>
                  </div>
                  <div className="list__item">
                    <img src={Done} alt="" />
                    <p className="list__content">
                    Embasement de liste de bénéficiaires pour reconduire les paiements
                    </p>
                  </div>
                  <div className="list__item">
                    <img src={Done} alt="" />
                    <p className="list__content">
                    Un contact support unique, disponible de 7h à 23h, 7J/7
                    </p>
                  </div>
                </div>

              </div>
          </div>
      </section>

      <section className='py-5 section-4'>
        <div className="container overflow-hidden container-height">
          <div className="section__header">
            <p className="heading__description heading__description-white">
            Ayez un contrôle sur toutes vos transactions en temps réel.
            </p>
            <h2 className="section__title section__title-yellow">
            Tableau de bord simple et intuitif.
            </h2>
          </div>
          <img src={Dashboard} alt="" className="section__image" />
        </div>
      </section>

      <section className="py-5 section-5 mb-5">
        <div className="container d-flex justify-content-center flex-column gap-5 align-content-center">
          <div className="section__header">
              <h2 className="section__title section__title--black">
              Tous les moyens de paiement locaux.
              </h2>
              <p className="heading__description">
              Plus besoin de jongler entre plusieurs agrégateurs pour avoir une solution de paiement complète. SESURPAY se charge de tout.
              </p>
          </div>
          <img src={Networks} alt="" />
          
          
        </div>
      </section>

     
      
    </div>
  );
};

export default MainContent;
