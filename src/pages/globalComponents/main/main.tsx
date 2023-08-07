import Drinks from './components/drinks/ChooseDrinks';
import SectionOffer from './components/SectionOffer';
import SectionWelcome from './components/SectionWelcome';
import TakeSauce from './components/TakeSauce';
// import './ChildComponent.scss';

export function Main() {
  return (
    <main>
      <SectionWelcome />
      <SectionOffer />
      <TakeSauce />
      <Drinks />
    </main>
  );
}
