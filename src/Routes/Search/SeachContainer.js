import React from "react";
import {withRouter} from "react-router-dom"
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";
import SearchPresenter from "./SearchPresenter";

export default withRouter(({location:{search}}) => {

   const term = search.split("=")[1];
   const {data,loading} = useQuery(SEARCH,{
       skip:term===undefined,
       variables:{
           term:term
       }
   })
    return (
        <SearchPresenter searchTerm={term} data={data} loading={loading}/>
    )
}) ;
