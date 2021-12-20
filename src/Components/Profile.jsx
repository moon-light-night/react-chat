import cover from '../cover.jpg'

const Profile = () => {
  return (
    <div className="main-content">
      <div className="main-content__cover">
        <img src={cover} alt={'cover'} />
      </div>
      <div className="main-content__body">
        <div>
          ava + descr
        </div>
        <div>
          my posts
        </div>
        <div>
          new posts
        </div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  );
}

export default Profile