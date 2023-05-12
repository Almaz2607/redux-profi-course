import "./App.css";
import PostContainer from "./components/postContainer";
import PostContainer2 from "./components/postContainer2";
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { fetchUsers } from "./store/reducers/actionCreators";

function App() {
  //   const dispatch = useAppDispatch();
  //   const { users, isLoading, error } = useAppSelector(
  //     (state) => state.userReducer
  //   );

  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   }, []);

  return (
    <div className="App">
      {/* {isLoading && <h2>loading ...</h2>}
      {error && <h2>{error}</h2>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{ display: "flex" }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
