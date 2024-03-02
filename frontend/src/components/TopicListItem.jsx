import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {label, dispatch, id, state} = props;

  return (
    <div className="topic-list__item" onClick={() => dispatch({type: 'SELECT_TOPIC', payload: id })}>
      {state.topicId !== id && <span>{label}</span>}
      <div className="selected-item">
        {state.topicId === id && label}
      </div>
    </div>
  );
};

export default TopicListItem;
