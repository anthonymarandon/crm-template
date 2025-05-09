import { IoInformationCircleOutline, IoRocketOutline, IoBulbOutline, IoHeartOutline, IoPeopleOutline, IoTrophyOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

export default function About() {
  return (
    <div id='about'>
      <div className='p-4 md:p-16 bg-gray-100'>
        <div className='max-w-7xl mx-auto'>

          <div className='bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8 md:mb-12 text-center border border-gray-200'>
            <IoInformationCircleOutline className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4'>Notre Engagement CRM</h2>
            <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Nous sommes spécialisés dans le développement de solutions CRM innovantes. Notre mission est de transformer la gestion de vos relations clients en un avantage concurrentiel.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoRocketOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Mission</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Simplifier la gestion client pour les entreprises de toutes tailles grâce à un CRM intuitif et puissant.
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoBulbOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Vision</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Devenir la référence en matière de solutions CRM, en rendant la gestion client accessible et efficace pour tous.
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoHeartOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Nos Valeurs</h3>
              </div>
              <ul className='text-gray-600 space-y-2 mb-4'>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Innovation</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Simplicité</li>
                <li className='flex items-center justify-center md:justify-start'><IoCheckmarkCircleOutline className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0"/> Satisfaction client</li>
              </ul>
            </div>

            <div className='bg-teal-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-200 md:col-span-2 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                 <IoPeopleOutline className="w-8 h-8 text-teal-600 mr-3 flex-shrink-0" />
                <h3 className='text-xl text-gray-900 font-semibold'>Notre Expertise</h3>
              </div>
              <p className='text-gray-600 mb-4'>
                Une équipe d'experts CRM passionnés par l'amélioration des relations clients et l'innovation technologique.
              </p>
              <div className='flex space-x-4 mt-4 justify-center md:justify-start'>
                <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>CS</span>
                </div>
                 <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>DEV</span>
                </div>
                 <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>UX</span>
                </div>
                 <div className='w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition-transform cursor-pointer'>
                  <span className='text-teal-700 font-bold'>+</span>
                </div>
              </div>
            </div>

            <div className='bg-teal-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center md:text-left'>
              <div className='flex items-center mb-4 justify-center md:justify-start'>
                <IoTrophyOutline className="w-8 h-8 text-yellow-300 mr-3 flex-shrink-0" />
                <h3 className='text-xl font-semibold'>Nos Chiffres</h3>
              </div>
              <ul className='space-y-2 mb-4'>
                <li className='flex items-center justify-center md:justify-start'>
                  <IoCheckmarkCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                  +1000 entreprises clientes
                </li>
                <li className='flex items-center justify-center md:justify-start'>
                  <IoCheckmarkCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                  99.9% de disponibilité
                </li>
                <li className='flex items-center justify-center md:justify-start'>
                  <IoCheckmarkCircleOutline className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" />
                  98% de satisfaction client
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};