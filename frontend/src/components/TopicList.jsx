import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const {dispatch, state} = props;
  const {topicData} = state;

  const allTopics = topicData.map((topic) => {
    return <TopicListItem key={topic.id} id={topic.id} label={topic.title} dispatch={dispatch} state={state} />
  })

  return (
    <div className="top-nav-bar__topic-list">
      {allTopics}
    </div>
  );
};

export default TopicList;
