import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    let token = localStorage.getItem("token")
    let navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate])

    return children;
}

export default PrivateRoute;