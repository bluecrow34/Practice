import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */

function JokeList({numJokesToGet=5}){
  const [jokes, setJokes] =useState([]);


  useEffect(function(){
    async function getJokes(){
      let j=[...jokes];
      let seenJokes = new Set();
      try{
        while(j.length<numJokesToGet){
          let res = await axios.get("https://icanhazdadjoke.com",{
            headers:{Accept: "application/json"}
          });
          let {...jokeObj} =res.data;

          if(!seenJokes.has(jokeObj.id)){
            seenJokes.add(jokeObj.id);
            j.push({...jokeObj, votes:0});
          }else{
            console.log("Duplicate Found")
          }
        }
        setJokes(j);

      } catch(err){
        console.error(err)
      }
    }
    if(jokes.lenth === 0) getJokes();
  }, [jokes, numJokesToGet]);

  function generateNewJokes(){
    setJokes([])

  }

  function vote(id, delta){
    setJokes(allJokes =>
    allJokes.map(j=>(j.id === id ?{...j,votes:j.votes+delta}: j))
  );
  }


  let sortedJokes = [...jokes].sort((a,b)=>b.votes - a.votes);

  return(
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map(({joke,id,votes})=>(
        <Joke text={joke} key={id} votes={votes} vote={vote}/>
      ))}
    </div>
  );
}


export default JokeList;