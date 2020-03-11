import React from "react";
import { withRouter } from "react-router-dom";
import FeedDetailPresenter from "./FeedDetailPresenter";
import { useQuery } from "react-apollo-hooks";
import { FEED_QUERY } from "./FeedDetailQuries";

export default withRouter(() => {
    const {data,loading} =useQuery(FEED_QUERY);
    return <FeedDetailPresenter loading={loading}  data={data}/>
});


