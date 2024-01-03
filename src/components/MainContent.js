import React from 'react';
import Button from './Button'; // Import the Button component
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

      <section className='py-5 s3'>
        <div className='container d-flex flex-row justify-content-around'>
            <div className='box-img  '>
              Image here
            </div>

            <div className='content'>
              <h2>Bluepoint</h2>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
