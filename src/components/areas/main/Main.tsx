/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FC, useState, useEffect} from 'react';
import MainHeader from "./MainHeader";
import {useHistory, useParams} from "react-router-dom";
import ThreadCard from "./ThreadCard";
import Category from "../../../models/Category";
import {gql, useLazyQuery} from '@apollo/client';

interface ParamTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoryId: any
}

const GetThreadsByCategoryId = gql`
  query getThreadsByCategoryId($categoryId: ID!) {
    getThreadsByCategoryId(categoryId: $categoryId) {
      ... on EntityResult {
        messages
      }
      ... on ThreadArray {
        threads {
          id
          title
          body
          views
          points
          user {
            userName
          }
          threadItems {
            id
          }
          category {
            id
            name
          }
        }
      }
    }
  }
`;

const GetThreadsLatest = gql`
  query getThreadsLatest {
    getThreadsLatest {
      ... on EntityResult {
        messages
      }
      ... on ThreadArray {
        threads {
          id
          title
          body
          views
          points
          user {
            userName
          }
          threadItems {
            id
          }
          category {
            id
            name
          }
        }
      }
    }
  }
`;

const Main: FC = () => {
  const [execGetThreadsByCat, {data: threadsByCatData}] = useLazyQuery(GetThreadsByCategoryId);
  const [execGetThreadsLatest, {data: threadsLatestData}] = useLazyQuery(GetThreadsLatest);

  const {categoryId} = useParams<ParamTypes>();
  const [category, setCategory] = useState<Category | undefined>();
  const [threadCards, setThreadCards] = useState<Array<JSX.Element> | null>(null);
  const history = useHistory();

  useEffect(() => {
    if (categoryId && categoryId > 0) {
      execGetThreadsByCat({
        variables: {
          categoryId,
        },
      });
    } else {
      execGetThreadsLatest();
    }
  }, [categoryId]);

  useEffect(() => {
    if (
      threadsByCatData &&
      threadsByCatData.getThreadsByCategoryId &&
      threadsByCatData.getThreadsByCategoryId.threads
    ) {
      const threads = threadsByCatData.getThreadsByCategoryId.threads;
      const cards = threads.map((th: any) => {
        return <ThreadCard key={`thread-${th.id}`} thread={th} />;
      });

      setCategory(threads[0].category);
      setThreadCards(cards);
    } else {
      setCategory(undefined);
      setThreadCards(null);
    }
  }, [threadsByCatData]);

  useEffect(() => {
    if (
      threadsLatestData &&
      threadsLatestData.getThreadsLatest &&
      threadsLatestData.getThreadsLatest.threads
    ) {
      const threads = threadsLatestData.getThreadsLatest.threads;
      const cards = threads.map((th: any) => {
        return <ThreadCard key={`thread-${th.id}`} thread={th} />;
      });

      setCategory(new Category("0", "Latest"));
      setThreadCards(cards);
    }
  }, [threadsLatestData]);

  const onClickPostThread = () => {
    history.push("/thread");
  };

  return (
    <main className="content">
      <button className="action-btn" onClick={onClickPostThread}>
        Post
      </button>
      <MainHeader category={category} />
      <div>{threadCards}</div>
    </main>
  );
}

export default Main;
