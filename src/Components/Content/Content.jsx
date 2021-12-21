import { Route, Routes } from 'react-router-dom';
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';
import Main from './Main/Main';
import Settings from './Settings/Settings';
import Music from './Music/Music';
import News from './News/News';

const Content = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings/>} />
      </Routes>
    </div>
  );
}

export default Content