import { Link } from "react-router-dom"
export default function CTA (props){
    return (
        <>
        <Link to={props.path} className="btn rounded-pill d-none d-lg-inline-block ms-lg-3 px-lg-3  mt-2 mt-lg-0 join-btn w-auto">
            {props.text}
        </Link>
        </>
    )
}