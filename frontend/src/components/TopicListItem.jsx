import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  const { label, dispatch, id } = props;
  return (
    <div className="topic-list__item" onClick={() => dispatch({type: 'SELECT_TOPIC', payload: id })}>
      {label}
    </div>
  );
};

export default TopicListItem;
