// universal loading boxhat will show whenever the page needs to load 

import { Spinner } from "react-bootstrap"

export default function LoadingBox() {
    return (
    <Spinner animation="border" role="status">
        <span className="visuallt-hidden">Loading Flowers...</span>
    </Spinner>
    )
}