import { useDispatch, useSelector } from "react-redux";
import { listMenuAdd, listNeedAdd , resetLists } from "./Store/ListSlice";

let dispatch = useDispatch()
export { dispatch, listMenuAdd, listNeedAdd , resetLists, resetListMenu, resetListNeed }