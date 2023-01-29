import PropTypes from 'prop-types';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

export default function Controls({ markAllAsRead, markAllAsUnRead }) {
  return (
    <div className='controls-container'>
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        <img src={ readIcon } alt='' />
        Marcar todas como lida
      </button>

      <button
        type="button"
        onClick={ markAllAsUnRead }
      >
        <img src={ unreadIcon } alt='' />
        Marcar todas como não lida
      </button>
    </div>
  )
};

Controls.propTypes = {
  markAllAsRead: PropTypes.func.isRequired,
  markAllAsUnread: PropTypes.func.isRequired,
}