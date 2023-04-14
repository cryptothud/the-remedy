import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="logo">
                <img src="/logo.png" alt="The Remedy" onClick={() => { navigate("/"); window.scrollTo(0, 0) }} />
            </div>
            <h4>Copyright © 2023 The Remedy | <a onClick={() => { navigate("/terms-and-policies"); window.scrollTo(0, 0) }}>Terms & Policies</a></h4>
        </div>
    )
}

export default Footer