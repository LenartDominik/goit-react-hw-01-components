import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={clsx(styles.status, isOnline && styles.isOnline)}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
