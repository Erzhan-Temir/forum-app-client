import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "./Thread.css";
import ThreadHeader from "./ThreadHeader";
// import ThreadCategory from "./ThreadCategory";
import ThreadTitle from "./ThreadTitle";
import ThreadModel from "../../../models/Thread";
import {getThreadById} from "../../../services/DataService";
import Nav from "../../areas/Nav";
import ThreadBody from "./ThreadBody";
import ThreadResponsesBuilder from "./ThreadResponsesBuilder";
import ThreadPointsBar from "../../points/ThreadPointsBar";

interface ParamsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: any
}

const Thread: FC = () => {
  const [thread, setThread] = useState<ThreadModel | undefined>();
  const {id} = useParams<ParamsProps>();

  useEffect(() => {
    console.log("Thread id", id);
    if (id && id > 0) {
      getThreadById(id).then((th) => {
        setThread(th);
      });
    }
  }, [id]);

  // const receiveSelectedCategory = (cat: Category) => {
  //   threadReducerDispatch({
  //     type: "category",
  //     payload: cat,
  //   });
  // };

  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <Nav />
      </div>
      <div className="thread-content-container">
        <div className="thread-content-post-container">
          <ThreadHeader
            userName={thread?.userName}
            lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
            title={thread?.title}
          />
          {/* <ThreadCategory category={thread?.category?.name} sendOutSelectedCategory={receiveSelectedCategory} /> */}
          <ThreadTitle title={thread?.title} />
          <ThreadBody body={thread?.body} />
        </div>
        <div className="thread-content-points-container">
          <ThreadPointsBar
            points={thread?.points || 0}
            responseCount={
              thread && thread.threadItems && thread.threadItems.length
            }
          />
        </div>
      </div>
      <div className="thread-content-response-container">
        <hr className="thread-section-divider" />
        <ThreadResponsesBuilder threadItems={thread?.threadItems} />
      </div>
    </div>
  );
}

export default Thread;
