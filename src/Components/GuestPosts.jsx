import React, { useState, useEffect } from "react";

import { db } from "../firebase.config";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import ObserverPost from "./userPost";

const GuestPosts = () => {
  const [postData, setPostData] = useState([]);

  const ref = collection(db, "GuestBook");
  const q = query(ref, orderBy("date", "desc"));

  useEffect(() => {
    onSnapshot(ref, (doc) => {
      const getData = async () => {
        const data = await getDocs(q);
        setPostData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      //console.log("New data in DataBase")
      getData();
    });
  }, []);

  return (
    <>
      {postData.map((postD) => (
        <ObserverPost postD={postD} key={postD.id} />
      ))}
    </>
  );
};

export default GuestPosts;
