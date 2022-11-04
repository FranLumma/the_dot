import React, { useState, useEffect } from "react";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query
} from "firebase/firestore";

import Post from "./Post";

const Posts = () => {
  const [postData, setPostData] = useState([]);

  //const userId = auth.currentUser.uid;
  const ref = collection(db, "posts");
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

  const deletePost = async (id) => {
    const postDoc = doc(ref, id);
    await deleteDoc(postDoc);
  };

  return (
    <>
      {postData.map((postD) => (
        <Post postD={postD} deletePost={deletePost} key={postD.id} />
      ))}
    </>
  );
};

export default Posts;
