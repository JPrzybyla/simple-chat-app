import { v4 as uuidv4 } from 'uuid';
import Router from "next/router";

const enterUser = (name) => {
    const uuid = uuidv4()

    sessionStorage.setItem('id', uuid)
    sessionStorage.setItem('name', name)
    Router.push('/chat')
}
export default enterUser