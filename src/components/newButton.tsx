import styled from "styled-components";

interface NewButtonProps {
    label: string;
    size: "small" | "large" | "middle";
    onClick?: () => void;
}

function NewButton({ label, size, onClick }: NewButtonProps) {
    return (
        <NewButtonStyle size={size}>
            <p>{label}</p>
        </NewButtonStyle>
    );
}

const NewButtonStyle = styled.div<{ size: "small" | "large" | "middle" }>`
    background-color: red;
    color: whitesmoke;
    width: ${(props) =>
        props.size === "small"
            ? "75px"
            : props.size === "middle"
            ? "120px"
            : "200px"};
    height: ${(props) =>
        props.size === "small"
            ? "75px"
            : props.size === "middle"
            ? "120px"
            : "200px"};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default NewButton;
