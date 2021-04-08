import React, {FC, useState, useEffect} from 'react';
import MainHeader from "./MainHeader";
import {useParams} from "react-router-dom";
import ThreadCard from "./ThreadCard";
import {getThreadsByCategory} from "../../../services/DataService";
import Category from "../../../models/Category";

interface ParamTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categoryId: any
}

const Main: FC = () => {
  const { categoryId } = useParams<ParamTypes>();
  const [category, setCategory] = useState<Category | undefined>();
  const [threadCards, setThreadCards] = useState<Array<JSX.Element> | null>(
    null
  );

  useEffect(() => {
    if (categoryId && categoryId > 0) {
      getThreadsByCategory(categoryId).then((threads) => {
        const cards = threads.map((th) => {
          return <ThreadCard key={`thread-${th.id}`} thread={th} />;
        });
        if (!category) {
          setCategory(threads[0].category);
        }
        setThreadCards(cards);
      });
    }
  }, [categoryId]);

  return (
    <main className="content">
      <MainHeader category={category} />
      <div>{threadCards}</div>
    </main>
  );
}

export default Main;
