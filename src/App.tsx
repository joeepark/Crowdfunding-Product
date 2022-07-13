import './App.css';
import { Fundingchoice } from './components/Fundingchoice';
import { Fundinginfo } from './components/Fundinginfo';
import { Pageinfo } from './components/Pageinfo';

export function App() {
  return (
    <div>
      <div className="header-image" />
      <Pageinfo />
      <Fundinginfo />
      <Fundingchoice />
    </div>
  );
}
