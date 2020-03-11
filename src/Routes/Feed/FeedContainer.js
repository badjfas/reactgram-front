import React from "react";
import { useQuery } from "react-apollo-hooks";
import { FEED_QUERY } from "./FeedQueries";
import FeedPresenter from "./FeedPresenter";

export default  () => {
    const {data,loading} = useQuery(FEED_QUERY);
    return <FeedPresenter data={data} loading={loading}/>
}