import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { PostEdit } from "./PostEdit"
import PostList from "./PostList";
import PostCreate from "./PostCreate";
import CommentList from "./CommentList";
import CommentEdit from "./CommentEdit";
import CommentCreate from "./CommentCreate";

import dataProvider from "./dataProvider";


export const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="Posts" list={PostList} edit={PostEdit} show={PostList} create={PostCreate}/>
        <Resource name="Comments" list={CommentList} show={ShowGuesser} edit={CommentEdit} create={CommentCreate} />
</Admin>;