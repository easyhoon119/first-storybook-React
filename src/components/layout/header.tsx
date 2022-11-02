import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../../App";
import { StyleMode } from "../../style/styles";

function Header() {
    const navigate = useNavigate();
    const { theme, toggleStyle } = useContext(MyContext) as StyleMode;

    return (
        <HeaderStyle>
            <div
                className="header-btn"
                onClick={() => {
                    navigate("/bPage");
                }}>
                헤더
            </div>
            <div
                className="header-btn"
                onClick={() => {
                    toggleStyle(theme === "light" ? "dark" : "light");
                }}>
                {theme === "light" ? "라이트모드" : "다크모드"}
            </div>
            <div
                className="header-btn"
                onClick={() => {
                    navigate("/");
                }}>
                a페이지
            </div>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    /* border-bottom: 1px solid gray; */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    .header-btn {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;

export default Header;
