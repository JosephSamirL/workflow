import React, { useState } from 'react'
import {RangeCalendar} from 'react-calendar-cool'
import {useStore} from "./store/Store"
import {database} from "./store/firebase"
function Calender() {
    const {user} = useStore()
    function writeNewPost(title, from,to) {
        // A post entry.
        var postData = {
          author: user.displayName,
          uid: user.uid,
          from: from,
          to: to,
          title: title,
          starCount: 0,
          
        };
      
        // Get a key for a new Post.
        var newPostKey = database.ref().child('posts').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[`/${user.displayName}/` + newPostKey] = postData;
        
      
        return database.ref().update(updates);
      }
      function add(from,to){
          let title = prompt("title")
          writeNewPost(title,from,to)

      }
      
    
    return (
        <div className="w-screen flex flex-col h-5/6">
            <h1 className="m-0 text-center">Add Event</h1>
        <div className="mx-auto flex-1 ">
        <RangeCalendar onRangeSelect={(from, to)=>{add(from,to)}} onClose={()=>{}} />
        </div>
        </div>
    )
}

export default Calender
